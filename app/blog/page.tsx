import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/sections/section-wrapper";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on web development, SaaS, AI solutions, and software best practices.",
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Blog
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Articles on web development, SaaS, AI integration, and building better digital products. Coming soon.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="pt-0">
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <p className="text-muted-foreground">
            We&apos;re preparing content. Check back later or{" "}
            <Link
              href="/contact"
              className="text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              get in touch
            </Link>{" "}
            for updates.
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
