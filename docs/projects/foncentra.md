# Foncentra — Case Study

## SEO

| Field | Value |
| --- | --- |
| Target title | Foncentra \| Mohammad Haroon Portfolio |
| Meta description | Foncentra by Mohammad Haroon: WordPress e-learning and digital publishing platform with custom theme work, GSAP motion, and mobile-first reading for blogs, articles, and eBooks. |
| Canonical | https://www.haroon.live/projects/foncentra |
| Primary keywords | Foncentra, Mohammad Haroon, WordPress e-learning, digital eBook store |
| Secondary keywords | GSAP WordPress theme, digital publishing platform, mobile-first reading UX |

## Overview

Foncentra is a digital reading and e-learning platform that delivers blogs, articles, and eBooks focused on productivity, mindset, and personal growth. Built on WordPress with a custom theme and GSAP-powered motion, it prioritizes comfortable long-form reading, clear content discovery, and mobile-first layouts. The product experience combines curated publishing with performance-minded front-end polish so learners can browse, read, and download educational content without a heavy, distracting interface.

## Frontend technologies

| Technology | Confidence | Notes |
| --- | --- | --- |
| WordPress custom theme | Confirmed | digowl.me case study |
| HTML5 / CSS3 / JavaScript | Confirmed | digowl.me |
| GSAP + ScrollTrigger | Confirmed | Scroll, parallax, stagger, page transitions |
| jQuery | Confirmed | digowl stack list |
| Responsive / mobile-first UI | Confirmed | digowl.me |
| Dark mode reading UX | Confirmed (product) | digowl feature set |

Earlier portfolio drafts listed Elementor and WooCommerce. The digowl.me source of truth describes a **custom theme** with GSAP rather than Elementor; commerce/download features are described as an eBook library with secure downloads. Live DNS for `foncentra.com` did not resolve from this environment (Oct 2026), so live Wappalyzer-style observation was unavailable.

## Backend technologies

| Technology | Confidence | Notes |
| --- | --- | --- |
| WordPress / PHP | Confirmed | digowl.me |
| MySQL | Confirmed | digowl.me |
| Advanced Custom Fields | Confirmed | Custom content fields |
| Custom post types | Confirmed | Blogs, articles, eBooks |
| WP Rocket | Confirmed (docs) | Caching / performance |
| Cloudflare | Confirmed (docs) | CDN / edge |
| Image optimization + lazy loading | Confirmed (docs) | Performance stack |

## Challenges and solutions

1. **Engagement without overwhelm** — Educational sites often feel dense. Solution: progressive GSAP reveals, clear hierarchy, and distraction-light reading layouts.
2. **Mixed content types** — Blogs, articles, and eBooks need different discovery paths. Solution: custom post types, categories/tags, and dedicated eBook library UX.
3. **Reading comfort across devices** — Long-form content fails on small screens. Solution: fluid typography, adaptive layouts, touch-friendly nav, optional dark mode.
4. **Performance with animation and media** — Motion and large files can hurt Core Web Vitals. Solution: WP Rocket, Cloudflare, lazy loading, and device-aware animation choices.

## Role / contribution

WordPress Developer — custom theme/front-end experience, content architecture, GSAP motion, and SEO-minded publishing structure.

## Links

- Live (listed): https://foncentra.com
- digowl case study: https://www.devowl.me/project/foncentra
- Portfolio: https://www.haroon.live/projects/foncentra

## Sources and confidence

Primary narrative/stack from digowl.me Foncentra case study (Oct 2026). Live site DNS unresolved during fingerprinting; Elementor/WooCommerce tags from the older portfolio entry were deprioritized in favor of digowl evidence.
