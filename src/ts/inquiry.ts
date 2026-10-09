import $ from "jquery";
import {
  clampQty,
  countItems,
  formatItemLines,
  hasItem,
  loadItems,
  removeItem,
  saveItems,
  setItemQty,
  upsertItem,
  type InquiryItem
} from "./inquiry-store";

const WA_NUMBER = "17708994600";

function esc(value: string): string {
  return value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] || c
  );
}

$(() => {
  const $drawer = $("#inquiry-drawer");
  if (!$drawer.length) return;

  const $toggle = $("#inquiry-toggle");
  const $count = $("#inquiry-count");
  const $list = $("#inquiry-items");
  const $empty = $("#inquiry-empty");
  const $summary = $("#inquiry-summary");
  const $total = $("#inquiry-total");

  let items: InquiryItem[] = loadItems();

  const productOf = (id: string): InquiryItem | null => {
    const el = document.querySelector<HTMLElement>(
      `.product-card[data-product-id="${id}"]`
    );
    if (!el) return null;
    return {
      id,
      name: el.dataset.productName || id,
      meta: el.dataset.productMeta || "",
      image: el.dataset.productImage || "",
      qty: 1
    };
  };

  const syncButtons = (): void => {
    $(".add-to-inquiry").each(function () {
      const id = $(this).closest(".product-card").data("product-id") as string;
      const active = hasItem(items, id);
      $(this)
        .toggleClass("is-added", active)
        .text(active ? "Added to Inquiry" : "Add to Inquiry")
        .attr("aria-pressed", String(active));
    });
  };

  const syncCardInputs = (): void => {
    $(".product-card").each(function () {
      const $card = $(this);
      const id = $card.data("product-id") as string;
      const item = items.find((i) => i.id === id);
      if (item) $card.find(".qty-input").val(String(item.qty));
    });
  };

  const syncTotals = (): void => {
    const n = items.length;
    const pieces = countItems(items);
    if (n) $count.text(String(n)).removeAttr("hidden");
    else $count.attr("hidden", "hidden");
    $total.text(String(pieces));
    $toggle.attr("aria-label", `Open inquiry list (${n} item${n === 1 ? "" : "s"})`);
  };

  const render = (): void => {
    syncTotals();

    $list.empty();
    if (!items.length) {
      $empty.removeAttr("hidden");
      $summary.attr("hidden", "hidden");
    } else {
      $empty.attr("hidden", "hidden");
      $summary.removeAttr("hidden");
      items.forEach((it) => {
        $list.append(
          `<li class="inquiry-item" data-id="${esc(it.id)}">
             <img class="inquiry-thumb" src="${esc(it.image)}" alt="" loading="lazy" />
             <div class="inquiry-text">
               <p class="inquiry-name">${esc(it.name)}</p>
               <p class="inquiry-meta">${esc(it.meta)}</p>
               <div class="qty-stepper qty-stepper-sm" role="group" aria-label="Quantity for ${esc(it.name)}">
                 <button type="button" class="qty-btn" data-qty="-1" aria-label="Decrease quantity for ${esc(it.name)}">−</button>
                 <input class="qty-input" type="number" min="1" max="99" inputmode="numeric" value="${it.qty}" aria-label="Quantity for ${esc(it.name)}" />
                 <button type="button" class="qty-btn" data-qty="1" aria-label="Increase quantity for ${esc(it.name)}">+</button>
               </div>
             </div>
             <button type="button" class="inquiry-remove" aria-label="Remove ${esc(it.name)}">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M18 6 6 18M6 6l12 12"/></svg>
             </button>
           </li>`
        );
      });
    }
    syncButtons();
    syncCardInputs();
  };

  const openDrawer = (): void => {
    $drawer.addClass("open").attr("aria-hidden", "false");
    $toggle.attr("aria-expanded", "true");
    $("body").addClass("overflow-hidden");
  };
  const closeDrawer = (): void => {
    $drawer.removeClass("open").attr("aria-hidden", "true");
    $toggle.attr("aria-expanded", "false");
    $("body").removeClass("overflow-hidden");
  };

  const buildMessage = (): string =>
    formatItemLines(items);

  const openWhatsApp = (): void => {
    if (!items.length) return;
    const text = `Hi Boston Interior, I'd like to enquire about these pieces:\n\n${buildMessage()}\n\nPlease confirm pricing, materials and delivery.`;
    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener"
    );
  };

  $toggle.on("click", openDrawer);
  $("#inquiry-close, #inquiry-backdrop").on("click", closeDrawer);
  $(document).on("keydown", (e) => {
    if (e.key === "Escape" && $drawer.hasClass("open")) closeDrawer();
  });

  const applyStepper = ($stepper: JQuery<HTMLElement>): void => {
    const $input = $stepper.find(".qty-input");
    const qty = clampQty(Number($input.val()));
    $input.val(String(qty));

    const $item = $stepper.closest(".inquiry-item");
    const $card = $stepper.closest(".product-card");
    const id = ($item.length ? $item.data("id") : $card.data("product-id")) as string;
    if (!id || !hasItem(items, id)) return;
    items = setItemQty(items, id, qty);
    saveItems(items);
    syncTotals();
    $card.find(".qty-input").val(String(qty));
  };

  $(document).on("click", ".qty-btn", function () {
    const $stepper = $(this).closest(".qty-stepper");
    const $input = $stepper.find(".qty-input");
    const delta = Number($(this).data("qty")) || 0;
    $input.val(String(clampQty(Number($input.val()) + delta)));
    applyStepper($stepper);
  });

  $(document).on("change", ".qty-input", function () {
    applyStepper($(this).closest(".qty-stepper"));
  });

  $(document).on("click", ".add-to-inquiry", function () {
    const $card = $(this).closest(".product-card");
    const id = $card.data("product-id") as string;
    if (!id) return;
    if (hasItem(items, id)) {
      items = removeItem(items, id);
      saveItems(items);
      render();
      return;
    }
    const product = productOf(id);
    if (!product) return;
    product.qty = clampQty(Number($card.find(".qty-input").val()));
    items = upsertItem(items, product);
    saveItems(items);
    render();
  });

  $(document).on("click", ".inquiry-remove", function () {
    const id = $(this).closest(".inquiry-item").data("id") as string;
    items = removeItem(items, id);
    saveItems(items);
    render();
  });

  $("#inquiry-whatsapp").on("click", openWhatsApp);

  render();
});
