"use client";

import { useEffect } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

/**
 * Sahifadagi barcha harakatni bitta joydan boshqaradi:
 *  - [data-reveal] elementlarni bitta IntersectionObserver bilan kuzatadi
 *  - keyin qo'shilgan elementlarni MutationObserver orqali kuzatuvga oladi
 *  - scroll holatini <html> ga data-* va --scroll-progress ko'rinishida yozadi
 *
 * Reveal'ning ko'rinish/ko'rinmasligi CSS'da html[data-motion="on"] ga
 * bog'langan, uni layout'dagi bloklovchi skript qo'yadi. Shuning uchun JS
 * ishlamasa ham kontent ko'rinadi.
 */
export function MotionProvider() {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia(REDUCED_MOTION).matches;

    // --- Reveal ---
    let revealObserver: IntersectionObserver | undefined;
    let mutationObserver: MutationObserver | undefined;

    if (!reduced) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            (entry.target as HTMLElement).dataset.revealed = "true";
            revealObserver?.unobserve(entry.target);
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
      );

      const observeAll = (scope: ParentNode) => {
        for (const el of scope.querySelectorAll("[data-reveal]")) {
          if ((el as HTMLElement).dataset.revealed) continue;
          revealObserver?.observe(el);
        }
      };

      observeAll(document);

      // Filtrlashdan keyin qo'shilgan kartochkalarni ham ushlab qolamiz.
      mutationObserver = new MutationObserver((records) => {
        for (const record of records) {
          for (const node of record.addedNodes) {
            if (!(node instanceof Element)) continue;
            if (node.matches("[data-reveal]")) revealObserver?.observe(node);
            observeAll(node);
          }
        }
      });
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    // --- Scroll holati ---
    // Scroll-driven animatsiya qo'llab-quvvatlansa, progressni CSS o'zi
    // hisoblaydi — JS'da qayta hisoblash shart emas.
    const cssDrivesProgress = CSS.supports("animation-timeline: scroll()");
    let frame = 0;

    const readScroll = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;

      if (!cssDrivesProgress) {
        root.style.setProperty("--scroll-progress", String(progress));
      }
      root.toggleAttribute("data-stuck", window.scrollY > 140);
      root.toggleAttribute("data-deep", progress > 0.5);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(readScroll);
    };

    readScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      revealObserver?.disconnect();
      mutationObserver?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
