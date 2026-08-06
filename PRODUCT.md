# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are hiring managers evaluating a candidate and freelance
clients deciding whether to hire for a project. Their job is to quickly
establish what Tony B. NYA can build, verify the work is real, and decide
whether to reach out.

## Product Purpose

Personal portfolio for Tony B. NYA, a Backend Software Engineer. It presents
a verifiable body of work (projects, skills, career progression) and makes it
easy for employers and clients to contact him. Success is the visitor
exploring everything and reaching out on their own timing.

## Positioning

Lead with backend engineering (Python: FastAPI, Flask, Django) and prove
full-stack breadth (JavaScript/TypeScript, React, Node). Content is not
hardcoded: projects and the progression timeline are served by a purpose-built
portfolio API backed by an admin panel, so the site stays current without
releasing code. This is the frontend of a small content system, not a static
page.

## Operating Context

Visitors arrive from job posts, LinkedIn, GitHub, or referral, on desktop and
mobile, and browse without logging in. The site is hosted on Render's free
tier, which can cold-start slowly on first request; production would use an
always-on plan.

## Capabilities and Constraints

- Projects and timeline are fetched at runtime from `VITE_API_PROJECTS_URL`
  and `VITE_API_TIMELINES_URL`; both must be set for content to load. Loading
  and error states (skeletons, error messages) are part of the flow.
- Contact form sends via EmailJS (hardcoded service/template IDs) then routes
  to /thanks; no backend processing on this site.
- Routes: /, /home, /thanks, and a 404 page.
- Assets: resume PDF, profile image, 23 skill SVGs, logo, Credly badge link.
- Animation stack: GSAP (ScrollTrigger, SplitText) and Framer Motion.
- Deploy: Render (primary, via README) and a gh-pages script in package.json.

## Brand Commitments

- Name: Tony B. NYA; handle @tonybnya across GitHub, LinkedIn, and X.
- Headline: "Backend Software Engineer".
- Existing assets are binding: logo SVG, resume PDF, profile image, Credly
  All-in-Open-Source-Contributor badge, and the current social links.

## Evidence on Hand

- Projects and timeline come from the live portfolio API (no local fixtures).
- README links the live site, the portfolio-api source, and the admin panel
  source.
- Intro copy carries real result claims: glossary app for a PhD-level research
  system (Canada) with 80% thesis-committee approval; +20% bookings and +35%
  conversion on local business apps. These claims must not be altered or
  inflated without Tony's confirmation.
- Skill set is enumerated in src/constants/index.js (23 technologies).

## Product Principles

1. Verifiability: every claim and project links back to real evidence (API,
   source repos, live links, badges). Do not fabricate projects, metrics, or
   testimonials.
2. Backend-first: backend engineering is the lead story; full-stack breadth
   supports it, never replaces it.
3. Content stays managed: keep content API-driven and treat hardcoded content
   as the exception, not the rule.
4. Self-serve exploration: the visitor should learn and evaluate freely, with
   contact available when they are ready, not forced.
5. Performance is part of the pitch: skeleton loaders, animation, and
   deployment latency are visible signals of engineering quality.
