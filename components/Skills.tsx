import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const categories = [...new Set(portfolio.skills.map((s) => s.category))];

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="A toolkit built from real projects — always growing."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
            >
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-zinc-500">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {portfolio.skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300"
                    >
                      {skill.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
