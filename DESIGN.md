---
name: Portfolio — Tony B. NYA
description: The Observatory Console. Monochrome instrument UI for a backend engineer's portfolio.
colors:
  obsidian: "#000000"
  deep-space-navy: "#0f1115"
  void-blue: "#030313"
  void-blue-deep: "#030713"
  halo-slate: "#4A5565"
  star-white: "#ffffff"
  cloud: "#f9fafb"
  dust: "#9ca3af"
  moon-shadow: "#6b7280"
  stone: "#a8a29e"
  ember-oxide: "#862019"
  abyss-blue: "#062A5A"
  amber-signal: "#FFBA00"
  signal-red: "#ef4444"
typography:
  display:
    fontFamily: "Righteous, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.1
  headline:
    fontFamily: "\"DM Serif Text\", serif"
    fontSize: "clamp(1.5rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.05em"
  title:
    fontFamily: "\"DM Serif Text\", serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.03em"
  body:
    fontFamily: "\"Mona Sans\", sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "\"Modern Negra\", sans-serif"
    fontSize: "0.8125rem"
    lineHeight: 1.2
rounded:
  sm: "6px"
  md: "8px"
  full: "9999px"
  pill: "24px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
components:
  button-primary:
    backgroundColor: "{colors.obsidian}"
    textColor: "{colors.star-white}"
    rounded: "{rounded.sm}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "rgba(0, 0, 0, 0.5)"
    textColor: "{colors.star-white}"
    rounded: "{rounded.sm}"
    padding: "12px 32px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.star-white}"
    rounded: "{rounded.sm}"
    padding: "8px 32px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.star-white}"
    rounded: "{rounded.sm}"
  title-pill:
    backgroundColor: "{colors.obsidian}"
    textColor: "{colors.star-white}"
    rounded: "{rounded.pill}"
    padding: "16px 24px"
    width: "200px"
  skill-card:
    backgroundColor: "{colors.obsidian}"
    rounded: "{rounded.md}"
  project-card:
    backgroundColor: "{colors.void-blue-deep}"
    rounded: "{rounded.sm}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.dust}"
    rounded: "{rounded.sm}"
  timeline-dot:
    backgroundColor: "{colors.obsidian}"
    rounded: "{rounded.full}"
  social-chip:
    backgroundColor: "{colors.obsidian}"
    textColor: "{colors.star-white}"
    rounded: "{rounded.full}"
  nav-link:
    textColor: "{colors.star-white}"
    rounded: "{rounded.sm}"
---

# Design System: Portfolio — Tony B. NYA

## Overview

**Creative North Star: "The Observatory Console"**

The portfolio is a quiet instrument panel for a backend engineer. Every surface reads as machined hardware against deep space: flat near-black and navy planes, crisp 2px slate borders, serif headings set like engraved labels, and a single diffuse white-glow halo that behaves like the console's only illumination. The physics-based Event Horizon black hole is the lens the whole system looks through — the artifact leads, the interface recedes.

The atmosphere is deliberate and minimal. Whitespace and restraint carry as much signal as the glow; nothing pulses for attention beyond the hero. Depth comes from the white halo and a fine grain overlay, never from soft gray shadows or gradients. The monochrome commitment is total: accent color is treated as a scarce resource, reserved for rare warm/cool glows that read as telemetry, not decoration.

**Key Characteristics:**
- Monochrome instrument UI: black + near-black blue surfaces, white text, slate borders
- The white-glow halo (`shadow-white/50` + `drop-shadow-xl`) is the signature depth and accent move
- Flat dark fills by default; 2px slate borders define containment
- Serif headlines (DM Serif Text) over a variable humanist sans body (Mona Sans)
- A WebGL black-hole simulation is the single hero artifact; everything else stays quiet
- Small radii (6–8px) and 2px borders make controls feel machined and tactile

## Colors

A disciplined monochrome palette with one signature light source and two rare telemetry accents. The white-glow is the system's primary accent; it reads as instrument illumination rather than decoration.

### Primary
- **Star White** (#ffffff): the system's one accent and light source. Used for primary text, the signature glow halo (`shadow-lg shadow-white/50 drop-shadow-xl`) on interactive surfaces, and active carousel pagination dots. Its rarity is the point.

### Neutral
- **Obsidian** (#000000): action surfaces — primary buttons, title pills, social chips, year badges, timeline dots, modal header. Pure black reads as the console's most "pressed" state.
- **Deep Space Navy** (#0f1115): page background base (rendered beneath a noise-grain overlay); also the nav's scrolled fill at 50% + 10px backdrop blur.
- **Void Blue** (#030313): elevated dark panel — skill-card hover, the modal's Details button, and the deepest resting tint.
- **Void Blue Deep** (#030713): project card and skeleton card surface. The most recessed plane in the stack.
- **Halo Slate** (#4A5565): the containment color — 2px borders on cards, tags, inputs, timeline rails, and outline buttons; also muted UI accents and the mobile menu toggle.
- **Cloud** (#f9fafb): secondary text on dark — project descriptions, footer.
- **Dust** (#9ca3af): meta text — project tags and Live/Source links.
- **Moon Shadow** (#6b7280): tertiary text — the role subtitle under the name.
- **Stone** (#a8a29e): timeline duration labels.

### Accent (scarce, telemetry-only)
- **Ember Oxide** (#862019): rare warm glow accent, tokenized as a decorative drop shadow. Use as a heat signature, never as a fill.
- **Abyss Blue** (#062A5A): rare cool glow accent, tokenized as a decorative drop shadow. The cold counterpart to Ember Oxide.
- **Amber Signal** (#FFBA00): the single hot accent allowed as a *solid stroke and text color*. Reserved for primary CTA borders (the hero Resume and Contact buttons) and the hero role subtitle, "Backend Software Engineer". Like Ember, it stays scarce: it never fills a surface, never graduates into a gradient, and never spreads beyond ~5% of any screen.
- **Signal Red** (#ef4444): functional error state only — form validation borders and messages.

### Named Rules
**The Glow Rule.** The white halo is the only light source. Soft gray shadows and colored gradients are banned from the system; depth is flat fills plus the halo.

**The Ember Rarity Rule.** Ember Oxide, Abyss Blue, and Amber Signal appear only as rare accent glows / strokes / text. If any covers more than ~5% of a screen, it is no longer telemetry — it is a leak. Amber is the one exception allowed as a solid stroke (CTA borders) and a text color (the role subtitle); Ember and Abyss remain glow-only, never fills.

**The Slate Line Rule.** Containment is a 2px Halo Slate border or flat separation — never a tinted panel or a card that lifts the background.

## Typography

**Display Font:** Righteous (sans-serif) — brand marks only (navbar logo).
**Headline Font:** DM Serif Text (serif) — every section title, the hero name, buttons.
**Body Font:** Mona Sans (variable sans-serif, 200–900) — all reading and UI copy.
**Label/Mono Font:** Modern Negra (custom demo typeface) — durations, tags, link buttons.

**Character:** A serif-over-sans pairing that reads as engraved instrumentation over a clean humanist terminal. The serif carries the identity; the variable sans carries the information density.

### Hierarchy
- **Display** (Righteous, 400, clamp(2rem→3rem), lh 1.1): brand identity only — navbar logo.
- **Headline** (DM Serif Text, 400, clamp(1.5rem→3rem), lh 1.2, +0.05em): section titles, the typed hero name, the not-found page.
- **Title** (DM Serif Text, 400, 1.125rem, lh 1.4, +0.03em): project titles, timeline titles, buttons, modal headers.
- **Body** (Mona Sans, 400, 0.9375rem, lh 1.6): paragraphs, descriptions, form placeholders. Justified reading in intro/project copy; keep lines ~60–75ch.
- **Label** (Modern Negra, 400, 0.8125rem, lh 1.2): durations, tags, Live/Source link labels, footer.

### Named Rules
**The Serif Headline Rule.** Every heading is DM Serif Text. Mona Sans is body-only; it never leads a heading.

## Layout

A single centered column on a full-bleed noise-grain background. Home content rides `container mx-auto px-4` (px-6 below sm); the navbar constrains to `max-w-screen-xl`. Sections stack vertically with strong rhythm: titles sit on `mt-20`, skills release with `mb-20`, and a 1px Halo Slate horizontal rule divides the page before the footer.

Forms and the timeline constrain to `w-full md:w-7/12` centered. Projects use a responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with a 16px gap. The skills slider is the one full-bleed element — an infinite marquee that spans the viewport. Density is generous: cards pad p-4/p-6, buttons px-8 py-3, inputs p-2 with 16px vertical rhythm. Navigation collapses to a hamburger below `md`.

## Elevation & Depth

Flat by default, lifted by light. Surfaces are unshaded dark fills; the noise-texture background (a repeating `noise.jpg` under a `#0f1115/10` overlay) supplies grain. Depth is conveyed through the signature white-glow halo and tonal recess — Void Blue surfaces sit visually below Obsidian action surfaces.

### Shadow Vocabulary
- **Instrument Halo** (`box-shadow: 0 10px 15px -3px rgba(255,255,255,0.5)` + `drop-shadow(0 20px 13px rgba(0,0,0,0.03))`): the signature ambient glow on buttons, title pills, and nav links. Equivalent to `shadow-lg shadow-white/50 drop-shadow-xl`.
- **Ambient Diffuse** (`drop-shadow: 50px 50px 100px white`): the config-level `dropShadow.custom` — a very wide, very faint white halo for hero-level elements.
- **Modal Lift** (`shadow-xl` + `bg-stone-900/75` backdrop): the one elevated layer above the console.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. The halo appears only on interactive elements and the title pill — never as a resting backdrop. No gray box shadows, ever.

## Shapes

Machined rectangles with small radii and crisp strokes. The default corner is 6px (`rounded-md`) for buttons, cards, inputs, tags, badges, and the modal; skill cards step up to 8px (`rounded-lg`). Circularity is reserved for interactive points — social chips, timeline dots, carousel arrows and pagination, the navbar logo — all `rounded-full`. The one exception to the small-radius rule is the section-title pill, a 200px-wide `rounded-3xl` Obsidian capsule. Containment is always a 2px Halo Slate stroke; project-card imagery clips with `overflow-hidden`.

## Components

Every control is instrument-hard and tactile: crisp 2px slate borders, black fills, small radii, glow only on hover.

### Buttons
- **Shape:** rounded-md (6px), 2px border on outline variants.
- **Primary:** Obsidian fill, Star White DM Serif text, `px-8 py-3`, `tracking-wider`, centered (`mr-auto ml-auto`), with the Instrument Halo.
- **Hover / Focus:** primary → `bg-black/50` + `scale-105`; outline → `bg-black/10`; modal OK → `bg-black/90`. Transitions are quick and direct.
- **Secondary / Outline:** transparent fill, 2px Halo Slate border, Star White text (Details button, Live/Source links). Live/Source links set their label in Modern Negra.

### Chips (tags)
- **Style:** transparent fill, 2px Halo Slate border, Dust text, rounded-md, Modern Negra face. Year badges invert to Obsidian fill + white text.

### Cards / Containers
- **Corner Style:** rounded-md (6px).
- **Background:** Void Blue Deep for project/skeleton cards; Obsidian for skill cards; Void Blue on skill-card hover.
- **Shadow Strategy:** flat; the Instrument Halo is reserved for interactive chrome, not cards.
- **Border:** 2px Halo Slate on project/skeleton cards.
- **Internal Padding:** p-4 body, p-6 on skill cards.

### Inputs / Fields
- **Style:** transparent fill, 2px Halo Slate stroke, rounded-md, p-2, white text.
- **Focus:** outline removed, stroke holds; error swaps the stroke to Signal Red and adds a red message line below.
- **Error / Disabled:** Signal Red stroke + message; submitting state shows "Sending...".

### Navigation
- **Style:** transparent at rest, scrolled fill `#0f1115` at 50% opacity with 10px backdrop blur; links are Star White DM Serif (1.25rem, scale-105 on hover); the brand is a circular Obsidian chip with the portfolio mark; mobile menu is a hamburger below `md` with `aria-expanded`.

### Signature Component — Event Horizon
A 515-line WebGL/GLSL physically-based black-hole simulation: gravitational lensing, a tilted accretion disk, and a procedural star field, exposed through uniforms (`u_rotationSpeed`, `u_diskIntensity`, `u_tilt`, `u_chromatic`). It is the hero artifact of the intro, rendered full-width at ~500px tall, with a standalone `event-horizon.html` companion. Nothing else in the system animates for attention — this is the one spectacle.

### Loading — Skeleton Shimmer
Projects and timeline load as skeletons: Void Blue Deep cards with a 5%-white gradient sweep (`background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)`) animating over 2s. The shimmer is the same rare white light as the halo, used for expectation, not decoration.

## Do's and Don'ts

### Do:
- **Do** keep surfaces flat dark fills; let the white-glow halo supply lift on interactive elements only.
- **Do** use 2px Halo Slate borders for containment on cards, tags, inputs, and outline buttons.
- **Do** set every heading in DM Serif Text and every body paragraph in Mona Sans.
- **Do** use rounded-md (6px) as the default corner; reserve `rounded-full` for interactive points.
- **Do** treat the Event Horizon as the single hero artifact and keep competing hero animations out.
- **Do** keep accent color (Ember Oxide / Abyss Blue) below ~5% of any screen.

### Don't:
- **Don't** use soft gray box shadows or gradients for depth — the halo is the only shadow vocabulary.
- **Don't** introduce pastels, colored fills, or a second accent family into the monochrome system.
- **Don't** lift the background with tinted panels; separate surfaces with borders and tonal recess instead.
- **Don't** replace the small-radius machined forms with large-radius "soft UI" surfaces (the title pill is the only exception).
- **Don't** let animation out-pulse the hero: entrance fades, the marquee, and the typed name are the ceiling.
