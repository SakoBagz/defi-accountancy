import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = serviceMetadata("notary");

export default function NotaryServicesPage() {
  return (
    <ServicePage
      slug="notary"
      extra={
        <>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-heading text-2xl font-semibold">
                California statutory maximums
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Acknowledgment</dt>
                  <dd className="text-right font-medium text-foreground">
                    Up to $15 per signature
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Jurat</dt>
                  <dd className="text-right font-medium text-foreground">
                    Up to $15 per jurat
                  </dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground">Oath or affirmation</dt>
                  <dd className="text-right font-medium text-foreground">
                    Up to $15 per person
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Travel, after-hours, and urgent appointment fees are separate
                from statutory notarial fees and are quoted before the
                appointment.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-heading text-2xl font-semibold">
                What to bring
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  "A valid government-issued photo ID",
                  "Original documents that are ready to be signed",
                  "All required signers present in person",
                  "Any required witnesses, if applicable",
                  "The correct notarial wording or certificate for the document",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 before:mt-2 before:size-1.5 before:shrink-0 before:rounded-full before:bg-brand before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-brand/25 bg-brand/5 p-6">
            <h2 className="font-heading text-2xl font-semibold">
              Appointment and service information
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {siteConfig.notaryServiceNote} We can meet at an agreed location
              or travel to you when available.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A notary verifies identity and completes the requested notarial
              act. Notary services do not include legal advice, selecting or
              preparing legal documents, or determining whether a document is
              legally valid.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Please do not send identification, tax documents, or other
              sensitive documents through the website contact form.
            </p>
          </div>
        </>
      }
    />
  );
}
