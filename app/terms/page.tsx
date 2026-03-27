import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { CONTACT_EMAIL, CONTACT_EMAIL_MAILTO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for SmartTech agency website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="container mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US")}
          </p>
        </div>
      </section>

      <SectionWrapper className="pt-0">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            1. Acceptance of terms
          </h2>
          <p className="text-muted-foreground">
            By accessing or using the SmartTech website and services, you agree to these Terms of Service. If you do not agree, do not use our website or services.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            2. Services
          </h2>
          <p className="text-muted-foreground">
            SmartTech provides custom software development, including web development, SaaS, mobile apps, AI solutions, and related services. Specific deliverables, timelines, and fees will be set out in separate agreements or statements of work.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            3. Use of website
          </h2>
          <p className="text-muted-foreground">
            You may use this website for lawful purposes only. You may not attempt to gain unauthorized access to our systems, transmit malware, or use the site in a way that could harm us or third parties.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            4. Intellectual property
          </h2>
          <p className="text-muted-foreground">
            Content on this website is owned by SmartTech or its licensors. Project work and intellectual property will be governed by the terms of your specific project agreement.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            5. Limitation of liability
          </h2>
          <p className="text-muted-foreground">
            To the extent permitted by law, SmartTech shall not be liable for indirect, incidental, or consequential damages arising from your use of the website or our services. Liability for project work will be set out in the relevant project agreement.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            6. Changes
          </h2>
          <p className="text-muted-foreground">
            We may update these terms from time to time. Continued use of the website after changes constitutes acceptance. The &quot;Last updated&quot; date reflects the latest version.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-2">
            7. Contact
          </h2>
          <p className="text-muted-foreground">
            For questions about these terms, contact us at{" "}
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
        <div className="container mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
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
