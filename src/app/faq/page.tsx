import type { Metadata } from "next";
import { CtaBand, PageHero, SectionShell } from "@/components/page-sections";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about tax preparation, bookkeeping, payroll, business, notary services, and remote service from DeFi Accountancy in Los Angeles, CA.",
};

const faqGroups = [
  {
    title: "Tax Preparation",
    items: [
      {
        q: "What documents do I need?",
        a: "Typical documents include W-2s, 1099s, prior-year returns, and records of deductions or credits. We'll confirm what applies to your situation when you reach out.",
      },
      {
        q: "When should I contact you?",
        a: "As soon as you have most of your documents—or earlier if you need planning help. Earlier conversations can make the process smoother and give us more time to discuss options before deadlines.",
      },
      {
        q: "Do you prepare prior-year returns?",
        a: "Yes. We can discuss prior-year and amended returns based on your circumstances.",
      },
      {
        q: "Do you handle both federal and state returns?",
        a: "Yes. We prepare federal returns and state returns as applicable to your filing situation.",
      },
      {
        q: "Do you offer tax planning?",
        a: "When appropriate, we discuss lawful tax-planning opportunities based on your facts, goals, and timing. Tax planning can help you make informed decisions before deadlines, but no particular tax result or savings is guaranteed.",
      },
    ],
  },
  {
    title: "Bookkeeping",
    items: [
      {
        q: "Do you offer monthly bookkeeping?",
        a: "Yes. Monthly bookkeeping is a core offering designed to keep your records organized throughout the year.",
      },
      {
        q: "Can you catch up books that are behind?",
        a: "Yes. Catch-up and cleanup bookkeeping are available when records have fallen behind.",
      },
      {
        q: "Can you clean up existing bookkeeping?",
        a: "Yes. We can review existing books and help bring categorization, reconciliations, and reports into better order.",
      },
    ],
  },
  {
    title: "Business Services",
    items: [
      {
        q: "Can you help form an LLC or corporation?",
        a: "Yes. We assist with LLC and corporation formation and related setup within our professional scope.",
      },
      {
        q: "Can you help with business licenses?",
        a: "Yes. We help with common licensing, registration, and renewal administration in the jurisdictions we support.",
      },
      {
        q: "Do you assist with sales tax?",
        a: "Yes. We provide sales tax registration, reporting, and filing support where applicable.",
      },
    ],
  },
  {
    title: "Notary Services",
    items: [
      {
        q: "What notary services do you offer?",
        a: "We offer general California notarial acts, including acknowledgments, jurats, oaths, and affirmations, for personal and business documents when the appropriate certificate and signer requirements are met.",
      },
      {
        q: "Where are notary appointments available?",
        a: `${siteConfig.notaryServiceNote} Travel, after-hours, and urgent appointment fees are quoted before the appointment.`,
      },
      {
        q: "Do you offer remote online notarization?",
        a: "Not at this time. California currently requires the signer to personally appear before the notary for notarial acts such as acknowledgments and jurats.",
      },
    ],
  },
  {
    title: "Working With DeFi Accountancy",
    items: [
      {
        q: "How do I get started?",
        a: "Request a consultation through our contact form, call us, or email us. Tell us what feels difficult or time-consuming, and we'll discuss your goals and the right next step.",
      },
      {
        q: "How do I send sensitive documents?",
        a: "Do not send Social Security numbers, banking details, or tax documents through the website contact form. After we connect, we'll share an approved secure method for sensitive information.",
      },
      {
        q: "Do I need an appointment?",
        a: `You can reach us during business hours (${siteConfig.hours.map((h) => `${h.days} ${h.time}`).join("; ")}). Consultations can be scheduled after your initial inquiry.`,
      },
      {
        q: "Do you work with remote clients?",
        a: `Yes. DeFi Accountancy is based in ${siteConfig.location.display} and works remotely with clients nationwide, subject to state-specific requirements. Reach out and we'll confirm what works best for your situation.`,
      },
      {
        q: "Where is DeFi Accountancy located?",
        a: `DeFi Accountancy is based in ${siteConfig.location.display}. Remote services are available nationwide, subject to state-specific requirements, so many engagements can be handled without an in-person visit.`,
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Straightforward answers about taxes, bookkeeping, payroll, business services, notary appointments, and how to get started with a Los Angeles, CA firm serving clients nationwide through remote accounting service."
      />
      <SectionShell>
        <div className="mx-auto max-w-3xl space-y-10">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-4 font-heading text-2xl font-semibold">
                {group.title}
              </h2>
              <div className="divide-y divide-border rounded-xl border border-border bg-card">
                {group.items.map((item) => (
                  <details key={item.q} className="group px-4 py-1">
                    <summary className="cursor-pointer list-none py-3 font-medium outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-ring [&::-webkit-details-marker]:hidden">
                      <span className="flex items-center justify-between gap-4">
                        {item.q}
                        <span
                          aria-hidden
                          className="text-muted-foreground transition-transform duration-200 ease-out-strong group-open:rotate-45"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <p className="pb-4 leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
      <CtaBand
        title="Still have questions?"
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
      />
    </>
  );
}
