import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-5 text-neutral-500 bg-neutral-800 flex flex-col md:flex-row md:items-center gap-5 ">
      <p className="mb-3 md:mb-0">© 2023 Cosovan Andrei / React JS</p>
      <p href="" className="flex items-center gap-1 mb-3 md:mb-0">
        {" "}
        {<BiLogoGmail />}andreicosovan@gmail.com
      </p>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/cosovan-andrei-442698279/"
        className="flex items-center gap-1 mb-3 md:mb-0"
      >
        {" "}
        {<AiFillLinkedin />} LinkedIn
      </a>
      <a
        href="https://github.com/Quask"
        className="flex items-center gap-1 "
        target="_blank"
      >
        <FaGithub /> GitHub
      </a>
    </div>
  );
};

export default Footer;
