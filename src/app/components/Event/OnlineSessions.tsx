"use client";

import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { FaC } from "react-icons/fa6";

export default function OnlineSessions() {
  return (
    <section className="mx-2 md:mx-4 lg:mx-8 py-4 md:py-10 mt-10">
        <div className="md:px-10 xl:px-12 2xl:px-20 mx-auto px-2 rounded-xl md:rounded-3xl bg-[#F0F2F4] py-4 md:py-10">
      {/* Title */}
      <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-bold text-[#1A1A1A]">
        Zinkq Online Sessions
      </h2>

      <div className="w-full h-[2px] bg-gray-400 mb-10" />

      {/* Main Card */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row">
        
        {/* LEFT SIDE */}
        <div className="flex-1 p-8 md:p-14 bg-gradient-to-r from-[#6F00FF] via-[#5022F8] to-[#007BFF] text-white flex flex-col justify-center">
          
          <h3 className="font-roboto text-[16px] md:text-[18px] lg:text-[24px] font-bold mb-2">
            Can’t join in person? No problem.
          </h3>

          <p className="text-[14px] md:text-[16px] lg:text-[20px] font-roboto text-gray-200 mb-2 md:mb-4 leading-relaxed">
            Our online sessions are designed to keep the community learning and
            sharing together wherever you are.
          </p>

          <h4 className="font-bold font-roboto text-[16px] md:text-[18px] lg:text-[24px] mb-2 md:mb-2">What to Expect:</h4>

          <ul className="space-y-1 md:space-y-3 text-gray-100 text-[14px] md:text-[16px] lg:text-[20px] font-roboto">
            <li className="flex items-start gap-3">
              <span className="text-white ">●</span>
              Live panel discussions with startup founders
            </li>

            <li className="flex items-start gap-3">
              <span className="text-white ">●</span>
              Online knowledge-sharing sessions
            </li>

            <li className="flex items-start gap-3">
              <span className="text-white ">●</span>
              Virtual “Ask Me Anything” (AMA) events with mentors
            </li>

            <li className="flex items-start gap-3">
              <span className="text-white ">●</span>
              Interactive community meetups via Zoom
            </li>
          </ul>

          <p className="text-[14px] md:text-[16px] lg:text-[20px] font-roboto text-gray-200 mt-2 md:mt-4">
            These sessions are open to all registered members and are recorded
            for later access.
          </p>

          {/* CTA Button */}
          <button className="mt-4 md:mt-8 cursor-pointer w-[250px] font-roboto text-[12px] md:text-[16px] bg-white text-purple-700 font-semibold rounded-full px-6 py-2 md:py-3 shadow hover:bg-gray-100 transition flex items-center gap-2 w-fit">
            Join an Online Session <FaChevronRight />
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 order-first md:order-last">
          <Image
            src='https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763625565/obeoa8noojzqpkxd2f9k.jpg'
            alt="Online Session"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      </div>
    </section>
  );
}
