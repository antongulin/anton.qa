import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GrSchedule } from "react-icons/gr";
import { BsPersonVcard } from "react-icons/bs";
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
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0072b1] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#083953] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsPersonVcard size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#145070] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#345dbf] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Schedule call <GrSchedule size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
