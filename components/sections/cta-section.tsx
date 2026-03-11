"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER, PHONE_TEL, CONTACT_EMAIL, CONTACT_EMAIL_MAILTO } from "@/lib/constants";

export function CtaSection() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      aria-label="Call to action"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(145deg, var(--primary-hover, #0f766e) 0%, var(--primary) 40%, var(--primary-hover, #0f766e) 100%)`,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_120%,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground"
        >
          Let&apos;s bring your idea to life
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-4 text-lg text-primary-foreground/90 max-w-xl mx-auto leading-relaxed"
        >
          Share your project or hobby—we&apos;ll reply with a clear plan and next steps. No pressure, just a friendly conversation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/95 shadow-xl shadow-black/20 gap-2 text-base"
          >
            <Link href="/contact">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <span className="text-primary-foreground/90 text-sm">or</span>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-2 text-primary-foreground font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            <Phone className="h-5 w-5 shrink-0" aria-hidden />
            {PHONE_NUMBER}
          </a>
          <span className="text-primary-foreground/70">·</span>
          <a
            href={CONTACT_EMAIL_MAILTO}
            className="inline-flex items-center gap-2 text-primary-foreground/90 font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
          >
            <Mail className="h-5 w-5 shrink-0" aria-hidden />
            {CONTACT_EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
