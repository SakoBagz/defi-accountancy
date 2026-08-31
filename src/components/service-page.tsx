import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CtaBand, PageHero, SectionShell } from "@/components/page-sections";
import { getService, type Service } from "@/lib/services";
import {
  siteConfig,
  slugToConsultationService,
  type ServiceSlug,
} from "@/lib/site";
import { cn } from "@/lib/utils";

type ServicePageProps = {
  slug: ServiceSlug;
  extra?: React.ReactNode;
};

export function serviceMetadata(slug: ServiceSlug): Metadata {
  const service = getService(slug);
  const description = `${service.summary} Clear, cost-conscious support from ${siteConfig.location.display} with remote services available nationwide, subject to state-specific requirements.`;

  return {
    title: service.name,
    description,
    openGraph: {
      title: service.name,
      description,
    },
  };
}

export function ServicePage({ slug, extra }: ServicePageProps) {
  const service = getService(slug);
  const consultService = slugToConsultationService[slug];

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.name}
        description={service.description}
      />

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold">Who it&apos;s for</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {service.audience}
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold">
                Problems we help with
              </h2>
              <ul className="mt-4 space-y-2">
                {service.problems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-muted-foreground before:mt-2 before:size-1.5 before:shrink-0 before:rounded-full before:bg-brand before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold">
                How DeFi Accountancy can help
              </h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {service.offerings.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-card px-4 py-3 text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {extra}
            {service.crossSells?.map((cross) => (
              <div
                key={cross.title}
                className="rounded-xl border border-brand/25 bg-brand/5 p-6"
              >
                <h3 className="font-heading text-xl font-semibold">
                  {cross.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{cross.body}</p>
                <Link
                  href={cross.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand"
                >
                  {cross.linkLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-sm lg:sticky lg:top-24">
            <p className="font-heading text-xl font-semibold">Next step</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us what you need to simplify. We&apos;ll listen to your goals and
              follow up with a clear next step for your situation.
            </p>
            <Link
              href={`/contact?service=${consultService}`}
              className={cn(
                buttonVariants({ variant: "brand", size: "lg" }),
                "mt-6 w-full"
              )}
            >
              {service.cta}
            </Link>
            {slug === "bookkeeping" ? (
              <Link
                href="/contact?service=bookkeeping&intent=catch-up"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "mt-3 w-full"
                )}
              >
                My Books Are Behind
              </Link>
            ) : null}
          </aside>
        </div>
      </SectionShell>

      <CtaBand
        title={service.cta}
        primaryLabel={service.cta}
        primaryHref={`/contact?service=${consultService}${
          slug === "bookkeeping" ? "" : ""
        }`}
      />
    </>
  );
}

export type { Service };
