import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { industries } from "@/lib/industries";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import "@fontsource-variable/dm-sans";
import "@fontsource-variable/source-serif-4";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.seoTitle}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.seoTitle}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.seoTitle}`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "@id": `${siteConfig.url}#accounting-service`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneE164,
  email: siteConfig.email,
  image: `${siteConfig.url}/logo.png`,
  serviceType: services.map((service) => service.name),
  knowsAbout: industries.map((industry) => industry.name),
  areaServed: [
    {
      "@type": "City",
      name: siteConfig.location.city,
      containedInPlace: {
        "@type": "State",
        name: "California",
        containedInPlace: {
          "@type": "Country",
          name: "United States",
        },
      },
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "15:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "font-sans",
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
