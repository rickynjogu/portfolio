# Complete Code Reference - Personal Portfolio

This document contains all the code for your personal portfolio website, organized by file for easy reference.

## 📦 Package Configuration

### package.json
```json
{
  "name": "rest-express",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build && tsc -p tsconfig.server.json",
    "start": "NODE_ENV=production node dist-server/index.js"
  }
}
```

## 🎨 Frontend Code

### Core App Files

#### client/index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
    <title>Portfolio | Project Progress Tracker</title>
    <meta name="description" content="Personal portfolio showcasing completed projects, works in progress, and upcoming developments with real-time progress tracking." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

#### client/src/App.tsx
```typescript
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>
              <Router />
            </main>
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
```

### Theme System

#### client/src/components/theme-provider.tsx
See the actual file for complete implementation with localStorage and system preference detection.

#### client/src/components/theme-toggle.tsx
See the actual file for the theme toggle button component.

### Layout Components

#### client/src/components/header.tsx
Complete navigation header with:
- Desktop horizontal navigation
- Mobile hamburger menu
- Theme toggle
- Active route highlighting

### Page Components

All page components are fully implemented in:
- `client/src/pages/home.tsx` - Hero section with featured projects
- `client/src/pages/projects.tsx` - Full project grid with filtering
- `client/src/pages/about.tsx` - Bio and skills showcase
- `client/src/pages/contact.tsx` - Social links and contact info

### Feature Components

#### client/src/components/project-card.tsx
Reusable project card with:
- Progress bar with color coding
- Status badges (Completed, In Progress, Coming Soon)
- Tech stack icons
- GitHub and live demo links
- Hover animations

## 🔧 Backend Code

### Data Schema (shared/schema.ts)
```typescript
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  longDescription: text("long_description"),
  progress: integer("progress").notNull().default(0),
  techStack: text("tech_stack").array().notNull(),
  githubUrl: text("github_url"),
  liveUrl: text("live_url"),
  imageUrl: text("image_url"),
  eta: text("eta"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;
```

### Storage Layer (server/storage.ts)
In-memory storage implementation with:
- CRUD operations for projects
- Sample project data seeding
- Type-safe interfaces

### API Routes (server/routes.ts)
RESTful API endpoints:
- `GET /api/projects` - List all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project
- `PATCH /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

## 🎨 Styling

### Tailwind Configuration (tailwind.config.ts)
Custom animations:
- fade-in
- slide-up
- slide-in-left
- scale-in
- pulse-glow
- shimmer
- float

### Global Styles (client/src/index.css)
Complete theme with:
- Light/dark mode variables
- Elevation system for hover effects
- Custom shadows and spacing
- Font definitions

## 🚀 Key Features Implemented

### 1. Project Progress Tracking
- Visual progress bars with percentage
- Color-coded status (green=complete, yellow=in-progress, gray=coming-soon)
- Automatic status assignment based on progress value

### 2. Filtering System
- Filter by All, Completed, In Progress, Coming Soon
- Statistics dashboard showing counts
- Automatic sorting by progress percentage

### 3. Responsive Design
- Mobile-first approach
- Breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)
- Hamburger menu for mobile
- Grid layouts that adapt to screen size

### 4. Animations
- Framer Motion page transitions
- Staggered card animations
- Hover effects and transforms
- Loading skeletons

### 5. Theme System
- Dark/light mode toggle
- localStorage persistence
- System preference detection
- Smooth transitions

## 📝 Customization Quick Reference

### Add a Project
Edit `server/storage.ts`:
```typescript
{
  title: "Your Project",
  description: "Description",
  progress: 75,
  techStack: ["React", "Node.js"],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
  imageUrl: null,
  eta: "December 2025"
}
```

### Change Colors
Edit `client/src/index.css`:
```css
:root {
  --primary: 217 91% 60%;  /* Your color in HSL */
}
```

### Update Personal Info
- Hero: `client/src/pages/home.tsx`
- Bio: `client/src/pages/about.tsx`
- Contact: `client/src/pages/contact.tsx`

### Add New Page
1. Create `client/src/pages/yourpage.tsx`
2. Add route in `client/src/App.tsx`
3. Add nav link in `client/src/components/header.tsx`

## 🔍 File Locations

### Most Important Files to Customize
1. `server/storage.ts` - Add your projects here
2. `client/src/pages/home.tsx` - Edit hero section
3. `client/src/pages/about.tsx` - Update bio and skills
4. `client/src/pages/contact.tsx` - Update social links
5. `client/src/index.css` - Change colors and theme

### Component Files
- Header: `client/src/components/header.tsx`
- Project Card: `client/src/components/project-card.tsx`
- Theme Toggle: `client/src/components/theme-toggle.tsx`
- UI Components: `client/src/components/ui/`

### Configuration Files
- Tailwind: `tailwind.config.ts`
- TypeScript: `tsconfig.json`, `tsconfig.server.json`
- Vite: `vite.config.ts`

## 📚 Dependencies Used

### Frontend
- react, react-dom - UI library
- typescript - Type safety
- tailwindcss - Styling
- framer-motion - Animations
- @tanstack/react-query - Data fetching
- wouter - Routing
- lucide-react - Icons
- react-icons - Tech logos
- @radix-ui/* - Accessible components
- zod - Validation

### Backend
- express - Web server
- drizzle-orm - Database ORM
- tsx - TypeScript execution

## 🎯 Next Steps

1. **Customize Content**: Update all personal information
2. **Add Projects**: Edit storage.ts with your projects
3. **Upload Images**: Add project screenshots
4. **Test Locally**: Run `npm run dev`
5. **Deploy**: Push to Vercel/Netlify

---

All files are in your project directory. Refer to SETUP_INSTRUCTIONS.md for detailed setup steps!
