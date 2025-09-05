# Magic Drawer Design System

## Overview

This document outlines the design system tokens, spacing, and usage guidelines for the Magic Drawer SPA. The design system follows award-level accessibility standards (WCAG 2.2 AA) and performance best practices.

## Color Tokens

### Dark Theme (Default)
- `--color-bg`: #0B1020 - Main background
- `--color-surface`: #121833 - Card and section backgrounds
- `--color-surface-elev`: #1A2147 - Elevated surfaces, modals
- `--color-text-primary`: #E6ECFF - Primary text, headings
- `--color-text-secondary`: #B8C2FF - Secondary text, descriptions
- `--color-brand`: #6AE3FF - Primary brand color (teal-cyan)
- `--color-accent`: #A86BFF - Secondary accent color (violet)
- `--color-success`: #25D366 - Success states, confirmations
- `--color-warning`: #FFC857 - Warning states, alerts
- `--color-danger`: #FF5E6B - Error states, destructive actions
- `--color-focus`: #FFFFFF - Focus outlines on dark backgrounds

### Light Theme (Auto-applied via prefers-color-scheme)
- `--color-bg`: #FFFFFF
- `--color-surface`: #F8FAFC
- `--color-surface-elev`: #F1F5F9
- `--color-text-primary`: #0F172A
- `--color-text-secondary`: #475569
- `--color-focus`: #0F172A

### Gradients
- `--gradient-subtle`: linear-gradient(180deg, #6AE3FF14 0%, #A86BFF14 100%) - Subtle background gradients
- `--gradient-card`: linear-gradient(135deg, #121833 0%, #1A2147 100%) - Card backgrounds

## Typography

### Font Stack
```css
--font-family-base: system-ui, -apple-system, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
```

### Font Sizes (rem-based scale)
- `--font-size-xs`: 0.75rem (12px)
- `--font-size-sm`: 0.875rem (14px)
- `--font-size-base`: 1rem (16px)
- `--font-size-lg`: 1.125rem (18px)
- `--font-size-xl`: 1.25rem (20px)
- `--font-size-2xl`: 1.5rem (24px)
- `--font-size-3xl`: 2rem (32px)
- `--font-size-4xl`: 2.5rem (40px)
- `--font-size-5xl`: 3.5rem (56px)

### Line Heights
- `--line-height-base`: 1.55 - Body text
- `--line-height-tight`: 1.25 - Headings, compact text
- `--line-height-relaxed`: 1.75 - Loose reading text

### Usage Guidelines
- Use `clamp()` for fluid typography on headings
- Avoid all-caps for long text (accessibility)
- Use letter-spacing sparingly, only for small labels
- Ensure 45-75 character line length for readability

## Spacing System

4-point scale based on multiples of 4px:
- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 0.75rem (12px)
- `--space-4`: 1rem (16px)
- `--space-6`: 1.5rem (24px)
- `--space-8`: 2rem (32px)
- `--space-12`: 3rem (48px)
- `--space-16`: 4rem (64px)

### Usage Guidelines
- Use consistent spacing throughout components
- Apply vertical rhythm with spacing tokens
- Ensure adequate touch targets (44px minimum)

## Border Radius

- `--radius-sm`: 0.5rem (8px) - Small elements, buttons
- `--radius-md`: 1rem (16px) - Cards, containers
- `--radius-lg`: 1.5rem (24px) - Hero panels, large sections
- `--radius-full`: 9999px - Circular elements, pills

## Shadows

Soft, layered approach replacing heavy glows:
- `--shadow-sm`: 0 1px 2px rgba(0, 0, 0, 0.24) - Subtle elevation
- `--shadow-lg`: 0 12px 32px rgba(0, 0, 0, 0.35) - Prominent elevation
- `--shadow-glow`: 0 0 20px rgba(106, 227, 255, 0.3) - Accent glows

## Interactive States

- `--hover-lighten`: rgba(255, 255, 255, 0.04) - Hover state overlay
- `--active-darken`: rgba(0, 0, 0, 0.04) - Active state overlay
- `--focus-ring`: 2px solid var(--color-focus) - Focus outline
- `--focus-offset`: 2px - Focus outline offset

## Layout

- `--max-width`: 1120px - Maximum content width
- `--gutter-xs`: 1rem (16px) - Mobile gutters
- `--gutter-sm`: 1.5rem (24px) - Tablet gutters
- `--gutter-md`: 2rem (32px) - Desktop gutters

## Animation

- `--duration-fast`: 120ms - Micro-interactions
- `--duration-base`: 180ms - Standard transitions
- `--duration-slow`: 300ms - Complex animations
- `--ease-out`: cubic-bezier(0.16, 1, 0.3, 1) - Smooth easing
- `--ease-bounce`: cubic-bezier(0.68, -0.55, 0.265, 1.55) - Bouncy effects

### Motion Guidelines
- Respect `prefers-reduced-motion` for accessibility
- Keep animations under 300ms for performance
- Use consistent easing throughout the interface

## Component Guidelines

### Buttons
```css
.btn {
  min-height: var(--target-size); /* 44px minimum */
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all var(--duration-base) var(--ease-out);
}

.btn-primary {
  background-color: var(--color-brand);
  color: #031018; /* High contrast text */
}
```

### Cards
```css
.card {
  background: var(--gradient-card);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(106, 227, 255, 0.1);
}
```

## Accessibility Features

### Color Contrast
- All text meets WCAG 2.2 AA standards (≥4.5:1 for normal text)
- UI elements meet ≥3:1 contrast ratio
- High contrast mode support included

### Focus Management
- Visible focus indicators on all interactive elements
- 2px white outline with 2px offset on dark backgrounds
- Skip links for keyboard navigation

### Reduced Motion
- Animations disabled when `prefers-reduced-motion: reduce`
- Essential animations limited to ≤150ms
- Static alternatives provided for complex animations

## Responsive Breakpoints

- 360px: Small mobile
- 640px: Large mobile
- 768px: Tablet
- 1024px: Desktop
- 1440px: Large desktop
- 1920px: Extra large desktop

## Usage Examples

### Implementing a Feature Card
```css
.feature-card {
  background: var(--gradient-card);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  border: 1px solid rgba(106, 227, 255, 0.1);
  transition: all var(--duration-base) var(--ease-out);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.feature-title {
  font-size: var(--font-size-xl);
  color: var(--color-text-primary);
  margin-bottom: var(--space-3);
}
```

### Creating Accessible Interactive Elements
```css
.interactive-element:focus {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}

.interactive-element:focus:not(:focus-visible) {
  outline: none;
}
```

## Browser Support

- Modern browsers with CSS Grid and Custom Properties support
- Graceful degradation for older browsers
- Progressive enhancement approach