import { profile } from "@/src/constants/portfolio";

export function Contact() {
  return <section id="contact" className="contact-section"><p className="eyebrow">06 / Contact</p><h2>Have a difficult product problem?</h2><p>I’m open to select senior engineering, platform, and AI product conversations.</p><a href={`mailto:${profile.email}`}>{profile.email} <span>↗</span></a><footer><span>© {new Date().getFullYear()} {profile.name}</span><span>{profile.location}</span></footer></section>;
}
