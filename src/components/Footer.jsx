import React from "react";
import { logonew } from "../assets";
import {
  FaFacebookF,
  FaDribbble,
  FaLinkedinIn,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";


const Footer = () => {
    return (
      <div className="w-full bg-white py-24">
        <div className="md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2 gap-8 max-w-[600px] px-4 md:px-0">
          <div className="col-span-2">
            <img src={logonew} className="h-[50px]" />
            <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
            <h3 className="py-1 text-[#6D737A]">Call : 829-322-5995</h3>
            <h3 className="py-1 text-[#6D737A]">
              Gazcue<br></br> Santo Domingo, R.D
            </h3>
            <h3 className="py-1 text-[#363A3D]">Email: Benignomnez@gmail.com</h3>
            <div className="flex gap-4 py-4">
              <a href="https://www.facebook.com" target="_blank" className="p-4 bg-[#E9F8F3] rounded-xl cursor-pointer hover:bg-gray-100">
                <FaFacebookF size={25} style={{ color: "#4DC39E" }} />
              </a>
              <a href="https://www.dribbble.com" target="_blank" className="p-4 bg-[#E9F8F3] rounded-xl cursor-pointer hover:bg-gray-100">
                <FaDribbble size={25} style={{ color: "#4DC39E" }} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" className="p-4 bg-[#E9F8F3] rounded-xl cursor-pointer hover:bg-gray-100">
                <FaLinkedinIn size={25} style={{ color: "#4DC39E" }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" className="p-4 bg-[#E9F8F3] rounded-xl cursor-pointer hover:bg-gray-100">
                <FaInstagram size={25} style={{ color: "#4DC39E" }} />
              </a>
              <a href="https://www.behance.net" target="_blank" className="p-4 bg-[#E9F8F3] rounded-xl cursor-pointer hover:bg-gray-100">
                <FaBehance size={25} style={{ color: "#4DC39E" }} />
              </a>
            </div>
          </div>
  
          <div>
            <h3 className="text-2xl font-bold">Explore</h3>
            <ul className="py-6 text-[#6D737A]">
              <a href="#home" className="py-2 block cursor-pointer hover:bg-gray-100">Home</a>
              <a href="#about" className="py-2 block cursor-pointer hover:bg-gray-100">About</a>
              <a href="#course" className="py-2 block cursor-pointer hover:bg-gray-100">Course</a>
              <a href="#blog" className="py-2 block cursor-pointer hover:bg-gray-100">Blog</a>
              <a href="#contact" className="py-2 block cursor-pointer hover:bg-gray-100">Contact</a>
            </ul>
          </div>
  
          <div>
            <h3 className="text-2xl font-bold">Category</h3>
            <ul className="py-6 text-[#6D737A]">
              <a href="#design" className="py-2 block cursor-pointer hover:bg-gray-100">Design</a>
              <a href="#development" className="py-2 block cursor-pointer hover:bg-gray-100">Development</a>
              <a href="#marketing" className="py-2 block cursor-pointer hover:bg-gray-100">Marketing</a>
              <a href="#business" className="py-2 block cursor-pointer hover:bg-gray-100">Business</a>
              <a href="#lifestyle" className="py-2 block cursor-pointer hover:bg-gray-100">Lifestyle</a>
              <a href="#photography" className="py-2 block cursor-pointer hover:bg-gray-100">Photography</a>
              <a href="#music" className="py-2 block cursor-pointer hover:bg-gray-100">Music</a>
            </ul>
          </div>
  
          <div className="max-[780px]:col-span-2">
            <h3 className="text-2xl font-bold">Subscribe</h3>
            <h3 className="py-2 text-[#6D737A]">
              Get the latest updates and exclusive offers directly in your inbox. Join us today!
            </h3>
            <form className="py-4" onSubmit={(e) => { e.preventDefault(); }}>
              <input
                className="bg-[#F2F3F4] p-4 w-full rounded"
                placeholder="Email here"
              />
              <button type="submit" className="max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#20B486] text-white font-medium hover:bg-[#18a07a]">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
  