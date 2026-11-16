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
        <div className="w-full max-w-[340px] lg:ml-auto lg:max-w-[460px]">
          <Image
            src="/owner.png"
            alt={portfolio.name}
            width={1207}
            height={1303}
            sizes="(max-width: 1024px) 340px, 460px"
            priority={priority}
            className="h-auto w-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, #000 18%, #000 82%, transparent 100%), linear-gradient(to bottom, #000 0%, #000 70%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, #000 18%, #000 82%, transparent 100%), linear-gradient(to bottom, #000 0%, #000 70%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskComposite: "intersect",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
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
