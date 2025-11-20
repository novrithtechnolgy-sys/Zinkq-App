"use client";

import Image from "next/image";
import {
  FaUsers,
  FaBullhorn,
  FaGraduationCap,
  FaHandshake,
  FaKey
} from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function WhyJoinZinkq() {
  const router = useRouter();
  return (
    <section className="pb-20 mx-2 md:mx-4 lg:mx-8  rounded-b-3xl py-8">
      <div className="md:px-10 xl:px-12 2xl:px-20 mx-auto px-2 py-8 md:py-12 rounded-xl md:rounded-3xl bg-[#F0F2F4] grid lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-bold mb-2 md:mb-2">Why Join Zinkq</h2>

          <p className="font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-700">Because no one builds alone.</p>
          <p className=" font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-700 mb-2 md:mb-6">
            When you join Zinkq, you join a community that opens doors.
          </p>

          <ul className=" space-y-2 md:space-y-3">
            <li className="flex items-start gap-3 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
              <FaUsers className="text-blue-600 w-3 h-3 md:w-5 md:h-5 mt-1" />
              <span>
                <strong>Network</strong> with other founders and investors
              </span>
            </li>

            <li className="flex items-start gap-3 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
              <FaBullhorn className="text-blue-600 w-3 h-3 md:w-5 md:h-5 mt-1" />
              <span>
                <strong>Showcase</strong> your startup and get noticed
              </span>
            </li>

            <li className="flex items-start gap-3 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
              <FaGraduationCap className="text-blue-600 w-3 h-3 md:w-5 md:h-5 mt-1" />
              <span>
                <strong>Learn</strong> from experienced entrepreneurs
              </span>
            </li>

            <li className="flex items-start gap-3 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
              <FaHandshake className="text-blue-600 w-3 h-3 md:w-5 md:h-5 mt-1" />
              <span>
                <strong>Collaborate</strong> through real partnerships
              </span>
            </li>

            <li className="flex items-start gap-3 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
              <FaKey className="text-blue-600 w-3 h-3 md:w-5 md:h-5 mt-1" />
              <span>
                <strong>Access</strong> exclusive resources and events
              </span>
            </li>
          </ul>

          <p className="mt-4 md:mt-6 text-gray-700 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
            Join the movement shaping Sri Lanka’s startup future.
          </p>

          <button
          type="button"
          onClick={() => router.push("/contact")}
          className="mt-6 mt-6 px-4 md:px-8 py-2 md:py-3 w-[200px] md:w-[250px] rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium text-[12px] md:text-[16px]">
            Become a Member
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-1 lg:order-2">
          <Image
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763115529/nkxhgeiy5ekueji2hjzy.jpg"
            alt="Team working together"
            width={900}
            height={600}
            className="rounded-xl md:rounded-3xl h-[200px] md:h-auto w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
