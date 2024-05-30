import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import logo from "../assets/BLUMIN LOGO.png";

const Navbar = () => {
  const Links = [
    { name: "About", link: "/about" },
    { name: "Academia", link: "/academia" },
    { name: "Industry", link: "/industry" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "Register", link: "/register" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-sm w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <Link to="/">
            <img
              alt="content"
              className="object-contain h-12 md:h-[10vh]"
              src={logo}
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-10 top-5 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <FaXmark size={25} /> : <IoMenu size={25} />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-100 md:bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  pl-9 transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"
            }`}
        >
          {Links.map((item, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              {/* <Link
                to={item.link}
                onClick={() => setOpen(false)}
                className="text-gray-800 hover:text-gray-500 duration-500"
              >
                {item.name}
              </Link> */}
              <a href={item.link}
                onClick={() => setOpen(false)}
                className="text-gray-800 hover:text-gray-500 duration-500"
              >{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
