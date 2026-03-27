"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Heart, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER, PHONE_TEL, CONTACT_EMAIL, CONTACT_EMAIL_MAILTO } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center overflow-x-clip pt-24 pb-16 md:pt-32 md:pb-24"
      aria-label="Hero"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(160deg, var(--hero-gradient-start) 0%, var(--hero-gradient-end) 50%, var(--hero-gradient-start) 100%)`,
        }}
      />
      <div className="absolute inset-0 -z-10 hero-pattern opacity-50" />
      <div className="absolute top-1/4 -right-[20%] h-[min(28rem,90vw)] w-[min(28rem,90vw)] rounded-full bg-primary/10 blur-3xl sm:right-0 sm:h-[480px] sm:w-[480px] -z-10" />
      <div className="absolute bottom-1/4 -left-[15%] h-[min(22rem,85vw)] w-[min(22rem,85vw)] rounded-full bg-primary/8 blur-3xl sm:left-0 sm:h-[360px] sm:w-[360px] -z-10" />

      <div className="container mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-primary/20 bg-card/90 px-4 py-2 text-center text-sm text-muted-foreground backdrop-blur-sm sm:inline-flex sm:justify-start"
          >
            <Sparkles className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            <span className="text-balance">Web • App • SaaS • AI & Automation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.12] tracking-tight text-balance text-foreground"
          >
            Your idea deserves software that&nbsp;<span className="text-primary">shines</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            We turn your vision into software you can be proud of—so you can focus on what you love. From first idea to scale-up, we&apos;re here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap"
          >
            <Button asChild size="lg" className="w-full gap-2 text-base shadow-lg shadow-primary/25 sm:w-auto">
              <Link href="/contact">
                Start your project
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full gap-2 text-base sm:w-auto">
              <Link href="/projects">View our work</Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 flex max-w-xl items-start gap-2 text-sm text-muted-foreground sm:items-center"
          >
            <Heart className="mt-0.5 h-4 w-4 shrink-0 text-primary/70 sm:mt-0" aria-hidden />
            <span className="text-pretty">Loved by founders and teams who care about quality</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.48, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 flex min-w-0 max-w-full flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6"
          >
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden />
              {PHONE_NUMBER}
            </a>
            <a
              href={CONTACT_EMAIL_MAILTO}
              className="inline-flex min-w-0 max-w-full items-start gap-2 font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              title={CONTACT_EMAIL}
            >
              <Mail className="mt-0.5 h-4 w-4 shrink-0 sm:mt-0" aria-hidden />
              <span className="min-w-0 break-all">{CONTACT_EMAIL}</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.56, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative mt-12 overflow-hidden rounded-2xl border border-primary/20 bg-slate-950/40 shadow-[0_25px_70px_rgba(2,6,23,0.45)]"
        >
          <video
            className="aspect-video w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="SmartTech hero showcase video"
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/20" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-6 text-center"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            See what we build
            <ArrowRight className="h-4 w-4 rotate-90" aria-hidden />
          </a>
        </motion.p>
      </div>
    </section>
  );
}
