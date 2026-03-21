import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { CONTACT_EMAIL, CONTACT_EMAIL_MAILTO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for SmartTech agency website and services.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US")}
          </p>
        </div>
      </section>

      <SectionWrapper className="pt-0">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            1. Introduction
          </h2>
          <p className="text-muted-foreground">
            SmartTech (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This policy describes how we collect, use, and protect information when you use our website or contact us.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            2. Information we collect
          </h2>
          <p className="text-muted-foreground">
            When you submit our contact form, we collect the information you provide: name, email, company (optional), project type, budget range, timeline, and message. We may also collect technical data such as IP address and browser type for security and analytics.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            3. How we use your information
          </h2>
          <p className="text-muted-foreground">
            We use your information to respond to inquiries, provide services, improve our website, and communicate with you about projects. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            4. Data storage and security
          </h2>
          <p className="text-muted-foreground">
            Contact form submissions are stored securely. We use industry-standard measures to protect your data. Data may be stored in the European Union or United States depending on our service providers.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            5. Cookies and analytics
          </h2>
          <p className="text-muted-foreground">
            Our website may use cookies and similar technologies for functionality and analytics. You can control cookies through your browser settings.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            6. Your rights
          </h2>
          <p className="text-muted-foreground">
            You may request access, correction, or deletion of your personal data. Contact us at the email address on our website to exercise these rights.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            7. Changes
          </h2>
          <p className="text-muted-foreground">
            We may update this policy from time to time. The &quot;Last updated&quot; date at the top will reflect any changes.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            8. Contact
          </h2>
          <p className="text-muted-foreground">
            For privacy-related questions, contact us at{" "}
            <a
              href={CONTACT_EMAIL_MAILTO}
              className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </SectionWrapper>

      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Link
            href="/"
            className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
