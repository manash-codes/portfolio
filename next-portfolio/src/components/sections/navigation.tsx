import Link from "next/link";
import { ThemeToggle } from "@/src/components/ui/theme-toggle";

const links = [["Work", "#work"], ["Approach", "#approach"], ["Notes", "#public"], ["Contact", "#contact"]];

export function Navigation() {
  return <header className="site-header"><Link href="#top" className="wordmark" aria-label="Manash Gupta home">MG<span>·</span></Link><nav aria-label="Primary navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><ThemeToggle /></header>;
}
