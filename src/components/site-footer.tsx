import Image from "next/image";
import Link from "next/link";
import { CtecCredential } from "@/components/ctec-credential";
import { PhoneLink } from "@/components/phone-link";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="border-t border-border bg-primary text-primary-foreground"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={36}
              height={36}
              className="size-9 rounded-md bg-primary-foreground/10 object-contain p-0.5"
            />
            <div>
              <p className="font-heading text-lg font-semibold">
                {siteConfig.name}
              </p>
              <p className="text-sm text-primary-foreground/75">
                {siteConfig.descriptor}
              </p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            Cost-conscious, caring tax and accounting support that simplifies the
            work behind your finances and gives you more time to focus on what
            matters.
          </p>
          <CtecCredential
            variant="dark"
            className="border-t border-primary-foreground/15 pt-5"
            logoClassName="max-w-[240px]"
            priority
          />
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
            Services
          </p>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="text-primary-foreground/85 transition-colors duration-200 ease-out-strong hover:text-primary-foreground"
                >
                  {service.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
            Company
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="text-primary-foreground/85 transition-colors duration-200 ease-out-strong hover:text-primary-foreground"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-primary-foreground/85 transition-colors duration-200 ease-out-strong hover:text-primary-foreground"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="text-primary-foreground/85 transition-colors duration-200 ease-out-strong hover:text-primary-foreground"
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-primary-foreground/85 transition-colors duration-200 ease-out-strong hover:text-primary-foreground"
              >
                Contact
              </Link>
            </li>
            {siteConfig.clientPortalUrl ? (
              <li>
                <Link
                  href="/client-portal"
                  className="text-primary-foreground/85 transition-colors duration-200 ease-out-strong hover:text-primary-foreground"
                >
                  Client Portal
                </Link>
              </li>
            ) : null}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground/60">
            Contact
          </p>
          <ul className="space-y-2 text-sm text-primary-foreground/85">
            <li>
              <PhoneLink className="transition-colors duration-200 ease-out-strong hover:text-primary-foreground" />
            </li>
            <li>
              <a
                href={siteConfig.emailHref}
                className="transition-colors duration-200 ease-out-strong hover:text-primary-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.hours.map((slot) => (
              <li key={slot.days}>
                <span className="block text-primary-foreground/60">
                  {slot.days}
                </span>
                {slot.time}
              </li>
            ))}
            <li>Based in {siteConfig.location.display}</li>
            <li>{siteConfig.remoteServiceNote}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {siteConfig.establishedYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="transition-colors duration-200 ease-out-strong hover:text-primary-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors duration-200 ease-out-strong hover:text-primary-foreground"
            >
              Terms / Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
