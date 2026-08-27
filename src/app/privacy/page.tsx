import type { Metadata } from "next";
import { PageHero, SectionShell } from "@/components/page-sections";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy practices for the ${siteConfig.name} website.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we collect and use information through this website."
      />
      <SectionShell>
        <div className="prose-like mx-auto max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <p>
            This Privacy Policy describes how {siteConfig.name} (&quot;we,&quot;
            &quot;us&quot;) handles information collected through our marketing
            website. It is intended to reflect our actual website practices.
          </p>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Information we collect
            </h2>
            <p className="mt-3">
              When you submit the consultation form, we collect the information
              you provide, such as your name, email address, phone number,
              service interest, message, preferred contact method, and optional
              business name.
            </p>
            <p className="mt-3">
              We may also collect standard website analytics data (for example,
              page views and referral sources) through privacy-conscious
              analytics tools hosted by our deployment provider.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              How we use information
            </h2>
            <p className="mt-3">
              Contact form submissions are used to respond to inquiries and
              discuss potential services. Analytics data helps us understand how
              visitors use the site so we can improve clarity and performance.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Cookies and third parties
            </h2>
            <p className="mt-3">
              Our hosting and analytics providers may use cookies or similar
              technologies as part of delivering and measuring the website. We
              do not sell personal information.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Sensitive information
            </h2>
            <p className="mt-3">
              Please do not submit Social Security numbers, tax documents,
              banking details, passwords, or other sensitive financial
              information through the website contact form. Sensitive documents
              should only be exchanged through an approved secure method after
              we establish contact.
            </p>
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-3">
              Questions about this policy or your information can be directed to{" "}
              <a
                href={siteConfig.emailHref}
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                {siteConfig.email}
              </a>{" "}
              or{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
