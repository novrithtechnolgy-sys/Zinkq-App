"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <section className="pb-20 mx-2 md:mx-4 lg:mx-8 rounded-b-3xl py-4 md:py-8 ">
      <div className="md:px-10 xl:px-12 2xl:px-20 mx-auto px-2 rounded-xl md:rounded-3xl bg-[#F0F2F4]">
        
        {/* Big Image */}
        <div className="overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763115529/nkxhgeiy5ekueji2hjzy.jpg"
            width={1600}
            height={900}
            alt="Startup team meeting"
            className="object-cover w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[500px] 2xl:h-[570px] mt-20 sm:mt-30 lg:mt-34 rounded-xl md:rounded-3xl"
          />
        </div>

        {/* Text Section */}
        <div className="text-center mt-10 relative">
          {/* Curved Background */}
          <div className="absolute inset-0 top-[-100px] lg:left-1/2 -translate-x-1/2 md:w-[900px] h-[500px] bg-gradient-to-b from-white to-transparent rounded-full blur-3xl opacity-40"></div>

          <h1 className="relative text-[20px] md:text-[38px] lg:text-[56px] font-bold leading-tight font-roboto">
            <span className="text-blue-600">Zinkq -</span> The Startup Network
            <br />
            That Builds Together
          </h1>

          <p className="relative mt-4 text-gray-600 max-w-2xl mx-auto font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
            Where Sri Lanka’s entrepreneurs, creators, and innovators connect to grow,
            learn, and make impact.
          </p>

          <button
            type="button"
             onClick={() => router.push("/contact")}
            className="relative pointer-cursor mt-6 px-4 md:px-8 py-2 md:py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-md mb-10 text-[12px] md:text-[16px] w-[200px] md:w-[250px]">
            Join Zinkq Now
          </button>
        </div>
      </div>
    </section>
  );
}
