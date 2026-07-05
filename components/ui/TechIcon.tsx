import { getTechIconPath } from "@/components/icons";

type TechIconProps = {
  name: string;
  size?: number;
  className?: string;
};

export function TechIcon({ name, size = 24, className = "" }: TechIconProps) {
  const path = getTechIconPath(name);

  if (!path) {
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-md bg-zinc-800 font-mono text-[10px] font-medium uppercase text-zinc-400 ${className}`}
        style={{ width: size, height: size }}
        aria-hidden
      >
        {name.slice(0, 2)}
      </span>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`shrink-0 ${className}`}
      aria-hidden
    >
      <path d={path} />
    </svg>
  );
}

type TechBadgeProps = {
  name: string;
  showLabel?: boolean;
  size?: "sm" | "md";
};

export function TechBadge({ name, showLabel = true, size = "sm" }: TechBadgeProps) {
  const iconSize = size === "sm" ? 16 : 22;

  return (
    <span
      className={`inline-flex h-7 items-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.04] ${
        size === "sm" ? "px-2.5 text-xs" : "px-3.5 text-sm"
      }`}
    >
      <TechIcon name={name} size={iconSize} />
      {showLabel && (
        <span className="text-body font-medium">{name}</span>
      )}
    </span>
  );
}
