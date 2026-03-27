"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const loopedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <SectionWrapper id="testimonials" className="bg-accent/30">
      <motion.div
        initial={{ opacity: 0, y: 56 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Testimonials</p>
        <h2 className="font-heading text-3xl text-balance md:text-4xl font-bold tracking-tight text-foreground">
          What clients say about us
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          We care about your success—here&apos;s what it&apos;s like to work together.
        </p>
      </motion.div>

      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background/90 to-transparent" />

        <motion.div
          className="flex w-max gap-6"
          animate={
            reduceMotion
              ? undefined
              : {
                  x: ["-50%", "0%"],
                }
          }
          transition={
            reduceMotion
              ? undefined
              : {
                  duration: 26,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }
          }
        >
          {loopedTestimonials.map((t, i) => {
            const initials = t.author.split(" ").map((n) => n[0]).join("").slice(0, 2);
            return (
              <div
                key={`${t.id}-${i}`}
                className="w-[84vw] max-w-[25rem] shrink-0 md:w-[22rem] lg:w-[24rem]"
              >
                <Card className="h-full border-border bg-card/80 transition-all hover:border-primary/20 hover:shadow-lg">
                  <CardContent className="p-6">
                    <Quote className="h-9 w-9 text-primary/25" aria-hidden />
                    <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <footer className="mt-6 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 font-heading text-sm font-semibold text-primary"
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
              </div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
