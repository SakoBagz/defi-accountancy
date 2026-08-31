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
import { PhoneLink } from "@/components/phone-link";
import { getService, serviceGroups } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  description: siteConfig.description,
};

const notaryService = getService("notary");

const reasons = [
  {
    icon: Users,
    title: "Cost-Conscious Guidance",
    body: "We keep the work focused and explain where your accounting dollars go, so support feels practical and worthwhile.",
  },
  {
    icon: NotebookPen,
    title: "Proactive Tax Planning",
    body: "When it fits your situation, we discuss lawful planning opportunities before deadlines—not after the year is over.",
  },
  {
    icon: ShieldCheck,
    title: "A Partner Who Cares",
    body: "We take time to understand your goals and treat your business with the care and attention we would want for our own.",
  },
];

const steps = [
  {
    step: "1",
    title: "Start With Your Goals",
    body: "Tell us what feels complicated, what you want to improve, and where you want more time.",
  },
  {
    step: "2",
    title: "Build a Clear Plan",
    body: "We identify the right services, priorities, and planning conversations for your situation.",
  },
  {
    step: "3",
    title: "We Handle the Details",
    body: "We keep the work organized and communicate what you need to know in plain language.",
  },
  {
    step: "4",
    title: "Stay Ahead Together",
    body: "With ongoing support, you can make decisions with better information and fewer surprises.",
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
              Whether you&apos;re managing personal taxes or growing a business,
              your accounting should make life easier—not take over your time.
              We simplify the numbers, communicate clearly, and plan ahead for
              taxes so you can focus on what matters.
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
              <PhoneLink className="font-medium text-foreground underline-offset-4 hover:underline" />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Based in {siteConfig.location.display}. {siteConfig.remoteServiceNote}
            </p>
          </div>

          <div className="reveal reveal-delay-2 rounded-2xl border border-border/80 bg-card/80 p-6 shadow-[0_20px_50px_-28px_rgba(20,35,60,0.35)] backdrop-blur-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              What you can expect
            </p>
            <ul className="mt-5 space-y-4">
              {[
                "Cost-conscious support with clear communication",
                "Proactive tax-planning conversations before deadlines",
                "One relationship for tax, books, payroll, and business needs",
                "More time to focus on running and growing your business",
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

      <SectionShell className="border-b border-border bg-surface py-10 sm:py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "2021", label: "Established" },
            { value: "Los Angeles, CA", label: "Based in" },
            { value: "Nationwide", label: "Remote support" },
            { value: "CTEC Registered", label: "Tax preparer credential" },
          ].map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-border bg-card px-5 py-4"
            >
              <p className="font-heading text-xl font-semibold text-ink">
                {fact.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{fact.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-brand/25 bg-brand/5 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
              Additional service
            </p>
            <h3 className="mt-2 font-heading text-2xl font-semibold text-ink">
              {notaryService.name}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {notaryService.summary} In-person appointments are available in
              Los Angeles County, with statewide California appointments by
              arrangement.
            </p>
          </div>
          <Link
            href={notaryService.href}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mt-5 shrink-0 sm:mt-0"
            )}
          >
            Schedule a Notary Appointment
          </Link>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="mb-10 max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            Services for individuals and businesses
          </h2>
          <p className="mt-3 text-muted-foreground">
            From personal returns to recurring business support, we keep the
            process organized and explain what matters—so you can make decisions
            with confidence and keep your attention on your work.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceGroups.map((group) => (
            <Link
              key={group.slug}
              href={`/services#${group.slug}`}
              className="pressable hover-lift group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="font-heading text-xl font-semibold text-ink">
                {group.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {group.summary}
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
              More time for what matters
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Let Your Accounting Support Your Growth
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When your books, payroll, and tax planning are handled proactively,
              you spend less time chasing paperwork and more time serving
              customers, leading your team, and growing the business.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Fewer last-minute surprises",
                "Clearer view of cash and performance",
                "Planning conversations before deadlines",
                "One organized process",
                "A partner who knows your goals",
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
          The goal is simple: make accounting easier to understand, easier to
          manage, and more useful to your next decision—so you can focus on your
          clients, your family, and your growth.
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
        title="Spend More Time Growing. We&apos;ll Handle the Accounting."
        description="Tell us where the process feels difficult, and we&apos;ll help map out a simpler next step."
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
        secondaryLabel="Client Portal"
        secondaryHref="/client-portal"
      />
    </>
  );
}
