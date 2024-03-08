import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const closeMenu = () => {
    setNav(true);
  };

  const toggleMenu = () => {
    setNav(!nav);
  };

  return (
    <div className="flex p-5 items-center justify-center uppercase font-bold text-lg h-fit w-100% bg-neutral-900">
      <ul
        className={`hidden md:flex gap-5 text-white ${
          nav ? "visible" : "hidden"
        }`}
      >
        <li className="hover:text-emerald-300">
          <Link to={"/"} onClick={closeMenu}>
            Page Accueil
          </Link>
        </li>
        <li className="hover:text-emerald-300">
          <Link to={"/projets"} onClick={closeMenu}>
            Projets réalisés
          </Link>
        </li>
        <li className="hover:text-emerald-300">
          <Link to={"/contact"} onClick={closeMenu}>
            Contact
          </Link>
        </li>
        <li className="hover:text-emerald-300">
          <Link to={"/veille"} onClick={closeMenu}>
            Veille Informatique
          </Link>
        </li>
      </ul>
      <div onClick={toggleMenu} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose className="cursor-pointer" size={20} color="white" />
        ) : (
          <AiOutlineMenu className="cursor-pointer" size={20} color="white" />
        )}
      </div>
      <div
        className={`${
          !nav
            ? "fixed left-0 top-0 w-[40%] bg-neutral-900 border-r h-full ease-in duration-300"
            : "fixed left-[-100%]"
        }`}
      >
        <h1 className="w-full p-2 m-2 text-emerald-300">C.Andrei</h1>
        <ul className="p-4 uppercase">
          <li className="text-sm p-4 border-b border-gray-400 text-white">
            <Link to={"/"} onClick={closeMenu}>
              Page Accueil
            </Link>
          </li>
          <li className="text-sm p-4 border-b border-gray-400 text-white">
            <Link to={"/projets"} onClick={closeMenu}>
              Projets réalisés
            </Link>
          </li>
          <li className="text-sm p-4 text-white border-b border-gray-400">
            <Link to={"/contact"} onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="text-sm p-4 text-white">
            <Link to={"/veille"} onClick={closeMenu}>
              Veille Informatique
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
