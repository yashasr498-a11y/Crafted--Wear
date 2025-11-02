+# Crafted Wear - Quick Start Guide

+

+## 🚀 Running the Project

+

+### Development Mode

+```bash

+cd crafted-wear

+npm run dev

+```

+Then open [http://localhost:3000](http://localhost:3000) in your browser.

+

+### Production Build

+```bash

+cd crafted-wear

+npm run build

+npm start

+```

+

+## 📋 Project Overview

+

+**Crafted Wear** is a premium luxury streetwear landing page featuring:

+

+### ✨ Key Features

+- **Dark Luxury Aesthetic**: Black & gold color palette with noir backgrounds

+- **Glassmorphism UI**: Modern glass-like components with backdrop blur

+- **3D Effects**: Interactive 3D card transforms on hover

+- **Smooth Animations**: Framer Motion powered transitions

+- **Responsive Design**: Optimized for all screen sizes

+- **Premium Typography**: Playfair Display + Inter fonts

+

+### 🎨 Design Elements

+1. **Hero Section**

+   - Model wearing Crafted Wear T-shirt

+   - Bold holographic logo overlay

+   - Animated background gradients

+   - Spotlight effects

+   - Stats cards with glassmorphism

+

+2. **Product Grid**

+   - 6 premium products (tees & hoodies)

+   - Category filters (All, T-Shirts, Hoodies)

+   - 3D hover effects

+   - Quick view functionality

+   - Size selectors

+   - Add to cart buttons

+

+3. **About Section**

+   - Brand story and philosophy

+   - Marble texture backgrounds

+   - Feature highlights

+   - Company values

+   - Statistics showcase

+   - Newsletter subscription

+

+4. **Footer**

+   - Brand information

+   - Navigation links

+   - Social media icons

+   - Legal links

+

+### 🛠️ Tech Stack

+- **Framework**: Next.js 15 (App Router)

+- **Language**: TypeScript

+- **Styling**: Tailwind CSS with custom utilities

+- **Animations**: Framer Motion

+- **Images**: Next.js Image optimization

+- **Fonts**: Google Fonts (Playfair Display, Inter)

+

+### 🎯 Custom Tailwind Classes

+- `.glass-card` - Glassmorphism effect

+- `.glass-card-gold` - Gold-tinted glass effect

+- `.btn-primary` - Gold gradient button

+- `.btn-secondary` - Glass button

+- `.text-gradient-gold` - Animated gold text gradient

+- `.holographic` - Holographic shimmer effect

+- `.spotlight` - Spotlight overlay effect

+- `.marble-texture` - Marble pattern background

+

+### 📁 Project Structure

+```

+crafted-wear/

+├── app/

+│   ├── layout.tsx       # Root layout with fonts

+│   ├── page.tsx         # Main page composition

+│   └── globals.css      # Global styles & utilities

+├── components/

+│   ├── Hero.tsx         # Hero section

+│   ├── Products.tsx     # Product grid

+│   ├── About.tsx        # About section

+│   └── Footer.tsx       # Footer

+├── public/              # Static assets

+├── tailwind.config.ts   # Tailwind configuration

+├── next.config.ts       # Next.js configuration

+└── package.json         # Dependencies

+```

+

+### 🎨 Color Palette

+- **Primary Gold**: `#d4ab4b` (gold-500)

+- **Dark Noir**: `#0a0a0a` (noir-900)

+- **Deep Black**: `#050505` (noir-950)

+- **Accent Gold**: `#e0c481` (gold-400)

+

+### 🖼️ Image Sources

+Currently using Unsplash for placeholder images. Replace with your own:

+- Hero model image

+- Product images (6 items)

+- About section image

+

+### 📝 Customization Tips

+

+1. **Update Products**: Edit `components/Products.tsx` line 8-51

+2. **Change Colors**: Modify `tailwind.config.ts` color definitions

+3. **Update Content**: Edit text in respective component files

+4. **Add Images**: Replace Unsplash URLs with your own

+5. **Modify Animations**: Adjust Framer Motion props in components

+

+### 🚀 Deployment

+

+**Vercel (Recommended)**

+```bash

+npm install -g vercel

+vercel

+```

+

+**Other Platforms**

+- Build: `npm run build`

+- Output: `.next` folder

+- Start: `npm start`

+

+### 📱 Responsive Breakpoints

+- Mobile: < 768px

+- Tablet: 768px - 1024px

+- Desktop: > 1024px

+

+### ⚡ Performance

+- Static page generation

+- Image optimization

+- Code splitting

+- CSS purging

+- Minification

+

+---

+

+**Built with ❤️ for Crafted Wear**
