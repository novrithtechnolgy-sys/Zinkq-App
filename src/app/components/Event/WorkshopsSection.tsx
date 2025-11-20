"use client";

import Image from "next/image";
import { FaArrowLeft, FaCheckCircle, FaChevronRight } from "react-icons/fa";

export default function WorkshopsSection() {
  return (
    <section className="md:py-14 mx-2 md:mx-4 lg:mx-8 py-4">
      <div className="md:px-10 xl:px-12 2xl:px-20 mx-auto px-2 rounded-xl md:rounded-3xl  py-4 md:py-8 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-bold leading-tight">
            Workshops <span className="text-transparent bg-clip-text bg-[linear-gradient(117.43deg,#6F00FF_24.32%,#5022F8_44.06%,#2E49F0_70.24%,#1565EA_94.36%,#0576E6_115.43%,#007CE5_131.13%)]">&amp; Skill Labs</span>
          </h2>

          <p className="font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-600 mt-2 md:mt-2 leading-relaxed">
            Hands-on learning experiences led by industry experts and successful
            founders. From branding to fundraising, marketing to scaling — every
            session is built to give you practical, actionable insights you can
            apply immediately.
          </p>

          <h3 className="mt-2 md:mt-4 font-semibold font-roboto text-[16px] md:text-[18px] lg:text-[24px] text-gray-700">Types of Workshops:</h3>

          <div className="mt-2 md:mt-4 space-y-2 md:space-y-3">
            {["Branding & Identity", "Startup Funding Basics", "Growth & Marketing", "Founder's AMA Sessions"].map((item, index) => (
              <div key={index} className="flex items-center gap-3 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
                <FaCheckCircle className="text-[#AE00FF]" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 mt-2 md:mt-4 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
            Participants: Limited to ensure personalized guidance<br />
            Format: In-person & hybrid
          </p>

          <button className="flex w-[200px] md:w-[250px] items-center justify-center pl-3 mt-2 md:mt-6 py-2 md:py-3 rounded-full text-white font-medium font-roboto text-[12px] md:text-[16px]
            bg-gradient-to-r from-purple-500 to-blue-500
            hover:opacity-90 transition">
            View Upcoming Workshops <FaChevronRight className="ml-1"/>
          </button>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 h-[200px] md:h-full order-first md:order-last ">
          <div className="row-span-2 relative rounded-xl overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763628682/fv27euxseuyysjcpxgeg.jpg"
              alt="Workshop Photo 1"
              fill
              className="object-cover"
            />
          </div>

        <div className="row-span-2 flex flex-col rounded-xl overflow-hidden space-y-2 md:space-y-4">

        <div className="relative  rounded-xl overflow-hidden h-full">
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763628682/n0jebcasw2m2elx1bjlx.jpg"
              alt="Workshop Photo 3"
              fill
              className="object-cover"
            />
            </div>

          <div className="relative rounded-xl overflow-hidden h-full">
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763628680/wrpwqtvkgrqtzwee3fwr.jpg"
              alt="Workshop Photo 3"
              fill
              className="object-cover"
            />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
