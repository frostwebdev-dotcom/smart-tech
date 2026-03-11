import type { ServiceItem, ProjectItem, TestimonialItem } from "@/types";

export const SITE_NAME = "SmartTech";
export const SITE_DESCRIPTION =
  "Top-tier AI solutions and custom software for modern businesses. Web, app, SaaS development, AI integration, and automation. We build intelligent digital products that scale.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://smarttech.example.com";

/** Display format for UI; use PHONE_TEL for href. */
export const PHONE_NUMBER = "+1 (720) 810-2002";
export const PHONE_TEL = "tel:+17208102002";

export const CONTACT_EMAIL = "hi@smartechinc.com";
export const CONTACT_EMAIL_MAILTO = "mailto:hi@smartechinc.com";

export const SERVICES: ServiceItem[] = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Custom websites and web applications built for performance, SEO, and conversion. From marketing sites to complex web apps.",
    icon: "Globe",
    features: ["Responsive design", "SEO optimization", "Fast performance", "CMS integration"],
  },
  {
    id: "saas",
    title: "SaaS Development",
    description:
      "Scalable software-as-a-service platforms with subscription billing, multi-tenancy, and secure architecture.",
    icon: "Layers",
    features: ["Scalable architecture", "Subscription billing", "Analytics & dashboards", "API design"],
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. User-focused design and robust backend integration.",
    icon: "Smartphone",
    features: ["iOS & Android", "Cross-platform option", "Push & offline", "App store deployment"],
  },
  {
    id: "ai",
    title: "AI Solutions & Integration",
    description:
      "AI-powered features, automation, and intelligent workflows. Custom AI integration for websites, apps, and internal tools.",
    icon: "Brain",
    features: ["AI integration", "Workflow automation", "Custom ML solutions", "LLM & chatbots"],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "User-centered interface and experience design. Wireframes, prototypes, and design systems that drive engagement.",
    icon: "Palette",
    features: ["User research", "Prototyping", "Design systems", "Accessibility"],
  },
  {
    id: "automation",
    title: "Automation & API Integration",
    description:
      "Streamline operations with custom APIs, integrations, and workflow automation. Connect your tools and reduce manual work.",
    icon: "Zap",
    features: ["API development", "Third-party integrations", "Workflow automation", "Data pipelines"],
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "1",
    title: "Enterprise SaaS Platform",
    category: "SaaS",
    description: "Full-stack subscription platform with analytics, team management, and billing.",
    problem: "Client needed a unified product replacing multiple spreadsheets and tools.",
    solution: "Custom SaaS with role-based access, Stripe billing, and real-time dashboards.",
    impact: "50% reduction in operational overhead; 200+ active teams.",
    techStack: ["Next.js", "PostgreSQL", "Stripe", "Vercel"],
  },
  {
    id: "2",
    title: "AI-Powered Workflow Tool",
    category: "AI Solutions",
    description: "Internal tool that automates document processing and decision routing using AI.",
    problem: "Manual document review was slow and error-prone.",
    solution: "Custom AI pipeline with document classification and approval workflows.",
    impact: "80% faster processing; consistent compliance.",
    techStack: ["Python", "OpenAI", "React", "Supabase"],
  },
  {
    id: "3",
    title: "E-commerce & Marketing Site",
    category: "Web",
    description: "High-converting e-commerce site with blog, SEO, and checkout optimization.",
    problem: "Outdated site with poor mobile experience and weak SEO.",
    solution: "New design system, headless CMS, and optimized checkout flow.",
    impact: "2x mobile conversion; top 3 for target keywords.",
    techStack: ["Next.js", "Shopify", "Contentful", "Tailwind"],
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery",
    description: "We learn your goals, users, and constraints so the solution fits your business.",
  },
  {
    step: 2,
    title: "Strategy",
    description: "Scope, architecture, and roadmap aligned with your timeline and budget.",
  },
  {
    step: 3,
    title: "Development",
    description: "Iterative builds with clear milestones, modern stack, and quality standards.",
  },
  {
    step: 4,
    title: "Launch",
    description: "Deployment, monitoring, and handover so you can run and iterate with confidence.",
  },
  {
    step: 5,
    title: "Support",
    description: "Ongoing maintenance, updates, and support when you need it.",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote:
      "SmartTech delivered our SaaS platform on time and within budget. The team understood our domain quickly and the result has been reliable and scalable.",
    author: "Sarah Chen",
    role: "COO",
    company: "TechFlow Inc.",
  },
  {
    id: "2",
    quote:
      "We needed AI integration that actually worked for our workflows. They built a custom solution that our team uses every day—huge efficiency gain.",
    author: "James Mitchell",
    role: "Head of Operations",
    company: "DataFirst",
  },
  {
    id: "3",
    quote:
      "Professional from day one. Clear communication, strong technical execution, and a product that our clients love. We will work with them again.",
    author: "Elena Rodriguez",
    role: "Founder",
    company: "ScaleUp Labs",
  },
];
