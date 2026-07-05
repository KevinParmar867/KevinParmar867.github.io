"use client";

import { useMemo, useState } from "react";
import { portfolio, type SkillLevel } from "@/data/portfolio";
import { TechIcon } from "@/components/ui/TechIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

type LevelFilter = "all" | SkillLevel;

const filters: { id: LevelFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "core", label: "Core" },
  { id: "familiar", label: "Familiar" },
];

const categoryMeta: Record<
  string,
  { accent: string; border: string; glow: string }
> = {
  Languages: {
    accent: "text-cyan-400",
    border: "border-cyan-500/20",
    glow: "from-cyan-500/30",
  },
  Frontend: {
    accent: "text-indigo-400",
    border: "border-indigo-500/20",
    glow: "from-indigo-500/30",
  },
  Backend: {
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    glow: "from-emerald-500/30",
  },
  Databases: {
    accent: "text-amber-400",
    border: "border-amber-500/20",
    glow: "from-amber-500/30",
  },
  "Tools & Cloud": {
    accent: "text-violet-400",
    border: "border-violet-500/20",
    glow: "from-violet-500/30",
  },
};

type Skill = (typeof portfolio.skills)[number];

function SkillChip({ skill }: { skill: Skill }) {
  const isCore = skill.level === "core";

  return (
    <div
      className={`group inline-flex items-center gap-2.5 rounded-xl border px-3 py-2 transition-all hover:-translate-y-0.5 ${
        isCore
          ? "border-indigo-500/30 bg-indigo-500/[0.08] hover:border-indigo-400/50 hover:bg-indigo-500/12 hover:shadow-lg hover:shadow-indigo-500/10"
          : "border-white/[0.08] bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.05]"
      }`}
    >
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
          isCore ? "bg-indigo-500/15" : "bg-white/[0.04]"
        }`}
      >
        <TechIcon
          name={skill.name}
          size={18}
          className={isCore ? "text-indigo-200" : "text-zinc-400"}
        />
      </div>
      <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
        {skill.name}
      </span>
      <span
        className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider ${
          isCore
            ? "bg-indigo-500/20 text-indigo-300"
            : "bg-white/[0.05] text-zinc-500"
        }`}
      >
        {isCore ? "Core" : "Familiar"}
      </span>
    </div>
  );
}

export function Skills() {
  const [filter, setFilter] = useState<LevelFilter>("all");

  const categories = useMemo(
    () => [...new Set(portfolio.skills.map((s) => s.category))],
    [],
  );

  const coreCount = portfolio.skills.filter((s) => s.level === "core").length;
  const familiarCount = portfolio.skills.filter(
    (s) => s.level === "familiar",
  ).length;

  const visibleSkills = useMemo(
    () =>
      filter === "all"
        ? portfolio.skills
        : portfolio.skills.filter((s) => s.level === filter),
    [filter],
  );

  const visibleCategories = categories.filter((category) =>
    visibleSkills.some((s) => s.category === category),
  );

  return (
    <section id="skills" className="section-padding px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          section="skills"
          label="Skills"
          title="Technologies I work with"
          description="Languages, frameworks, and infrastructure I use to ship production apps — from UI to databases and cloud."
        />

        <FadeIn className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <div className="rounded-xl border border-indigo-500/25 bg-indigo-500/[0.07] px-4 py-3">
              <p className="text-2xl font-bold tabular-nums leading-none text-indigo-400">
                {coreCount}
              </p>
              <p className="text-muted mt-1 text-xs">Core skills</p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
              <p className="text-2xl font-bold tabular-nums leading-none text-zinc-300">
                {familiarCount}
              </p>
              <p className="text-muted mt-1 text-xs">Also familiar</p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3">
              <p className="text-2xl font-bold tabular-nums leading-none text-zinc-300">
                {categories.length}
              </p>
              <p className="text-muted mt-1 text-xs">Categories</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setFilter(id)}
                aria-pressed={filter === id}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  filter === id
                    ? "border-violet-400 bg-violet-500 text-white shadow-lg shadow-violet-500/25 ring-1 ring-violet-400/40"
                    : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="space-y-6">
          {visibleCategories.length === 0 ? (
            <FadeIn>
              <p className="text-body rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-10 text-center text-sm">
                No {filter} skills to show.
              </p>
            </FadeIn>
          ) : (
            visibleCategories.map((category, catIndex) => {
              const meta = categoryMeta[category] ?? categoryMeta.Frontend;
              const categorySkills = visibleSkills.filter(
                (s) => s.category === category,
              );

              return (
                <FadeIn key={category} delay={catIndex * 60}>
                  <div
                    className={`card-hover overflow-hidden rounded-2xl border bg-white/[0.02] ${meta.border}`}
                  >
                    <div
                      className={`flex items-center justify-between border-b border-white/[0.06] bg-gradient-to-r ${meta.glow} to-transparent px-5 py-4 sm:px-6`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs font-semibold uppercase tracking-widest ${meta.accent}`}
                        >
                          {category}
                        </span>
                        <span className="text-muted text-xs">
                          {categorySkills.length} tool
                          {categorySkills.length === 1 ? "" : "s"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                          Core
                        </span>
                        <span className="text-zinc-700">·</span>
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                          Familiar
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5 p-5 sm:p-6">
                      {categorySkills.map((skill) => (
                        <SkillChip key={skill.name} skill={skill} />
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
