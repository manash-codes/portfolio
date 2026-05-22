import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Manash Gupta home">
          <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-lg font-bold text-cyan-100">
            MG
          </span>
          <span className="hidden text-sm font-medium text-slate-300 sm:block">
            Full Stack Developer & GenAI Developer
          </span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <a className="transition hover:text-cyan-200" href="#about">About</a>
          <a className="transition hover:text-cyan-200" href="#experience">Experience</a>
          <a className="transition hover:text-cyan-200" href="#credentials">Credentials</a>
          <a className="transition hover:text-cyan-200" href="#projects">Projects</a>
          <a className="transition hover:text-cyan-200" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-3 text-xl text-slate-300">
          <a
            className="rounded-md p-2 transition hover:bg-white/10 hover:text-cyan-200"
            href="https://www.linkedin.com/in/manash-gupta/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
          <a
            className="rounded-md p-2 transition hover:bg-white/10 hover:text-cyan-200"
            href="https://github.com/manash-codes"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            className="rounded-md p-2 transition hover:bg-white/10 hover:text-cyan-200"
            href="/Manash_Gupta_Developer.pdf"
            download
            aria-label="Download resume"
          >
            <FaFileArrowDown />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
