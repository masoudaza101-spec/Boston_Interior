import $ from "jquery";
import "../css/tailwind.css";

const FORMSPREE_ENDPOINT: string = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

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

function setError(id: string, invalid: boolean): void {
  const $field = $(`#${id}`).closest(".field");
  $field.toggleClass("is-invalid", invalid);
  $(`#${id}`).attr("aria-invalid", String(invalid));
}

function validate(): boolean {
  let ok = true;
  for (const rule of RULES) {
    const valid = rule.test($(`#${rule.id}`).val() as string ?? "");
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
        'The form is not connected yet. Please reach us directly on <a class="font-semibold underline" href="https://wa.me/17708994600" target="_blank" rel="noopener">WhatsApp +1 770 899 4600</a> or call +255 655 743141.'
      );
      return;
    }

    const $btn = $form.find("button[type=submit]");
    $btn.prop("disabled", true).text("Sending...");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData($form[0] as HTMLFormElement),
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        ($form[0] as HTMLFormElement).reset();
        showMessage(
          "success",
          "<strong>Thank you!</strong> Your consultation request has been sent. We will get back to you within one business day."
        );
      } else {
        const data = await res.json().catch(() => null);
        const detail = data && data.errors ? data.errors.map((x: { message: string }) => x.message).join(", ") : "Please try again or contact us directly.";
        showMessage("error", `<strong>Something went wrong.</strong> ${detail}`);
      }
    } catch {
      showMessage("error", "<strong>Network error.</strong> Please check your connection and try again, or reach us on WhatsApp.");
    } finally {
      $btn.prop("disabled", false).text("Book My Consultation");
    }
  });
});
