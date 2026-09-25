# Portfolio SEO — 25 September 2026

Implemented locally; deployment and Google indexing have not been verified.

## Keyword placement

| Target | Placement |
| --- | --- |
| Mohammad Haroon | Page title, visible H1, introduction, Person structured data |
| Mohammad Haroon Portfolio | Page title, project section label, website name |
| Mohammad Haroon Web Developer | Name and role in the visible H1, title and description |
| Haroon Portfolio | Website alternate name in structured data |
| MERN Stack Developer | Hero introduction and role, metadata, structured data; MongoDB confirmed by owner |

Natural wording takes priority over repeating exact phrases. No search-volume or ranking claims have been made.

## Changes

- Canonical homepage uses `https://www.haroon.live`, matching the observed live redirect from the non-www domain.
- Added crawler rules and a sitemap containing the one public page. Section anchors are not separate pages. No fabricated modification dates.
- Added Open Graph metadata, a generated 1200 × 630 social image and a large-image Twitter card.
- Added connected Person, WebSite and ProfilePage structured data using the existing public identity and profile links.
- Updated visible name, role and technology copy. Kept the existing Google Analytics configuration.

## Evidence and remaining work

Direct HTTP checks on 25 September 2026 returned 200 for the www homepage and 404 for robots.txt, sitemap.xml and Mohammad-Haroon-Resume.pdf. The repository also lacks the resume PDF. Restore the real PDF at `public/Mohammad-Haroon-Resume.pdf` to repair the existing download links.

The BeyondSEO runtime check found missing crawler dependencies (beautifulsoup4, colorama and Playwright). Direct HTTP checks and source/build inspection were used instead; no complete rendered crawl, reputation audit, ranking survey or private Search Console/Analytics review was performed.

## After deployment

1. Confirm the homepage, `/robots.txt`, `/sitemap.xml` and `/opengraph-image` load on the public www domain.
2. In the matching Search Console property, submit `https://www.haroon.live/sitemap.xml`.
3. Inspect `https://www.haroon.live/` with URL Inspection, test the live URL, and request indexing. Check Google's selected canonical once indexing data is available.
4. Validate the structured data with Schema.org's validator and Google's Rich Results Test. Valid markup does not guarantee enhanced search results.
5. Check Analytics Realtime after visiting the published site. Search Console verification and reporting were reported by the owner, not independently checked here.
6. Record a Search Console baseline, then compare impressions, clicks, queries and landing pages after about four weeks. Separate branded name searches from broader developer searches.

## Content follow-up

Strengthen the existing projects with accurate descriptions of your own contributions, technology choices and outcomes. Add dedicated case-study pages when enough original detail is available. Keep your name and portfolio URL consistent on your existing GitHub and LinkedIn profiles. Broad terms such as MERN Stack Developer need evidence of relevant work beyond technical metadata; placement alone does not guarantee rankings.
