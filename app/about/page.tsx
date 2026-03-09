import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "SmartTech is a software development agency focused on web, app, SaaS, and AI solutions. We help businesses scale through reliable engineering and clear process.",
};

const values = [
  "Clear communication and realistic timelines",
  "Quality code and maintainable architecture",
  "Business outcomes over buzzwords",
  "Long-term support and partnership",
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              About us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We are a software development agency that builds web applications, SaaS platforms, and AI-powered solutions for businesses that want to move fast without cutting corners.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              Mission
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We help companies turn ideas into reliable digital products. From custom websites and web apps to full SaaS platforms and AI integration, we focus on solutions that scale and are easy to maintain. We combine strong engineering with a clear process so you get predictable delivery and long-term value.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              How we work
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We start with discovery: understanding your goals, users, and constraints. Then we align on scope, architecture, and timeline. Development is iterative, with regular check-ins and milestones. We use modern stacks, secure practices, and clean code so your product is ready for launch and future growth.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-accent/30">
        <h2 className="text-2xl font-semibold text-foreground mb-8">
          What we stand for
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
          {values.map((v) => (
            <li key={v} className="flex gap-3">
              <CheckCircle2
                className="h-5 w-5 text-primary shrink-0 mt-0.5"
                aria-hidden
              />
              <span className="text-muted-foreground">{v}</span>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper>
        <div className="rounded-xl border border-border bg-card p-8 md:p-12 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-foreground">
            Team &amp; leadership
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our team combines experience in product development, engineering, and design. We work as a single unit so you get consistent quality and one point of contact. Replace this section with your own team or founder story when ready.
          </p>
        </div>
      </SectionWrapper>

      <section className="py-16 md:py-24 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <h2 className="text-2xl font-semibold text-foreground">
            Let&apos;s work together
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Tell us about your project and we&apos;ll get back with a clear plan.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
