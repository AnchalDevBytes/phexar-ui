# PhexarUI

<div align="center">

  <h3>Craft Exquisite Interfaces in Minutes.</h3>
  <p>
    A collection of high-quality, copy-paste React components built with <strong>Tailwind CSS v4</strong> and <strong>Motion</strong>. Designed for the modern web with a focus on micro-interactions and neutral aesthetics.
  </p>

  [**Explore the Docs**](https://phexar-ui.vercel.app) · [**Browse Components**](https://phexar-ui.vercel.app/docs) · [**Report Bug**](https://github.com/AnchalDevBytes/phexar-ui/issues)

</div>

---

## ✨ Philosophy

PhexarUI is not a component library you install as a dependency. It is a collection of reusable code that you copy and paste into your project.

*   **Neutral by Default:** Designed to fit into any brand identity without fighting for attention.
*   **Micro-interactions:** Every component features subtle, thoughtful animations powered by `motion/react`.
*   **Tailwind v4 Native:** Built for the future of CSS, leveraging the new engine and CSS variables.
*   **Copy & Paste:** You own the code. Customize it, break it, make it yours.

## 🛠️ Tech Stack

*   **Framework:** [React](https://react.dev) / [Next.js](https://nextjs.org)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
*   **Animations:** [Motion](https://motion.dev) (formerly Framer Motion)
*   **Icons:** [Lucide React](https://lucide.dev)
*   **Utils:** `clsx` & `tailwind-merge`

## 🚀 Getting Started

### 1. Prerequisites

Ensure your project is set up with Tailwind CSS v4. Then, install the core dependencies:

```bash
npm install motion lucide-react clsx tailwind-merge
```

### 2. Utility Function
Ensure you have a `cn` helper function (standard in the shadcn ecosystem) in `lib/utils.ts`:

```bash
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Usage
You can add components to your project via the CLI or by manually copying the code from the documentation.

### Option A: CLI (Recommended)
To add the Elastic Search Bar, for example:

```bash
npx shadcn@latest add https://phexar-ui.vercel.app/r/elastic-search-bar.json
```

### Option B: Manual Copy
1. Browse the Documentation.
2. Select a component.
3. Click "View Code" or "Copy".
4. Paste it into your project (e.g., components/phexarui/cards/dev-card.tsx).

<hr/>

<div align="center">
Built with ❤️ by <a href="https://github.com/AnchalDevBytes">Anchal Raj</a>
</div>