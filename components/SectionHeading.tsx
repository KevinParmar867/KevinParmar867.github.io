type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-mono text-sm uppercase tracking-[0.2em] text-violet-400">
        {label}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
