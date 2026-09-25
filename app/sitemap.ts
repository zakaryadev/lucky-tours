import type { MetadataRoute } from "next";
import { toursList } from "@/lib/toursData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luckytours.uz";

  // Statik sahifalar
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tolov`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Dinamik tur sahifalari
  const tourPages: MetadataRoute.Sitemap = toursList.map((tour) => ({
    url: `${baseUrl}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...tourPages];
}
