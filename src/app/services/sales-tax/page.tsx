import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";

export const metadata: Metadata = serviceMetadata("sales-tax");

export default function SalesTaxPage() {
  return <ServicePage slug="sales-tax" />;
}
