"use client";

import { FaChevronRight } from "react-icons/fa";
import { FaC } from "react-icons/fa6";

export default function BrandCTA() {
  return (
    <section className="relative rounded-3xl overflow-hidden md:py-6 mx-2 md:mx-4 lg:mx-8 mx-auto my-20">
      {/* Background image */}
      <div
        className="absolute mx-2 md:mx-auto inset-0 bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Purple gradient overlay */}
      <div className="absolute mx-2 md:mx-auto inset-0 bg-gradient-to-r from-purple-00/80 to-purple-600/90  rounded-3xl" />

      {/* Content */}
      <div className="relative z-10 py-16 px-6 flex flex-col items-center justify-center text-center text-white">
        <h2 className="font-roboto text-[16px] md:text-[30px] lg:text-[48px] font-bold mb-6">
          Want to see your brand here?
        </h2>

        <a
          href="https://forms.gle/vfL7BqW52XJEi6Ds7"
          className="inline-flex items-center justify-center cursor-pointer w-[200px] md:w-[250px] px-6 py-2 md:py-3 bg-white text-purple-700 font-semibold rounded-full text-[12px] md:text-[16px] hover:bg-gray-100 transition"
        >
          Submit Your Startup <FaChevronRight className="ml-2" />
        </a>
      </div>
    </section>
  );
}
