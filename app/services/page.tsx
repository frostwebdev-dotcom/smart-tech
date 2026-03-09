import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Layers,
  Smartphone,
  Brain,
  Palette,
  Zap,
  ArrowRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/sections/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Globe,
  Layers,
  Smartphone,
  Brain,
  Palette,
  Zap,
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, SaaS, mobile apps, AI solutions, UI/UX design, and automation. Custom software for growing businesses.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We design and build scalable digital products—from websites and web apps to SaaS platforms and AI-powered solutions. Every project is tailored to your goals and timeline.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;
            return (
              <Card
                key={service.id}
                id={service.id}
                className="overflow-hidden scroll-mt-24 transition-shadow hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="rounded-xl bg-primary/10 w-14 h-14 flex items-center justify-center text-primary mb-6">
                    <Icon className="h-7 w-7" aria-hidden />
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    {service.description}
                  </p>
                  {service.features && service.features.length > 0 && (
                    <ul className="mt-6 space-y-2" aria-label={`${service.title} features`}>
                      {service.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </SectionWrapper>

      <section className="py-16 md:py-24 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <h2 className="text-2xl font-semibold text-foreground">
            Not sure which service fits?
          </h2>
          <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
            Describe your project and we&apos;ll recommend the right approach.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact" className="gap-2">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
