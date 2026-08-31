import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand, PageHero, SectionShell } from "@/components/page-sections";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Industries supported by DeFi Accountancy, including e-commerce and digital creators, restaurants and hospitality, healthcare and wellness practices, trucking, real estate, property management, plumbing, and HVAC businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries we support"
        title="Accounting support that understands how your business works"
        description="DeFi Accountancy serves and has experience supporting a range of businesses. This is a starting list—not a limit. If you do not see your industry, reach out and we can discuss your situation."
      />
      <SectionShell>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.slug}
              className="flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <h2 className="font-heading text-2xl font-semibold text-ink">
                {industry.name}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
              <Link
                href="/contact?service=other"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand underline-offset-4 hover:underline"
              >
                Discuss your business
                <ArrowRight className="size-4" />
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-brand/25 bg-brand/5 p-6 sm:p-8">
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Don&apos;t see your industry?
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            Every business has its own details. Tell us what you do, where the
            accounting process feels difficult, and what you want to accomplish.
            We&apos;ll let you know whether we&apos;re a good fit and outline a clear next
            step.
          </p>
          <Link
            href="/contact?service=other"
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand underline-offset-4 hover:underline"
          >
            Tell us about your business
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </SectionShell>
      <CtaBand
        title="Want a simpler accounting process?"
        description="Tell us about your business and we&apos;ll help map out the right next step."
        primaryLabel="Request a Consultation"
        primaryHref="/contact?service=other"
      />
    </>
  );
}
