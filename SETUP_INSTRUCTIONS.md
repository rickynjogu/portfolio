# Portfolio Setup Instructions

## 🚀 Quick Start

Your personal portfolio website is already built and running! Here's everything you need to know to customize it and deploy it to your own machine.

## 📋 Prerequisites

Before setting up on your local machine, make sure you have:
- **Node.js** (v20 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)

## 🛠️ Setup on Your Machine

### Step 1: Get the Code

**Option A: Download from Replit**
1. Click the three dots (...) in the file explorer
2. Select "Download as zip"
3. Extract the zip file to your desired location
4. Open terminal/command prompt in that folder

**Option B: Clone from Git (if you've connected to GitHub)**
```bash
git clone <your-repository-url>
cd <repository-name>
```

### Step 2: Install Dependencies

Navigate to your project folder and run:
```bash
npm install
```

This will install all required packages including:
- React, TypeScript, Tailwind CSS
- Framer Motion for animations
- Shadcn UI components
- Express backend server
- And all other dependencies

### Step 3: Run the Development Server

Start the application:
```bash
npm run dev
```

The app will be available at: **http://localhost:5000**

You should see:
- ✅ Backend server running on port 5000
- ✅ Frontend hot-reloading enabled
- ✅ Your portfolio ready to view!

## 🎨 Customization Guide

### Personalizing Your Portfolio

#### 1. Update Personal Information

**Home Page Hero Section** (`client/src/pages/home.tsx`)
```typescript
// Change the title and description
<h1>Building the Future</h1>  // ← Edit this
<p>A passionate developer creating innovative solutions...</p>  // ← Edit this
```

**About Page** (`client/src/pages/about.tsx`)
```typescript
// Update your bio
<h2>Hi, I'm a Full-Stack Developer</h2>  // ← Edit this
<p>With a passion for creating elegant solutions...</p>  // ← Edit this

// Update skills
const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", ...],  // ← Add/remove skills
  },
  // ... add more categories
];
```

**Contact Page** (`client/src/pages/contact.tsx`)
```typescript
// Update social links
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/YOUR_USERNAME",  // ← Update with your URL
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/YOUR_USERNAME",  // ← Update
  },
  // ... update all links
];

// Update email
<a href="mailto:your.email@example.com">  // ← Change email
```

#### 2. Add Your Projects

**Edit** `server/storage.ts` in the `seedProjects()` method:

```typescript
const sampleProjects: InsertProject[] = [
  {
    title: "Your Project Name",
    description: "Short description for card",
    longDescription: "Detailed description (optional)",
    progress: 75,  // 0-100
    techStack: ["React", "Node.js", "PostgreSQL"],  // Your tech stack
    githubUrl: "https://github.com/yourname/project",
    liveUrl: "https://your-project.com",  // Optional
    imageUrl: null,  // Add later if you have images
    eta: "December 2025",  // Optional estimated completion
  },
  // Add more projects...
];
```

#### 3. Add Your Profile Picture

Replace the icon with your photo:

**In Home Page** (`client/src/pages/home.tsx`):
```typescript
// Replace this:
<Sparkles className="w-20 h-20 text-primary" />

// With this:
<img 
  src="/path/to/your/photo.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover rounded-full"
/>
```

**In About Page** (`client/src/pages/about.tsx`):
```typescript
// Same replacement in the about section
```

#### 4. Customize Colors & Theme

**Edit** `client/src/index.css` to change colors:

```css
:root {
  --primary: 217 91% 60%;  /* Main accent color */
  --background: 0 0% 100%;  /* Light mode background */
  /* ... other colors */
}

.dark {
  --primary: 217 91% 60%;  /* Dark mode accent */
  --background: 222 15% 6%;  /* Dark mode background */
  /* ... other colors */
}
```

**Color format**: `H S% L%` (Hue, Saturation, Lightness)
- Use a [HSL color picker](https://hslpicker.com/) to choose colors

#### 5. Change Fonts

The portfolio uses **Inter** and **JetBrains Mono** by default.

To change fonts, edit `client/index.html`:
```html
<!-- Replace the Google Fonts link with your preferred fonts -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

Then update `client/src/index.css`:
```css
:root {
  --font-sans: 'YourFont', system-ui, sans-serif;
  --font-mono: 'YourMonoFont', Menlo, monospace;
}
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click!

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Add new site from Git
4. Deploy automatically

### Option 3: Replit Deployment
1. Stay in this Replit
2. Click the "Deploy" button in the top right
3. Follow the deployment wizard

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist` folder.

## 📁 Project Structure

```
├── client/                  # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # Shadcn UI primitives
│   │   │   ├── header.tsx
│   │   │   ├── project-card.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   └── theme-toggle.tsx
│   │   ├── pages/         # Page components
│   │   │   ├── home.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── about.tsx
│   │   │   └── contact.tsx
│   │   ├── lib/           # Utilities
│   │   ├── App.tsx        # Main app component
│   │   └── index.css      # Global styles & theme
│   └── index.html
│
├── server/                 # Backend Express server
│   ├── storage.ts         # Data storage (in-memory)
│   ├── routes.ts          # API endpoints
│   └── index.ts           # Server entry point
│
├── shared/                # Shared types between frontend/backend
│   └── schema.ts          # Data models & validation
│
├── design_guidelines.md   # Design system documentation
├── replit.md             # Project documentation
└── package.json          # Dependencies & scripts
```

## 🎯 Common Customizations

### Adding a New Page

1. **Create page component**: `client/src/pages/blog.tsx`
```typescript
export default function Blog() {
  return (
    <div className="min-h-screen pt-24 px-4">
      <h1>Blog</h1>
      {/* Your content */}
    </div>
  );
}
```

2. **Add route** in `client/src/App.tsx`:
```typescript
import Blog from "@/pages/blog";

// In Router component:
<Route path="/blog" component={Blog} />
```

3. **Add navigation link** in `client/src/components/header.tsx`:
```typescript
const navItems = [
  // ... existing items
  { href: "/blog", label: "Blog" },
];
```

### Adding Project Images

1. Place images in `client/public/images/`
2. Update project in `server/storage.ts`:
```typescript
imageUrl: "/images/your-project.jpg"
```

### Changing Animation Speed

Edit `tailwind.config.ts`:
```typescript
animation: {
  'slide-up': 'slide-up 0.3s ease-out',  // Change 0.6s to 0.3s for faster
}
```

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 is taken:
1. Stop other applications using port 5000
2. Or change port in `server/index.ts`:
```typescript
const PORT = 3000;  // Change from 5000 to 3000
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Updating
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Restart the dev server
```bash
npm run dev
```

### TypeScript Errors
Run type checking:
```bash
npx tsc --noEmit
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Shadcn UI](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 💡 Tips

1. **Start small**: First customize text content, then move to colors and images
2. **Test often**: Run `npm run dev` frequently to see your changes
3. **Use design guidelines**: Follow `design_guidelines.md` for consistent design
4. **Version control**: Use Git to track changes
5. **Backup**: Keep a copy of the original code before major changes

## 🎉 You're All Set!

Your portfolio is ready to customize and deploy. Make it yours by:
- ✅ Adding your projects
- ✅ Updating personal information  
- ✅ Customizing colors and theme
- ✅ Adding your profile picture
- ✅ Deploying to production

**Need help?** Refer to `replit.md` for detailed architecture documentation.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
