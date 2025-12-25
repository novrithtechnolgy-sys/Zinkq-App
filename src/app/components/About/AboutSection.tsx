// components/AboutSection.tsx
"use client";

export default function AboutSection() {
  return (
       <section className="text-white mx-2 md:mx-4 lg:mx-8">
            <div className="mx-auto md:px-10 xl:px-12 2xl:px-20 px-2 text-center">
      {/* Top Banner */}
      <div className="relative w-full h-[200px] md:h-[350px] rounded-2xl overflow-hidden">
        <img
          src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763312610/f0ftpreybljkpuetatnf.jpg" // <-- change to your image path
          className="w-full h-full object-cover"
          alt="About banner"
        />

        {/* Purple Overlay */}
        <div className="absolute inset-0 bg-[#6F00FFA8]"></div>

        {/* Title */}
        <h1 className="absolute inset-0 flex items-center justify-center text-white font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-semibold">
          About Us
        </h1>
      </div>

      {/* Vision & Mission Section */}
      <div className="grid md:grid-cols-2 gap-8 mt-12 px-6 md:px-12 text-center">
        {/* Vision */}
        <div>
          <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-semibold text-gray-800">
            Our <span className="text-blue-600">Vision</span>
          </h2>
          <p className="mt-3 text-gray-600 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
            To shape Sri Lanka's most dynamic startup ecosystem, where every
            entrepreneur has access to the people, tools, and opportunities they
            need to succeed.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-semibold text-gray-800">
            Our <span className="text-blue-600">Mission</span>
          </h2>
          <p className="mt-3 text-gray-600 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
            To empower startups through connection, collaboration, and visibility, helping founders 
            grow from local to global impact. 
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
