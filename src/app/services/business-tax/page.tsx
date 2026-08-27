import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";

export const metadata: Metadata = serviceMetadata("business-tax");

export default function BusinessTaxPage() {
  return <ServicePage slug="business-tax" />;
}
