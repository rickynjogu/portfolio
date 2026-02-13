# Personal Portfolio Design Guidelines

## Design Approach
**Reference-Based**: Inspired by modern developer portfolios (Linear, GitHub, Vercel) with emphasis on clean minimalism, bold typography, and subtle animations. Focus on showcasing work through visual hierarchy and progressive disclosure.

## Core Design Elements

### A. Color Palette

**Dark Mode Primary** (recommended default):
- Background: 222 15% 6%
- Surface: 222 15% 10%
- Border: 222 15% 15%
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 65%
- Accent/Brand: 217 91% 60% (vibrant blue for CTAs and progress bars)
- Success (Completed): 142 71% 45%
- Warning (In Progress): 45 93% 58%
- Muted (Coming Soon): 222 15% 40%

**Light Mode**:
- Background: 0 0% 100%
- Surface: 0 0% 98%
- Border: 220 13% 91%
- Text Primary: 222 15% 10%
- Text Secondary: 222 15% 45%

### B. Typography

**Primary Font**: Inter (Google Fonts)
- Headings: 700 weight, tight tracking (-0.02em)
- Body: 400 weight, relaxed line-height (1.7)
- Code/Tags: JetBrains Mono, 500 weight

**Scale**:
- Hero Title: text-6xl md:text-7xl lg:text-8xl
- Section Headers: text-3xl md:text-4xl lg:text-5xl
- Project Titles: text-xl md:text-2xl
- Body: text-base md:text-lg
- Labels/Tags: text-sm

### C. Layout System

**Spacing Primitives**: Use 4, 8, 12, 16, 24 units (p-4, gap-8, mt-12, py-16, mb-24)

**Container Strategy**:
- Max-width: max-w-7xl for content sections
- Hero: Full viewport with centered max-w-5xl content
- Project Grid: max-w-7xl with 3-column desktop, 2-column tablet, 1-column mobile
- Consistent section padding: py-16 md:py-24 lg:py-32

### D. Component Library

**Hero Section**:
- Full viewport height with centered content
- Large circular profile image (240px) with subtle glow effect
- Animated gradient text for tagline using mask gradient
- Dual CTA buttons: Primary (solid accent) + Secondary (outline with blur backdrop)
- Floating subtle geometric shapes in background

**Project Cards**:
- Hover elevation: Lift with shadow (translate-y-1, shadow-2xl)
- Progress bar: Full-width top border, gradient fill matching status color
- Status badges: Absolute positioned top-right with backdrop blur
- Tech stack: Small pill badges with icon + label
- Image thumbnail: 16:9 aspect ratio with gradient overlay on hover
- Layout: Image top, content below with flex spacing

**Navigation**:
- Fixed header with blur backdrop (backdrop-blur-lg)
- Logo left, nav links center, theme toggle right
- Mobile: Hamburger menu with slide-in drawer
- Active state: Accent underline with smooth transition

**Contact Section**:
- Two-column: Form left (60%), social links right (40%)
- Social icons: Large circular buttons (64px) with brand colors on hover
- Form inputs: Subtle border, focus ring with accent color
- Background: Subtle gradient mesh pattern

**About Section**:
- Side-by-side: Profile image left (40%), content right (60%)
- Skills: Grid of cards with icons, each card has subtle hover lift
- Profile image: Artistic rounded corners (rounded-3xl) with border accent

### E. Animations

**Page Transitions**:
- Fade + slide up on mount (Framer Motion)
- Stagger children animations (0.1s delay between cards)

**Interactive Elements**:
- Project cards: Scale on hover (scale-105)
- CTAs: Gentle pulse effect on primary buttons
- Progress bars: Animate width on scroll into view
- Social icons: Rotate + scale on hover

**Typography**:
- Hero tagline: Typewriter effect or gradient shimmer
- Section headers: Fade in with slide from left

## Visual Hierarchy

**Homepage Flow**:
1. Hero (viewport height) → Profile + Animated tagline + CTAs
2. Featured Projects (3 cards, horizontal scroll on mobile)
3. About preview (compact) → Full skills + bio
4. Contact (prominent social links)

**Projects Page**:
1. Page header with filter tabs (All, Completed, In Progress, Coming Soon)
2. Progress summary bar showing overall completion stats
3. Grid of sorted project cards (automatic grouping)
4. Each project expands inline on click for full details

## Images

**Profile Photo**: Professional headshot with creative editing (200-240px circular), subtle glow/border effect

**Project Thumbnails**: 16:9 ratio screenshots or mockups, with gradient overlay on hover revealing "View Details" CTA

**Background Elements**: Abstract gradient meshes, floating geometric shapes (low opacity), subtle noise textures for depth

**Hero Section**: No large hero image - focus on typography and profile photo with animated background elements

## Responsiveness

**Breakpoints**:
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768-1024px (2 columns where applicable)
- Desktop: > 1024px (full multi-column grids)

**Mobile Optimizations**:
- Larger touch targets (min 48px)
- Simplified navigation (drawer menu)
- Reduced motion preferences respected
- Horizontal scroll for project previews

## Accessibility

- WCAG AA contrast ratios maintained
- Focus indicators on all interactive elements
- Semantic HTML structure with proper headings
- Screen reader labels for icon-only buttons
- Reduced motion alternative animations