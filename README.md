# SHAHBAZ — Universal Platform (Next.js + Tailwind)

A 3D‑styled, multi‑page platform scaffold built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Pages
- `/` (Home)
- `/login`
- `/dashboard`
- `/blog`
- `/store`
- `/about`
- `/gallery`
- `/contact`

## Quick Start
```bash
# 1) Install dependencies
npm install

# 2) Run locally
npm run dev

# 3) Build for production
npm run build && npm start
```

## Deploy
- **Vercel** (recommended): Import this repo and deploy.
- **Firebase Hosting** or **GitHub Pages**: Use `next export` or `next build` with static export if needed.
  - For static export: set `images.unoptimized = true` (already set) and run:
    ```bash
    npx next build && npx next export -o out
    ```
  - Then deploy the `out/` folder.

## Assets
Replace placeholders in `public/assets/images` and `public/assets/icons` with your real media.
