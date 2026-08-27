export const siteConfig = {
  name: "DeFi Accountancy",
  descriptor: "Tax, Accounting & Business Services",
  tagline: "Accounting, Tax & Business Services You Can Rely On",
  description:
    "Personal and business tax preparation, bookkeeping, sales tax, business formation, licensing, and year-round accounting support.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thedefiaccountancy.com",
  phone: "(323) 544-3334",
  phoneHref: "tel:+13235443334",
  email: "raz@thedefiaccountancy.com",
  emailHref: "mailto:raz@thedefiaccountancy.com",
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
    { days: "Saturday – Sunday", time: "10:00 AM – 3:00 PM" },
  ],
  /** Set when a geographic service area is confirmed. */
  serviceArea: null as string | null,
  /** Set when a secure client portal URL is available. */
  clientPortalUrl: null as string | null,
  trustLine:
    "Trusted by individuals and businesses for reliable tax and accounting services.",
  clientCountNote: "Serving 80+ tax clients and growing.",
} as const;

export type ServiceSlug =
  | "personal-tax"
  | "business-tax"
  | "bookkeeping"
  | "sales-tax"
  | "business-formation"
  | "business-licenses";

export type ConsultationService =
  | "personal-taxes"
  | "business-taxes"
  | "bookkeeping"
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
  "sales-tax": "sales-tax",
  "business-formation": "business-formation",
  "business-licenses": "business-licensing",
};
