"use client";

import { useActionState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import {
  submitConsultation,
  type ConsultationState,
} from "@/app/actions/consultation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  consultationServiceOptions,
  type ConsultationService,
  slugToConsultationService,
  type ServiceSlug,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const initialState: ConsultationState = {
  ok: false,
  message: "",
};

type ConsultationFormProps = {
  defaultService?: ConsultationService;
  defaultIntent?: string;
  className?: string;
};

export function ConsultationForm({
  defaultService,
  defaultIntent,
  className,
}: ConsultationFormProps) {
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    submitConsultation,
    initialState
  );

  const serviceParam = searchParams.get("service");
  const intentParam = searchParams.get("intent") ?? defaultIntent ?? "";

  const resolvedService: ConsultationService =
    defaultService ??
    (serviceParam && serviceParam in slugToConsultationService
      ? slugToConsultationService[serviceParam as ServiceSlug]
      : consultationServiceOptions.some((o) => o.value === serviceParam)
        ? (serviceParam as ConsultationService)
        : "personal-taxes");

  useEffect(() => {
    if (!state.message) return;
    if (state.ok) {
      toast.success(state.message);
      formRef.current?.reset();
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className={cn("space-y-5", className)}
      noValidate
    >
      <input type="hidden" name="sourcePath" value="/contact" />
      <input type="hidden" name="intent" value={intentParam} />

      {/* Honeypot */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            required
            autoComplete="name"
            aria-invalid={Boolean(state.fieldErrors?.fullName)}
          />
          {state.fieldErrors?.fullName?.[0] ? (
            <p className="text-sm text-destructive">
              {state.fieldErrors.fullName[0]}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(state.fieldErrors?.email)}
          />
          {state.fieldErrors?.email?.[0] ? (
            <p className="text-sm text-destructive">
              {state.fieldErrors.email[0]}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            aria-invalid={Boolean(state.fieldErrors?.phone)}
          />
          {state.fieldErrors?.phone?.[0] ? (
            <p className="text-sm text-destructive">
              {state.fieldErrors.phone[0]}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">What do you need help with?</Label>
          <select
            id="service"
            name="service"
            required
            defaultValue={resolvedService}
            className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-invalid={Boolean(state.fieldErrors?.service)}
          >
            {consultationServiceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {state.fieldErrors?.service?.[0] ? (
            <p className="text-sm text-destructive">
              {state.fieldErrors.service[0]}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="preferredContact">
            Preferred Contact Method{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <select
            id="preferredContact"
            name="preferredContact"
            defaultValue=""
            className="flex h-10 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <option value="">No preference</option>
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="businessName">
            Business Name{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="businessName"
            name="businessName"
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Briefly tell us what you need</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          className="min-h-28"
          aria-invalid={Boolean(state.fieldErrors?.message)}
        />
        {state.fieldErrors?.message?.[0] ? (
          <p className="text-sm text-destructive">
            {state.fieldErrors.message[0]}
          </p>
        ) : null}
      </div>

      <p className="rounded-lg border border-border bg-muted/60 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
        Please do not include Social Security numbers, tax documents, banking
        information, passwords, or other sensitive financial information in this
        form. Sensitive information should only be exchanged through an approved
        secure method.
      </p>

      <Button type="submit" variant="brand" size="lg" disabled={pending}>
        {pending ? "Sending…" : "Request a Consultation"}
      </Button>
    </form>
  );
}
