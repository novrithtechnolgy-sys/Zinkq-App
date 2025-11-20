"use client";

import Image from "next/image";
import neon from "../../../../public/shape2.png";

export default function EventsSection() {
  return (
    <section className="mx-2 md:mx-4 lg:mx-8">
        <div className="mx-auto md:px-10 xl:px-12 2xl:px-20 px-2">
      {/* Top Title */}
      <h2 className="text-center text-[20px] md:text-[38px] lg:text-[56px] font-roboto font-bold">
        Events | <span className="text-[#0075FF]">Connect. Learn. Grow.</span>
      </h2>

      <p className="text-center font-roboto text-[14px] md:text-[16px] lg:text-[20px] max-w-5xl mx-auto mt-2 text-gray-600 leading-relaxed">
        Empowering Founders Through Real Experiences at Zinkq, we believe
        growth happens when ideas are shared, stories are told, and founders
        connect in real life. Our events are designed to inspire, educate, and
        connect entrepreneurs from across Sri Lanka and beyond.
      </p>

      {/* Card */}
      <div className="relative mt-10 rounded-3xl overflow-hidden border-[5px] border-[#6F00FF]">
        {/* LEFT PURPLE + NEON BACKGROUND */}
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6F00FF] via-[#8E00FF] to-transparent opacity-80 z-10" />
          <div className="absolute inset-0 mt-[-200px] md:mt-[-250px] ml-[-140px] md:ml-[-50px] bg-transparent w-[500px]">
          <Image
            src={neon}
            alt="Neon Shape"
            fill
            className="object-contain  rotate-40 justify-self-start ml-[-100px] mix-blend-screen pointer-events-none z-10 bg-transparent"
            priority
            quality={100}
          />
          </div>
        </div>

        {/* Content & Right Image */}
        <div className="relative grid ">
          {/* LEFT TEXT */}
          <div className="p-2 md:p-10 md:pt-14 md:p-14 text-white z-20">
            <h3 className="text-[16px] md:text-[30px] lg:text-[48px] font-roboto font-extrabold leading-snug">
              Zinkq Connect – Monthly<br />Networking Meetup
            </h3>

            <p className="mt-1 md:mt-5 text-white/90 font-roboto text-[14px] md:text-[16px] lg:text-[20px]  max-w-[250px] md:max-w-2xl">
              Our signature in-person event bringing together startup founders,
              investors, creators, and mentors. It’s not about pitching — it’s
              about real conversations, genuine relationships, and building
              collaborations that matter.
            </p>

            <div className="mt-2 md:mt-8">
              <a href="/contact"
              className="inline-block flex items-center text-center justify-center bg-white w-[200px] md:w-[250px] text-[#6F00FF] px-6 py-2 md:py-3 rounded-full font-roboto text-[12px] md:text-[16px] font-semibold shadow-lg">
                Submit Your Startup
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex flex-row justify-between items-center w-full">
            <div className="w-[50%]" />
            <div className=" " >
            <Image
              src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763625565/obeoa8noojzqpkxd2f9k.jpg"
              alt="Networking Event"
              fill
              className="object-cover"
              priority
            />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
