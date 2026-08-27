import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";

export const metadata: Metadata = serviceMetadata("business-licenses");

export default function BusinessLicensesPage() {
  return <ServicePage slug="business-licenses" />;
}
