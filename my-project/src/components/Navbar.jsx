import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// smooth scroll rem
export default function Navbar() {
  const [nav, setnav] = useState(false);
  const oncl = () => setnav(!nav);
  return (
    <div className="w-screen h-20 fixed z-2 bg-[#0a192f] text-gray-300 drop-shadow-lg">
      <div className="px-2 md:px-72 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl"><span className="text-cyan-500">l</span>ogo</h1>

          <ul className="hidden sm:flex sm:justify-between sm:px-8 text">
            <li className="p-4">
              <Link to="/">profile</Link>
            </li>
            <li className="p-4">
              <Link to="/education">education</Link>
            </li>
            <li className="p-4">
              <Link to="/skills">skills</Link>
            </li>
            <li className="p-4">
              <Link to="/projects">projects</Link>
            </li>
            <li className="p-4">
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden" onClick={oncl}>
          {!nav ? <MenuIcon className="w-6" /> : <XIcon className="w-6" />}
        </div>
      </div>
      <ul
        className={
          nav
            ? "absolute bg-[#0a192f] w-full z-0 text-cyan-300 px-8  md:hidden"
            : "hidden"
        }
      >
        <li className="p-4 border-b-2 border-zinc-300">
          <Link to="/"  onClick={oncl}>profile</Link>
        </li>
        <li className="p-4 border-b-2 border-zinc-300">
          <Link to="/education" onClick={oncl}>education</Link>
        </li>
        <li className="p-4 border-b-2 border-zinc-300">
          <Link to="/skills" onClick={oncl}>skills</Link>
        </li>
        <li className="p-4 border-b-2 border-zinc-300">
          <Link to="/projects" onClick={oncl}>projects</Link>
        </li>
        <li className="p-4 border-b-2 border-zinc-300">
          <Link to="/contact" onClick={oncl}>contact</Link>
        </li>
      </ul>
      
      <div className="hidden lg:flex fixed flex-col   top-64 left-3">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-500">
            <a
              className="flex justify-between items-center w-full  text-gray-300"
              href="/"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
