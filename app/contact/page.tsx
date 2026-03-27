import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Mail, Phone } from "lucide-react";
import { PHONE_NUMBER, PHONE_TEL, CONTACT_EMAIL, CONTACT_EMAIL_MAILTO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for your next web, app, SaaS, or AI project. We respond within 1–2 business days.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
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
                Phone
              </h2>
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                <Phone className="h-5 w-5" aria-hidden />
                {PHONE_NUMBER}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                Call us anytime—we&apos;d love to hear about your project.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-2">
                Email
              </h2>
              <a
                href={CONTACT_EMAIL_MAILTO}
                className="flex min-w-0 max-w-full items-start gap-2 break-all text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              >
                <Mail className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                {CONTACT_EMAIL}
              </a>
              <p className="mt-2 text-sm text-muted-foreground">
                We respond within 1–2 business days.
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
