import $ from "jquery";
import { PRODUCT_CATALOG } from "./products";
import {
  clampQty,
  countItems,
  formatItemLines,
  formatItemSummary,
  hasItem,
  loadItems,
  removeItem,
  saveItems,
  setItemQty,
  upsertItem,
  type InquiryItem
} from "./inquiry-store";

const FORMSPREE_ENDPOINT: string = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/;

interface Rule {
  id: string;
  test: (value: string) => boolean;
  message: string;
}

const RULES: Rule[] = [
  { id: "name", test: (v) => v.trim().length >= 2, message: "Please enter your name." },
  { id: "email", test: (v) => EMAIL_RE.test(v.trim()), message: "Please enter a valid email address." },
  { id: "phone", test: (v) => PHONE_RE.test(v.trim()), message: "Please enter a valid phone number." },
  { id: "project-type", test: (v) => v !== "", message: "Please choose a project type." },
  { id: "message", test: (v) => v.trim().length >= 10, message: "Tell us a little more (at least 10 characters)." }
];

function esc(value: string): string {
  return value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] || c
  );
}

function setError(id: string, invalid: boolean): void {
  const $field = $(`#${id}`).closest(".field, .product-field");
  $field.toggleClass("is-invalid", invalid);
  $(`#${id}`).attr("aria-invalid", String(invalid));
}

function validate(): boolean {
  let ok = true;
  for (const rule of RULES) {
    const valid = rule.test(($(`#${rule.id}`).val() as string) ?? "");
    setError(rule.id, !valid);
    if (!valid) ok = false;
  }

  const file = ($(`#photo`).prop("files") as FileList | undefined)?.[0];
  const $photoField = $("#photo").closest(".field");
  $photoField.removeClass("is-invalid");
  if (file) {
    const allowed = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
    if (!allowed.includes(file.type) || file.size > 5 * 1024 * 1024) {
      $photoField.addClass("is-invalid");
      $("#photo-error").text("Max 5MB: JPG, PNG, WEBP or PDF.");
      ok = false;
    }
  }
  return ok;
}

function showMessage(kind: "success" | "error" | "pending", html: string): void {
  const $box = $("#form-status");
  $box
    .removeClass("hidden bg-green-50 text-green-800 border-green-200 bg-red-50 text-red-800 border-red-200 bg-amber-50 text-amber-800 border-amber-200")
    .addClass(
      kind === "success"
        ? "border border-green-200 bg-green-50 text-green-800"
        : kind === "error"
          ? "border border-red-200 bg-red-50 text-red-800"
          : "border border-amber-200 bg-amber-50 text-amber-800"
    )
    .html(html)
    .removeClass("hidden");
}

$(() => {
  const $form = $("#consultation-form");
  if (!$form.length) return;

  /* ---------- Products of interest picker (multi-select + quantities) ---------- */
  let items: InquiryItem[] = loadItems();
  const $picker = $("#product-picker");
  const $pickCount = $("#picker-count");

  const syncProductFields = (): void => {
    $("#products-field").val(items.length ? formatItemSummary(items) : "");
    $("#products-count").val(String(countItems(items)));
    const pieces = countItems(items);
    $pickCount.text(`${pieces} piece${pieces === 1 ? "" : "s"} selected`);
  };

  const renderPicker = (): void => {
    if (!$picker.length) return;
    $picker.empty();
    PRODUCT_CATALOG.forEach((p) => {
      const item = items.find((i) => i.id === p.id);
      const checked = Boolean(item);
      const qty = item ? item.qty : 1;
      $picker.append(
        `<div class="product-pick${checked ? " is-picked" : ""}" data-id="${esc(p.id)}">
           <input class="product-pick-check" type="checkbox" id="pick-${esc(p.id)}" data-id="${esc(p.id)}" ${checked ? "checked" : ""} />
           <label class="product-pick-body" for="pick-${esc(p.id)}">
             <span class="product-pick-name">${esc(p.name)} <span class="product-pick-wood">${esc(p.wood)}</span></span>
             <span class="product-pick-meta">${esc(p.meta)} · ${esc(p.dims)}</span>
           </label>
           <div class="qty-stepper qty-stepper-sm" role="group" aria-label="Quantity for ${esc(p.name)}">
             <button type="button" class="qty-btn" data-qty="-1" aria-label="Decrease quantity for ${esc(p.name)}">−</button>
             <input class="qty-input" type="number" min="1" max="99" inputmode="numeric" value="${qty}" aria-label="Quantity for ${esc(p.name)}" />
             <button type="button" class="qty-btn" data-qty="1" aria-label="Increase quantity for ${esc(p.name)}">+</button>
           </div>
         </div>`
      );
    });
    syncProductFields();
  };

  const catalogItem = (id: string, qty: number): InquiryItem | null => {
    const p = PRODUCT_CATALOG.find((x) => x.id === id);
    if (!p) return null;
    return { id: p.id, name: p.name, meta: `${p.meta} · ${p.dims}`, image: p.image, qty: clampQty(qty) };
  };

  if ($picker.length) {
    renderPicker();

    $picker.on("change", ".product-pick-check", function () {
      const id = $(this).data("id") as string;
      const $row = $(this).closest(".product-pick");
      const qty = clampQty(Number($row.find(".qty-input").val()));
      if (this.checked) {
        const product = catalogItem(id, qty);
        if (product) items = upsertItem(items, product);
      } else {
        items = removeItem(items, id);
      }
      $row.toggleClass("is-picked", this.checked);
      saveItems(items);
      syncProductFields();
    });

    const applyPickerQty = ($stepper: JQuery<HTMLElement>): void => {
      const $input = $stepper.find(".qty-input");
      const qty = clampQty(Number($input.val()));
      $input.val(String(qty));
      const id = $stepper.closest(".product-pick").data("id") as string;
      if (!id) return;
      if (hasItem(items, id)) {
        items = setItemQty(items, id, qty);
        saveItems(items);
        syncProductFields();
      }
    };

    $picker.on("click", ".qty-btn", function () {
      const $stepper = $(this).closest(".qty-stepper");
      const $input = $stepper.find(".qty-input");
      const delta = Number($(this).data("qty")) || 0;
      $input.val(String(clampQty(Number($input.val()) + delta)));
      applyPickerQty($stepper);
    });

    $picker.on("change", ".qty-input", function () {
      applyPickerQty($(this).closest(".qty-stepper"));
    });
  }

  /* ---------- Project form ---------- */
  $form.find(".field-input").on("input change", function () {
    const id = this.id;
    const rule = RULES.find((r) => r.id === id);
    if (rule && rule.test(($(`#${id}`).val() as string) ?? "")) setError(id, false);
  });

  const params = new URLSearchParams(location.search);
  const requested = params.get("service");
  if (requested) {
    const $select = $("#project-type");
    $select.val($select.find("option").filter((_, o) => $(o).text().toLowerCase().includes(requested.toLowerCase())).val() ?? "");
  }

  $form.on("submit", async (e) => {
    e.preventDefault();
    $("#form-status").addClass("hidden");

    if (!validate()) {
      const $first = $(".field.is-invalid").first().find(".field-input");
      if ($first.length) $first.trigger("focus");
      return;
    }

    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes("REPLACE")) {
      showMessage(
        "pending",
        'The form is not connected yet. Please reach us directly on <a class="font-semibold underline" href="https://wa.me/17708994600" target="_blank" rel="noopener">WhatsApp +1 770 899 4600</a> (optional) or call +255 655 743141.'
      );
      return;
    }

    const $btn = $form.find("button[type=submit]");
    $btn.prop("disabled", true).text("Sending...");

    try {
      const formData = new FormData($form[0] as HTMLFormElement);
      if (items.length) {
        formData.set("products", formatItemSummary(items));
        formData.set("products-count", String(countItems(items)));
        formData.append("products-detail", formatItemLines(items));
      }

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        items = [];
        saveItems(items);
        ($form[0] as HTMLFormElement).reset();
        renderPicker();
        showMessage(
          "success",
          "<strong>Thank you!</strong> Your request has been sent. We will get back to you within one business day."
        );
      } else {
        const data = await res.json().catch(() => null);
        const detail = data && data.errors ? data.errors.map((x: { message: string }) => x.message).join(", ") : "Please try again or contact us directly.";
        showMessage("error", `<strong>Something went wrong.</strong> ${detail}`);
      }
    } catch {
      showMessage("error", "<strong>Network error.</strong> Please check your connection and try again, or reach us on WhatsApp (optional).");
    } finally {
      $btn.prop("disabled", false).text("Book My Consultation");
    }
  });
});
