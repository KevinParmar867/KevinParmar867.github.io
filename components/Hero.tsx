import { portfolio } from "@/data/portfolio";

export function Hero() {
  const initials = portfolio.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-fuchsia-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-2xl font-semibold text-violet-300 backdrop-blur-sm">
            {initials}
          </div>

          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-violet-400">
            {portfolio.title}
          </p>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              {portfolio.name}
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-zinc-400">
            {portfolio.tagline}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-violet-500 px-8 text-sm font-medium text-white transition-all hover:bg-violet-400 hover:shadow-lg hover:shadow-violet-500/25"
            >
              View my work
            </a>
            <a
              href="#resume"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 px-8 text-sm font-medium text-zinc-300 transition-colors hover:border-white/20 hover:text-white"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              View resume
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex shrink-0 justify-center pb-10">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-300"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            Scroll
          </span>
          <svg
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
