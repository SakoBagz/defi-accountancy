import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
  NotebookPen,
  ShieldCheck,
  Users,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CtaBand, SectionShell } from "@/components/page-sections";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
};

const reasons = [
  {
    icon: Users,
    title: "Personalized Service",
    body: "Clients receive individualized support rather than being treated as a transaction.",
  },
  {
    icon: NotebookPen,
    title: "Year-Round Support",
    body: "Accounting needs do not stop after tax season—and neither do we.",
  },
  {
    icon: ShieldCheck,
    title: "One Trusted Relationship",
    body: "Taxes, bookkeeping, sales tax, formation, and licensing in one place.",
  },
];

const steps = [
  {
    step: "1",
    title: "Tell Us What You Need",
    body: "Submit an inquiry or contact DeFi Accountancy.",
  },
  {
    step: "2",
    title: "Speak With Us",
    body: "Discuss your situation and determine which services are appropriate.",
  },
  {
    step: "3",
    title: "We Handle the Work",
    body: "We complete the agreed accounting, tax, or business service.",
  },
  {
    step: "4",
    title: "Receive Ongoing Support",
    body: "Continue working with us as additional needs arise.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.03_185)_0%,transparent_55%),linear-gradient(180deg,var(--surface),var(--background))]"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <p className="reveal text-sm font-semibold uppercase tracking-[0.16em] text-brand">
              {siteConfig.descriptor}
            </p>
            <h1 className="reveal reveal-delay-1 mt-4 max-w-2xl font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.35rem] lg:leading-[1.1]">
              {siteConfig.tagline}
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/contact"
                className={buttonVariants({ variant: "brand", size: "lg" })}
              >
                Request a Consultation
              </Link>
              <Link
                href="/client-portal"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                <LockKeyhole aria-hidden />
                Client Portal
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Or call{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>
            </p>
          </div>

          <div className="reveal reveal-delay-2 rounded-2xl border border-border/80 bg-card/80 p-6 shadow-[0_20px_50px_-28px_rgba(20,35,60,0.35)] backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Why clients choose us
            </p>
            <ul className="mt-5 space-y-4">
              {[
                "Clear communication without unnecessary jargon",
                "Support for individuals and businesses",
                "Bookkeeping positioned for year-round clarity",
                "A foundation for long-term accounting relationships",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SectionShell className="border-b border-border bg-card py-10 sm:py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-lg text-foreground/90">
            {siteConfig.trustLine}
          </p>
          <p className="text-sm font-medium text-muted-foreground">
            {siteConfig.clientCountNote}
          </p>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mb-10 max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Services for individuals and businesses
          </h2>
          <p className="mt-3 text-muted-foreground">
            From personal tax returns to formation, licensing, and recurring
            bookkeeping—clear offerings with a next step on every page.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="pressable hover-lift group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="font-heading text-xl font-semibold text-ink">
                {service.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-brand">
                Learn More
                <ArrowRight className="size-4 transition-transform duration-200 ease-out-strong group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-surface">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Recurring growth focus
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Keep Your Books Organized All Year
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Waiting until tax season to organize your books creates stress and
              missed opportunities. Monthly bookkeeping keeps records accurate,
              tax prep smoother, and performance clearer throughout the year.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Cleaner financial records",
                "Easier tax preparation",
                "Better visibility into business performance",
                "Reduced year-end stress",
                "Ongoing professional support",
              ].map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                  {benefit}
                </li>
              ))}
            </ul>
            <Link
              href="/services/bookkeeping"
              className={cn(
                buttonVariants({ variant: "brand", size: "lg" }),
                "mt-8"
              )}
            >
              Explore Bookkeeping Services
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="font-heading text-2xl font-semibold text-ink">
              Already a client?
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Use the secure client portal to upload tax documents, sign your
              engagement letter, review and sign your tax return, and access
              your records whenever you need them.
            </p>
            <Link
              href="/client-portal"
              className={cn(buttonVariants({ variant: "outline" }), "mt-6")}
            >
              <LockKeyhole aria-hidden />
              Access Client Portal
            </Link>
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mb-10 max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Why DeFi Accountancy
          </h2>
          <p className="mt-3 text-muted-foreground">
            Professional support that is approachable, organized, and built for
            long-term client relationships.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <reason.icon className="size-6 text-brand" aria-hidden />
              <h3 className="mt-4 font-heading text-xl font-semibold">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-muted-foreground">
          We explain financial matters in understandable terms and help
          individuals and businesses handle taxes, bookkeeping, and business
          accounting without making the process unnecessarily complicated.
        </p>
      </SectionShell>

      <SectionShell className="bg-surface">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            How It Works
          </h2>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <li
              key={item.step}
              className="rounded-xl border border-border bg-card p-5"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand/15 text-sm font-semibold text-brand">
                {item.step}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </SectionShell>

      <CtaBand
        title="Need Help With Your Taxes, Books, or Business?"
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
        secondaryLabel="Client Portal"
        secondaryHref="/client-portal"
      />
    </>
  );
}
