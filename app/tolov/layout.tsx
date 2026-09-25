import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online To'lov — QR Kod Orqali Qulay To'lov",
  description:
    "Lucky Tours ga QR kod orqali to'lov qiling. Payme, Click, Uzum Bank va barcha bank ilovalari orqali tezkor va xavfsiz to'lov. Paynet tizimi bilan ishlaydi.",
  keywords: [
    "online to'lov",
    "qr kod to'lov",
    "payme to'lov",
    "click to'lov",
    "uzum bank",
    "paynet",
    "lucky tours to'lov",
    "tur uchun to'lov",
  ],
  openGraph: {
    title: "Online To'lov — Lucky Tours QR Kod Orqali Qulay To'lov",
    description:
      "Paynet tizimi orqali istalgan bank va to'lov ilovalaridan (Payme, Click, Uzum va h.k.) tezkor va xavfsiz to'lang.",
    url: "https://luckytours.uz/tolov",
  },
  alternates: {
    canonical: "https://luckytours.uz/tolov",
  },
};

export default function TolovLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
