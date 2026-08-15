"use client";

import { useEffect, useRef, useState } from "react";

function parse(value: string) {
  const match = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  return {
    prefix,
    suffix,
    target: parseFloat(digits),
    decimals: digits.includes(".") ? digits.split(".")[1].length : 0,
  };
}

/**
 * "25K+" kabi qiymatni ko'ringanda 0 dan sanab chiqadi, prefiks/suffiksni
 * ("K+", "%", "+") saqlaydi.
 *
 * SSR va birinchi renderda yakuniy qiymat chiqariladi — JS o'chiq bo'lsa yoki
 * bot o'qisa, to'g'ri raqamni ko'radi va hydration mos keladi. Sanash faqat
 * mount'dan keyin, element ko'ringanda boshlanadi.
 */
export function CountUp({
  value,
  duration = 1600,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  // null → yakuniy qiymat ko'rsatiladi (boshlang'ich va tugagan holat)
  const [progressValue, setProgressValue] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    const parsed = parse(value);
    if (!el || !parsed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let start = 0;

    const step = (now: number) => {
      if (!start) start = now;
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // --ease-out ga yaqin
      if (t < 1) {
        setProgressValue(parsed.target * eased);
        frame = requestAnimationFrame(step);
      } else {
        setProgressValue(null);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        setProgressValue(0);
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  let text = value;
  if (progressValue !== null) {
    const parsed = parse(value);
    if (parsed) {
      text = `${parsed.prefix}${progressValue.toFixed(parsed.decimals)}${parsed.suffix}`;
    }
  }

  return <span ref={ref}>{text}</span>;
}
