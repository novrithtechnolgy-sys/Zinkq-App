"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

export default function StayUpdated() {
  return (
    <section className="mx-2 md:mx-4 lg:mx-8 py-4 md:py-8 mb-10">
        <div className="md:px-10 xl:px-12 2xl:px-20 mx-auto px-2 rounded-xl md:rounded-3xl">
      {/* Gradient Overlay */}
        <div className="rounded-3xl overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#6F00FF] via-[#8E00FF] to-transparent opacity-99 "

      ></div>

      {/* RIGHT SIDE IMAGE */}
      <div className="absolute inset-0 ">
        <Image
          src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763629102/j1kys8gtzypeqtfqkpu4.jpg" // ⬅ change
          alt="newsletter background"
          fill
          className="md:object-none object-cover  mix-blend-soft-light"
        />
      </div>

      {/* CIRCLES DECORATION */}
      <div className="absolute right-[-50px] md:right-[10px] top-[120px] md:top-[140px] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-[#6F00FF] shadow-2xl opacity-80  rounded-full "></div>
      <div className="absolute right-[-100px] md:right-[-120px] top-[60px] md:top-[-30px] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-[#6F00FF] shadow-2xl rounded-full opacity-80 "></div>
      <div className="absolute  right-[-130px] md:right-[-150px] bottom-[-100px]  w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-[#6F00FF] shadow-2xl rounded-full z-10 opacity-80"></div>

      <div className="absolute left-[-100px] bottom-[40px] w-[200px] h-[400px]  lg:w-[700px] lg:h-[500px] bg-[#6F00FF] shadow-2xl rounded-full blur-xl"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-8 md:px-20 py-10 md:py-20 text-white max-w-3xl">
        <h2 className="font-roboto text-[16px] md:text-[30px] lg:text-[48px] font-bold">Stay Updated</h2>

        <p className="mt-2 font-roboto text-[14px] md:text-[16px] lg:text-[20px] leading-relaxed max-w-xl">
          Don’t miss the next event. Subscribe to the Zinkq newsletter for
          upcoming sessions, workshops, and showcases.
        </p>

        {/* Button */}
        <button className="flex items-center justify-center text-center mt-6 w-[200px] md:w-[250px] px-6 py-2 md:py-3 bg-white text-[12px] md:text-[16px] text-purple-700 font-semibold rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
          Subscribe Now <FaChevronRight className=" ml-2 text-purple-700" />
        </button>
      </div>
    </div>
    </div>
    </section>
  );
}
