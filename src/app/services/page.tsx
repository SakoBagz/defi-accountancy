import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero, SectionShell } from "@/components/page-sections";
import { services } from "@/lib/services";
import { slugToConsultationService } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore personal and business tax preparation, bookkeeping, payroll, sales tax, business formation, and licensing services from DeFi Accountancy in Los Angeles, CA with remote services available nationwide.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Clear offerings for individuals and business owners in Los Angeles, CA and nationwide through remote service—with dedicated pages for each service and a straightforward path to request a consultation."
      />
      <SectionShell>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <h2 className="font-heading text-2xl font-semibold">
                {service.name}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <p className="mt-4 text-sm text-foreground/80">
                <span className="font-medium">Common needs: </span>
                {service.offerings.slice(0, 3).join(", ")}
                {service.offerings.length > 3 ? ", and more" : ""}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand"
                >
                  Learn more
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href={`/contact?service=${slugToConsultationService[service.slug]}`}
                  className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Request a consultation
                </Link>
              </div>
            </article>
          ))}
        </div>
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
