import type { Metadata } from "next";
import { DM_Mono, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const display = Instrument_Serif({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const mono = DM_Mono({ variable: "--font-mono", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-manash.vercel.app"),
  title: "Manash Gupta — Senior Full-stack Engineer",
  description: "Manash Gupta builds scalable React, Next.js, Node.js, AI-agent, and product systems.",
  keywords: ["Senior full-stack engineer", "React", "Next.js", "Node.js", "AI agents", "system design"],
  openGraph: { type: "website", title: "Manash Gupta — Senior Full-stack Engineer", description: "Scalable products, thoughtful systems, and pragmatic AI engineering.", images: [{ url: "/og_image.png", width: 1200, height: 630, alt: "Manash Gupta portfolio" }] },
  twitter: { card: "summary_large_image", title: "Manash Gupta — Senior Full-stack Engineer", images: ["/og_image.png"] },
  robots: { index: true, follow: true },
};

const personSchema = { "@context": "https://schema.org", "@type": "Person", name: "Manash Gupta", jobTitle: "Senior Full-stack Engineer", url: "https://portfolio-manash.vercel.app", sameAs: ["https://github.com/manash-codes", "https://www.linkedin.com/in/manash-gupta/"], knowsAbout: ["React", "Next.js", "Node.js", "AI agents", "System design"] };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark" suppressHydrationWarning className={`${sans.variable} ${display.variable} ${mono.variable}`}><body><script dangerouslySetInnerHTML={{ __html: "try{const t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}" }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />{children}</body></html>;
}
