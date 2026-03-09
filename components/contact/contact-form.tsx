"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactState } from "@/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

const PROJECT_TYPE_OPTIONS = [
  { value: "", label: "Select project type" },
  { value: "website", label: "Website" },
  { value: "web-app", label: "Web Application" },
  { value: "saas", label: "SaaS Platform" },
  { value: "mobile-app", label: "Mobile App" },
  { value: "ui-ux", label: "UI/UX Design" },
  { value: "api-automation", label: "API / Automation" },
  { value: "ai-integration", label: "AI Integration / AI Solutions" },
  { value: "maintenance", label: "Maintenance & Support" },
  { value: "other", label: "Other" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "under-10k", label: "Under $10k" },
  { value: "10k-25k", label: "$10k – $25k" },
  { value: "25k-50k", label: "$25k – $50k" },
  { value: "50k-100k", label: "$50k – $100k" },
  { value: "100k-plus", label: "$100k+" },
  { value: "undecided", label: "Not sure yet" },
];

const TIMELINE_OPTIONS = [
  { value: "", label: "Select timeline" },
  { value: "asap", label: "ASAP" },
  { value: "1-3-months", label: "1–3 months" },
  { value: "3-6-months", label: "3–6 months" },
  { value: "6-12-months", label: "6–12 months" },
  { value: "exploring", label: "Just exploring" },
];

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <form
      action={formAction}
      className="space-y-6"
      noValidate
      aria-label="Contact form"
    >
      {state.status === "success" && (
        <div
          role="alert"
          className="rounded-lg border border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950 p-4 text-green-800 dark:text-green-200"
        >
          {state.message}
        </div>
      )}
      {state.status === "error" && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950 p-4 text-red-800 dark:text-red-200"
        >
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">
            Full name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            aria-invalid={state.status === "error" && !!state.errors?.fullName}
            aria-describedby={
              state.status === "error" && state.errors?.fullName
                ? "fullName-error"
                : undefined
            }
          />
          {state.status === "error" && state.errors?.fullName && (
            <p id="fullName-error" className="text-sm text-red-600 dark:text-red-400">
              {state.errors.fullName}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            aria-invalid={state.status === "error" && !!state.errors?.email}
            aria-describedby={
              state.status === "error" && state.errors?.email
                ? "email-error"
                : undefined
            }
          />
          {state.status === "error" && state.errors?.email && (
            <p id="email-error" className="text-sm text-red-600 dark:text-red-400">
              {state.errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company (optional)</Label>
        <Input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Your company"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType">
          Project type <span className="text-red-500">*</span>
        </Label>
        <Select
          id="projectType"
          name="projectType"
          required
          aria-invalid={state.status === "error" && !!state.errors?.projectType}
          aria-describedby={
            state.status === "error" && state.errors?.projectType
              ? "projectType-error"
              : undefined
          }
        >
          {PROJECT_TYPE_OPTIONS.map((opt) => (
            <option key={opt.value || "empty"} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
        {state.status === "error" && state.errors?.projectType && (
          <p id="projectType-error" className="text-sm text-red-600 dark:text-red-400">
            {state.errors.projectType}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="budgetRange">
            Budget range <span className="text-red-500">*</span>
          </Label>
          <Select
            id="budgetRange"
            name="budgetRange"
            required
            aria-invalid={state.status === "error" && !!state.errors?.budgetRange}
            aria-describedby={
              state.status === "error" && state.errors?.budgetRange
                ? "budgetRange-error"
                : undefined
            }
          >
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
          {state.status === "error" && state.errors?.budgetRange && (
            <p id="budgetRange-error" className="text-sm text-red-600 dark:text-red-400">
              {state.errors.budgetRange}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="timeline">
            Timeline <span className="text-red-500">*</span>
          </Label>
          <Select
            id="timeline"
            name="timeline"
            required
            aria-invalid={state.status === "error" && !!state.errors?.timeline}
            aria-describedby={
              state.status === "error" && state.errors?.timeline
                ? "timeline-error"
                : undefined
            }
          >
            {TIMELINE_OPTIONS.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
          {state.status === "error" && state.errors?.timeline && (
            <p id="timeline-error" className="text-sm text-red-600 dark:text-red-400">
              {state.errors.timeline}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, goals, and any constraints..."
          aria-invalid={state.status === "error" && !!state.errors?.message}
          aria-describedby={
            state.status === "error" && state.errors?.message
              ? "message-error"
              : undefined
          }
        />
        {state.status === "error" && state.errors?.message && (
          <p id="message-error" className="text-sm text-red-600 dark:text-red-400">
            {state.errors.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isPending} className="gap-2">
        {isPending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending...
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
