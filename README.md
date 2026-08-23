# 🏗️ Sakhtara | Engineering for Beauty

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)

Official website of **Sakhtara** — a luxury structural renovation studio where engineering expertise meets architectural vision to create spaces that are structurally solid and aesthetically exceptional.

</div>

---

## ✨ Introduction

A modern, fully **RTL (Right-to-Left)**, Persian-language website for a building renovation and design company. The focus is on a smooth user experience, professional scroll animations, and a minimal luxury design.

## 🚀 Key Features

- 🎬 **Canvas-animated Hero** — frame-by-frame playback driven by the user's scroll position
- 💰 **Renovation Cost Calculator** — live estimation based on area, project scope, and design style
- 🏛️ **Projects Page** — with dynamic detail pages for each project
- 🌊 **Buttery-smooth scrolling** powered by Lenis, with GSAP and AOS scroll animations
- 📱 **Fully responsive** — optimized for mobile, tablet, and desktop
- 🔤 **Vazirmatn font** for polished Persian typography
- ⚡ **App Router & Server Components** for top-tier performance and SEO

## 🧰 Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | Core framework (App Router) |
| [React 19](https://react.dev) | UI library |
| [TypeScript 5](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS 4](https://tailwindcss.com) | Styling |
| [GSAP](https://gsap.com) | Advanced animations |
| [AOS](https://michalsnik.github.io/aos/) | Scroll-triggered animations |
| [Lenis](https://lenis.darkroom.engineering) | Smooth scrolling |

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) version 20 or higher
- npm / yarn / pnpm / bun

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<username>/reconstruction-building.git
cd reconstruction-building

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the codebase with ESLint |

## 🗂️ Project Structure

```
app/
├── page.tsx              # Home page
├── layout.tsx            # Root layout (fonts, metadata, RTL)
├── globals.css           # Global styles
├── components/           # Shared components
│   ├── CanvasHero.tsx    # Animated hero
│   ├── Navbar.tsx        # Site navigation
│   └── ...
├── about/                # About us
├── services/             # Services
├── projects/[slug]/      # Projects (dynamic)
├── calculator/           # Cost calculator
├── process/              # Work process
├── blog/                 # Blog
├── rules/                # Rules
└── contact/              # Contact
public/                   # Images, videos, and animation frames
```

## 🚢 Deployment

The easiest way to deploy is via [Vercel](https://vercel.com/new):

```bash
npx vercel
```

Or connect your repository in Vercel — builds are triggered automatically.

## 🤝 Contributing

Suggestions and bug reports are welcome! Open an [Issue](../../issues) or submit a Pull Request.

## 📄 License

This project is licensed under the [MIT](LICENSE) license.

---

<div align="center">
Built for architecture and engineering
</div>
