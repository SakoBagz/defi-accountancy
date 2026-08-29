import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/faq",
    "/contact",
    "/client-portal",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${base}${service.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: service.slug === "bookkeeping" ? 0.9 : 0.8,
    })),
  ];
}
