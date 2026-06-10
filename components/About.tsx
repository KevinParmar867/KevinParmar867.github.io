import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="About Me"
          title="A bit about me"
          description="Here's what drives my work and what I bring to every team."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {portfolio.about.map((paragraph, index) => (
            <p
              key={index}
              className="leading-relaxed text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {portfolio.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center"
            >
              <p className="text-3xl font-bold text-violet-400">{stat.value}</p>
              <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
