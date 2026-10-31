# ProjectSphere — Case Study

## SEO

| Field | Value |
| --- | --- |
| Target title | ProjectSphere \| Mohammad Haroon Portfolio |
| Meta description | ProjectSphere by Mohammad Haroon: multi-tenant MERN project management with custom Kanban boards, Socket.io real-time sync, role-based dashboards, and Stripe subscriptions. |
| Canonical | https://www.haroon.live/projects/projectsphere |
| Primary keywords | ProjectSphere, Mohammad Haroon, multi-tenant project management, real-time Kanban |
| Secondary keywords | Socket.io Kanban, Stripe SaaS, MERN project management, @dnd-kit |

## Overview

ProjectSphere is a multi-tenant project management SaaS built for organizations that each run work differently. Instead of locking teams into fixed To Do / In Progress / Done columns, it lets projects define custom Kanban templates, sync board updates in real time over Socket.io, and present role-based dashboards for Super Admins, Org Admins, Project Managers, Team Members, and Clients. Stripe-powered plans (Starter, Professional, Business) with trial flows support subscription growth while tenant isolation keeps each organization's data scoped server-side.

## Frontend technologies

| Technology | Confidence | Notes |
| --- | --- | --- |
| React.js | Confirmed | Portfolio + Vite SPA on live demo |
| Vite | Observed | Live `ml-sphere.vercel.app` serves `/assets/index-*.js` on Vercel |
| @dnd-kit | Observed | Live marketing copy for drag-and-drop Kanban |
| Socket.io Client | Observed + confirmed | Live presence / board sync messaging |
| Role-based dashboards UI | Observed | Five role experiences on marketing site |

## Backend technologies

| Technology | Confidence | Notes |
| --- | --- | --- |
| Node.js + Express.js | Confirmed | Portfolio catalog |
| MongoDB | Confirmed | Portfolio catalog; org-scoped queries |
| Socket.io | Confirmed | Real-time board and notification sync |
| Stripe | Confirmed | Subscription plans + trial billing |
| JWT / auth + RBAC | Confirmed (product) | Multi-role access on live site |
| Vercel hosting (frontend) | Observed | Response headers |

## Challenges and solutions

1. **Fixed workflows vs real teams** — Generic PM boards force teams to work around the tool. Solution: custom column templates per project (name, color, done state) with reusable templates.
2. **Real-time multi-user boards** — Concurrent moves and status changes must stay consistent. Solution: Socket.io events for task moves, status changes, and presence without full page refresh.
3. **Multi-tenant isolation** — SaaS data must never leak across organizations. Solution: server-side `organizationId` scoping on queries plus distinct RBAC for five roles, including a limited client portal.
4. **Monetization without friction** — Teams need to try before paying. Solution: 14-day trials across Stripe plans with card capture before trial end.

## Role / contribution

Full Stack Developer — MERN application structure, real-time Kanban collaboration, multi-tenant data model, and Stripe subscription flows.

## Links

- Live: https://ml-sphere.vercel.app
- Portfolio: https://www.haroon.live/projects/projectsphere

## Sources and confidence

No digowl.me page for this project. Evidence from live demo copy/UI (Oct 2026) plus the portfolio stack in `lib/projects.ts`. Backend MongoDB/Express details are confirmed by owner catalog; deeper server fingerprinting was not available from the public SPA.
