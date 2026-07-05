import { portfolio } from "@/data/portfolio";
import {
  IconExperience,
  IconExtension,
  IconProjects,
  IconWeb3,
} from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const focusMeta = [
  {
    Icon: IconProjects,
    accent: "text-indigo-400",
    border: "border-indigo-500/25",
    glow: "from-indigo-500/20",
    dot: "bg-indigo-400",
  },
  {
    Icon: IconExperience,
    accent: "text-emerald-400",
    border: "border-emerald-500/25",
    glow: "from-emerald-500/20",
    dot: "bg-emerald-400",
  },
  {
    Icon: IconExtension,
    accent: "text-cyan-400",
    border: "border-cyan-500/25",
    glow: "from-cyan-500/20",
    dot: "bg-cyan-400",
  },
  {
    Icon: IconWeb3,
    accent: "text-amber-400",
    border: "border-amber-500/25",
    glow: "from-amber-500/20",
    dot: "bg-amber-400",
  },
] as const;

const quickLinks = [
  { label: "View projects", href: "#projects", primary: true },
  { label: "See experience", href: "#experience", primary: false },
  {
    label: "Download CV",
    href: portfolio.resume.pdfUrl,
    primary: false,
    download: true,
  },
] as const;

export function About() {
  return (
    <section id="about" className="section-padding px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          section="about"
          label="About Me"
          title="Building products that scale"
          description="From intern to senior developer — shipping full-stack products across web, mobile, real-time systems, and cloud."
        />

        <FadeIn>
          <div className="mb-10 grid grid-cols-2 divide-y divide-white/[0.06] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            {portfolio.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col justify-center px-5 py-5 sm:px-6"
              >
                <p className="text-[1.75rem] font-bold leading-none tabular-nums tracking-tight text-cyan-400 sm:text-[2rem]">
                  {stat.value}
                </p>
                <p className="text-muted mt-2 text-xs leading-snug sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <article className="card-hover rounded-2xl border border-white/[0.08] bg-gradient-to-br from-cyan-500/[0.05] via-white/[0.02] to-transparent p-7 sm:p-8">
            <p className="mb-6 border-l-2 border-cyan-400/60 pl-5 text-lg font-medium leading-relaxed text-white sm:text-[1.125rem] sm:leading-8">
              {portfolio.about[0]}
            </p>
            <div className="space-y-4">
              {portfolio.about.slice(1).map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-zinc-300 sm:text-[1.0625rem]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/[0.06] pt-6">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...("download" in link && link.download
                    ? { download: true }
                    : {})}
                  className={`inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    link.primary
                      ? "bg-indigo-500 text-white hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20"
                      : "border border-white/10 bg-white/[0.02] text-zinc-200 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        </FadeIn>

        <div className="mt-14">
          <FadeIn>
            <p className="text-muted mb-6 font-mono text-xs uppercase tracking-widest">
              What I focus on
            </p>
          </FadeIn>

          <div className="grid gap-4 sm:grid-cols-2">
            {portfolio.focusAreas.map((area, index) => {
              const meta = focusMeta[index] ?? focusMeta[0];
              const AreaIcon = meta.Icon;

              return (
                <FadeIn key={area.title} delay={index * 80}>
                  <div
                    className={`card-hover group h-full overflow-hidden rounded-2xl border bg-white/[0.02] transition-colors hover:bg-white/[0.03] ${meta.border}`}
                  >
                    <div
                      className={`flex items-center gap-3 border-b border-white/[0.06] bg-gradient-to-r ${meta.glow} to-transparent px-5 py-4`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-white/[0.03] ${meta.border}`}
                      >
                        <AreaIcon className={`h-4 w-4 ${meta.accent}`} />
                      </span>
                      <h3 className="font-semibold text-white">{area.title}</h3>
                      <span
                        className={`ml-auto h-1.5 w-1.5 shrink-0 rounded-full ${meta.dot}`}
                        aria-hidden
                      />
                    </div>
                    <p className="px-5 py-4 text-sm leading-relaxed text-zinc-300">
                      {area.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
