import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a172f] text-white ">
      {/* Logo */}
      <div>
        <img
          className="object-contain left-4"
          src={Logo}
          alt="logo"
          style={{ width: "150px" }}
        />
      </div>
      {/* Menu icons */}
      <ul className="hidden md:flex">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>SKILLS</li>
        <li>WORK</li>
        <li>CONTACTS</li>
      </ul>
      {/* Hamburger menu */}
      <div
        onClick={handleClick}
        className="flex md:hidden z-10 absolute right-4 cursor-pointer"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a172f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">HOME</li>
        <li className="py-6 text-4xl">ABOUT</li>
        <li className="py-6 text-4xl">SKILLS</li>
        <li className="py-6 text-4xl">WORK</li>
        <li className="py-6 text-4xl">CONTACTS</li>
      </ul>
      {/* Social icons */}
      <div></div>
    </div>
  );
};

export default Navbar;
