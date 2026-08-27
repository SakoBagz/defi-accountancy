"use server";

import { z } from "zod";
import { createSupabaseClient } from "@/lib/supabase";

const consultationSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().min(7, "Please enter a phone number.").max(40),
  service: z.enum([
    "personal-taxes",
    "business-taxes",
    "bookkeeping",
    "sales-tax",
    "business-formation",
    "business-licensing",
    "other",
  ]),
  message: z
    .string()
    .trim()
    .min(10, "Please briefly tell us what you need.")
    .max(2000),
  preferredContact: z.enum(["phone", "email"]).optional().or(z.literal("")),
  businessName: z.string().trim().max(160).optional().or(z.literal("")),
  intent: z.string().trim().max(80).optional().or(z.literal("")),
  sourcePath: z.string().trim().max(200).optional().or(z.literal("")),
  website: z.string().optional(), // honeypot
});

const SENSITIVE_PATTERN =
  /\b(ssn|social security|password|routing number|account number|itin)\b|\b\d{3}-\d{2}-\d{4}\b/i;

export type ConsultationState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitConsultation(
  _prev: ConsultationState,
  formData: FormData
): Promise<ConsultationState> {
  const raw = {
    fullName: String(formData.get("fullName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    service: String(formData.get("service") ?? ""),
    message: String(formData.get("message") ?? ""),
    preferredContact: String(formData.get("preferredContact") ?? ""),
    businessName: String(formData.get("businessName") ?? ""),
    intent: String(formData.get("intent") ?? ""),
    sourcePath: String(formData.get("sourcePath") ?? ""),
    website: String(formData.get("website") ?? ""),
  };

  // Honeypot — silently succeed for bots
  if (raw.website.trim()) {
    return {
      ok: true,
      message:
        "Thank you for contacting DeFi Accountancy. We have received your request and will be in touch.",
    };
  }

  const parsed = consultationSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please check the highlighted fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  const data = parsed.data;

  if (SENSITIVE_PATTERN.test(data.message) || SENSITIVE_PATTERN.test(data.fullName)) {
    return {
      ok: false,
      message:
        "Please do not include Social Security numbers, passwords, or other sensitive financial details in this form. Share those only through an approved secure method after we connect.",
    };
  }

  try {
    const supabase = createSupabaseClient();
    const { error } = await supabase.from("consultation_requests").insert({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      service: data.service,
      message: data.message,
      preferred_contact: data.preferredContact || null,
      business_name: data.businessName || null,
      intent: data.intent || null,
      source_path: data.sourcePath || null,
    });

    if (error) {
      console.error("consultation insert failed", error.message);
      return {
        ok: false,
        message:
          "We could not submit your request right now. Please call or email us directly.",
      };
    }

    return {
      ok: true,
      message:
        "Thank you for contacting DeFi Accountancy. We have received your request and will be in touch.",
    };
  } catch (err) {
    console.error("consultation submit error", err);
    return {
      ok: false,
      message:
        "We could not submit your request right now. Please call or email us directly.",
    };
  }
}
