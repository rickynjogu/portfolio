# Personal Portfolio with Project Progress Tracking

## Overview
A modern, visually stunning personal portfolio website built with React, TypeScript, and Tailwind CSS. Features real-time project progress tracking, beautiful animations, and a fully responsive design that works seamlessly across all devices.

## Key Features
- **Hero Section**: Eye-catching landing with animated gradient text and floating geometric shapes
- **Project Showcase**: Dynamic project cards with progress bars, status badges, and tech stack icons
- **Project Filtering**: Filter projects by status (All, Completed, In Progress, Coming Soon)
- **About Section**: Personal bio with organized skills grid by category
- **Contact Section**: Social media links and contact information
- **Dark/Light Mode**: Seamless theme switching with local storage persistence
- **Smooth Animations**: Framer Motion animations for page transitions and card reveals
- **Fully Responsive**: Optimized layouts for mobile, tablet, and desktop

## Project Status
✅ **Completed** - All MVP features implemented, tested, and ready for production

### Recent Changes (October 11, 2025)
- Implemented complete portfolio website with project progress tracking
- Added dark/light theme toggle with persistence
- Created responsive navigation with mobile menu
- Built project filtering and statistics dashboard
- Added loading states and skeleton loaders for better UX
- Comprehensive e2e testing completed successfully

## Tech Stack

### Frontend
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **React Query** for data fetching and caching
- **Wouter** for lightweight client-side routing
- **Shadcn UI** for accessible component primitives
- **Lucide React** for beautiful icons
- **React Icons** for tech stack logos

### Backend
- **Express.js** for API server
- **In-Memory Storage** for data persistence
- **Zod** for schema validation
- **Drizzle ORM** for type-safe database operations

### Design System
- Custom color palette optimized for dark/light modes
- Inter font for headings and body text
- JetBrains Mono for code/tech tags
- Consistent spacing system (4, 8, 12, 16, 24 units)
- Custom animations (fade-in, slide-up, shimmer, float)

## Project Architecture

### Data Model
```typescript
Project {
  id: string
  title: string
  description: string
  longDescription?: string
  progress: number (0-100)
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  eta?: string
  createdAt: Date
}
```

### Project Status Logic
- **Completed**: progress === 100
- **In Progress**: progress >= 20 && progress < 100
- **Coming Soon**: progress < 20

### API Endpoints
- `GET /api/projects` - Fetch all projects
- `GET /api/projects/:id` - Fetch single project
- `POST /api/projects` - Create new project
- `PATCH /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Pages
1. **Home (/)** - Hero section with featured projects
2. **Projects (/projects)** - Complete project portfolio with filtering
3. **About (/about)** - Personal bio and skills showcase
4. **Contact (/contact)** - Social media links and contact info

## Design Guidelines
The application follows strict design guidelines defined in `design_guidelines.md`:
- Dark mode primary with vibrant accent colors
- Minimalist modern design inspired by Linear, GitHub, Vercel
- Subtle animations and hover effects
- WCAG AA contrast ratios for accessibility
- Responsive breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)

## Development

### Running Locally
The application is already configured and running. The workflow "Start application" runs:
```bash
npm run dev
```
This starts both the Express backend and Vite frontend on port 5000.

### Adding New Projects
Projects are currently stored in memory. To add new projects, modify `server/storage.ts` in the `seedProjects()` method, or use the API endpoints to create projects dynamically.

### Customizing Content
1. **Hero Section**: Edit `client/src/pages/home.tsx`
2. **About Bio**: Edit `client/src/pages/about.tsx`
3. **Contact Info**: Edit `client/src/pages/contact.tsx`
4. **Color Scheme**: Modify CSS variables in `client/src/index.css`

### Theme Customization
The theme can be customized by modifying CSS custom properties in `client/src/index.css`:
- Background colors: `--background`, `--card`
- Text colors: `--foreground`, `--muted-foreground`
- Accent colors: `--primary`, `--chart-2`, `--chart-3`

## Testing
✅ Comprehensive e2e testing completed with Playwright
- Navigation flow across all pages verified
- Project filtering and progress tracking tested
- Theme toggle functionality confirmed
- Responsive design validated
- All interactive elements have proper test IDs

## Future Enhancements
The following features can be added in future phases:
- Django backend integration for dynamic project management
- Admin dashboard for updating projects in real-time
- Contact form with email notifications
- Timeline/roadmap visualization
- Blog section for development insights
- Downloadable CV/resume with PDF generation
- Project detail pages with expanded information
- Search functionality for projects
- Analytics dashboard for portfolio views

## Deployment Ready
The application is production-ready and can be deployed using Replit's built-in deployment features. All core functionality has been implemented and tested.

## Architecture Decisions
1. **In-Memory Storage**: Used for MVP simplicity; can be replaced with PostgreSQL for production
2. **Wouter over React Router**: Lightweight routing solution perfect for this use case
3. **Shadcn UI**: Provides accessible components while maintaining full styling control
4. **Framer Motion**: Smooth animations without performance overhead
5. **Dark Mode Default**: Modern developer portfolios typically default to dark mode

## Performance Optimizations
- React Query caching for instant navigation
- Lazy loading for images (when added)
- Optimized bundle size with tree-shaking
- Skeleton loaders for perceived performance
- Framer Motion animations respect reduced-motion preferences

## Accessibility
- Semantic HTML structure throughout
- WCAG AA contrast ratios maintained
- Focus indicators on all interactive elements
- Screen reader labels for icon-only buttons
- Keyboard navigation support
- Responsive touch targets (min 48px)

## User Preferences
- Theme preference persists in localStorage
- Smooth transitions between light/dark modes
- Respects system color scheme preference
