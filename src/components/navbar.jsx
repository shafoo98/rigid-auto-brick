import React, { useState } from "react";

import { Link, Outlet } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Logo from "../assets/RigidAutoBrickLogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
        <Link to="/">
          <div className="flex items-center">
            <img className="w-[50px] mt-2" src={Logo} alt="logo" />
            <h1 className="w-full text-3xl font-semibold">Rigid Auto Bricks</h1>
          </div>
        </Link>
        <ul className="hidden md:flex">
          <Link to="/">
            <li className="m-2 font-medium">Home</li>
          </Link>
          <Link to="about">
            <li className="m-2 font-medium">About Us</li>
          </Link>
          <Link to="gallery">
            <li className="m-2 font-medium">Our Products</li>
          </Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-400 bg-white ease-in duration-300"
              : "fixed ease-out duration-700 left-[-100%]"
          }
        >
          <div className="flex items-center pt-6 px-2">
            <img className="w-[50px]" src={Logo} alt="logo" />
            <h1 className="w-full text-3xl font-semibold md:text-4xl">
              Rigid Auto Bricks
            </h1>
          </div>
          <ul className="uppercase pt-10">
          <Link to="/">
            <li className="m-2 border-b border-gray-300 font-medium p-4">Home</li>
          </Link>
          <Link to="about">
            <li className="m-2 border-b border-gray-300 font-medium p-4">About Us</li>
          </Link>
          <Link to="gallery">
            <li className="m-2 font-medium p-4">Gallery</li>
          </Link>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
