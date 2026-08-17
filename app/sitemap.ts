import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.domain,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
        {
      url: `${SITE.domain}/store`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
