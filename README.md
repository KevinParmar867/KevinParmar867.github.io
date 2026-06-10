# Portfolio

A modern personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Exports as a static site for GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview locally.

## Customize

Edit `data/portfolio.ts` to update your name, bio, skills, projects, experience, resume, and social links.

Add your resume PDF to `public/resume.pdf` for the download button to work.

## Build static site

```bash
npm run build
```

This generates the `out/` folder with your static site.

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages → Build and deployment**
3. Set **Source** to **GitHub Actions** (not "Deploy from a branch")
4. Go to **Settings → Actions → General → Workflow permissions**
5. Select **Read and write permissions**, then save
6. Push to `main` — the workflow builds and deploys automatically

Your site will be live at `https://kevinparmar867.github.io/`

If deploy fails with `401 Requires authentication`, Pages is usually not enabled yet or workflow permissions are set to read-only.

## Local build (GitHub Pages paths)

To test with the same base path used on GitHub Pages:

```bash
GITHUB_PAGES=true GITHUB_REPOSITORY=username/portfolio npm run build
npx serve out
```
# KevinParmar867.github.io
