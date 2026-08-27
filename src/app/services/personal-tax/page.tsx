import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";

export const metadata: Metadata = serviceMetadata("personal-tax");

export default function PersonalTaxPage() {
  return <ServicePage slug="personal-tax" />;
}
