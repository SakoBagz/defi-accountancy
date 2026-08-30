import Image from "next/image";
import { cn } from "@/lib/utils";

type CtecCredentialProps = {
  variant?: "light" | "dark";
  id?: string;
  className?: string;
  logoClassName?: string;
  priority?: boolean;
};

const logoSources = {
  light: "/brand/ctec/ctec-crtp-color.png",
  dark: "/brand/ctec/ctec-crtp-color-white-letters.png",
} as const;

export function CtecCredential({
  variant = "light",
  id,
  className,
  logoClassName,
  priority = false,
}: CtecCredentialProps) {
  const isDark = variant === "dark";

  return (
    <div id={id} className={cn("space-y-2", className)}>
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.14em]",
          isDark ? "text-primary-foreground/60" : "text-brand"
        )}
      >
        Professional credential
      </p>
      <Image
        src={logoSources[variant]}
        alt="CTEC Registered Tax Preparer (CRTP)"
        width={3750}
        height={1600}
        priority={priority}
        className={cn(
          "h-auto w-full max-w-[300px] object-contain object-left",
          logoClassName
        )}
      />
      <p
        className={cn(
          "text-xs leading-relaxed",
          isDark ? "text-primary-foreground/65" : "text-muted-foreground"
        )}
      >
        CTEC Registered Tax Preparer (CRTP).
      </p>
    </div>
  );
}
