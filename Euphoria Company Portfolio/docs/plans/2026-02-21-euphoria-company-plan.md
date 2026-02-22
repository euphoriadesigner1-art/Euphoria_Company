# Euphoria Company Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a premium, "Sleek Dark" futuristic landing page for Euphoria Company, an AI web development and automation agency.

**Architecture:** We will build a highly polished, responsive Single Page Application (SPA) structure. Given the heavy emphasis on visual effects (glassmorphism, morphing backgrounds, animations), we will initialize a Vite + React + Tailwind CSS project. This allows for rapid component development while tightly integrating advanced styling, adhering to the `ui-ux-pro-max` guidelines for dark mode and accessibility.

**Tech Stack:** React, Next.js (optional, but sticking to Vite/React for fast visual iteration default), Tailwind CSS, Framer Motion (for fluid animations/AI core effects), Lucide React (for SVG icons).

---

### Task 1: Project Initialization & Global Styling

**Files:**
- Create: `index.html`, `src/index.css`, `tailwind.config.js`
- Modify: `src/App.jsx`

**Step 1: Scaffold Vite Project & Install Dependencies**
Run: `npm create vite@latest . -- --template react && npm install && npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p && npm install framer-motion lucide-react`
Expected: Project scaffolds successfully with React and Tailwind config files present.

**Step 2: Configure Tailwind Theme (ui-ux-pro-max guidelines)**
Modify `tailwind.config.js` to define the "Sleek Dark" palette (deep black background, gold/electric blue accents) and custom animation curves.

**Step 3: Setup Global CSS**
Modify `src/index.css` to set the base dark theme `body { @apply bg-black text-white; }` and import necessary fonts (e.g., DM Sans or Inter via Google Fonts).

**Step 4: Commit**
```bash
git add .
git commit -m "chore: initialize vite react project with tailwind and base dark theme"
```

---

### Task 2: Implement "Immersive AI" Hero Component

**Files:**
- Create: `src/components/Hero.jsx`
- Modify: `src/App.jsx`

**Step 1: Create Hero Structure**
Build the `Hero.jsx` component featuring massive typography ("We Build The Future") and a call-to-action button.

**Step 2: Add Visual Effects**
Implement a background element (e.g., a morphing gradient blob using Framer Motion or pure CSS keyframes) representing the "AI Core". Apply glassmorphism (`backdrop-blur`) to the text container or nav over it.

**Step 3: Integrate into App**
Import and render `<Hero />` in `App.jsx`.

**Step 4: Test Visuals Locally**
Run: `npm run dev`
Expected: Hero renders with dark theme, large typography, and background effect.

**Step 5: Commit**
```bash
git add src/components/Hero.jsx src/App.jsx
git commit -m "feat: implement immersive hero section with glassmorphism"
```

---

### Task 3: Implement Services Bento Grid

**Files:**
- Create: `src/components/Services.jsx`

**Step 1: Build Bento Grid Layout**
Create a grid layout (`grid-cols-1 md:grid-cols-3`) containing cards for "AI Web Dev", "Automation", etc.

**Step 2: Apply Premium Styling**
Style cards with `bg-white/5` (subtle light on black), `border border-white/10`, and setup hover state transitions (`hover:border-yellow-500/50` for gold glow) ensuring `cursor-pointer` is applied per UX guidelines. Use `lucide-react` for SVG icons.

**Step 3: Integrate into App**
Import and render `<Services />` in `App.jsx` below the Hero.

**Step 4: Commit**
```bash
git add src/components/Services.jsx src/App.jsx
git commit -m "feat: implement bento grid layout for services section"
```

---

### Task 4: Implement Navigation and Footer (Contact)

**Files:**
- Create: `src/components/Navbar.jsx`, `src/components/Footer.jsx`

**Step 1: Build Floating Navbar**
Create a fixed/sticky navigation bar (`top-4 mx-4 border border-white/10 rounded-full bg-black/50 backdrop-blur-md`). Ensure minimum 44x44px touch targets.

**Step 2: Build Contact/Footer**
Create a dark, minimal footer with a simple contact form (inputs with focus rings `focus:ring-2 focus:ring-yellow-500`) and a glowing submit button.

**Step 3: Integrate into App**
Add `<Navbar />` at top of `App.jsx` and `<Footer />` at the bottom.

**Step 4: Commit**
```bash
git add src/components/Navbar.jsx src/components/Footer.jsx src/App.jsx
git commit -m "feat: add floating navbar and contact footer"
```
