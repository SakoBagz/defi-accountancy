import type { Metadata } from "next";
import Link from "next/link";
import {
  Archive,
  ExternalLink,
  FileCheck2,
  FileSignature,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";
import { ClientPortalLink } from "@/components/client-portal-link";
import { PageHero, SectionShell } from "@/components/page-sections";
import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "Access the secure DeFi Accountancy client portal to upload tax documents, sign engagement letters, review tax returns, and access your records.",
};

const portalFeatures = [
  {
    icon: UploadCloud,
    title: "Upload Tax Documents",
    description:
      "Send W-2s, 1099s, business records, and other requested tax documents securely.",
  },
  {
    icon: FileSignature,
    title: "Sign Engagement Letters",
    description:
      "Review and electronically sign the documents needed to begin your engagement.",
  },
  {
    icon: FileCheck2,
    title: "Review and Sign Returns",
    description:
      "Review completed tax returns and provide signatures before filing.",
  },
  {
    icon: Archive,
    title: "Access Your Records",
    description:
      "Return to your personal or business portal whenever you need your available records.",
  },
];

export default function ClientPortalPage() {
  return (
    <>
      <PageHero
        eyebrow="Secure client access"
        title="Your DeFi Accountancy Client Portal"
        description="Use the secure portal for sensitive tax documents, electronic signatures, tax-return review, and ongoing access to your available records."
      />

      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Everything you need in one secure place
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              The portal is available to current clients and new clients who
              have been invited to begin working with DeFi Accountancy.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {portalFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <feature.icon className="size-6 text-brand" aria-hidden />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <ShieldCheck className="size-8 text-brand" aria-hidden />
            <h2 className="mt-5 font-heading text-2xl font-semibold text-ink">
              Open the secure portal
            </h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              The portal opens in a new tab, so this website stays open. Sign
              in with your portal credentials or follow the instructions in
              your invitation.
            </p>
            <ClientPortalLink
              source="client_portal_page"
              className={`${buttonVariants({ variant: "brand", size: "lg" })} mt-7 w-full`}
            >
              Open Client Portal
              <ExternalLink aria-hidden />
            </ClientPortalLink>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              For your security, do not send Social Security numbers, tax
              documents, banking information, or passwords through the regular
              website contact form.
            </p>
          </aside>
        </div>
      </SectionShell>

      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              New to DeFi Accountancy?
            </h2>
            <p className="mt-3 max-w-xl text-primary-foreground/75">
              Request a consultation first, and we will help you with the right
              next step and portal access.
            </p>
          </div>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "brand", size: "lg" })}
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
