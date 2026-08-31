import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero, SectionShell } from "@/components/page-sections";
import { getService, serviceGroups } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore clear, cost-conscious tax, bookkeeping, payroll, business, and in-person notary services from DeFi Accountancy in Los Angeles, CA, with remote accounting support available nationwide.",
};

export default function ServicesPage() {
  const notary = getService("notary");

  return (
    <>
      <PageHero
        title="Our Services"
        description="We organize our accounting and business services into four practical areas, with Notary Services available as a separate in-person offering. Choose an area below, or contact us and we&apos;ll help map out the right next step."
      />
      <SectionShell>
        <div className="grid gap-4 md:grid-cols-2">
          {serviceGroups.map((group) => (
            <article
              key={group.slug}
              id={group.slug}
              className="flex scroll-mt-24 flex-col rounded-xl border border-border bg-card p-6"
            >
              <h2 className="font-heading text-2xl font-semibold">
                {group.name}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {group.summary}
              </p>
              <div className="mt-5 space-y-2">
                <p className="text-sm font-medium text-foreground/80">
                  Detailed services
                </p>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {group.serviceSlugs.map((serviceSlug) => {
                    const service = getService(serviceSlug);
                    return (
                      <li key={service.slug}>
                        <Link
                          href={service.href}
                          className="inline-flex items-center gap-1 text-brand underline-offset-4 hover:underline"
                        >
                          {service.name}
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Discuss this area
                </Link>
              </div>
            </article>
          ))}
        </div>
        <article
          id="notary-services"
          className="mt-6 flex scroll-mt-24 flex-col gap-6 rounded-xl border border-brand/25 bg-brand/5 p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Additional service
            </p>
            <h2 className="mt-2 font-heading text-2xl font-semibold">
              {notary.name}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {notary.summary} Travel, after-hours, and urgent appointment fees
              are quoted in advance.
            </p>
          </div>
          <Link
            href={notary.href}
            className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-brand underline-offset-4 hover:underline"
          >
            Learn more
            <ArrowRight className="size-4" />
          </Link>
        </article>
      </SectionShell>
      <CtaBand
        title="Not sure which service you need?"
        description="Tell us about your situation and we'll help point you in the right direction."
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
      />
    </>
  );
}
