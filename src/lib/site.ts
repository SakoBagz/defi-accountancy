export const siteConfig = {
  name: "DeFi Accountancy",
  descriptor: "Tax, Accounting & Business Services",
  seoTitle: "Los Angeles Tax & Accounting Services",
  tagline: "Simpler Accounting. Smarter Tax Decisions. More Time to Grow.",
  description:
    "Los Angeles, CA tax and accounting services for individuals and business owners, with clear bookkeeping, payroll, tax preparation, and proactive tax-planning support available nationwide through remote service.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thedefiaccountancy.com",
  /** The numeric display is the canonical version for accessible/click-to-call use. */
  phone: "(323) 544-3334",
  /** Friendly mnemonic shown in the default desktop presentation. */
  phoneMnemonic: "(323) 544-DEFI",
  phoneE164: "+13235443334",
  phoneHref: "tel:+13235443334",
  email: "raz@thedefiaccountancy.com",
  emailHref: "mailto:raz@thedefiaccountancy.com",
  /** DeFi Accountancy was established on June 15, 2021. */
  establishedYear: 2021,
  establishedDate: "June 15, 2021",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday – Sunday", time: "10:00 AM – 3:00 PM" },
  ],
  location: {
    city: "Los Angeles",
    region: "CA",
    display: "Los Angeles, CA",
  },
  serviceArea: "Los Angeles, CA",
  remoteServiceNote:
    "Remote services available nationwide, subject to state-specific requirements.",
  /** Set when a secure client portal URL is available. */
  clientPortalUrl: "https://defi.mytaxportal.online",
  trustLine:
    "Clear, cost-conscious support designed to simplify your finances and give you time back.",
  clientCountNote: "Serving thousands of tax clients and growing.",
} as const;

export type ServiceSlug =
  | "personal-tax"
  | "business-tax"
  | "bookkeeping"
  | "payroll"
  | "sales-tax"
  | "business-formation"
  | "business-licenses";

export type ConsultationService =
  | "personal-taxes"
  | "business-taxes"
  | "bookkeeping"
  | "payroll"
  | "sales-tax"
  | "business-formation"
  | "business-licensing"
  | "other";

export const consultationServiceOptions: {
  value: ConsultationService;
  label: string;
}[] = [
  { value: "personal-taxes", label: "Personal Taxes" },
  { value: "business-taxes", label: "Business Taxes" },
  { value: "bookkeeping", label: "Bookkeeping" },
  { value: "payroll", label: "Payroll Services" },
  { value: "sales-tax", label: "Sales Tax" },
  { value: "business-formation", label: "Business Formation" },
  { value: "business-licensing", label: "Business Licensing" },
  { value: "other", label: "Other" },
];

export const slugToConsultationService: Record<
  ServiceSlug,
  ConsultationService
> = {
  "personal-tax": "personal-taxes",
  "business-tax": "business-taxes",
  bookkeeping: "bookkeeping",
  payroll: "payroll",
  "sales-tax": "sales-tax",
  "business-formation": "business-formation",
  "business-licenses": "business-licensing",
};
