import type { Metadata } from "next";
import { YEARS_OF_EXPERIENCE } from "@/constants";

export const SITE_URL = "https://portfolio-manash.vercel.app";

const title = "Manash Gupta | Full Stack Developer";
const description = `Manash Gupta is a full stack developer with ${YEARS_OF_EXPERIENCE} years of experience building React, Angular, Next.js, Node.js, tRPC, MySQL, PostgreSQL, MongoDB, AWS, Docker, Jenkins, and Vercel applications.`;

export const SEO: Metadata = {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: "Manash Gupta Portfolio",
    category: "portfolio",
    keywords: [
        "Manash Gupta",
        "Full Stack Developer",
        "Software Engineer",
        "Frontend Developer",
        "Backend Developer",
        "React",
        "Angular",
        "Next.js",
        "Node.js",
        "tRPC",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "DevOps",
        "Vercel",
    ],
    authors: [{ name: "Manash Gupta" }],
    creator: "Manash Gupta",
    publisher: "Manash Gupta",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: SITE_URL,
        siteName: "Manash Gupta Portfolio",
        title,
        description,
        images: [
            {
                url: "/og_image.png",
                width: 1200,
                height: 630,
                alt: "Manash Gupta | Software Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/og_image.png"],
        creator: "@manash_codes",
    },
    icons: {
        icon: [
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
};
