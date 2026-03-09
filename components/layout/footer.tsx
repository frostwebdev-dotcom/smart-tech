import Link from "next/link";

const footerLinks = {
  main: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services#web", label: "Web Development" },
    { href: "/services#saas", label: "SaaS Development" },
    { href: "/services#ai", label: "AI Solutions" },
    { href: "/services#mobile", label: "Mobile Apps" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-heading text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
            >
              SmartTech
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              We build the digital products you imagine—with care for your vision, your timeline, and what you love doing.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SmartTech. All rights reserved.
          </p>
          <div className="flex gap-6" aria-label="Social links">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
              aria-label="Twitter"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
