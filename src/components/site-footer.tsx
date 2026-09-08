import Image from "next/image";
import Link from "next/link";
import { CtecCredential } from "@/components/ctec-credential";
import { PhoneLink } from "@/components/phone-link";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";

const intuitBookkeepingBadgeUrl =
  "https://www.credly.com/badges/545ff80e-7e23-49b9-bb05-70e2476a4b40/public_url";
const intuitCryptocurrencyTaxBadgeUrl =
  "https://www.credly.com/badges/bb008b29-75ab-4609-bbda-f3467a3087f6/public_url";
const intuitBusinessTaxBadgeUrl =
  "https://www.credly.com/badges/272d858f-0fd2-4c88-8c1e-eac934ae330c/public_url";

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="border-t border-border bg-primary text-primary-foreground"
    >
      <div className="grid gap-x-8 gap-y-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.9fr_1fr_0.95fr] lg:px-10 2xl:px-16">
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
            matters, including specialized cryptocurrency, NFT, and DeFi tax
            support.
          </p>
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
            <li>{siteConfig.notaryServiceNote}</li>
          </ul>
        </div>

        <div className="space-y-4">
          <CtecCredential
            variant="dark"
            logoClassName="max-w-[240px]"
            priority
          />
          <div className="border-t border-primary-foreground/15 pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/60">
              Additional credentials
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={intuitBookkeepingBadgeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verify Intuit Bookkeeping Trained badge on Credly"
                className="pressable rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Image
                  src="/brand/intuit/intuit-bookkeeping-certification.png"
                  alt="Intuit Bookkeeping Trained"
                  width={600}
                  height={600}
                  className="size-24 object-contain"
                />
              </a>
              <a
                href={intuitCryptocurrencyTaxBadgeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verify Intuit Academy Cryptocurrency Tax Specialty badge on Credly"
                className="pressable rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Image
                  src="/brand/intuit/intuit-academy-cryptocurrency-tax-exam.png"
                  alt="Intuit Academy Cryptocurrency Tax Specialty"
                  width={605}
                  height={605}
                  className="size-24 object-contain"
                />
              </a>
              <a
                href={intuitBusinessTaxBadgeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Verify Intuit Academy Business Tax Specialty badge on Credly"
                className="pressable rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Image
                  src="/brand/intuit/intuit-academy-business-tax-exam.png"
                  alt="Intuit Academy Business Tax Specialty"
                  width={605}
                  height={605}
                  className="size-24 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="flex flex-col gap-3 px-4 py-6 text-sm text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10 2xl:px-16">
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
