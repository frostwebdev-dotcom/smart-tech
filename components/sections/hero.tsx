"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Code2, Sparkles, Heart, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_NUMBER, PHONE_TEL, CONTACT_EMAIL, CONTACT_EMAIL_MAILTO } from "@/lib/constants";

export function Hero() {
  const [showVideo, setShowVideo] = useState(true);
  const heroVideoSources = [
    "/videos/agency-showcase.webm",
    "/videos/agency-showcase.mp4",
  ];

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
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 md:mt-24 relative"
        >
          <div
            className="rounded-2xl overflow-hidden max-w-5xl mx-auto shadow-[0_35px_90px_rgba(0,0,0,0.45)] ring-1 ring-[#2f7a74]/50 border border-[#2b5b5b]/45"
            style={{ background: "#18262d" }}
          >
            <div className="aspect-video flex flex-col min-h-[220px]">
              {/* Window chrome */}
              <div
                className="flex items-center gap-2 px-4 py-3 border-b border-white/10"
                style={{ background: "linear-gradient(180deg, #14222d 0%, #0f1a23 100%)" }}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
              </div>
              {showVideo ? (
                <div className="relative flex-1 min-h-[160px]">
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onError={() => setShowVideo(false)}
                    aria-label="SmartTech service showcase video"
                  >
                    {heroVideoSources.map((src) => (
                      <source key={src} src={src} />
                    ))}
                  </video>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,13,18,0.16)_0%,rgba(6,13,18,0.36)_100%)]" />
                  <div className="absolute bottom-2 left-2 right-2 rounded-lg border border-white/15 bg-black/25 px-2 py-1.5 backdrop-blur-sm sm:bottom-4 sm:left-4 sm:right-auto sm:px-3 sm:py-2">
                    <p className="text-[11px] font-medium tracking-wide text-teal-100 sm:text-xs">
                      Real product work for web, SaaS, AI, and automation
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 p-7 md:p-9 min-h-[160px]">
                  {[
                    { Icon: Code2, label: "Web & App" },
                    { Icon: Sparkles, label: "AI Solutions" },
                    { Icon: Code2, label: "SaaS" },
                    { Icon: Sparkles, label: "Automation" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl flex flex-col items-center justify-center gap-3 p-4 md:p-6 min-h-[96px] transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                      style={{ background: "#23303a" }}
                    >
                      <item.Icon
                        className="h-8 w-8 md:h-9 md:w-9 shrink-0"
                        style={{ color: "#7fe0cf" }}
                        aria-hidden
                      />
                      <span
                        className="text-base font-semibold text-center tracking-tight"
                        style={{ color: "#7fe0cf" }}
                      >
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
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
