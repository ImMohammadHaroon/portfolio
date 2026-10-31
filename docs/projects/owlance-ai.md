# Owlance AI — Case Study

## SEO

| Field | Value |
| --- | --- |
| Target title | Owlance AI \| Mohammad Haroon Portfolio |
| Meta description | Owlance AI by Mohammad Haroon: Next.js Fiverr growth assistant with client replies, proposal writing, gig SEO, Project Memory, Supabase, and OpenAI. |
| Canonical | https://www.haroon.live/projects/owlance-ai |
| Primary keywords | Owlance AI, Mohammad Haroon, Fiverr AI assistant, freelance growth SaaS |
| Secondary keywords | Next.js Supabase OpenAI, Fiverr gig SEO, proposal writer AI |

## Overview

Owlance AI is an AI-powered Fiverr business and growth assistant by DevOwl. It ships five playbook-backed assistants — Client Reply, Message Rewriter, Client Requirement Analyzer, Fiverr Brief Analyzer / Proposal Writer, and Fiverr Gig Creator & Analyzer — with chats persisted per module. A Project Memory layer imports a GitHub project catalog (or manual projects) so assistants can reference verified work when drafting proposals and gigs. The product is built as a Next.js App Router SaaS on Supabase Postgres with OpenAI completions for grounded freelance workflows.

## Frontend technologies

| Technology | Confidence | Notes |
| --- | --- | --- |
| Next.js 15 (App Router) | Confirmed + observed | `package.json`; live `/_next/static` chunks |
| React 19 | Confirmed | Dependencies |
| Tailwind CSS 4 | Confirmed | `@tailwindcss/postcss` |
| lucide-react, clsx, tailwind-merge | Confirmed | UI utilities |
| react-markdown + remark-gfm | Confirmed | Assistant output rendering |
| date-fns | Confirmed | Timestamps / history |

## Backend technologies

| Technology | Confidence | Notes |
| --- | --- | --- |
| Next.js server / API layer | Confirmed | App Router + `api.js` build hook |
| Supabase Postgres (`@supabase/ssr`, `@supabase/supabase-js`) | Confirmed | Auth/data persistence |
| OpenAI Node SDK | Confirmed | README + dependency |
| Vercel hosting | Observed | Live demo headers |

## Challenges and solutions

1. **Scattered freelance tools** — Replies, briefs, proposals, and gigs usually live in separate docs. Solution: five module assistants with per-module chat history in one product shell.
2. **Generic AI proposals** — Model output without project proof sounds hollow. Solution: Project Memory imports a verified catalog so gig/proposal assistants can cite real work.
3. **SaaS data persistence** — Chats and projects need durable storage. Solution: Supabase Postgres with SSR-friendly client packages.
4. **Readable long answers** — Assistants return structured markdown. Solution: `react-markdown` with GFM for proposals and gig drafts.

## Role / contribution

Full Stack Developer — Next.js App Router product, Supabase data layer, OpenAI assistant modules, and Project Memory workflow.

## Links

- Live: https://owlance-ai.vercel.app/
- GitHub: https://github.com/ImMohammadHaroon/Owlance-AI
- Portfolio: https://www.haroon.live/projects/owlance-ai

## Sources and confidence

GitHub README + `package.json` (confirmed). Live Next.js fingerprint on Vercel (observed, Oct 2026). README model string reflects the configured OpenAI model env; treat as configurable deployment detail.
