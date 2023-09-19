import React, { useState } from "react";
import lock from "../assets/lock.svg";
import hamburgerMenu from "../assets/hamburgerMenu.svg";
import close from "../assets/close.svg";
import logonew from "../assets/Logonew.png";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <img src={logonew} className="h-[50px]" alt="logo" />
        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li className="cursor-pointer hover:bg-[#c3f1e3fc]">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:bg-[#c3f1e3fc]">
              <a href="#about">About</a>
            </li>
            <li className="cursor-pointer hover:bg-[#c3f1e3fc]">
              <a href="#support">Support</a>
            </li>
            <li className="cursor-pointer hover:bg-[#c3f1e3fc]">
              <a href="#platform">Platform</a>
            </li>
            <li className="cursor-pointer hover:bg-[#c3f1e3fc]">
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="flex justify-between items-center bg-transparent px-6 gap-2">
            <img src={lock} alt="lock icon" />
            Login
          </button>
          <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
            Sign Up For Free
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img src={toggle ? close : hamburgerMenu} alt="menu toggle" />
        </div>
      </div>
      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">
            <a href="#support">Support</a>
          </li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">
            <a href="#platform">Platform</a>
          </li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer">
            <a href="#pricing">Pricing</a>
          </li>
          <div className="flex flex-col my-4 gap-4">
            <button className="border border-[#20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4">
              <img src={lock} alt="lock icon" />
              Login
            </button>
            <button className="px-8 py-5 rounded-md bg-[#20B486] text-white font-bold">
              Sign Up For Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
