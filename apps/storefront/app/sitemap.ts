import type { MetadataRoute } from "next"

const BASE_URL = "https://nagel-paul.de"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/produkte`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/anwendungen`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/marken`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/lignoloc`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/suche`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ]

  // Product categories
  const categories = [
    "druckluft-nagler", "akku-nagler", "gas-nagler", "tacker",
    "streifennaegel", "coilnaegel", "brads", "klammern",
    "lignoloc", "kompressoren", "akkus", "ersatzteile",
  ]
  const categoryPages: MetadataRoute.Sitemap = categories.map((cat) => ({
    url: `${BASE_URL}/produkte/${cat}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }))

  // Gewerke (trades)
  const gewerke = ["zimmerer", "dachdecker", "trockenbauer", "schreiner", "bodenleger", "heimwerker"]
  const gewerkPages: MetadataRoute.Sitemap = gewerke.map((g) => ({
    url: `${BASE_URL}/anwendungen/${g}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Anwendungen (applications)
  const anwendungen = [
    { gewerk: "zimmerer", slug: "dachlatten" },
    { gewerk: "zimmerer", slug: "schalung" },
    { gewerk: "zimmerer", slug: "holzrahmenbau" },
    { gewerk: "zimmerer", slug: "balkenverbindungen" },
    { gewerk: "dachdecker", slug: "dachpappe" },
    { gewerk: "dachdecker", slug: "daemmplatten" },
    { gewerk: "dachdecker", slug: "lattung" },
    { gewerk: "trockenbauer", slug: "unterkonstruktion" },
    { gewerk: "trockenbauer", slug: "daemmung" },
    { gewerk: "trockenbauer", slug: "profile" },
    { gewerk: "schreiner", slug: "moebelbau" },
    { gewerk: "schreiner", slug: "leisten" },
    { gewerk: "schreiner", slug: "plattenwerkstoffe" },
    { gewerk: "bodenleger", slug: "parkett" },
    { gewerk: "bodenleger", slug: "sockelleisten" },
    { gewerk: "heimwerker", slug: "allround" },
    { gewerk: "heimwerker", slug: "holzprojekte" },
  ]
  const anwendungPages: MetadataRoute.Sitemap = anwendungen.map((a) => ({
    url: `${BASE_URL}/anwendungen/${a.gewerk}/${a.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Brands
  const brands = ["hikoki", "paslode", "prebena", "bea", "haubold", "senco", "fasco", "lignoloc"]
  const brandPages: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${BASE_URL}/marken/${b}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...categoryPages, ...gewerkPages, ...anwendungPages, ...brandPages]
}
