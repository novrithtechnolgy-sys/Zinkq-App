"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter, FaY } from "react-icons/fa6";
import { TouchEvent } from "react";

export default function FoundersSection() {
  const router = useRouter();

  const [founders, setFounders] = useState<any[]>([]);
    const [startX, setStartX] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/api/founders")
      .then((res) => res.json())
      .then((data) => setFounders(data.slice(0, 3)));
  }, []);



const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
  setStartX(e.touches[0].clientX);
};

const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
  const diff = startX - e.touches[0].clientX;

  if (diff > 50 && index < founders.length - 1) {
    setIndex(index + 1);
    setStartX(e.touches[0].clientX);
  }

  if (diff < -50 && index > 0) {
    setIndex(index - 1);
    setStartX(e.touches[0].clientX);
  }
};


  return (
    <section className="md:py-8 text-white mx-2 md:mx-4 lg:mx-8">
      <div className="mx-auto md:px-10 xl:px-12 2xl:px-20 px-2 text-center">
        {/* Heading */}
        <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-bold mb-2 md:mb-4 text-black">
          Meet the Founders Behind the Movement
        </h2>

        <p className="font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-600 max-w-2xl mx-auto mb-10 md:mb-16">
          Every Zinkq member has a story worth sharing from first-time
          founders to established disruptors.
        </p>

        {/* -------------------- DESKTOP GRID -------------------- */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="overflow-hidden">
              <Image
                src={founder.image}
                alt={founder.name}
                width={700}
                height={700}
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <div className="p-4">
                <h3 className="font-roboto text-black text-[16px] lg:text-[20px] font-bold mb-2">
                  {founder.name}
                </h3>
                <p className="font-roboto text-[14px] lg:text-[18px] text-gray-600">
                  {founder.role}
                </p>
                <p className="font-roboto text-[14px] lg:text-[16px] text-gray-600">
                  {founder.expect}
                </p>

                <div className="mt-4 flex gap-4 justify-center text-gray-600">
                  <a href={founder.facebook}><FaFacebook size={20} /></a>
                  <a href={founder.linkedin}><FaLinkedin size={20} className="text-gray-700" /></a>
                  <a href={founder.youtube}><FaYoutube size={20} className="text-gray-700" /></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* -------------------- MOBILE CAROUSEL -------------------- */}
        <div className="md:hidden relative">
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
          >
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {founders.map((founder, i) => (
                <div key={i} className="min-w-full">
                  <div className="rounded-xl bg-white p-">
                    <div className="relative w-full h-[200px] mb-4">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="rounded-xl object-cover"
                      />
                    </div>

                    <h3 className="font-roboto text-black text-[18px] font-bold">
                      {founder.name}
                    </h3>

                    <p className="text-gray-700 text-[14px]">{founder.role}</p>
                    <p className="text-gray-600 text-[13px] mt-2">
                      {founder.expect}
                    </p>

                    <div className="mt-4 flex gap-4 justify-center text-gray-600">
                      <a href={founder.facebook}><FaFacebook size={20} /></a>
                      <a href={founder.linkedin}><FaLinkedin size={20} className="text-gray-700" /></a>
                      <a href={founder.youtube}><FaYoutube size={20} className="text-gray-700" /></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {founders.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-6 md:mt-10">
          <button 
          onClick={() => router.push("/startups")}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white w-[200px] md:w-[250px] px-4 md:px-8 py-2 md:py-3 cursor-pointer rounded-full font-semibold shadow-lg hover:opacity-90 transition text-[12px] md:text-[16px]">
            View Member Stories
          </button>
        </div>
      </div>
    </section>
  );
}
