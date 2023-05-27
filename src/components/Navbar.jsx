import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "100px" }} />
      </div>
      {/* Menu icons */}
      <div>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contacts</li>
        </ul>
      </div>
      {/* Hamburger menu */}
      <div className="hidden">
        <FaBars />
      </div>
      {/* Mobile menu */}
      <div className="hidden">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contacts</li>
        </ul>
      </div>
      {/* Social icons */}
      <div></div>
    </div>
  );
};

export default Navbar;
