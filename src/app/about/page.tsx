import type { Metadata } from "next";
import Image from "next/image";
import { CtecCredential } from "@/components/ctec-credential";
import { CtaBand, PageHero, SectionShell } from "@/components/page-sections";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DeFi Accountancy, a Los Angeles, CA tax and accounting firm providing remote service for individuals and business owners.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About DeFi Accountancy"
        description="DeFi Accountancy exists to make accounting simpler, more personal, and more useful—so individuals and business owners can plan ahead, make informed decisions, and focus on what matters. Based in Los Angeles, CA, we work with clients remotely nationwide, subject to state-specific requirements."
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
                DeFi Accountancy is built on a straightforward belief: accounting
                should support your life and your business, not become another
                source of stress. We help clients understand the numbers, stay
                organized, and plan ahead so they can avoid preventable surprises
                and use their time where it matters most.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold">Who we serve</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                We work with individual taxpayers, small business owners, and
                people starting new businesses. Our role is to make the process
                easier to navigate—from tax preparation and bookkeeping to
                payroll and business support—while keeping the work aligned with
                your goals.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold">
                How we work with clients
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Before recommending a service, we listen to what you are trying
                to accomplish and what is making the process harder than it needs
                to be. We explain options in plain language, coordinate the work,
                and stay responsive. For business owners, we treat the business
                with the care and attention we would give our own: organize the
                records, discuss lawful tax-planning opportunities when
                appropriate, and help you stay focused on growth.
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
