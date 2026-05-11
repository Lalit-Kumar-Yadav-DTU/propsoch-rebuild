---

# 🚀 Propsoch Rebuild: Performance & UX Optimization

A high-performance, accessible, and responsive landing page rebuild of [Propsoch](https://www.propsoch.com/). This project focuses on solving core UX friction points and accessibility gaps identified during a comprehensive audit.

**Live Link:** [https://propsoch-rebuild.vercel.app/](https://propsoch-rebuild.vercel.app/)

**Video Walkthrough:**

---

## 📊 Part 1: Analysis of Original Site

I performed a Lighthouse audit on the original Propsoch website (Mobile & Desktop). While the performance was high, there were significant gaps in **Accessibility** and **UX/UI hierarchy**.

### **Lighthouse Audit Results (Original)**

| Category | Score | Status |
| --- | --- | --- |
| **Performance** | 99 | ✅ Excellent |
| **Accessibility** | 71 | ⚠️ Needs Improvement |
| **Best Practices** | 77 | ⚠️ Needs Improvement |
| **SEO** | 100 | ✅ Excellent |

### **5 Identified Issues & Proposed Fixes**

| # | Issue Category | Observed Problem | Proposed Fix (Implemented in Rebuild) |
| --- | --- | --- | --- |
| 1 | **Accessibility** | **Missing Accessible Names:** Icon-only buttons (Search, Share) had no labels, making them invisible to screen readers. | Added `aria-label` attributes to all interactive icon elements. |
| 2 | **Visual Design** | **Color Contrast Failure:** The white text on the primary orange brand color failed WCAG AA contrast checks. | Darkened the orange hex code slightly and increased font-weight to ensure legibility. |
| 3 | **Mobile UX** | **Small Touch Targets:** Navigation icons in the mobile bottom bar were too small and close together (under 44px). | Increased padding and margin between icons to prevent accidental clicks on mobile devices. |
| 4 | **Performance** | **Heavy Video Load:** The YouTube embed on the hero section loaded the full player on initial paint, increasing "Total Blocking Time." | Replaced with a **Lazy-Loading Modal**. The video player only loads when the user explicitly clicks "Play." |
| 5 | **UI Hierarchy** | **Weak CTA Focus:** The Hero section lacked a clear "Primary" vs "Secondary" button distinction. | Redesigned the Hero buttons with a clear solid vs. ghost style to guide user intent. |

---

## ✨ Part 2: The Build (Improvements)

### **Visual Comparison**

| Original Website (Before) | Rebuild Version (After) |
| --- | --- |
|  |  |
| *Cluttered hierarchy and floating video.* | *Modern, clean UI with clear City Selection and Modal Video.* |

### **Key Technical Decisions**

* **Next.js 14 (App Router):** Chosen for Server-Side Rendering (SSR) to improve First Contentful Paint (FCP).
* **TypeScript:** Used to ensure type-safety across components, especially for state management in the City Selector and Video Modal.
* **Tailwind CSS:** Enabled rapid, mobile-first development without the overhead of heavy CSS files.
* **Next/Image Component:** All images utilize the built-in optimization for automatic WebP conversion and lazy loading.

---

## 📁 Project Structure

```bash
propsoch-rebuild/
├── src/
│   ├── app/            # Next.js App Router (Pages & Layout)
│   ├── components/     # Reusable UI (Hero, Stats, Services, Navbar)
│   ├── constants/      # Static data (City lists, Services data)
├── public/             # Optimized assets
├── next.config.ts      # Remote image pattern configuration
└── README.md           # Analysis and Documentation

```

---

## 🛠️ Local Setup & Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
```bash
git clone https://github.com/Lalit-Kumar-Yadav-DTU/propsoch-rebuild.git

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Build for production:**
```bash
npm run build

```



---

## 🎓 Evaluation Checklist

* [x] Lighthouse Audit Scores documented.
* [x] 5 UX/UI issues identified and fixed.
* [x] Redesigned Hero section with City Selector.
* [x] 2+ additional sections from original site (Stats & Services).
* [x] Responsive design (Mobile + Desktop).
* [x] Optimized images using `next/image`.
* [x] Deployed on Vercel.

---

