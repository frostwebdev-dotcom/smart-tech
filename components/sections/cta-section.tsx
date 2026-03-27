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
      <div className="container mx-auto min-w-0 max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading text-3xl text-balance md:text-4xl font-bold tracking-tight text-primary-foreground"
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
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-3 text-sm text-primary-foreground/80"
        >
          No sales pressure • Quick response • Clear communication
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-10 flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
        >
          <Button
            asChild
            size="lg"
            className="w-full gap-2 bg-white text-base text-primary shadow-xl shadow-black/20 hover:bg-white/95 sm:w-auto"
          >
            <Link href="/contact">
              Get in touch
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
            <span className="text-sm text-primary-foreground/90">or</span>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium text-primary-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden />
              {PHONE_NUMBER}
            </a>
            <span className="hidden text-primary-foreground/70 sm:inline" aria-hidden>
              ·
            </span>
            <a
              href={CONTACT_EMAIL_MAILTO}
              className="inline-flex max-w-full items-start justify-center gap-2 break-all text-center text-sm font-medium text-primary-foreground/90 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded sm:max-w-[min(100%,20rem)] sm:items-center sm:text-base"
              title={CONTACT_EMAIL}
            >
              <Mail className="mt-0.5 h-5 w-5 shrink-0 sm:mt-0" aria-hidden />
              {CONTACT_EMAIL}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
