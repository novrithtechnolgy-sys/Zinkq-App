"use client";

import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full pt-10 pb-6 px-4 md:px-14 lg:px-18 xl:px-20 2xl:px-28">
      
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:mb-20  items-center ">

        {/* Logo */}
        <div className="flex justify-center md:justify-start items-center my-auto space-x-2 w-full ">
          <Image
            src="/Zinkq logo files-01.png"     // <-- replace with your logo
            alt="Zinkq Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:flex-row my-auto  space-y-4 md:space-y-0  md:space-x-10 text-[15px] font-medium text-black p-4 text-center w-full">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Startups</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row space-y-4 md:space-y-0 space-x-6 text-[18px] text-black p-4 text-center w-full justify-center md:justify-end">
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full border-t my-10 "></div>

      {/* BOTTOM ROW */}
      <div className="flex flex-col md:flex-row justify-center items-center text-sm text-gray-700 px-4">
        
        <p>© 2025 Zinkq. All rights reserved.</p>

        <div className="flex space-x-6 mt-4 md:mt-0 justify-center w-full md:w-auto text-center">
          <a href="#" className="hover:text-black">Privacy policy</a>
          <a href="#" className="hover:text-black">Terms of service</a>
          <a href="#" className="hover:text-black">Cookie settings</a>
        </div>
      </div>
    </footer>
  );
}
