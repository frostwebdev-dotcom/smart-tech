import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for your next web, app, SaaS, or AI project. We respond within 1–2 business days.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Contact
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Tell us about your project—goals, timeline, and budget. We&apos;ll get back within 1–2 business days with next steps.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Email
              </h2>
              <a
                href="mailto:hello@smarttech.example.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                <Mail className="h-5 w-5" aria-hidden />
                hello@smarttech.example.com
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                Replace with your real email in the codebase.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Schedule a call
              </h2>
              <p className="text-sm text-muted-foreground">
                Optional: add a Calendly or similar link here for booked calls.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
