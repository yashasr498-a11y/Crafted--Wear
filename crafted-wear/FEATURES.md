+# Crafted Wear - Feature Showcase

+

+## 🎨 Design Philosophy: Gucci × Apple Fusion

+

+The landing page combines luxury fashion aesthetics with modern tech design principles:

+

+### Dark Luxury Cinematic Look

+- **Dark Noir Background**: Deep black (#050505) with subtle texture

+- **Reflective Marble Textures**: Procedural noise patterns for depth

+- **Spotlighted Models**: Radial gradients creating dramatic lighting

+- **Gold Accents**: Premium gold (#d4ab4b) for luxury feel

+

+### Interactive Elements

+- **3D Card Transforms**: Products rotate on hover (rotateY, rotateX)

+- **Glassmorphism Layers**: Backdrop blur with semi-transparent backgrounds

+- **Holographic Effects**: Animated shimmer overlays

+- **Smooth Animations**: Framer Motion for buttery transitions

+

+---

+

+## 📱 Sections Breakdown

+

+### 1. Hero Section

+**Visual Elements:**

+- Full-screen hero with animated gradient orbs

+- Navigation bar with holographic logo

+- Model image with glassmorphism overlay

+- Bold "CW" logo centered on t-shirt

+- Floating "Limited Edition" badge

+- Stats cards (500+ customers, 50+ designs, 4.9 rating)

+

+**Interactions:**

+- Hover effects on buttons (scale, shadow)

+- 3D tilt on model image

+- Animated scroll indicator

+- Floating elements with parallax

+

+**Typography:**

+- Display: Playfair Display (serif, luxury)

+- Body: Inter (sans-serif, clean)

+- Gold gradient text with shimmer animation

+

+---

+

+### 2. Product Grid

+**Layout:**

+- Responsive grid (1 col mobile, 2 tablet, 3 desktop)

+- 6 premium products showcased

+- Category filters (All, T-Shirts, Hoodies)

+

+**Product Cards:**

+- Glassmorphism background

+- 3D hover effect (perspective transform)

+- Product image with gradient overlay

+- Tag badges (BESTSELLER, NEW, LIMITED, etc.)

+- Price in gold gradient

+- Size selector (S, M, L, XL)

+- "Add to Cart" button with gold gradient

+- "Quick View" appears on hover

+

+**Products Included:**

+1. Noir Oversized Tee - ₹2,499

+2. Gold Script Hoodie - ₹4,999

+3. Midnight Drop Tee - ₹2,799

+4. Luxury Noir Hoodie - ₹5,499

+5. Statement Oversized Tee - ₹2,999

+6. Elite Gold Hoodie - ₹6,499

+

+**CTA Section:**

+- "Can't Find Your Style?" customization offer

+- Holographic background effect

+- "Customize Your Own" button

+

+---

+

+### 3. About Section

+**Content:**

+- Brand story and philosophy

+- "Where Luxury Meets Street Culture" headline

+- Company values and mission

+- Feature highlights with icons

+

+**Visual Elements:**

+- Marble texture background

+- Spotlight gradient effects

+- Studio image with 3D tilt

+- "EST. 2025" floating badge

+- Philosophy quote in gold-tinted glass card

+

+**Features Grid:**

+- ✨ Premium Quality - Finest fabrics & materials

+- 🎨 Bold Designs - Unique artistic expressions

+- ♻️ Sustainable - Eco-friendly production

+- 🚀 Limited Drops - Exclusive collections

+

+**Stats Section:**

+- 10K+ Happy Customers

+- 500+ Unique Designs

+- 50+ Cities Worldwide

+- 4.9/5 Customer Rating

+

+**Newsletter:**

+- Email subscription form

+- Glass card styling

+- "Join the Movement" CTA

+

+---

+

+### 4. Footer

+**Sections:**

+- Brand logo and description

+- Social media links (Instagram, Twitter, Facebook)

+- Shop links (New Arrivals, T-Shirts, Hoodies, etc.)

+- Support links (Contact, Size Guide, Shipping, etc.)

+- Company links (About, Careers, Sustainability, etc.)

+- Legal links (Privacy, Terms, Cookies)

+

+**Design:**

+- Marble texture background

+- Glass card elements

+- Hover effects on links

+- Decorative animated symbol

+

+---

+

+## 🎭 Animation Details

+

+### Entrance Animations

+- **Fade + Slide Up**: Content enters from bottom

+- **Fade + Scale**: Cards pop in with scale effect

+- **Stagger**: Sequential animation for grid items

+

+### Hover Animations

+- **3D Tilt**: Cards rotate on X/Y axis

+- **Scale Up**: Buttons grow on hover

+- **Glow Effect**: Gold shadow intensifies

+- **Image Zoom**: Product images scale 110%

+

+### Continuous Animations

+- **Float**: Badges move up and down

+- **Shimmer**: Gold text gradient slides

+- **Glow Pulse**: Shadow opacity oscillates

+- **Rotate**: Limited edition badge spins

+

+### Scroll Animations

+- **Viewport Triggers**: Elements animate when scrolled into view

+- **Once Mode**: Animations play only once

+- **Stagger Delays**: Sequential timing for lists

+

+---

+

+## 🎨 Custom CSS Utilities

+

+### Glassmorphism

+```css

+.glass-card

+- backdrop-blur-xl

+- bg-white/5

+- border border-white/10

+- Inset highlight

+- Drop shadow

+

+.glass-card-gold

+- Gold-tinted variant

+- Gold border

+- Gold shadow

+```

+

+### Buttons

+```css

+.btn-primary

+- Gold gradient background

+- Hover scale + shadow

+- Active scale down

+- Smooth transitions

+

+.btn-secondary

+- Glass background

+- Border hover effect

+- Subtle interactions

+```

+

+### Effects

+```css

+.holographic

+- Animated shimmer overlay

+- 45deg gradient sweep

+- 2.5s infinite loop

+

+.spotlight

+- Radial gradient overlay

+- Centered ellipse

+- Gold tint

+

+.marble-texture

+- Procedural noise pattern

+- Subtle depth

+- Fixed attachment

+```

+

+### Text

+```css

+.text-gradient-gold

+- Animated gradient

+- 200% background size

+- Shimmer effect

+- Text clipping

+```

+

+---

+

+## 📐 Responsive Design

+

+### Mobile (< 768px)

+- Single column layout

+- Stacked navigation

+- Full-width cards

+- Larger touch targets

+- Simplified animations

+

+### Tablet (768px - 1024px)

+- 2-column product grid

+- Side-by-side hero content

+- Optimized spacing

+- Touch-friendly interactions

+

+### Desktop (> 1024px)

+- 3-column product grid

+- Full hero layout

+- Enhanced hover effects

+- Parallax elements

+- Maximum visual impact

+

+---

+

+## 🚀 Performance Optimizations

+

+### Next.js Features

+- **Static Generation**: Pre-rendered at build time

+- **Image Optimization**: Automatic WebP conversion

+- **Code Splitting**: Component-level chunks

+- **Font Optimization**: Google Fonts with display swap

+

+### Tailwind CSS

+- **Purging**: Unused styles removed

+- **Minification**: Compressed output

+- **JIT Mode**: On-demand class generation

+

+### Framer Motion

+- **Hardware Acceleration**: GPU-powered transforms

+- **Lazy Loading**: Animations load on demand

+- **Optimized Rerenders**: Minimal React updates

+

+---

+

+## 🎯 User Experience

+

+### Visual Hierarchy

+1. Hero headline (largest)

+2. Section titles (large)

+3. Product names (medium)

+4. Body text (readable)

+5. Labels (small)

+

+### Call-to-Actions

+- Primary: "Shop Now" (gold gradient)

+- Secondary: "Explore Collection" (glass)

+- Tertiary: "Quick View" (appears on hover)

+

+### Feedback

+- Hover states on all interactive elements

+- Scale animations on clicks

+- Loading states (if needed)

+- Success messages (cart additions)

+

+### Accessibility

+- Semantic HTML structure

+- Alt text on images

+- Keyboard navigation support

+- Focus states visible

+- ARIA labels where needed

+

+---

+

+## 🎨 Brand Identity

+

+### Voice & Tone

+- **Bold**: Confident and assertive

+- **Luxury**: Premium and exclusive

+- **Youth**: Modern and energetic

+- **Authentic**: Genuine and relatable

+

+### Key Messages

+- "Wear Your Statement"

+- "Where Luxury Meets Street Culture"

+- "Crafted with Passion"

+- "Premium Customized Streetwear"

+

+### Visual Language

+- Dark, moody backgrounds

+- Gold as accent color

+- Clean, modern typography

+- High-quality imagery

+- Generous whitespace

+- Subtle animations

+

+---

+

+**Ready to launch! 🚀**
