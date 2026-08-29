"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Info, LockKeyhole, Menu, Phone, X } from "lucide-react";
import { ClientPortalLink } from "@/components/client-portal-link";
import { buttonVariants } from "@/components/ui/button";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const clientPortalInfoUrl = new URL(
  "/client-portal",
  siteConfig.url
).toString();

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 pressable"
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-md object-contain"
            priority
          />
          <span className="min-w-0">
            <span className="block truncate font-heading text-base font-semibold text-ink sm:text-lg">
              {siteConfig.name}
            </span>
            <span className="hidden truncate text-xs text-muted-foreground sm:block">
              {siteConfig.descriptor}
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="pressable rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="pressable inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services
              <ChevronDown className="size-4 opacity-70" aria-hidden />
            </button>
            {servicesOpen ? (
              <div
                role="menu"
                className="absolute left-0 top-full z-50 min-w-56 origin-top-left rounded-lg border border-border bg-popover p-1 shadow-md"
              >
                <Link
                  href="/services"
                  role="menuitem"
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  onClick={() => setServicesOpen(false)}
                >
                  All Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    role="menuitem"
                    className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                    onClick={() => setServicesOpen(false)}
                  >
                    {service.shortName}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="pressable rounded-md px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phoneHref}
            className="pressable hidden size-10 items-center justify-center rounded-lg sm:inline-flex"
            aria-label="Call us"
          >
            <Phone className="size-4" />
          </a>
          <div className="hidden items-center gap-0 md:flex">
            <ClientPortalLink
              source="header"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "rounded-r-none border-r-0"
              )}
            >
              <LockKeyhole aria-hidden />
              Client Portal
            </ClientPortalLink>
            <Link
              href={clientPortalInfoUrl}
              aria-label="Learn about the Client Portal"
              title="Learn about the Client Portal"
              className={cn(
                buttonVariants({ variant: "outline", size: "icon-sm" }),
                "rounded-l-none"
              )}
            >
              <Info aria-hidden />
            </Link>
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "brand", size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            Request a Consultation
          </Link>

          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "lg:hidden"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="pressable rounded-md px-3 py-3 text-base font-medium"
              >
                {link.label}
              </Link>
            ))}
            <p className="mt-4 px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Services
            </p>
            <Link
              href="/services"
              onClick={() => setMobileOpen(false)}
              className="pressable rounded-md px-3 py-3 text-base font-medium"
            >
              All Services
            </Link>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "pressable rounded-md px-3 py-3 text-base font-medium",
                  service.slug === "bookkeeping" && "text-brand"
                )}
              >
                {service.shortName}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-2 px-1">
              <div className="flex items-center gap-0">
                <ClientPortalLink
                  source="mobile_menu"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "flex-1 rounded-r-none border-r-0"
                  )}
                >
                  <LockKeyhole aria-hidden />
                  Client Portal
                </ClientPortalLink>
                <Link
                  href={clientPortalInfoUrl}
                  onClick={() => setMobileOpen(false)}
                  aria-label="Learn about the Client Portal"
                  title="Learn about the Client Portal"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon-lg" }),
                    "size-12 rounded-l-none"
                  )}
                >
                  <Info aria-hidden />
                </Link>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={buttonVariants({ variant: "brand", size: "lg" })}
              >
                Request a Consultation
              </Link>
              <a
                href={siteConfig.phoneHref}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Call {siteConfig.phone}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
