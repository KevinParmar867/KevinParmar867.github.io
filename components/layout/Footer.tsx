import { portfolio } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-muted text-sm">
          &copy; {year} {portfolio.name}. Built with Next.js.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-1.5 font-mono text-sm text-zinc-400 transition-colors hover:text-indigo-400"
        >
          Back to top
          <span aria-hidden>&uarr;</span>
        </a>
      </div>
    </footer>
  );
}
