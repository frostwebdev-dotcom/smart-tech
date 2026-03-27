"use client";

import { motion } from "framer-motion";
import { Rocket, Smile, Coffee } from "lucide-react";

const stats = [
  { value: "50+", label: "Projects delivered", icon: Rocket },
  { value: "98%", label: "Client satisfaction", icon: Smile },
  { value: "5+", label: "Years building together", icon: Coffee },
];

export function TrustSection() {
  return (
    <section className="py-14 md:py-20 border-y border-border bg-gradient-to-b from-accent/40 to-card/50" aria-label="Trust and credibility">
      <div className="container mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14">
          {stats.map((item, i) => {
            const Icon = item.icon;
            const slideFrom = i === 0 ? -48 : i === 1 ? 0 : 48;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: slideFrom, y: 32 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-12 text-center text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Trusted by founders and teams who care about their product—from first idea to scaling up.
        </motion.p>
      </div>
    </section>
  );
}
