import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-2 flex justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src="" alt="" />
        Logo(MG)
      </div>
      <div className="m-8 flex justify-center items-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
      </div>
    </nav>
  );
};

export default Navbar;
