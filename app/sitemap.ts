import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://forgetzstudio.com",
      lastModified: new Date(),
    },
    {
      url: "https://forgetzstudio.com/store",
      lastModified: new Date(),
    },
    {
      url: "https://forgetzstudio.com/id",
      lastModified: new Date(),
    }
  
  ];
}
