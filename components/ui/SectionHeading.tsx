import { FadeIn } from "./FadeIn";
import { sectionIcons } from "@/components/icons";

type SectionId =
  | "about"
  | "projects"
  | "skills"
  | "experience"
  | "resume"
  | "contact";

type SectionHeadingProps = {
  section: SectionId;
  label: string;
  title: string;
  description?: string;
};

const accents: Record<SectionId, { color: string }> = {
  about: { color: "text-cyan-400" },
  projects: { color: "text-indigo-400" },
  skills: { color: "text-violet-400" },
  experience: { color: "text-emerald-400" },
  resume: { color: "text-amber-400" },
  contact: { color: "text-rose-400" },
};

export function SectionHeading({
  section,
  label,
  title,
  description,
}: SectionHeadingProps) {
  const accent = accents[section];
  const Icon = sectionIcons[section];

  return (
    <FadeIn className="mb-14">
      <p
        className={`mb-3 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] ${accent.color}`}
      >
        <span className="opacity-80">
          <Icon />
        </span>
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-body mt-4 max-w-2xl text-lg leading-relaxed">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
