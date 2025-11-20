
"use client";

import Image from "next/image";
import { useState } from "react";

export default function MembershipGallery() {
   // ⭐ All images stored in ONE array
  const images = [
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763269374/g9hypaessi1ynny6v1ox.jpg",
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763269374/rjvxwrrzgmds0ie4bmeq.jpg", 
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763269373/bdvfrm7tu0okrht8ifus.jpg",
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763269374/oumqutqxhwqkkrsvtdor.jpg",
    "https://res.cloudinary.com/dgm9hbcb1/image/upload/c_crop,w_603,h_402/v1763269374/i1b0vkn3pkrrha9ijszz.jpg",
  ];

  const [index, setIndex] = useState(0);
  let startX = 0;

  const onTouchStart = (e: any) => {
    startX = e.touches[0].clientX;
  };

  const onTouchMove = (e: any) => {
    if (!startX) return;
    const diff = e.touches[0].clientX - startX;

    if (diff > 50 && index > 0) {
      setIndex(index - 1);
      startX = 0;
    } else if (diff < -50 && index < images.length - 1) {
      setIndex(index + 1);
      startX = 0;
    }
  };

  return (
    <section className="py-10 mx-2 px-2 md:px-0 md:mx-4 lg:mx-8 mx-auto text-white">
        <div className="md:px-10 xl:px-12 2xl:px-20 mx-auto px-2 rounded-xl md:rounded-3xl bg-[#F0F2F4] py-10 md:py-20">

        
                <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-bold mb-2 md:mb-4 text-black text-center mx-auto">
                Ready to transform your startup <br /> journey?
                </h2>

                {/* Sub Text */}
                <p className=" font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-600 max-w-2xl mx-auto mb-4 md:mb-16 text-center">
                Join our growing network and bring your startup into the spotlight.
                </p>

            <div className="mx-auto text-center">
                {/* Button */}
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 w-[200px] md:w-[250px] px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition mb-16 text-[12px] md:text-[16px]">
                Apply for Membership
                </button>

        {/* ⭐ MOBILE CAROUSEL */}
      <div className="md:hidden relative">
        <div
          className="overflow-hidden rounded-xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="min-w-full">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={img}
                    width={800}
                    height={600}
                    alt="Gallery Image"
                    className="w-full h-50 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ⭐ Carousel Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

        {/* Collage Container */}
        <div className="hidden md:flex w-full grid grid-cols-4 md:grid-cols-4 grid-rows-1 gap-2 md:gap-4 lg:gap-6 md:h-[200px] lg:h-[270px] xl:h-[400px] 2xl:h-[400px] ">

          {/* LEFT COLUMN: big top + small bottom */}
          <div className="flex flex-col gap-2 lg:gap-6 md:gap-4 col-span-1 row-span-1 h-full w-full">
            <div className="md:rounded-xl lg:rounded-3xl overflow-hidden">
              <Image
                src={images[1]}
                alt="gallery"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="md:rounded-xl lg:rounded-3xl overflow-hidden">
              <Image
                src={images[3]}
                alt="gallery"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* CENTER LARGE IMAGE (spans 2 columns + 2 rows) */}
          <div className="col-span-2 row-span-1 md:rounded-xl lg:rounded-3xl overflow-hidden w-[180%] h-full">
            <Image
              src={images[0]}
              alt="gallery"
              width={1200}
              height={900}
              className="object-cover w-full h-full md:rounded-xl lg:rounded-3xl"
            />
          </div>

          {/* RIGHT COLUMN: big top + small bottom */}
          <div className="flex flex-col gap-2 lg:gap-6 md:gap-4 col-span-1 row-span-1 h-full w-full bg-blue-100">
            <div className="md:rounded-xl lg:rounded-3xl overflow-hidden">
              <Image
                src={images[2]}
                alt="gallery"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="md:rounded-xl lg:rounded-3xl overflow-hidden">
              <Image
                src={images[4]}
                alt="gallery"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
