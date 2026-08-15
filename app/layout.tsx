import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { MotionProvider } from "@/components/motion-provider";
import { AIChatWidget } from "@/components/ai-chat-widget";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Lucky Tours — Sayohatlar yangi bosqichda",
  description: "Premium yo‘nalishlar, unutilmas tajribalar va siz uchun eng yaxshi xizmat.",
  icons: {
    icon: "/icon.svg",
  },
};

// Bloklovchi — reveal CSS html[data-motion="on"] ga bog'langan, shuning uchun
// bu bayroq birinchi bo'yashdan oldin qo'yilishi kerak (aks holda kontent
// ko'rinib, keyin yashirinadi). JS o'chiq yoki reduced-motion bo'lsa bayroq
// qo'yilmaydi va hamma narsa darhol ko'rinadi.
const MOTION_FLAG = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.dataset.motion='on'}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <Script
          id="motion-flag"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: MOTION_FLAG }}
        />
      </head>
      <body className={manrope.variable}>
        <MotionProvider />
        <LanguageProvider>
          {children}
          <AIChatWidget />
        </LanguageProvider>
      </body>
    </html>
  );
}
