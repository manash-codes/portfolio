export const SEO = {
    title: "Manash Gupta | Software Engineer",
    description:
        "Manash Gupta, a passionate full stack developer with 3+ years of experience in React, Angular, Next.js, Node.js, tRPC, MySQL, PostgreSQL, MongoDB, AWS, and DevOps.",
    keywords: [
        "Full Stack Developer",
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
    ],
    authors: [{ name: "Manash Gupta" }],
    creator: "Manash Gupta",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://manashgupta.dev",
        title: "Manash Gupta | Software Engineer",
        description:
            "Manash Gupta, a passionate full stack developer with 2+ years of experience in React, Angular, Next.js, Node.js, tRPC, MySQL, PostgreSQL, MongoDB, AWS, and DevOps.",
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
        title: "Manash Gupta | Software Engineer",
        description:
            "Manash Gupta, a passionate full stack developer with 3+ years of experience in React, Angular, Next.js, Node.js, tRPC, MySQL, PostgreSQL, MongoDB, AWS, and DevOps.",
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
    robots: "index, follow",
    metadataBase: new URL("https://portfolio-manash.vercel.app/"),
};