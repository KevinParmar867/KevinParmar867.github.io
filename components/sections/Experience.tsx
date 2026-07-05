import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

function companyMonogram(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Experience() {
  return (
    <section id="experience" className="section-padding overflow-hidden px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          section="experience"
          label="Experience"
          title="Where I've worked"
          description="Professional roles and the impact I've made along the way."
        />

        <div className="relative ml-2 md:ml-4">
          <div className="absolute bottom-0 left-[11px] top-3 w-px bg-gradient-to-b from-indigo-500/50 via-white/10 to-transparent" />

          <div className="flex flex-col gap-10">
            {portfolio.experience.map((job, index) => (
              <FadeIn key={`${job.company}-${index}`} delay={index * 80}>
                <article className="relative pl-10 md:pl-12">
                  <div className="absolute left-0 top-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-400 bg-zinc-950">
                    <span className="text-[8px] font-bold text-indigo-300">
                      {companyMonogram(job.company)}
                    </span>
                  </div>

                  <div className="card-hover rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 hover:border-indigo-500/25">
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-indigo-500/25 bg-indigo-500/10 text-xs font-bold text-indigo-300 sm:flex">
                          {companyMonogram(job.company)}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {job.role}
                          </h3>
                          <p className="text-indigo-400">{job.company}</p>
                        </div>
                      </div>
                      <div className="text-muted shrink-0 text-sm sm:text-right">
                        <p>
                          {job.start} – {job.end}
                        </p>
                        <p>{job.location}</p>
                      </div>
                    </div>

                    {"note" in job && job.note && (
                      <p className="text-body mb-4 rounded-lg border border-indigo-500/20 bg-indigo-500/5 px-4 py-3 text-sm leading-relaxed">
                        {job.note}
                      </p>
                    )}

                    <ul className="space-y-3">
                      {job.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="text-body flex gap-3 text-sm leading-relaxed"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
