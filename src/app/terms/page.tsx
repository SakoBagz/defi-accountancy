import type { Metadata } from "next";
import { PageHero, SectionShell } from "@/components/page-sections";
import { PhoneLink } from "@/components/phone-link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms / Website Disclaimer",
  description: `Website terms and disclaimer for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms / Website Disclaimer"
        description="Important information about using this website and the services described here."
      />
      <SectionShell>
        <div className="mx-auto max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <p>
            The content on this website is for general informational purposes
            about {siteConfig.name} and the services we offer. It is not legal,
            tax, or financial advice for your specific situation.
          </p>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              No guarantees
            </h2>
            <p className="mt-3">
              We do not guarantee particular tax outcomes, refunds, or results.
              Service availability and scope depend on your circumstances and
              applicable requirements.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Professional relationship
            </h2>
            <p className="mt-3">
              Submitting a website inquiry does not by itself create a
              client-accountant engagement. An engagement begins only after we
              confirm scope and terms with you.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Website accuracy
            </h2>
            <p className="mt-3">
              We work to keep website information current, but content may
              change. If you have questions about a specific service, please
              contact us directly.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-3">
              Reach us at{" "}
              <a
                href={siteConfig.emailHref}
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              or{" "}
              <PhoneLink className="font-medium text-brand underline-offset-4 hover:underline" />
              .
            </p>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
