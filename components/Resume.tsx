import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Resume() {
  const { resume } = portfolio;

  return (
    <section id="resume" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Resume"
          title="Professional summary"
          description="A quick overview for recruiters and hiring managers."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:p-8">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-zinc-500">
                Summary
              </h3>
              <p className="mb-8 leading-relaxed text-zinc-300">
                {resume.summary}
              </p>

              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-zinc-500">
                Key strengths
              </h3>
              <ul className="space-y-3">
                {resume.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-violet-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 p-6 lg:sticky lg:top-24">
              <h3 className="mb-2 text-lg font-semibold text-white">
                Download resume
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-zinc-400">
                Get the full PDF version with complete work history and
                education details.
              </p>
              <a
                href={resume.pdfUrl}
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-violet-400 hover:shadow-lg hover:shadow-violet-500/25"
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
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download PDF
              </a>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-zinc-500">
                Education
              </h3>
              <div className="space-y-4">
                {resume.education.map((edu) => (
                  <div key={`${edu.degree}-${edu.year}`}>
                    <p className="font-medium text-white">{edu.degree}</p>
                    <p className="text-sm text-zinc-400">{edu.school}</p>
                    <p className="text-sm text-zinc-500">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-zinc-500">
                Languages
              </h3>
              <div className="space-y-3">
                {resume.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-white">{lang.name}</span>
                    <span className="text-zinc-500">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
