import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = getProjectSlugs().map((slug) => ({
    url: `${site.url}/projects/${slug}`,
  }));

  return [{ url: `${site.url}/` }, ...projectEntries];
}
