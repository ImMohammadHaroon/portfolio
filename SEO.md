# Portfolio SEO — 31 October 2026

BeyondSEO HTTP crawl of the live www host completed on 31 October 2026 (`docs/seo/beyondseo-plan.md`, evidence in `docs/seo/beyondseo-run/`). Local case-study enrichment is in this repository and must be deployed before crawlers see the fuller project pages.

## Keyword placement

| Target | Placement |
| --- | --- |
| Mohammad Haroon | Page title, visible H1, introduction, Person structured data, project bylines and meta descriptions |
| Mohammad Haroon Portfolio | Page title, project section label, website name, project page titles |
| Mohammad Haroon Web Developer | Name and role in the visible H1, title and description |
| Haroon Portfolio | Website alternate name in structured data |
| MERN Stack Developer | Hero introduction and role, metadata, structured data |
| Project names (Meeting AI, ProjectSphere, MedMatch AI, Owlance AI, Foncentra, Aperture Futures) | Dedicated `/projects/[slug]` titles, H1s, Open Graph, SoftwareApplication schema, case-study body copy |

Natural wording takes priority over repeating exact phrases. No search-volume or ranking claims have been made.

## Live crawl snapshot (31 October 2026)

| Check | Result |
| --- | --- |
| Homepage | 200 |
| Six project URLs | 200 each |
| robots.txt | 200 — Allow `/`, Disallow `/api/`, Sitemap declared |
| sitemap.xml | 7 URLs (home + projects) |
| Project page word counts (live) | ~103–118 words — thin; local enrichment pending deploy |
| Schema types present | Home: Person, WebSite, ProfilePage; Projects: WebPage, SoftwareApplication, BreadcrumbList |
| Browser render crawl | Not run (Playwright unavailable in BeyondSEO doctor) |
| Rankings / traffic / backlinks | Not measured |

## Local case-study enrichment (this repo)

- Expanded `lib/projects.ts` with `overview`, `frontend`, `backend`, `challenges`, `contribution`, `faqs`, `seoTitle`, and `seoKeywords`.
- Project detail UI uses the site palette (linen / terracotta / sage): breadcrumb, answer intro, CTAs, dual stack panels, challenges, FAQ accordion, contact path.
- Full markdown case studies in `docs/projects/*.md` with SEO meta blocks.
- Per-page BeyondSEO sheet: `docs/seo/project-page-seo.md`.
- Schema `@graph` includes FAQPage plus WebPage, SoftwareApplication, and BreadcrumbList.
- Stack corrections vs digowl.me / GitHub: Meeting AI uses OpenAI Whisper + GPT (not Groq); Foncentra aligned to custom theme + GSAP; Owlance GitHub link added; Aperture role remains Frontend Developer with product context.

## Project case-study SEO

| URL | Focus |
| --- | --- |
| `/projects/meeting-ai` | Meeting AI audio intelligence / WebRTC |
| `/projects/projectsphere` | ProjectSphere multi-tenant SaaS |
| `/projects/medmatch-ai` | MedMatch AI heart-risk ML app |
| `/projects/owlance-ai` | Owlance AI freelancing assistant |
| `/projects/foncentra` | Foncentra WordPress digital publishing |
| `/projects/aperture-futures` | Aperture Futures frontend contribution |

Per project page:

- Unique `title` and `seoDescription` naming Mohammad Haroon and the product.
- Canonical URL under `https://www.haroon.live/projects/[slug]`.
- Open Graph / Twitter large-image cards using the project cover image.
- JSON-LD `@graph` with `WebPage`, `SoftwareApplication`, and `BreadcrumbList`.
- Visible byline linking back to the portfolio home and Work section.
- Internal links between related projects (“More projects”).

## After deployment

1. Confirm homepage, all six `/projects/*` URLs, `/robots.txt`, `/sitemap.xml`, and `/opengraph-image` on www.
2. Submit `https://www.haroon.live/sitemap.xml` in Search Console.
3. URL Inspection for home + each project URL; request indexing.
4. Validate structured data with Schema.org validator and Rich Results Test.
5. Recrawl with BeyondSEO HTTP mode and compare project word counts / meta to the 31 Oct baseline.
6. Confirm Foncentra live DNS; replace the outbound link if the domain stays unresolved.
7. After about four weeks, review Search Console impressions/clicks for branded vs project-name queries.

## Remaining work

- Deploy local enrichment so live meta no longer shows outdated Groq / Elementor wording.
- Optional browser-mode BeyondSEO crawl once Playwright is available.
- Reputation / competitor sampling not part of this pass — see `docs/seo/beyondseo-plan.md`.
- Resume PDF at `public/Mohammad-Haroon-Resume.pdf` was previously missing; restore if download links still point there.
