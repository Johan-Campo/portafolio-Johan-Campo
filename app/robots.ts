import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const SITE_URL = "https://johan-campo-portfolio-2e9bb.web.app"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
