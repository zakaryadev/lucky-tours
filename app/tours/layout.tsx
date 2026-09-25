import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Barcha Turlar — Premium Sayohat Yo'nalishlari",
  description:
    "Lucky Tours'ning barcha premium tur paketlari: Turkiya, BAA, Gruziya, Tailand, Xitoy, Malayziya, Vetnam va Ozarbayjon. Eng yaxshi narxlar va sifatli xizmat bilan dunyoni kashf eting.",
  keywords: [
    "turlar ro'yxati",
    "barcha turlar",
    "sayohat paketlari",
    "tur tanlash",
    "arzon turlar",
    "premium turlar",
    "lucky tours yo'nalishlar",
  ],
  openGraph: {
    title: "Barcha Turlar — Lucky Tours Premium Sayohat Yo'nalishlari",
    description:
      "Turkiya $499 dan, BAA $599 dan, Gruziya $399 dan — barcha yo'nalishlarni ko'ring va o'zingizga mos turni tanlang.",
    url: "https://luckytours.uz/tours",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Lucky Tours — Barcha turlar",
      },
    ],
  },
  alternates: {
    canonical: "https://luckytours.uz/tours",
  },
};

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
