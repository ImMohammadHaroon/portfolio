# Portfolio SEO — 15 October 2026

Implemented locally; deployment and Google indexing have not been verified.

## Keyword placement

| Target | Placement |
| --- | --- |
| Mohammad Haroon | Page title, visible H1, introduction, Person structured data, project bylines and meta descriptions |
| Mohammad Haroon Portfolio | Page title, project section label, website name, project page titles |
| Mohammad Haroon Web Developer | Name and role in the visible H1, title and description |
| Haroon Portfolio | Website alternate name in structured data |
| MERN Stack Developer | Hero introduction and role, metadata, structured data; MongoDB confirmed by owner |
| Project names (Meeting AI, ProjectSphere, MedMatch AI, Owlance AI, Foncentra, Aperture Futures) | Dedicated `/projects/[slug]` titles, H1s, Open Graph, SoftwareApplication schema |

Natural wording takes priority over repeating exact phrases. No search-volume or ranking claims have been made.

## Changes

- Canonical homepage uses `https://www.haroon.live`, matching the observed live redirect from the non-www domain.
- Added crawler rules and a sitemap. Homepage plus six project case-study URLs are listed. Section anchors are not separate pages. No fabricated modification dates.
- Added Open Graph metadata, a generated 1200 × 630 social image and a large-image Twitter card on the homepage.
- Added connected Person, WebSite and ProfilePage structured data using the existing public identity and profile links.
- Updated visible name, role and technology copy. Kept the existing Google Analytics configuration.

## Project case-study SEO (15 October 2026)

Dedicated pages:

| URL | Focus |
| --- | --- |
| `/projects/meeting-ai` | Meeting AI audio intelligence platform |
| `/projects/projectsphere` | ProjectSphere multi-tenant SaaS |
| `/projects/medmatch-ai` | MedMatch AI heart-risk ML app |
| `/projects/owlance-ai` | Owlance AI freelancing assistant |
| `/projects/foncentra` | Foncentra WordPress eBook store |
| `/projects/aperture-futures` | Aperture Futures frontend work |

Per project page:

- Unique `title` and `seoDescription` naming Mohammad Haroon and the product.
- Canonical URL under `https://www.haroon.live/projects/[slug]`.
- Open Graph / Twitter large-image cards using the project cover image.
- JSON-LD `@graph` with `WebPage`, `SoftwareApplication` (author/creator → Person), and `BreadcrumbList`.
- Visible byline linking back to the portfolio home and Work section.
- Internal links between related projects (“More projects”).

Evidence source: repository source and production build inspection on 15 October 2026. BeyondSEO doctor reported HTTP ready; Playwright/browser crawl was not available in this environment, so no full rendered crawl of the live www host was run for these new paths. Indexing status after deploy is unverified.

## Evidence and remaining work

Direct HTTP checks on 25 September 2026 returned 200 for the www homepage and 404 for robots.txt, sitemap.xml and Mohammad-Haroon-Resume.pdf. The repository also lacks the resume PDF. Restore the real PDF at `public/Mohammad-Haroon-Resume.pdf` to repair the existing download links.

The BeyondSEO runtime check on 15 October 2026 found HTTP ready with beautifulsoup4 available; Playwright/Chromium browser mode and PDF export were not ready. Direct source/build inspection were used for the project-page SEO pass; no complete rendered crawl, reputation audit, ranking survey or private Search Console/Analytics review was performed.

## After deployment

1. Confirm the homepage, all six `/projects/*` URLs, `/robots.txt`, `/sitemap.xml` and `/opengraph-image` load on the public www domain.
2. In the matching Search Console property, submit `https://www.haroon.live/sitemap.xml`.
3. Inspect `https://www.haroon.live/` and each project URL with URL Inspection, test the live URL, and request indexing. Check Google's selected canonical once indexing data is available.
4. Validate homepage and project structured data with Schema.org's validator and Google's Rich Results Test. Valid markup does not guarantee enhanced search results.
5. Check Analytics Realtime after visiting the published site. Search Console verification and reporting were reported by the owner, not independently checked here.
6. Record a Search Console baseline, then compare impressions, clicks, queries and landing pages after about four weeks. Separate branded name searches from broader developer searches and project-name queries.

## Content follow-up

Strengthen each case study with accurate descriptions of your own contributions, technology choices and outcomes. Keep your name and portfolio URL consistent on your existing GitHub and LinkedIn profiles. Broad terms such as MERN Stack Developer need evidence of relevant work beyond technical metadata; placement alone does not guarantee rankings.
