import type { Metadata } from "next";
import { ServicePage, serviceMetadata } from "@/components/service-page";

export const metadata: Metadata = serviceMetadata("business-formation");

export default function BusinessFormationPage() {
  return <ServicePage slug="business-formation" />;
}
