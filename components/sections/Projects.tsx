"use client";

import { useState } from "react";
import {
  portfolio,
  type ProjectFilter,
  type ProjectPreview,
  type ProjectType,
} from "@/data/portfolio";
import {
  IconExternalLink,
  IconGitHub,
  projectPreviewIcons,
} from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechIcon";
import { FadeIn } from "@/components/ui/FadeIn";

const previewConfig: Record<
  ProjectPreview,
  { label: string; Icon: (typeof projectPreviewIcons)[ProjectPreview] }
> = {
  loadtest: { label: "SaaS · Load Testing", Icon: projectPreviewIcons.loadtest },
  healthcare: { label: "Healthcare · Mobile + Web", Icon: projectPreviewIcons.healthcare },
  extension: { label: "Browser Extension", Icon: projectPreviewIcons.extension },
  web3: { label: "Web3 · DeFi", Icon: projectPreviewIcons.web3 },
  docs: { label: "Documentation", Icon: projectPreviewIcons.docs },
  ecommerce: { label: "E-Commerce · MERN", Icon: projectPreviewIcons.ecommerce },
  chat: { label: "Auth + Real-time Chat", Icon: projectPreviewIcons.chat },
};

type Project = (typeof portfolio.projects)[number];

const projectTypeLabels: Record<ProjectType, string> = {
  freelance: "Freelance",
  professional: "Professional",
  personal: "Personal",
};

const filters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "freelance", label: "Freelance" },
  { id: "professional", label: "Professional" },
  { id: "personal", label: "Personal" },
];

function ProjectLinks({ project }: { project: Project }) {
  const github =
    "github" in project ? (project.github as string) : undefined;
  const live = "live" in project ? (project.live as string) : undefined;
  const links =
    "links" in project
      ? (project.links as readonly { label: string; url: string }[])
      : undefined;

  const hasLinks = Boolean(github || live || links?.length);
  if (!hasLinks) return null;

  return (
    <div className="mt-auto flex min-h-[28px] flex-wrap gap-x-4 gap-y-2 border-t border-white/[0.06] pt-4">
      {links?.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-body inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
        >
          {link.url.includes("github.com") ? <IconGitHub /> : <IconExternalLink />}
          {link.label}
        </a>
      ))}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-body inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
        >
          <IconGitHub />
          Code
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-body inline-flex items-center gap-1.5 text-sm transition-colors hover:text-white"
        >
          <IconExternalLink />
          Live demo
        </a>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const preview = previewConfig[project.preview];
  const PreviewIcon = preview.Icon;

  return (
    <article
      className={`card-hover card-hover-strong group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-indigo-500/25 ${
        featured ? "lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative flex shrink-0 items-center justify-between bg-gradient-to-br px-5 ${project.accent} ${
          featured ? "min-h-[200px] lg:min-h-0 lg:w-2/5" : "h-36"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_55%)]" />
        <div className="relative z-10">
          <span className="mb-2 inline-block rounded-full bg-black/30 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/80">
            {projectTypeLabels[project.projectType]}
          </span>
          {featured && (
            <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-cyan-300/90">
              Featured project
            </span>
          )}
          <span className="font-mono text-xs uppercase tracking-widest text-white/60">
            {preview.label}
          </span>
          <h3
            className={`mt-1 font-semibold leading-snug text-white ${
              featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
            }`}
          >
            {project.title}
          </h3>
        </div>
        <div className="relative z-10 opacity-60 transition-opacity group-hover:opacity-100">
          <PreviewIcon />
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:p-8" : ""}`}>
        <p className="text-body mb-5 flex-1 text-sm leading-relaxed md:text-[0.9375rem]">
          {project.description}
        </p>

        <div className="mb-5 flex min-h-[5.5rem] flex-wrap content-start gap-2">
          {project.tech.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const filtered =
    filter === "all"
      ? portfolio.projects
      : portfolio.projects.filter((p) => p.projectType === filter);

  const showFeatured = filter === "all" && filtered.length > 0;
  const featured = showFeatured ? filtered[0] : null;
  const gridProjects = showFeatured ? filtered.slice(1) : filtered;

  return (
    <section id="projects" className="section-padding px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          section="projects"
          label="Projects"
          title="Selected work"
          description="Freelance products and professional builds across web, mobile, Web3, and real-time systems."
        />

        <FadeIn className="mb-8 flex flex-wrap justify-center gap-2 sm:justify-start">
          {filters.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                filter === id
                  ? "border-indigo-400 bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 ring-1 ring-indigo-400/40"
                  : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
              }`}
            >
              {label}
            </button>
          ))}
        </FadeIn>

        {filtered.length === 0 ? (
          <FadeIn>
            <p className="text-body rounded-2xl border border-white/[0.08] bg-white/[0.03] px-6 py-12 text-center text-sm">
              No {projectTypeLabels[filter as ProjectType].toLowerCase()} projects
              to show yet.
            </p>
          </FadeIn>
        ) : (
          <>
            {featured && (
              <FadeIn className="mb-8">
                <ProjectCard project={featured} featured />
              </FadeIn>
            )}

            <div
              className={`grid gap-6 ${
                gridProjects.length > 1 ? "sm:grid-cols-2" : ""
              }`}
            >
              {gridProjects.map((project, index) => (
                <FadeIn key={project.title} delay={index * 80}>
                  <ProjectCard project={project} />
                </FadeIn>
              ))}
            </div>
          </>
        )}

        <FadeIn className="mt-12 text-center">
          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
          >
            <IconGitHub />
            More projects on GitHub
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
