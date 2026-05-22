import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I build production-grade web platforms across UI, APIs, databases, and deployment workflows. My recent work spans Next.js App Router migrations, role-based dashboards, JWT authentication with RBAC, booking and payment systems, and AI-assisted product delivery that improves engineering velocity without compromising code quality.`;

export const ABOUT_TEXT = `I am a full stack developer and GenAI developer focused on building reliable, scalable, and user-friendly products. I work comfortably across React.js, Next.js, Node.js, Express.js, FastAPI, PostgreSQL, MySQL, MongoDB, Docker, Redis, Prisma, and cloud deployment workflows. I care about clean system design, API quality, performance optimization, and using AI tools thoughtfully to ship faster while keeping the product maintainable.`;

export const SKILLS = [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "Node.js",
    "Express.js",
    "FastAPI",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Prisma",
    "Redis",
    "Docker",
    "OpenAI",
    "Cursor AI",
];

export const STATS = [
    { value: "3x", label: "Engineering velocity boost with AI-assisted delivery" },
    { value: "100k+", label: "Records handled in booking, scheduling, and payments" },
    { value: "40%", label: "SEO improvement from Next.js App Router migration" },
];

export const SKILL_GROUPS = [
    {
        title: "Languages",
        items: ["JavaScript (ES6+)", "TypeScript", "Python"],
    },
    {
        title: "Frameworks",
        items: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI"],
    },
    {
        title: "Databases",
        items: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
        title: "Tools & Infra",
        items: ["Docker", "Redis", "Prisma", "Jenkins"],
    },
    {
        title: "Core Engineering",
        items: ["System Design", "API Design", "Performance Optimization"],
    },
    {
        title: "AI & LLM",
        items: ["OpenAI", "Cursor AI", "RAG", "Agent-based architectures"],
    },
];

export const EXPERIENCES = [
    {
        year: "Jun 2025 - Present",
        role: "Full Stack Developer I",
        company: "GoPropify Pvt. Ltd.",
        location: "Hybrid - Gurugram",
        description: `Own end-to-end delivery for core platform features across frontend, backend, APIs, and database architecture.`,
        highlights: [
            "Delivered 2 production-ready products in 6 months using AI-assisted development, accelerating engineering velocity by 3x.",
            "Refactored UI architecture with modern React patterns, improving development speed by 20% and performance by 30%.",
            "Designed role-based dashboards and JWT authentication with RBAC, improving productivity by 25% while strengthening access security.",
            "Built booking, scheduling, and payment systems handling 100k+ records, reducing manual effort by 50% and improving database performance by 40%.",
            "Integrated payments and analytics for seamless transaction tracking and data-driven insights.",
        ],
        technologies: ["React.js", "Next.js", "Node.js", "Express", "JWT", "RBAC", "Payments", "Analytics"],
    },
    {
        year: "Feb 2025 - May 2025",
        role: "Sr. Associate Software Engineer",
        company: "Techno Exponent",
        location: "Remote - Kolkata",
        description: `Led frontend development for enterprise systems with React and TypeScript.`,
        highlights: [
            "Integrated payments and analytics, improving transaction success rate by 20%.",
            "Built complex dynamic forms with validation workflows.",
            "Conducted code reviews and improved code quality across frontend delivery.",
            "Migrated a system to Next.js App Router, improving SEO by 40% and reducing build time by 30%.",
        ],
        technologies: ["React", "TypeScript", "Next.js App Router", "Payments", "Analytics", "Forms"],
    },
    {
        year: "Jan 2023 - Aug 2024",
        role: "Software Engineer",
        company: "Techment Technology",
        location: "Remote - Bhilai",
        description: `Delivered full product lifecycle work from design and implementation through deployment.`,
        highlights: [
            "Designed and developed user interfaces for web applications using Next.js and React.",
            "Worked closely with backend developers to integrate frontend components with tRPC APIs.",
            "Implemented responsive designs and optimized frontend performance.",
            "Implemented authentication using Clerk with password login and OAuth providers including Google and Microsoft.",
            "Built backend APIs and improved response time by 30%.",
            "Deployed scalable systems on AWS and improved backend integrations.",
            "Conducted training on the T3 stack and microservices architecture.",
        ],
        technologies: ["TypeScript", "React.js", "Next.js", "tRPC", "PostgreSQL", "Clerk", "AWS", "Webflow"],
    },
    {
        year: "2023 - 2024",
        role: "Jr. Software Engineer",
        company: "Techment Technology",
        location: "Remote - Bhilai",
        description: `Developed and maintained web and Windows applications while supporting API and database delivery.`,
        highlights: [
            "Developed and maintained applications using WPF, .NET, and Entity Framework.",
            "Designed and implemented RESTful APIs for data communication.",
            "Collaborated with cross-functional teams to deliver high-quality software products on schedule.",
        ],
        technologies: ["C#", "WPF", ".NET", "Entity Framework", "MySQL"],
    },
    {
        year: "Feb 2022 - Aug 2022",
        role: "Full Stack Developer",
        company: "Divyal Technologies",
        location: "Remote",
        description: `Contributed to web application development and database-backed product features.`,
        highlights: [
            "Built web application features using Angular, ColdFusion, and Bitbucket workflows.",
            "Managed databases and implemented data storage solutions using MySQL.",
            "Worked closely with product managers to prioritize features and enhancements.",
        ],
        technologies: ["Angular", "ColdFusion", "MySQL", "AWS", "Bitbucket"],
    },
];

export const CERTIFICATIONS = [
    {
        title: "AI Engineering Core Track",
        issuer: "Ed Donner",
        description:
            "Covered LLM Engineering, Retrieval-Augmented Generation (RAG), QLoRA, and agent-based architectures.",
    },
    {
        title: "Namaste Node.js",
        issuer: "Akshay Saini",
        description:
            "Strengthened backend fundamentals including event loop, async patterns, and system design principles.",
    },
];

export const EDUCATION = [
    {
        degree: "Master of Computer Applications (MCA)",
        school: "Bhilai Institute of Technology, Durg",
        location: "Durg, India",
        year: "2020 - 2022",
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        school: "Raigarh City College",
        location: "Raigarh, India",
        year: "2016 - 2019",
    },
];

export const PROJECTS = [
    {
        title: "Leading Debate Company | Debate Platform",
        image: project1,
        description:
            "A platform for leading and promoting debate.Debate website provides rankings and analytics to speech and debate participants across events, including public-forum debate, LD debate, and policy debate.",
        technologies: ["Next.js", "tRPC", "React", "PostgreSQL", "Tailwind"],
    },
    {
        title: "Leading Pharmaceutical Company | Product Management",
        image: project2,
        description:
            "An application for showcasing and managing products and Research. Product management application provides an easy way to showcase and manage products and Research.",
        technologies: ["Webflow", "Figma", "Finsweet"],
    },
    {
        title: "Portfolio Website",
        image: project3,
        description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
        technologies: ["HTML", "CSS", "React", "Tailwind", "Vercel"],
    },
    {
        title: "Customer Relationship Management | Builder Company",
        image: project4,
        description:
            "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
        technologies: ["Angular", "Coldfusion", "MySQL", "Angular Material", "BitBucket"],
    },
];

export const CONTACT = {
    address: "Gurgaon, India",
    phoneNo: "9039784916",
    email: "manash.9039@gmail.com",
};
