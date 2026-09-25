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

/* ──────────────────────────────────────────────────────
   SEO: Global Metadata
   ────────────────────────────────────────────────────── */
const SITE_URL = "https://luckytours.uz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Lucky Tours — O'zbekistondan Dunyoga Premium Sayohatlar",
    template: "%s | Lucky Tours",
  },
  description:
    "Lucky Tours — O'zbekistondan Turkiya, BAA, Gruziya, Tailand, Xitoy, Malayziya, Vetnam va Ozarbayjon yo'nalishlariga premium turlar. Eng arzon narxlar, vizasiz sayohat, 5 yulduzli mehmonxonalar va professional xizmat.",
  keywords: [
    "lucky tours",
    "sayohat",
    "turlar",
    "tur agentligi",
    "o'zbekiston turizm",
    "arzon turlar",
    "premium sayohat",
    "turkiya tur",
    "dubay sayohat",
    "tailand tur",
    "gruziya tur",
    "xitoy sayohat",
    "malayziya tur",
    "vetnam tur",
    "ozarbayjon tur",
    "vizasiz sayohat",
    "toshkentdan turlar",
    "all inclusive tur",
    "mehmonxona bron qilish",
    "aviachiptalar",
    "sayohat paketlari",
    "oilaviy turlar",
    "tur narxlari",
  ],
  authors: [{ name: "Lucky Tours", url: SITE_URL }],
  creator: "Lucky Tours",
  publisher: "Lucky Tours",

  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },

  openGraph: {
    type: "website",
    locale: "uz_UZ",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Lucky Tours",
    title: "Lucky Tours — O'zbekistondan Dunyoga Premium Sayohatlar",
    description:
      "Premium yo'nalishlar, unutilmas tajribalar va siz uchun eng yaxshi xizmat. Turkiya $499 dan, BAA $599 dan, Gruziya $399 dan.",
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Lucky Tours — Premium sayohatlar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lucky Tours — O'zbekistondan Dunyoga Premium Sayohatlar",
    description:
      "Premium yo'nalishlar, unutilmas tajribalar va siz uchun eng yaxshi xizmat.",
    images: ["/images/og-cover.jpg"],
  },

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "travel",
};

/* ──────────────────────────────────────────────────────
   JSON-LD: TravelAgency Structured Data
   ────────────────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Lucky Tours",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/images/og-cover.jpg`,
  description:
    "O'zbekistondan dunyoga premium sayohat turlari — Turkiya, BAA, Gruziya, Tailand, Xitoy, Malayziya, Vetnam, Ozarbayjon.",
  telephone: "+998956760066",
  email: "info@luckytours.uz",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toshkent",
    addressCountry: "UZ",
  },
  sameAs: ["https://t.me/luckytours"],
  priceRange: "$399 - $899",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
    bestRating: "5",
  },
  areaServed: [
    { "@type": "Country", name: "Turkey" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Georgia" },
    { "@type": "Country", name: "Thailand" },
    { "@type": "Country", name: "China" },
    { "@type": "Country", name: "Malaysia" },
    { "@type": "Country", name: "Vietnam" },
    { "@type": "Country", name: "Azerbaijan" },
  ],
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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
