"use client";

import { ReactNode } from "react";
// App Router "react" ni next/dist/compiled/react ga alias qiladi — u
// ViewTransition'ni eksport qiladi. Tiplar types/react-canary.d.ts orqali.
import { ViewTransition } from "react";

const directional = {
  "nav-forward": "nav-forward",
  "nav-back": "nav-back",
  default: "none",
} as const;

/**
 * Sahifa kontentini yo'nalishli route o'tishiga o'raydi. Har bir page.tsx
 * ichida ishlatiladi (layout'da EMAS — layout persist bo'lgani uchun
 * enter/exit u yerda ishlamaydi). Yo'nalish <Link transitionTypes> orqali
 * "nav-forward" / "nav-back" bilan beriladi.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter={directional} exit={directional} default="none">
      {children}
    </ViewTransition>
  );
}
