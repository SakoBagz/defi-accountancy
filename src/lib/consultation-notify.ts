import { consultationServiceOptions, siteConfig } from "@/lib/site";

export type ConsultationNotification = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredContact?: string | null;
  businessName?: string | null;
  intent?: string | null;
  sourcePath?: string | null;
};

function serviceLabel(value: string): string {
  return (
    consultationServiceOptions.find((option) => option.value === value)
      ?.label ?? value
  );
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatOptional(label: string, value?: string | null): string {
  if (!value?.trim()) return "";
  return `${label}: ${value.trim()}`;
}

function buildEmailContent(data: ConsultationNotification) {
  const service = serviceLabel(data.service);
  const preferredContact = data.preferredContact?.trim()
    ? data.preferredContact === "phone"
      ? "Phone"
      : "Email"
    : null;

  const lines = [
    "New consultation request on the DeFi Accountancy website.",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Service: ${service}`,
    formatOptional("Business name", data.businessName),
    formatOptional("Preferred contact", preferredContact),
    formatOptional("Intent", data.intent),
    formatOptional("Submitted from", data.sourcePath),
    "",
    "Message:",
    data.message,
  ].filter(Boolean);

  const text = lines.join("\n");

  const html = `
    <p>New consultation request on the DeFi Accountancy website.</p>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Name</td><td>${escapeHtml(data.fullName)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Email</td><td><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Phone</td><td><a href="tel:${escapeHtml(data.phone.replace(/\D/g, ""))}">${escapeHtml(data.phone)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;font-weight:600;">Service</td><td>${escapeHtml(service)}</td></tr>
      ${
        data.businessName?.trim()
          ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">Business</td><td>${escapeHtml(data.businessName)}</td></tr>`
          : ""
      }
      ${
        preferredContact
          ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">Preferred contact</td><td>${escapeHtml(preferredContact)}</td></tr>`
          : ""
      }
      ${
        data.intent?.trim()
          ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">Intent</td><td>${escapeHtml(data.intent)}</td></tr>`
          : ""
      }
      ${
        data.sourcePath?.trim()
          ? `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">Page</td><td>${escapeHtml(data.sourcePath)}</td></tr>`
          : ""
      }
    </table>
    <p style="font-family:sans-serif;font-size:14px;"><strong>Message</strong></p>
    <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
  `.trim();

  return { text, html, subject: `New consultation request — ${data.fullName}` };
}

export async function sendConsultationNotification(
  data: ConsultationNotification
): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("consultation notify skipped: RESEND_API_KEY is not set");
    return { ok: false, error: "missing_api_key" };
  }

  const to = process.env.CONSULTATION_NOTIFY_EMAIL ?? siteConfig.email;
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "DeFi Accountancy <notifications@thedefiaccountancy.com>";

  const { subject, html, text } = buildEmailContent(data);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject,
      html,
      text,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("consultation notify failed", response.status, body);
    return { ok: false, error: body };
  }

  return { ok: true };
}
