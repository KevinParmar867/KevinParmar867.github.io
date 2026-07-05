import Image from "next/image";
import { portfolio } from "@/data/portfolio";

type AvatarProps = {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  className?: string;
  priority?: boolean;
};

const sizes = {
  sm: { box: "h-9 w-9", px: 36 },
  md: { box: "h-24 w-24", px: 96 },
  lg: { box: "h-40 w-40 sm:h-48 sm:w-48", px: 192 },
  xl: { box: "h-52 w-52 sm:h-64 sm:w-64", px: 256 },
  hero: { box: "", px: 0 },
};

export function Avatar({ size = "lg", className = "", priority = false }: AvatarProps) {
  if (size === "hero") {
    return (
      <div className={`w-full pb-6 lg:pb-10 ${className}`}>
        <div className="relative aspect-[4/5] w-full max-h-[min(68vh,520px)] overflow-hidden sm:max-w-[340px] lg:max-w-none">
          <Image
            src="/owner.png"
            alt={portfolio.name}
            fill
            sizes="(max-width: 1024px) 340px, 45vw"
            priority={priority}
            className="object-cover object-[center_18%]"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/70 to-transparent"
            aria-hidden
          />
        </div>
      </div>
    );
  }

  const { box, px } = sizes[size];

  return (
    <div className={`avatar-ring ${className}`}>
      <div className={`relative overflow-hidden rounded-2xl ${box}`}>
        <Image
          src="/owner.png"
          alt={portfolio.name}
          width={px}
          height={px}
          priority={priority}
          className="h-full w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
