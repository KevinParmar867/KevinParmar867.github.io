import { portfolio } from "@/data/portfolio";
import {
  IconChevronDown,
  IconGitHub,
  IconLinkedIn,
  IconTelegram,
} from "@/components/icons";
import { Avatar } from "@/components/ui/Avatar";

const socialLinks = [
  { name: "LinkedIn", href: portfolio.social.linkedin, icon: IconLinkedIn },
  { name: "GitHub", href: portfolio.social.github, icon: IconGitHub },
  { name: "Telegram", href: portfolio.social.telegram, icon: IconTelegram },
] as const;

const currentRole = portfolio.experience[0];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-float absolute left-1/3 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="animate-pulse-glow absolute right-1/4 top-1/2 h-[280px] w-[280px] rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 py-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div className="order-2 flex flex-col text-center lg:order-1 lg:text-left">
          <div className="hero-animate hero-delay-2 mb-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-indigo-300">
              {portfolio.title}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1 text-[11px] font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
              Open to opportunities
            </span>
          </div>

          <h1 className="hero-animate hero-delay-3 mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            <span className="block text-zinc-400">Hi, I&apos;m</span>
            <span className="mt-1 block bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-300 bg-clip-text text-transparent sm:whitespace-nowrap">
              {portfolio.name}
            </span>
          </h1>

          <p className="hero-animate hero-delay-4 mb-4 max-w-xl text-lg font-medium leading-snug text-white sm:text-xl lg:mx-0">
            {portfolio.headline}
          </p>

          <p className="hero-animate hero-delay-4 text-body mx-auto mb-6 max-w-xl text-base leading-relaxed lg:mx-0">
            {portfolio.tagline}
          </p>

          <div className="hero-animate hero-delay-4 mb-8 flex flex-wrap justify-center gap-2 lg:justify-start">
            {portfolio.heroHighlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="hero-animate hero-delay-4 text-muted mb-8 text-sm lg:mb-6">
            Currently{" "}
            <span className="text-zinc-300">{currentRole.role}</span> at{" "}
            <span className="text-zinc-300">{currentRole.company}</span>
          </p>

          <div className="hero-animate hero-delay-5 flex flex-col items-center gap-5 lg:items-start">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-indigo-500 px-8 text-sm font-medium text-white transition-all hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              View my work
            </a>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const SocialIcon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${portfolio.name} on ${link.name}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white"
                  >
                    <SocialIcon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="hero-animate hero-delay-1 order-1 flex justify-center lg:order-2 lg:justify-end">
          <Avatar
            size="hero"
            priority
            className="avatar-float w-full max-w-[300px] lg:max-w-none"
          />
        </div>
      </div>

      <div className="relative z-10 flex shrink-0 justify-center pb-10">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="text-muted flex flex-col items-center gap-2 transition-colors hover:text-zinc-200"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            Scroll
          </span>
          <IconChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
