import type { Metadata } from "next";
import { toursList } from "@/lib/toursData";

const SITE_URL = "https://luckytours.uz";

/* ──────────────────────────────────────────────────────
   generateStaticParams — SSG barcha tur sahifalari uchun
   ────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return toursList.map((tour) => ({ slug: tour.slug }));
}

/* ──────────────────────────────────────────────────────
   generateMetadata — har bir tur uchun individual SEO
   ────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = toursList.find(
    (t) => t.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!tour) {
    return {
      title: "Tur topilmadi",
      description: "Kechirasiz, siz qidirgan tur topilmadi.",
    };
  }

  const title = `${tour.title.uz} — ${tour.price}`;
  const description = tour.description.uz;
  const ogImage = tour.image;

  return {
    title,
    description,
    keywords: [
      tour.country.uz,
      tour.city.uz,
      `${tour.country.uz} tur`,
      `${tour.city.uz} sayohat`,
      `${tour.country.uz} sayohat narxi`,
      "lucky tours",
      "arzon tur",
      tour.country.en.toLowerCase(),
    ],

    openGraph: {
      type: "website",
      locale: "uz_UZ",
      alternateLocale: "en_US",
      url: `${SITE_URL}/tours/${tour.slug}`,
      siteName: "Lucky Tours",
      title: `${tour.title.uz} | Lucky Tours`,
      description,
      images: [
        {
          url: ogImage,
          width: 900,
          height: 600,
          alt: tour.title.uz,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${tour.title.uz} | Lucky Tours`,
      description,
      images: [ogImage],
    },

    alternates: {
      canonical: `${SITE_URL}/tours/${tour.slug}`,
    },
  };
}

/* ──────────────────────────────────────────────────────
   Layout — JSON-LD TouristTrip + sahifa kontenti
   ────────────────────────────────────────────────────── */
export default async function TourLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = toursList.find(
    (t) => t.slug.toLowerCase() === slug.toLowerCase(),
  );

  // JSON-LD: TouristTrip — Google qidiruvida Rich Snippet
  const jsonLd = tour
    ? {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: tour.title.uz,
        description: tour.description.uz,
        touristType: "Leisure",
        image: tour.gallery,
        url: `${SITE_URL}/tours/${tour.slug}`,
        provider: {
          "@type": "TravelAgency",
          name: "Lucky Tours",
          url: SITE_URL,
          telephone: "+998956760066",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: tour.price.replace("$", ""),
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/tours/${tour.slug}`,
          validFrom: new Date().toISOString().split("T")[0],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: String(tour.rating),
          reviewCount: String(tour.reviewsCount),
          bestRating: "5",
        },
        itinerary: {
          "@type": "ItemList",
          itemListElement: tour.itinerary.map((step) => ({
            "@type": "ListItem",
            position: step.day,
            name: step.title.uz,
            description: step.text.uz,
          })),
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}
