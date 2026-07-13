import project1 from "../../assets/projects/project-1.jpg";
import project2 from "../../assets/projects/project-2.jpg";
import project3 from "../../assets/projects/project-3.jpg";
import project4 from "../../assets/projects/project-4.jpg";
import type { CareerEntry, Project, SkillGroup } from "@/src/types/portfolio";

export const profile = {
  name: "Manash Gupta",
  role: "Senior full-stack engineer",
  proposition: "I turn complex product ideas into calm, scalable software—from interface to infrastructure.",
  email: "manash.9039@gmail.com",
  phone: "9039784916",
  location: "Raigarh, Chhattisgarh, India",
  github: "https://github.com/manash-codes",
  linkedin: "https://www.linkedin.com/in/manash-gupta/",
};

export const career: CareerEntry[] = [
  {
    period: "2025—2026",
    role: "Full Stack Developer",
    company: "Gopropify Pvt. Ltd.",
    summary: "Built product features across React, Node.js and FastAPI, with AI-assisted workflows at the core.",
    achievements: ["Applied RAG patterns to product capabilities.", "Integrated real-time communication with WebSockets.", "Worked across Supabase, Redis, and responsive product interfaces."],
    signals: [{ label: "AI work", value: "RAG" }, { label: "Systems", value: "Realtime" }],
  },
  {
    period: "2025",
    role: "Senior Associate Software Engineer",
    company: "Techno Exponent",
    summary: "Delivered TypeScript and React product work while collaborating across product and engineering.",
    achievements: ["Developed responsive application features.", "Integrated WebSocket-driven experiences.", "Worked with Node.js, MongoDB, and AWS."],
    signals: [{ label: "Focus", value: "TypeScript" }, { label: "Cloud", value: "AWS" }],
  },
  {
    period: "2023—2024",
    role: "Software Engineer",
    company: "Techment Technology",
    summary: "Designed Next.js and React interfaces connected to typed API systems.",
    achievements: ["Implemented responsive Next.js experiences.", "Integrated frontend components with tRPC APIs.", "Optimized frontend performance across product surfaces."],
    signals: [{ label: "Platform", value: "Next.js" }, { label: "APIs", value: "tRPC" }],
  },
  {
    period: "2022",
    role: "Software Developer",
    company: "Divyal Technologies",
    summary: "Contributed to web products spanning Angular, ColdFusion, and MySQL.",
    achievements: ["Built and maintained application features.", "Implemented data-storage solutions in MySQL.", "Partnered with product managers on prioritization."],
    signals: [{ label: "Foundation", value: "Full stack" }, { label: "Data", value: "MySQL" }],
  },
];

export const skillGroups: SkillGroup[] = [
  { id: "frontend", title: "Frontend engineering", description: "Interfaces with a clear hierarchy, useful motion, and measured performance.", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Angular"] },
  { id: "backend", title: "Backend systems", description: "Typed APIs and data flows built for real product constraints.", skills: ["Node.js", "tRPC", "FastAPI", "PostgreSQL", "MongoDB", "Redis"] },
  { id: "cloud", title: "DevOps & cloud", description: "Delivery pipelines and infrastructure that keep releases predictable.", skills: ["AWS", "Docker", "Jenkins", "Vercel", "GitHub Actions"] },
  { id: "ai", title: "AI & automation", description: "Practical AI features with retrieval, evaluation, and human context.", skills: ["RAG", "OpenAI", "LangChain", "AI agents", "Claude Code"] },
  { id: "architecture", title: "Architecture", description: "Systems shaped around boundaries, observability, and change over time.", skills: ["System design", "WebSockets", "Caching", "Event flows", "API design"] },
];

export const projects: Project[] = [
  { title: "Leading Debate Company", image: project1, problem: "Participants needed one dependable place to navigate rankings, events, and debate performance.", outcome: "A focused platform for public-forum, LD, and policy debate participants.", decisions: ["Next.js for a fast application shell.", "tRPC to keep client and server contracts aligned.", "PostgreSQL for structured ranking and event data."], stack: ["Next.js", "React", "tRPC", "PostgreSQL", "Tailwind"], architecture: ["Next.js client", "tRPC API", "PostgreSQL"], metrics: [{ label: "Domain", value: "Competitive debate" }, { label: "Impact", value: "Details private" }] },
  { title: "Pharmaceutical Product Management", image: project2, problem: "Product and research information needed a clearer, maintainable presentation layer.", outcome: "A publishing-oriented experience for showcasing products and research.", decisions: ["Webflow for content authoring velocity.", "Figma-led interface system.", "Finsweet conventions for maintainable CMS behavior."], stack: ["Webflow", "Figma", "Finsweet"], architecture: ["CMS", "Content model", "Publishing layer"], metrics: [{ label: "Domain", value: "Pharmaceutical" }, { label: "Impact", value: "Details private" }] },
  { title: "Personal Portfolio", image: project3, problem: "A personal site should communicate engineering judgment, not just list tools.", outcome: "A responsive portfolio built for project storytelling and direct contact.", decisions: ["React component model for maintainability.", "Tailwind for a deliberate visual system.", "Vercel for simple, reliable delivery."], stack: ["React", "Tailwind", "Vercel"], architecture: ["Static app", "Component system", "Edge delivery"], metrics: [{ label: "Audience", value: "Hiring teams" }, { label: "Outcome", value: "Portfolio" }], github: "https://github.com/manash-codes" },
  { title: "Builder CRM", image: project4, problem: "A construction-oriented team needed a structured workflow for content and customer information.", outcome: "A business application with publishing, profile, and collaboration features.", decisions: ["Angular for structured client modules.", "MySQL for relational storage.", "Angular Material for consistent workflows."], stack: ["Angular", "ColdFusion", "MySQL", "Angular Material"], architecture: ["Angular client", "Application server", "MySQL"], metrics: [{ label: "Domain", value: "Construction" }, { label: "Impact", value: "Details private" }] },
];

export const terminalLines = ["$ git status", "On branch main · working tree clean", "$ pnpm ship --scope=product", "✓ api contracts verified", "✓ image budgets within target", "✓ release ready"];

export const buildPractices = [
  ["System design", "Start with the decision boundaries: users, failure modes, data ownership, and the changes the product must survive."],
  ["Development workflow", "Make the smallest valuable slice observable, reviewable, and safe to release before broadening it."],
  ["AI-assisted engineering", "Use agents to accelerate exploration and repetition; keep architecture, evaluation, and product judgment human-owned."],
  ["Testing strategy", "Prefer confidence at the seam: typed contracts, focused unit tests, integration paths, and critical user journeys."],
  ["CI/CD", "Automate the checks that protect user trust, then keep releases boring, reversible, and visible."],
  ["Performance", "Treat speed as part of the design: ship less JavaScript, optimize media, and measure real interaction cost."],
] as const;
