"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--nav-border)] shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl"
        aria-label="Main navigation"
      >
        <div className="flex h-16 md:h-18 items-center justify-between">
          <Link
            href="/"
            className="font-heading text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
          >
            SmartTech
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-1",
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button asChild size="default">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <ul className="flex flex-col py-4 gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block py-3 px-4 rounded-lg text-sm font-medium transition-colors",
                        pathname === link.href
                          ? "text-primary bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2 px-4">
                  <Button asChild className="w-full" size="lg">
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Get in touch
                    </Link>
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
