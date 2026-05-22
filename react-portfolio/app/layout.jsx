import { Inter } from "next/font/google";
import "../src/index.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://manashgupta.dev";
const description =
  "Portfolio of Manash Gupta, a full stack developer and GenAI developer building performant Next.js, React, Node.js, AI-assisted, and cloud-backed web applications.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Manash Gupta | Full Stack Developer & GenAI Developer",
    template: "%s | Manash Gupta",
  },
  description,
  applicationName: "Manash Gupta Portfolio",
  authors: [{ name: "Manash Gupta" }],
  creator: "Manash Gupta",
  keywords: [
    "Manash Gupta",
    "Full Stack Developer",
    "GenAI Developer",
    "AI Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Portfolio",
    "AWS",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: "Manash Gupta | Full Stack Developer & GenAI Developer",
    description,
    siteName: "Manash Gupta Portfolio",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Manash Gupta portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manash Gupta | Full Stack Developer & GenAI Developer",
    description,
    images: ["/og_image.png"],
  },
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth hydrated">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
