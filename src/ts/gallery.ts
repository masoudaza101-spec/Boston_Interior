import GLightbox from "glightbox";
import $ from "jquery";

function initFilters(): void {
  const $buttons = $("#portfolio-filters .filter-btn");
  const $grid = $("#portfolio-grid");
  if (!$buttons.length || !$grid.length) return;

  $buttons.on("click", function () {
    const filter = String($(this).data("filter"));
    $buttons.removeClass("active").attr("aria-pressed", "false");
    $(this).addClass("active").attr("aria-pressed", "true");

    $grid.find(".portfolio-item").each(function () {
      const $item = $(this);
      const categories = String($item.data("category") || "").split(/\s+/);
      const show = filter === "all" || categories.includes(filter);
      if (show) {
        $item.hide().fadeIn(250);
      } else {
        $item.fadeOut(200);
      }
    });
  });
}

function initLightbox(): void {
  if (!document.querySelector(".glightbox")) return;
  GLightbox({
    selector: ".glightbox",
    loop: true,
    touchNavigation: true,
    keyboardNavigation: true,
    zoomable: false
  });
}

$(() => {
  initFilters();
  initLightbox();
});
