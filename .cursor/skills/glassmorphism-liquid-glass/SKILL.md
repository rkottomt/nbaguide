---
name: glassmorphism-liquid-glass
description: Restyle web app UI with glassmorphism frosted panels and Apple-style liquid glass buttons/pills. Use when revamping UI, applying glass effects, or reskinning components with backdrop blur and specular highlights.
---

# Skill: Remorph UI to Glassmorphism + Liquid Glass

You are restyling an existing web app's UI to a hybrid of **glassmorphism** (frosted, blurred translucent panels) and **Apple-style "liquid glass"** (specular highlights, refraction, soft gel-like depth). This is a **visual reskin only** — do not change routes, data, copy, component structure, or behavior. Touch styling layers (CSS/Tailwind/styled-components), tokens, and class names. Keep the existing color identity (e.g. accent orange) — glass tints sit on top of it, they don't replace it.

## Goals

1. Replace flat opaque panels/cards/nav/buttons with layered translucent glass surfaces.
2. Add a subtle ambient background so the blur has something to refract.
3. Keep contrast and accessibility intact (text stays legible on glass).
4. Ship it as reusable utility classes / tokens, not one-off inline styles.

---

## Design rules

### The background must earn the blur
Glass only reads as glass when there is color and light behind it. If the page background is a flat dark color, add:
- A dark base (keep existing dark theme).
- 2–3 large, soft, blurred radial "blobs" of color (use the brand accent + 1 cool hue), low opacity, fixed/absolute behind content, `filter: blur(80–120px)`.
- Optional faint noise texture overlay (1–3% opacity) to avoid banding.

### Two surface tiers
- **Glassmorphism tier** (cards, nav bar, large panels): emphasis on *frost*.
- **Liquid glass tier** (buttons, pills, toggles, active states, small interactive chips): emphasis on *gel depth + specular edge highlight*.

### Core glassmorphism recipe (panels, cards, nav)
```css
.glass {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
}
```

### Core liquid-glass recipe (buttons, pills, active nav item)
```css
.liquid {
  position: relative;
  background: linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04));
  backdrop-filter: blur(12px) saturate(180%) brightness(1.05);
  -webkit-backdrop-filter: blur(12px) saturate(180%) brightness(1.05);
  border: 1px solid rgba(255, 255, 255, 0.20);
  border-radius: 9999px;
  box-shadow:
    0 6px 20px rgba(0, 0, 0, 0.30),
    inset 0 1px 1px rgba(255, 255, 255, 0.45),
    inset 0 -2px 6px rgba(0, 0, 0, 0.25);
  overflow: hidden;
}
```

### Brand-accent variant (e.g. the primary CTA)
Keep the accent fill but make it *liquid*: tint the gradient with the accent, keep the inset specular highlight and the soft outer glow.

---

## Application checklist
- **Top nav bar** → glassmorphism, sticky, backdrop-filter blur. Active item → liquid pill.
- **Hero badge / tags** → small liquid pill.
- **Primary button** → accent liquid glass with glow.
- **Secondary button** → frosted glass, hairline border, no fill.
- **Content cards** → glassmorphism, hover lifts.
- **Links/chips** → keep accent color; add subtle glass background only on hover.

## Accessibility & quality bars
- Target WCAG AA contrast on glass surfaces.
- Always pair `backdrop-filter` with `-webkit-` prefix.
- Add `@supports not (backdrop-filter: blur(1px))` fallback.
- Respect `prefers-reduced-motion`: disable sheen/hover transitions.
- Cap nested backdrop-filter layers for perf.

## Project tokens (nbaguide)
See `src/app/globals.css` for `--glass-*`, `--liquid-*`, and `.glass` / `.liquid` utilities.
