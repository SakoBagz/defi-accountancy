import type { ServiceSlug } from "@/lib/site";

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  href: string;
  summary: string;
  description: string;
  audience: string;
  problems: string[];
  offerings: string[];
  cta: string;
  crossSells?: { title: string; body: string; href: string; linkLabel: string }[];
};

export type ServiceGroup = {
  slug: string;
  name: string;
  summary: string;
  serviceSlugs: ServiceSlug[];
};

export const services: Service[] = [
  {
    slug: "personal-tax",
    name: "Personal Tax Preparation",
    shortName: "Personal Tax",
    href: "/services/personal-tax",
    summary:
      "Professional assistance preparing individual federal and state tax returns.",
    description:
      "Whether your income is straightforward or more complex, DeFi Accountancy helps individuals prepare accurate federal and state tax returns with clear guidance along the way.",
    audience:
      "Individuals with W-2, 1099, self-employment, investment, rental, or other personal tax situations.",
    problems: [
      "Unsure which documents you need",
      "Multiple income sources to report",
      "Prior-year or amended returns",
      "Wanting clear explanations—not jargon",
    ],
    offerings: [
      "Federal tax returns",
      "State tax returns",
      "W-2 and 1099 income",
      "Self-employment income",
      "Investment and rental income",
      "Prior-year returns",
      "Amended returns",
      "Estimated taxes",
      "Tax planning conversations",
    ],
    cta: "Get Help With Your Taxes",
  },
  {
    slug: "business-tax",
    name: "Business Tax Preparation",
    shortName: "Business Tax",
    href: "/services/business-tax",
    summary:
      "Tax preparation and support for businesses and business owners.",
    description:
      "From sole proprietors to corporations, we help business owners meet filing requirements and prepare for tax season with organized, professional support.",
    audience:
      "Sole proprietors, LLCs, partnerships, S corporations, and C corporations.",
    problems: [
      "Business returns that feel overwhelming",
      "Year-end prep starting too late",
      "Uncertainty about deductions and estimates",
      "Need for entity-related tax support",
    ],
    offerings: [
      "Federal business tax returns",
      "State business tax returns",
      "Estimated tax assistance",
      "Business deductions guidance",
      "Year-end preparation",
      "Tax planning",
      "Entity-related tax support",
    ],
    cta: "Discuss Your Business Taxes",
    crossSells: [
      {
        title: "Need Help Keeping Your Books Tax-Ready?",
        body: "Accurate monthly books make business tax preparation smoother and less stressful.",
        href: "/services/bookkeeping",
        linkLabel: "Explore Bookkeeping",
      },
    ],
  },
  {
    slug: "bookkeeping",
    name: "Bookkeeping",
    shortName: "Bookkeeping",
    href: "/services/bookkeeping",
    summary:
      "Monthly, catch-up, and cleanup bookkeeping services for businesses.",
    description:
      "Keep your books organized all year—not just at tax time. DeFi Accountancy provides monthly bookkeeping plus catch-up and cleanup support when records have fallen behind.",
    audience:
      "Business owners who want cleaner records, better visibility, and easier tax preparation.",
    problems: [
      "Books that are months behind",
      "Unclear profit and cash position",
      "Stressful year-end tax prep",
      "Need for ongoing professional support",
    ],
    offerings: [
      "Monthly bookkeeping",
      "Transaction categorization",
      "Bank reconciliation",
      "Credit-card reconciliation",
      "Profit and loss statements",
      "Balance sheets",
      "General ledger maintenance",
      "Catch-up bookkeeping",
      "Cleanup bookkeeping",
      "Year-end bookkeeping",
      "Bookkeeping preparation for tax season",
    ],
    cta: "Start Monthly Bookkeeping",
  },
  {
    slug: "payroll",
    name: "Payroll Services",
    shortName: "Payroll",
    href: "/services/payroll",
    summary:
      "Complete payroll support, from direct deposit and payroll taxes through quarterly and annual filings.",
    description:
      "DeFi Accountancy provides complete payroll services to help businesses pay employees accurately and stay on top of payroll tax obligations. Depending on your payroll system and approved scope, support can include payroll processing, direct deposit, payroll tax deposits and filings, quarterly and annual reporting, and year-end records.",
    audience:
      "Small businesses and employers who want reliable payroll processing, direct deposit, tax compliance, and organized payroll records.",
    problems: [
      "Payroll deadlines and tax deposits are difficult to track",
      "Need direct deposit and consistent pay runs",
      "Quarterly or annual payroll filings are coming due",
      "Payroll reports do not tie cleanly to the books",
      "Setting up, changing, or catching up a payroll process",
    ],
    offerings: [
      "Payroll setup and recurring processing",
      "Direct deposit coordination",
      "Payroll tax calculations, deposits, and filings",
      "Federal, state, and local payroll tax support as applicable",
      "Quarterly payroll tax filings",
      "Annual payroll filings and reconciliations",
      "Year-end W-2 and applicable contractor-form coordination",
      "Payroll registers and reporting",
      "Coordination with bookkeeping and tax preparation",
    ],
    cta: "Discuss Payroll Services",
    crossSells: [
      {
        title: "Keep Payroll and Books Aligned",
        body: "Organized payroll reports make monthly bookkeeping and year-end tax preparation easier to review.",
        href: "/services/bookkeeping",
        linkLabel: "Explore Bookkeeping",
      },
    ],
  },
  {
    slug: "sales-tax",
    name: "Sales Tax Services",
    shortName: "Sales Tax",
    href: "/services/sales-tax",
    summary:
      "Sales tax registration, reporting, filing, and related compliance support.",
    description:
      "Sales tax requirements vary by jurisdiction. We help businesses with registration, periodic reporting, and filing support within the areas we serve—without overpromising legal or jurisdiction-specific guarantees.",
    audience:
      "Businesses that collect or remittance sales tax and need reliable compliance support.",
    problems: [
      "Unsure how to register",
      "Missed or late filings",
      "Need help calculating and reporting",
      "Catch-up filings where supported",
    ],
    offerings: [
      "Sales tax registration",
      "Seller's permits where applicable",
      "Filing sales tax returns",
      "Sales tax calculation support",
      "Periodic reporting",
      "Compliance assistance",
      "Catch-up filings where supported",
    ],
    cta: "Get Help With Sales Tax",
  },
  {
    slug: "business-formation",
    name: "Business Formation",
    shortName: "Formation",
    href: "/services/business-formation",
    summary:
      "Assistance forming LLCs and corporations and establishing new businesses.",
    description:
      "Starting a business? Get the accounting and administrative foundation right from day one—formation support plus guidance on the tax and bookkeeping setup that follows.",
    audience:
      "New business owners forming an LLC or corporation and setting up their financial foundation.",
    problems: [
      "Unsure which entity structure to pursue",
      "Need help with formation paperwork",
      "Want EIN and initial registration support",
      "Need accounting setup after formation",
    ],
    offerings: [
      "LLC formation",
      "Corporation formation",
      "EIN assistance where applicable",
      "Initial registrations",
      "Tax and accounting setup",
      "Entity-related guidance within our professional scope",
    ],
    cta: "Start Your Business",
    crossSells: [
      {
        title: "After You Form Your Business",
        body: "Many new businesses next need bookkeeping, sales tax registration, licensing, and business tax support.",
        href: "/services/bookkeeping",
        linkLabel: "See Bookkeeping Services",
      },
    ],
  },
  {
    slug: "business-licenses",
    name: "Business Licensing & Compliance",
    shortName: "Licensing",
    href: "/services/business-licenses",
    summary:
      "Assistance navigating business licenses and related registration requirements.",
    description:
      "Licenses, renewals, and registrations can be easy to overlook. We help business owners navigate common licensing and compliance administration within the jurisdictions we support.",
    audience:
      "Business owners who need help with licenses, renewals, and related registrations.",
    problems: [
      "Unclear which licenses apply",
      "Renewal deadlines approaching",
      "Need registration support",
      "Want coordinated sales tax registration help",
    ],
    offerings: [
      "Business license assistance",
      "Registration support",
      "Renewals",
      "Sales tax registration",
      "Local or state business requirements within supported jurisdictions",
      "General compliance administration",
    ],
    cta: "Get Licensing Help",
  },
];

/** The four simple service areas visitors see first, with detailed pages kept underneath. */
export const serviceGroups: ServiceGroup[] = [
  {
    slug: "tax-planning-preparation",
    name: "Tax Planning & Preparation",
    summary:
      "Personal and business tax returns with planning conversations to help you make informed decisions before deadlines.",
    serviceSlugs: ["personal-tax", "business-tax"],
  },
  {
    slug: "bookkeeping-financial-reporting",
    name: "Bookkeeping & Financial Reporting",
    summary:
      "Monthly, catch-up, and cleanup bookkeeping that keeps records organized and easier to use.",
    serviceSlugs: ["bookkeeping"],
  },
  {
    slug: "payroll-services",
    name: "Payroll Services",
    summary:
      "Complete payroll support, from direct deposit and payroll taxes through quarterly and annual filings.",
    serviceSlugs: ["payroll"],
  },
  {
    slug: "business-setup-compliance",
    name: "Business Setup & Compliance",
    summary:
      "Formation, sales tax, licensing, and related administrative support for businesses.",
    serviceSlugs: ["business-formation", "sales-tax", "business-licenses"],
  },
];

export function getService(slug: ServiceSlug): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
