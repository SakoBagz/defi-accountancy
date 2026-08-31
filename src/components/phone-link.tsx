import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type PhoneLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "aria-label" | "children" | "href"
> & {
  prefix?: ReactNode;
};

/**
 * A click-to-call link that uses the memorable DEFI spelling by default and
 * reveals the numeric keypad equivalent on desktop hover/focus.
 */
export function PhoneLink({ prefix, className, ...anchorProps }: PhoneLinkProps) {
  return (
    <a
      {...anchorProps}
      href={siteConfig.phoneHref}
      aria-label={`Call ${siteConfig.phone}`}
      className={cn("phone-hoverable", className)}
    >
      {prefix}
      <span className="phone-hover-mnemonic">{siteConfig.phoneMnemonic}</span>
      <span className="phone-hover-numeric" aria-hidden="true">
        {siteConfig.phone}
      </span>
    </a>
  );
}
