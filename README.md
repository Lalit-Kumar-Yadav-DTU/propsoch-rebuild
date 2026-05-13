
# 🚀 Propsoch Rebuild: Performance & UX Optimization

A high-performance, accessible, and information-rich landing page rebuild of [Propsoch](https://www.propsoch.com/). This project was developed as a frontend engineering assessment to demonstrate proficiency in building data-dense, production-grade interfaces using **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

**Live Demo:** [https://propsoch-rebuild.vercel.app/](https://propsoch-rebuild.vercel.app/)

---

## 📊 Part 1: Analysis of Original Site

A comprehensive audit was conducted using Google Lighthouse to identify performance bottlenecks and accessibility gaps in the original platform.

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
| 1 | **Accessibility** | **Missing ARIA Names:** Interactive icons (Search, Share) lacked accessible labels, making them unusable for screen readers. | Added descriptive `aria-label` tags and semantic HTML to all interactive elements. |
| 2 | **Visual Design** | **Color Contrast Failure:** White text on the brand orange failed WCAG AA standards for legibility. | Refined the brand palette with higher-contrast shades to ensure accessibility for all users. |
| 3 | **Performance** | **Main-Thread Blocking:** The YouTube Hero embed initialized the full player on page load, increasing Total Blocking Time (TBT). | Implemented a **Lazy-Loading Video Modal**. Assets only load upon user interaction, preserving 98+ Performance. |
| 4 | **UX Depth** | **Information Density:** The original site felt significantly more "heavy" and authoritative due to the number of research sections. | **Content Expansion:** Added a 50-point Technical Audit and 6-Stage Journey to match the original's research-first feel. |
| 5 | **UI Hierarchy** | **CTA Clarity:** The Hero section lacked distinct visual weights for primary vs. secondary actions. | Redesigned CTAs with clear **Solid vs. Ghost** styles to improve conversion paths. |

---

## ✨ Part 2: The Build (Improvements)

### **Lighthouse Comparison (Desktop Rebuild)**

| Category | Original Site | My Rebuild | Improvement |
| --- | --- | --- | --- |
| **Performance** | 99 | **98** | -1 (Balanced for higher asset density) |
| **Accessibility** | 71 | **95** | **+24** 🚀 |
| **Best Practices** | 77 | **100** | **+23** 🚀 |
| **SEO** | 100 | **100** | — |

### **Key Features Added**

* **6-Stage Service Journey:** Rebuilt the full end-to-end homebuying roadmap (Discovery to Closing) with a responsive grid layout.
* **50-Point Technical Audit:** Implemented an interactive accordion section detailing floor plan analysis, ventilation, and investment potential.
* **Ancillary Service Grid:** Added a comprehensive ecosystem section covering Home Loans, Legal, and Interior Design.
* **Next-Gen Media Handling:** Leveraged `next/image` for automatic WebP conversion and `lucide-react` for scalable, accessible iconography.
* **Dynamic City Selector:** A functional UI element for Bangalore/Mumbai localization within the Hero section.

---

## 🛠️ Tech Stack & Decisions

* **Framework:** **Next.js 14 (App Router)** - Chosen for server-side optimization and efficient routing.
* **Language:** **TypeScript** - Enforced strict type-safety for a robust, bug-free codebase.
* **Styling:** **Tailwind CSS** - Used a mobile-first approach to ensure perfect responsiveness.
* **Icons:** **Lucide React** - Clean, lightweight, and accessible icon set.
* **Deployment:** **Vercel** - Integrated for automated CI/CD and edge caching.

---

## 📸 Screenshots

### **Original vs. Rebuild Comparison**

Original Site Audit 
<img width="1523" height="775" alt="Screenshot 2026-05-12 143800" src="https://github.com/user-attachments/assets/1ca2003e-3c7f-43e2-b844-17d7f0b8d90b" />

My Rebuild Audit 
 <img width="1536" height="773" alt="image" src="https://github.com/user-attachments/assets/6503a195-2ef0-4df7-88d8-cd69e6d4748c" />
 
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

**Developed by Lalit Kumar Yadav (DTU '26)**

---
