"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Globe,
  Layers,
  Smartphone,
  Brain,
  Palette,
  Zap,
  ArrowRight,
} from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
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

export function ServicesPreview() {
  return (
    <SectionWrapper id="services" className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">What we do</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Built for your vision
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          From your first website to AI-powered tools and SaaS—we build what you imagine, with care for quality and your timeline.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link href={`/services#${service.id}`} className="block h-full group">
                <Card className="h-full transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:border-primary/30 group-hover:-translate-y-0.5">
                  <CardContent className="p-6">
                    <div className="rounded-xl bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                      Learn more
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Button asChild size="lg" variant="outline">
          <Link href="/services">View all services</Link>
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
