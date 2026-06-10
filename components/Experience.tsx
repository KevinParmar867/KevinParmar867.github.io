import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Experience"
          title="Where I've worked"
          description="Professional roles and the impact I've made along the way."
        />

        <div className="relative">
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-white/10 md:block" />

          <div className="flex flex-col gap-10">
            {portfolio.experience.map((job, index) => (
              <article key={`${job.company}-${index}`} className="relative md:pl-10">
                <div className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-violet-400 bg-zinc-950 md:block" />

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-violet-500/20">
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {job.role}
                      </h3>
                      <p className="text-violet-400">{job.company}</p>
                    </div>
                    <div className="text-sm text-zinc-500 sm:text-right">
                      <p>
                        {job.start} – {job.end}
                      </p>
                      <p>{job.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
