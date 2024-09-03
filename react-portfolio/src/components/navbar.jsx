import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";
import RESUME from "../assets/files/Manash_Gupta_Full_Stack.pdf";

const Navbar = () => {
  return (
    <nav className="mb-2 flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        <h2 className="opacity-80 text-3xl font-bold mx-2 w-10">Mg</h2>
      </div>
      <div className="m-8 max-sm:me-0 flex justify-center items-center gap-4 text-2xl">
        <a
          className="cursor-pointer hover:text-sky-700 hover:scale-110"
          href="https://www.linkedin.com/in/manash-gupta/"
        >
          <FaLinkedin />
        </a>
        <a
          className="cursor-pointer hover:text-gray-500 hover:scale-110"
          href="https://github.com/manash-codes"
        >
          <FaGithub />
        </a>
        <a
          className="cursor-pointer hover:text-purple-500 hover:scale-110"
          href={RESUME}
          download
        >
          <FaFileArrowDown />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
