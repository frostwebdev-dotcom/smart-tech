"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" className="bg-accent/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          What clients say about us
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          We care about your success—here&apos;s what it&apos;s like to work together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => {
          const initials = t.author.split(" ").map((n) => n[0]).join("").slice(0, 2);
          return (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full border-border bg-card/80 hover:border-primary/20 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Quote className="h-9 w-9 text-primary/25" aria-hidden />
                  <blockquote className="mt-4 text-foreground leading-relaxed text-[15px]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-6 flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center font-heading font-semibold text-sm shrink-0"
                      aria-hidden
                    >
                      {initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </footer>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
