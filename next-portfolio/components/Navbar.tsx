import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-8 flex items-center justify-between gap-6 border-b border-slate-800 pb-4" aria-label="Primary navigation">
      <div className="flex items-center gap-3">
        <a
          href="#home"
          className="text-3xl font-semibold tracking-tight text-cyan-300 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          aria-label="Manash Gupta home"
        >
          Mg
        </a>
      </div>

      <div className="flex items-center gap-4 text-2xl text-slate-300">
        <a
          className="inline-flex items-center justify-center rounded-full p-2 transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          href="https://www.linkedin.com/in/manash-gupta/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Open Manash Gupta LinkedIn profile"
        >
          <FaLinkedin aria-hidden="true" focusable="false" />
        </a>
        <a
          className="inline-flex items-center justify-center rounded-full p-2 transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          href="https://github.com/manash-codes"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Open Manash Gupta GitHub profile"
        >
          <FaGithub aria-hidden="true" focusable="false" />
        </a>
        <a
          className="inline-flex items-center justify-center rounded-full p-2 transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          href="/Manash_Gupta_Full_Stack.pdf"
          download
          aria-label="Download Manash Gupta resume PDF"
        >
          <FaFileArrowDown aria-hidden="true" focusable="false" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
