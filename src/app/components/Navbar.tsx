"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Startups", href: "/startups" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scrolling
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        w-full top-0 z-50 px-4 md:px-14 lg:px-18 xl:px-20 2xl:px-28 transition-all duration-300
        ${isScrolled ? "fixed mt-2" : "absolute mt-6 md:mt-14"}
      `}
    >
      <div
        className={`
          w-full mx-auto flex items-center justify-between px-4 lg:px-10  rounded-xl transition-all duration-300 py-3
          ${isScrolled ? "shadow-lg bg-white/80" : "mt-1 shadow-none bg-white"}
        `}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Zinkq logo files-01.png"
            width={65}
            height={65}
            className="lg:w-auto lg:h-auto"
            alt="Zinkq logo"
          />
        </Link>

{/* Desktop Menu */}
<div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
  {navLinks.map((item) => {
    const isActive = pathname === item.href;

    return (
      <Link
        key={item.href}
        href={item.href}
        className={`relative pb-1 transition-all ${
          isActive
            ? "text-blue-600 font-semibold"
            : "text-gray-700 hover:text-blue-500"
        }`}
      >
        {item.label}

        {/* Underline */}
        {isActive && (
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600 rounded-full"></span>
        )}
      </Link>
    );
  })}
</div>


        {/* Desktop Join Button */}
        <Link
          href="https://forms.gle/vfL7BqW52XJEi6Ds7"
          className="hidden md:block text-center text-[12px] md:text-[16px] w-[120px] font-roboto font-semibold px-6 md:py-1 lg:py-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-sm"
        >
          Join Now
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl sm:text-3xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-200 px-4 pb-4">
          <div className="flex flex-col gap-4 mt-4 text-gray-700 font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`relative pb-1 transition-all ${
                  pathname === item.href
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Join Button */}
            <Link
              href="https://forms.gle/vfL7BqW52XJEi6Ds7"
              className="mt-2 justify-center items-center px-10 py-2 md:py-3 text-[12px] w-[150px] text-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-sm"
              onClick={() => setOpen(false)}
            >
              Join
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
