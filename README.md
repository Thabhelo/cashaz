# Cashaz Landing Page

A modern, animated React TypeScript landing page for Cashaz - a revolutionary continental credit passport system for African SMEs.

## Features

- ⚡ Built with React 18 and TypeScript
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎨 Modern gradient design with purple theme
- 🖱️ Interactive hover effects and micro-interactions
- 📊 Scroll-triggered animations using Intersection Observer
- 🚀 Optimized performance and accessibility

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation with scroll effects
│   ├── Hero.tsx           # Hero section with floating animations
│   ├── Problem.tsx        # Problem statement with animated cards
│   ├── Solution.tsx       # Solution overview with feature cards
│   ├── HowItWorks.tsx     # Step-by-step process
│   ├── Vision.tsx         # 2027 vision goals
│   ├── CTA.tsx           # Call-to-action section
│   ├── Footer.tsx        # Footer with contact info
│   └── ScrollProgress.tsx # Scroll progress indicator
├── App.tsx               # Main app component
├── App.css              # Global styles
├── index.tsx            # React entry point
└── index.css            # Basic styles and fonts
```

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Setup:**
   Create a `.env` file in the root directory with the following variables:
   ```env
   # EmailJS Configuration (for contact form)
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
   Sign up at [EmailJS](https://www.emailjs.com/) to get your credentials.

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## Key Dependencies

- **React 18** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Framer Motion** - Animation library for smooth, performant animations
- **React Intersection Observer** - Scroll-triggered animations

## Animation Features

- **Hero Section**: Floating elements, rotating passport mockup, staggered text animations, prominent pitch deck button
- **Scroll Progress**: Dynamic progress bar at the top
- **Cards**: Bigger cards with subtle pulsing animations, hover effects, scale animations, and scroll-triggered reveals
- **Buttons**: Larger buttons with lift effects, scale animations, and color transitions
- **Statistics**: Number counters with spring animations
- **Navigation**: Smooth scrolling and header transparency effects with larger text
- **Pitch Deck Button**: Most prominent button with continuous glow animation

## Performance Optimizations

- Intersection Observer for efficient scroll animations
- CSS transforms for hardware acceleration
- Optimized bundle size with tree shaking
- Lazy loading of animation triggers

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

The project is ready for deployment on any static hosting service:

- Vercel
- Netlify
- AWS S3/CloudFront
- GitHub Pages

## About Cashaz

Cashaz is building the world's first continental credit passport system, transforming alternative data into portable, verifiable credit credentials that African SMEs control and can share across borders.

**Founded by:** Thabhelo Duve & Andile Mbele  
**Mission:** Unlock $330 billion in SME financing across Africa  
**Vision:** Enable credit reputation portability across 54 African countries

---

© 2025 Cashaz. Building the future of African SME finance. 🚀

**Live Site**: https://cashaz-2lq5e1lnz-thabhelos-projects.vercel.app 