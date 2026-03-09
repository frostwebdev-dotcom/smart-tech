"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessSection() {
  return (
    <SectionWrapper id="process" className="bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Our process</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          From your idea to launch
        </h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          A clear path so you always know what&apos;s next—and we stay aligned with what matters to you.
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
        {/* Connector line on desktop */}
        <div
          className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none"
          aria-hidden
        />
        {PROCESS_STEPS.map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="relative"
          >
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all h-full flex flex-col">
              <div
                className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm mb-4 shadow-md shadow-primary/20"
                aria-hidden
              >
                {item.step}
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
