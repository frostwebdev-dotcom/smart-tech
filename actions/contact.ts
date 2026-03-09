"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { validateContactForm } from "@/lib/validations/contact";

export type ContactState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; errors?: Record<string, string> };

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validation = validateContactForm(formData);
  if (!validation.success) {
    return {
      status: "error",
      message: "Please fix the errors below.",
      errors: validation.errors,
    };
  }

  const { data } = validation;

  try {
    let supabase;
    try {
      supabase = createServerSupabaseClient();
    } catch (envErr) {
      console.error("Supabase not configured:", envErr);
      return {
        status: "error",
        message: "Contact form is not configured. Please email us directly.",
      };
    }
    const { error } = await supabase.from("leads").insert({
      full_name: data.fullName,
      email: data.email,
      company: data.company ?? null,
      project_type: data.projectType,
      budget_range: data.budgetRange,
      timeline: data.timeline,
      message: data.message,
      source: "contact_page",
    });

    if (error) {
      console.error("Supabase lead insert error:", error);
      return {
        status: "error",
        message: "Something went wrong. Please try again or email us directly.",
      };
    }

    return {
      status: "success",
      message: "Thanks for reaching out. We'll get back to you within 1–2 business days.",
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      status: "error",
      message: "Something went wrong. Please try again or email us directly.",
    };
  }
}
