# Portfolio

A modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Exports as a static site for GitHub Pages.

## Project structure

```
app/                  # Next.js app router (layout, page, styles)
components/
  layout/             # Navbar, Footer
  sections/           # Page sections (Hero, About, Projects, etc.)
  ui/                 # Reusable UI (Avatar, FadeIn, TechIcon, etc.)
  icons.tsx           # All SVG icons (UI + tech brands)
data/
  portfolio.ts        # Your content — name, bio, projects, experience
public/               # Static assets (photo, resume PDF)
```

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview locally.

## Customize

Edit `data/portfolio.ts` to update your name, bio, skills, projects, experience, resume, and social links.

Add your resume PDF to `public/Kevin_Parmar_Resume.pdf` for the download button to work.

Replace `public/owner.png` with your profile photo.

## Build static site

```bash
npm run build
```

This generates the `out/` folder with your static site (gitignored — CI builds it on deploy).

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Build and deployment**
3. Set **Source** to **GitHub Actions** (not "Deploy from a branch")
4. Go to **Settings → Actions → General → Workflow permissions**
5. Select **Read and write permissions**, then save
6. Push to `main` — the workflow builds and deploys automatically

Your site will be live at `https://kevinparmar867.github.io/`

If deploy fails with `401 Requires authentication`, Pages is usually not enabled yet or workflow permissions are set to read-only.
