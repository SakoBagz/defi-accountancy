import type { Metadata } from "next";
import Image from "next/image";
import { CtecCredential } from "@/components/ctec-credential";
import { CtaBand, PageHero, SectionShell } from "@/components/page-sections";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DeFi Accountancy—tax, accounting, bookkeeping, and business services for individuals and business owners.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About DeFi Accountancy"
        description="We help individuals and business owners handle taxes, bookkeeping, and business accounting without making the process unnecessarily complicated."
      />

      <SectionShell>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-6">
            <Image
              src="/logo.png"
              alt={`${siteConfig.name} logo`}
              width={320}
              height={320}
              className="mx-auto h-auto w-full max-w-[240px] object-contain"
            />
            <p className="mt-6 text-center font-heading text-xl font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-1 text-center text-sm text-muted-foreground">
              {siteConfig.descriptor}
            </p>
            <div className="mt-6 border-t border-border pt-6">
              <CtecCredential
                id="ctec-credential"
                logoClassName="max-w-[280px]"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold">Our story</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                DeFi Accountancy started as a trusted tax preparation practice
                serving individuals through busy filing seasons. Today we
                continue that work while expanding into bookkeeping, payroll,
                business tax, sales tax, formation, and licensing—so clients can
                build one lasting accounting relationship instead of juggling
                multiple
                providers.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold">Who we serve</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We work with individual taxpayers, small business owners, and
                people starting new businesses. Whether you need a personal
                return, monthly books, or help forming an LLC, we aim to make the
                next step clear.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold">
                How we work with clients
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Personalized service, clear communication, and practical
                guidance. We explain options in plain language and focus on
                accurate, reliable work you can count on—during tax season and
                throughout the year.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold">Hours</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {siteConfig.hours.map((slot) => (
                  <li key={slot.days}>
                    <span className="font-medium text-foreground">
                      {slot.days}:
                    </span>{" "}
                    {slot.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SectionShell>

      <CtaBand
        title="Ready to work together?"
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
      />
    </>
  );
}
