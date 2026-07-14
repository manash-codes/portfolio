import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const YEARS_OF_EXPERIENCE = "3+";

export const HERO_CONTENT = `I build polished, scalable web applications that solve real problems and create memorable experiences. With ${YEARS_OF_EXPERIENCE} years of experience, I specialize in React, Angular, and Next.js on the frontend, plus Node.js, tRPC, MySQL, PostgreSQL, and MongoDB on the backend.`

export const HERO_CONTENT2 = `I also have strong cloud and DevOps experience with AWS, Git, Docker, Jenkins, and Vercel. I enjoy turning ideas into reliable production-ready solutions that drive business impact and delight users.`;

export const ABOUT_TEXT = `I am a dedicated full stack developer focused on building modern, performant web applications. With ${YEARS_OF_EXPERIENCE} years of experience, I’ve delivered products using React, Next.js, Angular, Node.js, MySQL, tRPC, PostgreSQL, MongoDB, Git, Docker, Jenkins, and Vercel. I thrive in collaborative teams, solve complex problems with care, and continuously learn new technologies. Outside of work, I stay active and keep up with the latest web development trends.`;

export const EXPERIENCES = [
    {
        year: "June 2025 - May 2026",
        role: "Full Stack Developer",
        company: "Gopropify Pvt. Ltd.",
        description: `Worked on developing and maintaining web applications using React.js, Node.js, and FastAPI. Implemented RAG (Retrieval-Augmented Generation) techniques to enhance the application's capabilities. Collaborated with cross-functional teams to design and implement new features, ensuring high performance and responsiveness. Utilized WebSockets for real-time communication and integrated Supabase and Redis for efficient data storage.`,
        technologies: ["OpenAI", "Langchain", "RAG", "CursorAI", "Claude Code", "FastAPI", "Node.js", "React.js", "WebSockets", "Supabase", "Redis"],
    },
    {
        year: "Feb 2025 - May 2025",
        role: "Senior Associate Software Engineer",
        company: "Techno Exponent",
        description: `Worked on developing and maintaining web applications using React.js and TypeScript. Collaborated with cross-functional teams to design and implement new features, ensuring high performance and responsiveness. Utilized WebSockets for real-time communication and integrated MongoDB for efficient data storage.`,
        technologies: ["TypeScript", "React.js", "WebSockets", "Node.js", "MongoDb", "AWS"],
    },
    {
        year: "Jan 2023 - Aug 2024",
        role: "Software Engineer",
        company: "Techment Technology",
        description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with tRPC APIs. Implemented responsive designs and optimized frontend performance.`,
        technologies: ["TypeScript", "tRPC", "React.js", "Next.js", "Angular", "Node.js", "MongoDb", "PostgreSQL", "AWS", "Webflow"],
    },
    {
        year: "Feb 2022 - Aug 2022",
        role: "Software Developer",
        company: "Divyal technologies",
        description: `Contributed to the development of web applications using Angular, Coldfusion, and BitBucket. Managed databases and implemented data storage solutions using MySQL. Worked closely with product managers to prioritize features and enhancements.`,
        technologies: ["Angular", "Coldfusion", "MySQL", "AWS", "BitBucket"],
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
    address: "Raigarh, Chhatishgarh, India",
    phoneNo: "9039784916",
    email: "manash.9039@gmail.com",
};