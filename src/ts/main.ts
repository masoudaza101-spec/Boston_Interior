import $ from "jquery";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Swiper from "swiper";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "../css/tailwind.css";

declare global {
  interface Window {
    $: typeof $;
    jQuery: typeof $;
    __revealReady?: boolean;
    __lenis?: Lenis;
  }
}
window.$ = $;
window.jQuery = $;

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let lenis: Lenis | null = null;

function initSmoothScroll(): void {
  if (reducedMotion) return;
  lenis = new Lenis({ lerp: 0.11, smoothWheel: true, touchMultiplier: 1.6 });
  window.__lenis = lenis;
  const raf = (time: number): void => {
    lenis?.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

function initHeader(): void {
  const $header = $(".site-header");
  if (!$header.length) return;

  const update = (): void => {
    $header.toggleClass("scrolled", ($(window).scrollTop() ?? 0) > 40);
  };
  update();
  $(window).on("scroll", update);

  const page = location.pathname.split("/").pop() || "index.html";
  $header.find(".nav-link").each(function () {
    const href = $(this).attr("href") || "";
    const target = href.split("#")[0];
    if (target === page || (page === "" && target === "index.html")) {
      $(this).addClass("active");
    }
  });

  const $burger = $(".burger");
  const $mobile = $("#mobile-menu");
  $burger.on("click", () => {
    const open = !$mobile.hasClass("open");
    $mobile.toggleClass("open", open);
    $burger.toggleClass("open", open);
    $burger.attr("aria-expanded", String(open));
    $("body").toggleClass("overflow-hidden", open);
  });
  $mobile.find("a").on("click", () => {
    $mobile.removeClass("open");
    $burger.removeClass("open");
    $burger.attr("aria-expanded", "false");
    $("body").removeClass("overflow-hidden");
  });
}

function initReveal(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger]"));
  if (els.length && !reducedMotion && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("is-in"));
  }
  window.__revealReady = true;
}

function initScrollUi(): void {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");

  const top = document.createElement("button");
  top.className = "to-top";
  top.type = "button";
  top.setAttribute("aria-label", "Back to top");
  top.innerHTML =
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';

  document.body.appendChild(bar);
  document.body.appendChild(top);

  let ticking = false;
  const update = (): void => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const y = window.scrollY || doc.scrollTop || 0;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
    top.classList.toggle("show", y > 500);
    ticking = false;
  };
  const onScroll = (): void => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  top.addEventListener("click", () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    }
  });
}

function initParallax(): void {
  if (reducedMotion) return;
  const imgs = Array.from(document.querySelectorAll<HTMLElement>(".page-hero-bg img, .band-bg img"));
  if (!imgs.length) return;

  let ticking = false;
  const update = (): void => {
    const vh = window.innerHeight;
    for (const img of imgs) {
      const parent = img.parentElement;
      if (!parent) continue;
      const rect = parent.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= vh) continue;
      const shift = Math.max(-50, Math.min(50, -rect.top * 0.1));
      img.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(1.25)`;
    }
    ticking = false;
  };
  const onScroll = (): void => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function initCounters(): void {
  const $counters = $(".counter");
  if (!$counters.length) return;

  const animate = ($el: JQuery<HTMLElement>): void => {
    const target = Number($el.data("target")) || 0;
    const suffix = String($el.data("suffix") || "");
    const duration = 1600;
    const start = performance.now();
    const step = (now: number): void => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      $el.text(`${Math.round(target * eased)}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate($(entry.target as HTMLElement));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  $counters.each(function () {
    observer.observe(this);
  });
}

function initFaq(): void {
  const setMax = (el: HTMLElement, open: boolean): void => {
    el.style.maxHeight = open ? `${el.scrollHeight + 8}px` : "0px";
  };

  $(".faq-item.active .faq-answer").each(function () {
    setMax(this as HTMLElement, true);
  });

  $(document).on("click", ".faq-question", function () {
    const $item = $(this).closest(".faq-item");
    const wasActive = $item.hasClass("active");
    const answer = $item.find(".faq-answer")[0] as HTMLElement | undefined;

    $item.closest(".faq-list").find(".faq-item").each(function () {
      const $other = $(this);
      if (!$other.hasClass("active")) return;
      $other.removeClass("active");
      $other.find(".faq-question").attr("aria-expanded", "false");
      const otherAnswer = $other.find(".faq-answer")[0] as HTMLElement | undefined;
      if (otherAnswer) setMax(otherAnswer, false);
    });

    if (!wasActive) {
      $item.addClass("active");
      $(this).attr("aria-expanded", "true");
      if (answer) setMax(answer, true);
    }
  });
}

function initHeroSlider(): void {
  const el = document.querySelector(".hero-swiper");
  if (!el) return;
  const swiper = new Swiper(el as HTMLElement, {
    modules: [Autoplay, EffectFade, Pagination],
    effect: "fade",
    loop: true,
    speed: 1200,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: ".hero-pagination", clickable: true }
  });
  const restartZoom = (): void => {
    if (reducedMotion) return;
    const img = swiper.el.querySelector<HTMLElement>(".swiper-slide-active img");
    if (!img) return;
    img.style.animation = "none";
    void img.offsetWidth;
    img.style.animation = "";
  };
  swiper.on("slideChangeTransitionStart", restartZoom);
}

function initTestimonialSlider(): void {
  const el = document.querySelector(".testi-swiper");
  if (!el) return;
  new Swiper(el as HTMLElement, {
    modules: [Autoplay, Pagination],
    loop: true,
    speed: 700,
    spaceBetween: 24,
    autoplay: { delay: 4500, disableOnInteraction: false },
    pagination: { el: ".testi-pagination", clickable: true },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 }
    }
  });
}

function initYear(): void {
  $(".current-year").text(String(new Date().getFullYear()));
}

function initSkeleton(): void {
  const el = document.getElementById("page-skeleton");
  if (!el) return;
  let done = false;
  const hide = (): void => {
    if (done) return;
    done = true;
    el.classList.add("is-done");
    window.setTimeout(() => el.remove(), 450);
  };
  if (document.readyState === "complete") hide();
  else window.addEventListener("load", hide, { once: true });
  window.setTimeout(hide, 3500);
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) hide();
  });
}

$(() => {
  initSkeleton();
  initSmoothScroll();
  initHeader();
  initReveal();
  initScrollUi();
  initParallax();
  initCounters();
  initFaq();
  initHeroSlider();
  initTestimonialSlider();
  initYear();
});
