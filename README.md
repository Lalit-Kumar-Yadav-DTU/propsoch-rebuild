---

# 🚀 Propsoch Rebuild: Performance & UX Optimization

A high-performance, accessible, and responsive landing page rebuild of [Propsoch](https://www.propsoch.com/). This project was developed as part of a frontend engineering assessment to demonstrate proficiency in **Next.js**, **TypeScript**, and **Tailwind CSS**.

**Live Demo:** [https://propsoch-rebuild.vercel.app/](https://propsoch-rebuild.vercel.app/)


---

## 📊 Part 1: Analysis of Original Site

I conducted a comprehensive audit using Google Lighthouse to identify bottlenecks in the current user experience.

### **1.1 Lighthouse Audit Results (Original)**

| Category | Score | Status |
| --- | --- | --- |
| **Performance** | 99 | ✅ Excellent |
| **Accessibility** | 71 | ⚠️ Needs Improvement |
| **Best Practices** | 77 | ⚠️ Needs Improvement |
| **SEO** | 100 | ✅ Excellent |

### **1.2 & 1.3 Identified UX/UI Issues & Implemented Fixes**

| # | Issue Category | Observed Problem | Solution (Implemented in Rebuild) |
| --- | --- | --- | --- |
| 1 | **Accessibility** | **Missing Accessible Names:** Interactive icons (Search, Share) lacked ARIA labels, making them unusable for screen readers. | Added descriptive `aria-label` tags to all icon-based buttons and interactive elements. |
| 2 | **Visual Design** | **Low Color Contrast:** The white text on the primary orange branding failed WCAG AA contrast standards. | Darkened the brand orange slightly and increased font-weight to ensure accessibility for visually impaired users. |
| 3 | **Mobile UX** | **Tight Touch Targets:** Navigation icons in the mobile bar were too close together, leading to high mis-click rates. | Rebuilt the navigation with increased padding (min-height 44px) and improved spatial distribution. |
| 4 | **Performance** | **Heavy Initial Load:** The YouTube video on the hero section loaded the full heavy player immediately on page load. | Implemented a **Lazy-Loading Modal**. The video player only initializes upon a user click, significantly reducing Total Blocking Time. |
| 5 | **UI Hierarchy** | **Weak Visual Anchor:** The Hero section lacked a clear "Primary" vs "Secondary" button hierarchy, causing user confusion. | Redesigned CTA buttons with distinct **Solid vs. Ghost** styles to clearly guide the user's primary journey. |

---

## ✨ Part 2: The Build (Improvements)

### **Lighthouse Comparison (Desktop)**

| Category | Original Site | My Rebuild | Improvement |
| --- | --- | --- | --- |
| **Performance** | 99 | **98** | -1 (Heavier UI assets) |
| **Accessibility** | 71 | **95** | **+24** 🚀 |
| **Best Practices** | 77 | **100** | **+23** 🚀 |
| **SEO** | 100 | **100** | — |

### **Key Features Added**

* **Redesigned Hero Section:** Features a modern layout with a functional **City Selector** (Bangalore/Mumbai) and a high-fidelity video trigger.
* **Interactive Video Modal:** A performance-first solution that plays the founder's video without slowing down the initial page load.
* **Impact Stats Section:** Rebuilt the "Advice Hours" and "Sq. Ft. Analyzed" sections with a clean, responsive grid.
* **Expertise Cards:** A 4-column service grid with hover animations to improve user engagement.

---

## 🛠️ Tech Stack & Decisions

* **Framework:** **Next.js 14 (App Router)** - Used for its superior routing and built-in optimization tools.
* **Language:** **TypeScript** - Implemented for type-safety and better developer experience.
* **Styling:** **Tailwind CSS** - Used for rapid UI building and maintaining a small CSS bundle size.
* **Optimization:** **Next/Image** - All images use the next/image component for automatic WebP conversion and lazy loading.
* **Deployment:** **Vercel** - Chosen for seamless integration with the Next.js ecosystem.

---

## 📁 Project Structure

```bash
propsoch-rebuild/
├── src/
│   ├── app/            # Next.js App Router (Pages & Layout)
│   ├── components/     # Reusable UI (Hero, Stats, Services, Navbar)
│   ├── constants/      # Static data and text content
├── public/             # Optimized image assets
├── next.config.ts      # Image domain whitelist configuration
└── README.md           # Analysis and Documentation

```

---

## 🛠️ Installation & Setup

1. **Clone the repo:**
```bash
git clone https://github.com/Lalit-Kumar-Yadav-DTU/propsoch-rebuild.git

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run Dev Server:**
```bash
npm run dev

```



---

## 📸 Screenshots

### **Original vs. Rebuild Comparison**

Original Site Audit 
<img width="1523" height="775" alt="Screenshot 2026-05-12 143800" src="https://github.com/user-attachments/assets/1ca2003e-3c7f-43e2-b844-17d7f0b8d90b" />

My Rebuild Audit 
 <img width="1536" height="773" alt="image" src="https://github.com/user-attachments/assets/6503a195-2ef0-4df7-88d8-cd69e6d4748c" />

