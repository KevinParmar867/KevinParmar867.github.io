import { portfolio } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-zinc-500">
          &copy; {year} {portfolio.name}. Built with Next.js.
        </p>
        <a
          href="#home"
          className="font-mono text-sm text-zinc-500 transition-colors hover:text-violet-400"
        >
          Back to top &uarr;
        </a>
      </div>
    </footer>
  );
}
