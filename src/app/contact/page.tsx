import type { Metadata } from "next";
import { Suspense } from "react";
import { ConsultationForm } from "@/components/consultation-form";
import { PageHero, SectionShell } from "@/components/page-sections";
import { PhoneLink } from "@/components/phone-link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DeFi Accountancy in Los Angeles, CA for tax, bookkeeping, payroll, and business services with remote support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact DeFi Accountancy"
        description="Request a consultation, call us, or send a message. Tell us what you need help with and we'll get in touch."
      />
      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-8">
            <div>
              <h2 className="font-heading text-xl font-semibold">Phone</h2>
              <PhoneLink className="mt-2 block text-lg text-brand underline-offset-4 hover:underline" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold">Email</h2>
              <a
                href={siteConfig.emailHref}
                className="mt-2 block text-lg text-brand underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold">
                Business hours
              </h2>
              <ul className="mt-2 space-y-2 text-muted-foreground">
                {siteConfig.hours.map((slot) => (
                  <li key={slot.days}>
                    <span className="font-medium text-foreground">
                      {slot.days}
                    </span>
                    <br />
                    {slot.time}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold">
                Location &amp; remote service
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Based in {siteConfig.location.display}. {siteConfig.remoteServiceNote}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-muted/50 p-5 text-sm leading-relaxed text-muted-foreground">
              Consultations begin with a short inquiry so we understand what you
              need. Please do not send sensitive tax documents through this form.
            </div>
          </aside>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-heading text-2xl font-semibold">
              Request a Consultation
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Required fields are marked. Optional fields help us respond more
              effectively.
            </p>
            <div className="mt-6">
              <Suspense fallback={<p className="text-sm text-muted-foreground">Loading form…</p>}>
                <ConsultationForm />
              </Suspense>
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
