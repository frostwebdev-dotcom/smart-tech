import type { ContactFormData, ProjectType, BudgetRange, Timeline } from "@/types";

const PROJECT_TYPES: ProjectType[] = [
  "website",
  "web-app",
  "saas",
  "mobile-app",
  "ui-ux",
  "api-automation",
  "ai-integration",
  "maintenance",
  "other",
];

const BUDGET_RANGES: BudgetRange[] = [
  "under-10k",
  "10k-25k",
  "25k-50k",
  "50k-100k",
  "100k-plus",
  "undecided",
];

const TIMELINES: Timeline[] = [
  "asap",
  "1-3-months",
  "3-6-months",
  "6-12-months",
  "exploring",
];

function sanitizeString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email) && email.length <= 254;
}

export function validateContactForm(formData: FormData): {
  success: true;
  data: ContactFormData;
} | {
  success: false;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};
  const fullName = sanitizeString(formData.get("fullName"), 200);
  const email = sanitizeString(formData.get("email"), 254);
  const company = sanitizeString(formData.get("company"), 200);
  const projectType = formData.get("projectType") as string;
  const budgetRange = formData.get("budgetRange") as string;
  const timeline = formData.get("timeline") as string;
  const message = sanitizeString(formData.get("message"), 5000);

  if (!fullName || fullName.length < 2) {
    errors.fullName = "Please enter your full name (at least 2 characters).";
  }
  if (!email) {
    errors.email = "Email is required.";
  } else if (!isValidEmail(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!projectType || !PROJECT_TYPES.includes(projectType as ProjectType)) {
    errors.projectType = "Please select a project type.";
  }
  if (!budgetRange || !BUDGET_RANGES.includes(budgetRange as BudgetRange)) {
    errors.budgetRange = "Please select a budget range.";
  }
  if (!timeline || !TIMELINES.includes(timeline as Timeline)) {
    errors.timeline = "Please select a timeline.";
  }
  if (!message || message.length < 20) {
    errors.message = "Please provide a message (at least 20 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    data: {
      fullName,
      email,
      company: company || undefined,
      projectType: projectType as ProjectType,
      budgetRange: budgetRange as BudgetRange,
      timeline: timeline as Timeline,
      message,
    },
  };
}
