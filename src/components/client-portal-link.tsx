"use client";

import type { ReactNode } from "react";
import { track } from "@vercel/analytics";
import { siteConfig } from "@/lib/site";

export function ClientPortalLink({
  children,
  className,
  onClick,
  source,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  source: string;
}) {
  return (
    <a
      href={siteConfig.clientPortalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => {
        track("Client Portal Clicked", { source });
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}
