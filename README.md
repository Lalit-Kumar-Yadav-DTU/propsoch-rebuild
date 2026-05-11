# Propsoch Landing Page Rebuild

A high-performance, responsive landing page rebuild using Next.js, TypeScript, and Tailwind CSS.

## 🚀 Live Demo
**Link:** [Paste your Vercel Link here after Step 3]

## 🛠️ Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 📊 Part 1: Analysis of Original Site

### Lighthouse Scores (Desktop)
- **Performance:** 99
- **Accessibility:** 71
- **Best Practices:** 77
- **SEO:** 100

### Identified UX/UI Issues
1. **Accessibility (ARIA Labels):** Many icon-only buttons lacked labels for screen readers.
2. **Color Contrast:** The orange/white button combinations failed WCAG contrast checks.
3. **Touch Targets:** Mobile navigation icons were too close together, leading to accidental clicks.
4. **Image Ratios:** Hero images were distorted due to aspect-ratio mismatches.
5. **Performance (Third-Party):** Heavy JS from tracking pixels delayed interactivity.

---

## ✨ Improvements Made
- **Optimized Video:** Implemented a "Lazy-Loading Modal" for the YouTube video to keep Lighthouse scores high.
- **Enhanced UI:** Introduced a modern "City Toggle" and increased whitespace (padding) for better readability.
- **Image Optimization:** Used `next/image` with proper `priority` loading for the Largest Contentful Paint (LCP) element.
- **Mobile First:** Rebuilt the layout from scratch using a mobile-first Tailwind grid system.