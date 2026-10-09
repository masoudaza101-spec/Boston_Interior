import $ from "jquery";

const FORMSPREE_ENDPOINT: string = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";
const STORE_KEY = "bi_inquiry_v1";
const WA_NUMBER = "17708994600";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

interface Item {
  id: string;
  name: string;
  meta: string;
  image: string;
}

function load(): Item[] {
  try {
    const raw = window.localStorage.getItem(STORE_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? (parsed as Item[]) : [];
  } catch {
    return [];
  }
}

function save(items: Item[]): void {
  try {
    window.localStorage.setItem(STORE_KEY, JSON.stringify(items));
  } catch {
    /* storage unavailable */
  }
}

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
  const $form = $("#inquiry-form");
  const $itemsField = $("#inq-items-field");
  const $status = $("#inquiry-status");

  let items: Item[] = load();

  const productOf = (id: string): Item | null => {
    const el = document.querySelector<HTMLElement>(
      `.product-card[data-product-id="${id}"]`
    );
    if (!el) return null;
    return {
      id,
      name: el.dataset.productName || id,
      meta: el.dataset.productMeta || "",
      image: el.dataset.productImage || ""
    };
  };

  const has = (id: string): boolean => items.some((i) => i.id === id);

  const syncButtons = (): void => {
    $(".add-to-inquiry").each(function () {
      const id = $(this).closest(".product-card").data("product-id") as string;
      const active = has(id);
      $(this)
        .toggleClass("is-added", active)
        .text(active ? "Added to Inquiry" : "Add to Inquiry")
        .attr("aria-pressed", String(active));
    });
  };

  const render = (): void => {
    const n = items.length;
    if (n) $count.text(String(n)).removeAttr("hidden");
    else $count.attr("hidden", "hidden");

    $toggle.attr("aria-label", `Open inquiry list (${n} item${n === 1 ? "" : "s"})`);

    $list.empty();
    if (!n) {
      $empty.removeAttr("hidden");
      $form.attr("hidden", "hidden");
    } else {
      $empty.attr("hidden", "hidden");
      $form.removeAttr("hidden");
      items.forEach((it) => {
        $list.append(
          `<li class="inquiry-item" data-id="${esc(it.id)}">
             <img class="inquiry-thumb" src="${esc(it.image)}" alt="" loading="lazy" />
             <div class="inquiry-text">
               <p class="inquiry-name">${esc(it.name)}</p>
               <p class="inquiry-meta">${esc(it.meta)}</p>
             </div>
             <button type="button" class="inquiry-remove" aria-label="Remove ${esc(it.name)}">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M18 6 6 18M6 6l12 12"/></svg>
             </button>
           </li>`
        );
      });
      $itemsField.val(items.map((i) => i.name).join(", "));
    }
    syncButtons();
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
    items.map((i, k) => `${k + 1}. ${i.name} — ${i.meta}`).join("\n");

  const showStatus = (kind: "success" | "error", html: string): void => {
    const tone =
      kind === "success"
        ? "border border-green-200 bg-green-50 text-green-800"
        : "border border-red-200 bg-red-50 text-red-800";
    $status.attr("class", `rounded-lg p-3 text-sm ${tone}`).html(html).removeClass("hidden");
  };

  const openWhatsApp = (): void => {
    if (!items.length) return;
    const text = `Hi Boston Interior, I'd like to enquire about these pieces:\n\n${buildMessage()}`;
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

  $(document).on("click", ".add-to-inquiry", function () {
    const id = $(this).closest(".product-card").data("product-id") as string;
    if (!id) return;
    if (has(id)) {
      items = items.filter((i) => i.id !== id);
    } else {
      const product = productOf(id);
      if (product) items.push(product);
    }
    save(items);
    render();
  });

  $(document).on("click", ".inquiry-remove", function () {
    const id = $(this).closest(".inquiry-item").data("id") as string;
    items = items.filter((i) => i.id !== id);
    save(items);
    render();
  });

  $("#inquiry-whatsapp").on("click", openWhatsApp);

  $form.on("submit", async (e) => {
    e.preventDefault();
    if (!items.length) return;

    const name = (($("#inq-name").val() as string) || "").trim();
    const email = (($("#inq-email").val() as string) || "").trim();
    const phone = (($("#inq-phone").val() as string) || "").trim();
    const notes = (($("#inq-message").val() as string) || "").trim();

    if (name.length < 2 || !EMAIL_RE.test(email) || phone.replace(/\D/g, "").length < 6) {
      showStatus("error", "Please add your name, a valid email address and a phone number.");
      return;
    }

    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes("REPLACE")) {
      showStatus(
        "error",
        'The form is not connected yet. Use <button type="button" id="inquiry-whatsapp-inline" class="font-semibold underline">Send via WhatsApp</button> or call +255 655 743 141.'
      );
      $("#inquiry-whatsapp-inline").on("click", openWhatsApp);
      return;
    }

    const $btn = $form.find("button[type=submit]");
    $btn.prop("disabled", true).text("Sending...");

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("phone", phone);
    data.append("project-type", "Products enquiry");
    data.append("items", items.map((i) => i.name).join(", "));
    data.append("message", `${notes ? notes + "\n\n" : ""}Products enquiry:\n${buildMessage()}`);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      if (res.ok) {
        items = [];
        save(items);
        ($form[0] as HTMLFormElement).reset();
        render();
        closeDrawer();
        window.alert("Thank you! Your enquiry has been sent. We will get back to you within one business day.");
      } else {
        showStatus("error", "Something went wrong. Please try again or reach us on WhatsApp.");
      }
    } catch {
      showStatus("error", "Network error. Please check your connection and try again.");
    } finally {
      $btn.prop("disabled", false).text("Submit Inquiry");
    }
  });

  render();
});
