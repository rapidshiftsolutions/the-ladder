# The Ladder - Institutional Trust Design System

## Design Philosophy

The Ladder uses an **Institutional Trust** design system inspired by established nonprofits like the Red Cross and United Way. This approach emphasizes credibility, professionalism, and accessibility while maintaining warmth and approachability.

## Core Principles

1. **Credibility First** - Trust signals prominently displayed
2. **Clean & Professional** - No flashy effects or distracting animations
3. **Accessible** - WCAG AA compliant, keyboard navigable
4. **Donor-Centric** - Copy positions donors as heroes
5. **Impact-Focused** - Show measurable results

---

## Color Palette

### Primary Colors

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Primary Blue | `#1B4F72` | `--color-primary` | Headers, CTAs, trust |
| Primary Light | `#2874A6` | `--color-primary-light` | Hover states |
| Primary Dark | `#154360` | `--color-primary-dark` | Active states |

### Secondary Colors

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Teal Green | `#148F77` | `--color-secondary` | Success, growth |
| Light Teal | `#1ABC9C` | `--color-secondary-light` | Accents |

### Accent Colors (Conversion)

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Warm Orange | `#E67E22` | `--color-accent` | Donate buttons, CTAs |
| Light Orange | `#F39C12` | `--color-accent-light` | Hover states |

### Neutral Colors

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Off White | `#FDFEFE` | `--color-off-white` | Backgrounds |
| Light Gray | `#F8F9FA` | `--color-gray-50` | Section backgrounds |
| Border | `#E5E8E8` | `--color-border` | Card borders |
| Text Primary | `#1C2833` | `--color-text-primary` | Headings |
| Text Secondary | `#566573` | `--color-text-secondary` | Body text |

---

## Typography

### Font Families

```css
--font-heading: 'Merriweather', Georgia, serif;
--font-body: 'Source Sans 3', system-ui, sans-serif;
```

### Headings (Merriweather)

- **H1**: 48-60px, Bold (700), line-height 1.25
- **H2**: 36-48px, Bold (700), line-height 1.25
- **H3**: 24-30px, Bold (700), line-height 1.25
- **H4**: 20px, Semibold (600), line-height 1.25

### Body Text (Source Sans 3)

- **Large**: 18px, Regular (400), line-height 1.625
- **Base**: 16px, Regular (400), line-height 1.625
- **Small**: 14px, Regular (400), line-height 1.5

---

## Spacing

Based on 8px grid:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-2` | 8px | Inline spacing |
| `--space-4` | 16px | Component padding |
| `--space-6` | 24px | Card padding |
| `--space-8` | 32px | Section spacing |
| `--space-16` | 64px | Large spacing |
| `--section-padding-y` | 80px | Section vertical |
| `--section-padding-y-mobile` | 48px | Mobile sections |

---

## Components

### Buttons

```jsx
// Primary Button (Trust Blue)
<button className="btn btn-primary">Action</button>

// Secondary Button (Outlined)
<button className="btn btn-secondary">Secondary</button>

// Accent Button (Donation CTA - Orange)
<button className="btn btn-accent">Donate Now</button>

// Large Button
<button className="btn btn-lg btn-primary">Large Action</button>
```

### Cards

```jsx
// Default Card
<div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
  Content
</div>

// Accent Card (left border)
<div className="bg-white border-l-4 border-l-[var(--color-primary)] border border-gray-200 p-6">
  Content
</div>
```

### Trust Signals

Always visible on key pages:

```jsx
<div className="trust-bar">
  <span>501(c)(3) Tax Exempt</span>
  <span>EIN: 82-0737087</span>
  <span>Serving Birmingham Since 2021</span>
</div>
```

---

## Page Structure

### Hero Sections

- Background: `bg-[var(--color-primary)]`
- Text: White with `text-white/90` for body
- Include trust badge when relevant
- Clear CTA buttons

### Section Backgrounds

Alternate between:
- `bg-white` - Primary content
- `bg-gray-50` - Secondary content
- `bg-[var(--color-primary)]` - CTA sections

### Stats Display

```jsx
<div className="text-center">
  <div className="text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
    500+
  </div>
  <div className="text-sm text-[var(--color-text-secondary)]">
    Individuals Helped
  </div>
</div>
```

---

## Copy Guidelines

### Voice

- **Professional** but warm
- **Confident** but humble
- **Direct** and clear

### Donor-Centric Language

| Instead of | Use |
|------------|-----|
| "We need donations" | "You can make a difference" |
| "The Ladder does..." | "Your support enables..." |
| "Donate money" | "Support our mission" |

### Key Phrases

- "Helping individuals overcome barriers"
- "Your generosity creates real change"
- "100% to direct services"
- "Free and confidential support"

---

## Accessibility

### Required Features

- Skip navigation link
- ARIA labels on interactive elements
- Focus indicators: `outline: 3px solid rgba(27, 79, 114, 0.5)`
- Color contrast minimum 4.5:1
- Touch targets minimum 44px

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## File Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.jsx           # Root layout with fonts
│   └── [pages]/page.jsx     # Individual pages
├── components/
│   ├── SiteHeader.jsx       # Navigation
│   ├── SiteFooter.jsx       # Footer with trust signals
│   └── Card.jsx             # Card components
└── styles/
    └── design-tokens.css    # CSS custom properties
```

---

## Trust Indicators Checklist

Every key page should include:

- [ ] 501(c)(3) status mention
- [ ] EIN: 82-0737087
- [ ] "Founded 2021" or "Serving Since 2021"
- [ ] "Free and confidential" for service pages
- [ ] "100% to direct services" for donation pages
- [ ] Security badges near payment forms
