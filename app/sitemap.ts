import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://forgetzstudio.com",
      lastModified: new Date(),
    }
  
  ];
}
