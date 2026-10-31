# BeyondSEO on-page SEO — project case studies

Evidence basis: local content in `lib/projects.ts` + `docs/projects/*.md`, site tokens in `app/globals.css`, prior HTTP crawl of live www (31 Oct 2026). Deploy required before live SERP/crawl reflects these changes.

## Shared on-page pattern (all `/projects/[slug]`)

| Element | Implementation |
| --- | --- |
| Unique title | `seoTitle` per project (not identical sitewide pattern only) |
| Meta description | `seoDescription` ≤ ~160 chars with name + product + stack |
| Canonical | `https://www.haroon.live/projects/[slug]` |
| Robots | index, follow |
| H1 | Project name only |
| Answer intro | Visible `summary` under H1 for AEO clarity |
| H2 outline | Overview, About, Role, Frontend & backend, Challenges, Details, Stack, FAQ, Links, More |
| Keywords | Natural coverage via body + `seoKeywords` metadata |
| Internal links | Breadcrumb Home → Work → project; More projects; Contact CTA |
| Images | Absolute OG/Twitter URLs; alt includes project + Mohammad Haroon |
| Schema | WebPage, SoftwareApplication, BreadcrumbList, FAQPage |
| Conversion | Live/GitHub CTAs + Hire / Contact links to `/#contact` |

No search-volume or ranking claims.

## Per-page SEO sheet

### Meeting AI — `/projects/meeting-ai`

| Field | Value |
| --- | --- |
| Intent | Informational / portfolio proof for AI meeting transcription work |
| Primary cluster | Meeting AI, Mohammad Haroon, AI meeting transcription, WebRTC |
| Title | Meeting AI Case Study \| Mohammad Haroon |
| Meta | Meeting AI by Mohammad Haroon: WebRTC meetings, Whisper transcription, GPT notes, task extraction, and org-scoped collaboration with React, Node.js, and Supabase. |
| Entities | Mohammad Haroon, Meeting AI, OpenAI Whisper, Supabase, WebRTC |
| Acceptance | Title/H1 match; FAQ schema present; Groq not mentioned |

### ProjectSphere — `/projects/projectsphere`

| Field | Value |
| --- | --- |
| Intent | SaaS / full-stack proof for multi-tenant PM |
| Primary cluster | ProjectSphere, multi-tenant Kanban, Socket.io, Stripe |
| Title | ProjectSphere SaaS Case Study \| Mohammad Haroon |
| Meta | ProjectSphere by Mohammad Haroon: multi-tenant MERN project management with custom Kanban boards, Socket.io real-time sync, and Stripe subscriptions. |
| Entities | Mohammad Haroon, ProjectSphere, MongoDB, Stripe |
| Acceptance | Role + stack panels visible; Live CTA works |

### MedMatch AI — `/projects/medmatch-ai`

| Field | Value |
| --- | --- |
| Intent | ML + FastAPI portfolio proof |
| Primary cluster | MedMatch AI, heart disease risk, Random Forest, FastAPI |
| Title | MedMatch AI ML Case Study \| Mohammad Haroon |
| Meta | MedMatch AI by Mohammad Haroon: React + FastAPI heart disease risk classifier with Random Forest scoring and rule-based clinical guidance. |
| Trust | Educational disclaimer in FAQ + about copy |
| Acceptance | “Not a medical device” answer visible; GitHub linked |

### Owlance AI — `/projects/owlance-ai`

| Field | Value |
| --- | --- |
| Intent | AI SaaS / freelance tooling proof |
| Primary cluster | Owlance AI, Fiverr AI assistant, Next.js Supabase OpenAI |
| Title | Owlance AI Case Study \| Mohammad Haroon |
| Meta | Owlance AI by Mohammad Haroon: Next.js Fiverr growth assistant with client replies, proposals, gig SEO, Project Memory, Supabase, and OpenAI. |
| Acceptance | Live + GitHub links; Project Memory explained in FAQ |

### Foncentra — `/projects/foncentra`

| Field | Value |
| --- | --- |
| Intent | WordPress / publishing proof |
| Primary cluster | Foncentra, WordPress e-learning, GSAP theme |
| Title | Foncentra WordPress Case Study \| Mohammad Haroon |
| Meta | Foncentra by Mohammad Haroon: WordPress e-learning and digital publishing with a custom theme, GSAP motion, and mobile-first reading UX. |
| Acceptance | Custom theme/GSAP narrative (not Elementor-first) |

### Aperture Futures — `/projects/aperture-futures`

| Field | Value |
| --- | --- |
| Intent | Frontend contribution proof on AI product |
| Primary cluster | Aperture Futures, React frontend, Mohammad Haroon |
| Title | Aperture Futures Frontend Case Study \| Mohammad Haroon |
| Meta | Aperture Futures frontend work by Mohammad Haroon: responsive React UI for a UNSC intelligence platform with reusable components and cross-device UX. |
| Acceptance | Role remains Frontend Developer; backend listed as product context |

## Verification checklist (after deploy)

1. Recrawl with BeyondSEO HTTP mode (`max-pages 15`) and confirm project word counts ≫ prior ~100-word baseline.
2. Rich Results Test for FAQ + SoftwareApplication on one sample URL.
3. Search Console URL Inspection for each of the six project URLs.
4. Confirm absolute OG images resolve on www.
5. Spot-check broken outbound demos (especially Foncentra DNS).

## Coverage limits

- Live production may still show old meta until deploy.
- No ranking, traffic, or backlink totals measured in this pass.
- Browser/Playwright BeyondSEO mode was not required for these on-page edits.
