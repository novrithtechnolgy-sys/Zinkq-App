"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp, FaCheckCircle, FaFacebook, FaLinkedin, FaSearch, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";

export default function StartupMembers() {
  const [founders, setFounders] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);

  const [activeCategory, setActiveCategory] = useState("industry");
  const [searchText, setSearchText] = useState("");

  // Fetch founders
  useEffect(() => {
    fetch("/api/founders")
      .then((res) => res.json())
      .then((data) => {
        setFounders(data);
        setFiltered(data);
        setSelected(data[0]);
      });
  }, []);

  // Filter Logic
  useEffect(() => {
    if (!searchText.trim()) {
      setFiltered(founders);
      return;
    }

    const filteredData = founders.filter((f) => {
      if (activeCategory === "industry") {
        return f.services?.some((s: string) =>
          s.toLowerCase().includes(searchText.toLowerCase())
        );
      }

      if (activeCategory === "stage") {
        return f.role?.toLowerCase().includes(searchText.toLowerCase());
      }

      if (activeCategory === "location") {
        return f.location?.toLowerCase().includes(searchText.toLowerCase());
      }

      return false;
    });

    setFiltered(filteredData);
  }, [searchText, activeCategory, founders]);

  return (
    <section className="px-2 md:px-0 md:mx-4 lg:mx-8 mx-auto">
      <div className="md:px-10 xl:px-12 2xl:px-20 mx-auto px-2 rounded-xl md:rounded-3xl w-full">

        {/* TITLE */}
        <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-bold text-center text-[#1A1A1A]">
          Our Members’ <span className="text-blue-500">Startups</span>
        </h2>

        <p className="mt-2 text-center text-gray-600 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
          We are a team of entrepreneurs, creators, and innovators who are passionate
        </p>

        {/* Category Tabs (Mobile) */}
        <div className="md:hidden flex items-center gap-6 text-sm font-medium mt-4">
          <button
            onClick={() => setActiveCategory("industry")}
            className={`px-6 py-2 rounded-full font-bold ${
              activeCategory === "industry" ? "bg-purple-600 text-white" : "text-gray-700"
            }`}
          >
            Industry
          </button>
          <button
            onClick={() => setActiveCategory("stage")}
            className={`px-6 py-2 rounded-full font-bold ${
              activeCategory === "stage" ? "bg-purple-600 text-white" : "text-gray-700"
            }`}
          >
            Stage
          </button>
          <button
            onClick={() => setActiveCategory("location")}
            className={`px-6 py-2 rounded-full font-bold ${
              activeCategory === "location" ? "bg-purple-600 text-white" : "text-gray-700"
            }`}
          >
            Location
          </button>
        </div>

        {/* SEARCH + DESKTOP CATEGORY */}
        <div className="w-full mt-10">
          <div className="flex items-center bg-[#F7F7F7] rounded-xl px-4 py-3 mx-auto">

            <input
              type="text"
              placeholder={`Search by ${activeCategory}...`}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2"
            />

            <FaSearch className="text-[20px] text-gray-400 mr-4"/>

            <div className="hidden md:block flex items-center gap-6 text-sm font-medium">
              <button
                onClick={() => setActiveCategory("industry")}
                className={`px-6 py-2 rounded-full font-bold ${
                  activeCategory === "industry" ? "bg-purple-600 text-white" : "text-gray-700"
                }`}
              >
                Industry
              </button>
              <button
                onClick={() => setActiveCategory("stage")}
                className={`px-6 py-2 rounded-full font-bold ${
                  activeCategory === "stage" ? "bg-purple-600 text-white" : "text-gray-700"
                }`}
              >
                Stage
              </button>
              <button
                onClick={() => setActiveCategory("location")}
                className={`px-6 py-2 rounded-full font-bold ${
                  activeCategory === "location" ? "bg-purple-600 text-white" : "text-gray-700"
                }`}
              >
                Location
              </button>
            </div>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1  md:grid-cols-4 gap-6 mt-10">
          {filtered.map((f: any, i) => {
            const isSelected = selected?.name === f.name;

            return (
              <div key={i} className="w-full">

                {/* CARD */}
                <div
                  onClick={() => setSelected(isSelected ? null : f)}
                  className={`cursor-pointer border border-gray-400 rounded-xl overflow-hidden transition text-[#1A1A1A] flex flex-row md:flex-col justify-between md:h-full justify-start
                  ${isSelected ? "bg-purple-100 border-purple-400" : "bg-white"}`}
                >
                  <Image
                    src={f.image ? urlFor(f.image).url() : ""}
                    alt={f.name}
                    width={600}
                    height={400}
                    className="w-2/5 md:w-full md:h-48 object-cover"
                  />

                  <div className="p-4 text-center">
                    <h3 className="font-roboto md:text-[20px] text-[16px] font-bold">{f.name}</h3>
                    <p className="font-roboto text-[14px] md:text-[16px] text-gray-600">{f.role}</p>
                    <p className="font-roboto text-[12px] md:text-[14px] text-gray-500 mt-1">{f.expect}</p>

                    <div className="flex justify-center gap-4 mt-3 text-gray-700">
                      <a href={f.facebook}><FaFacebook /></a>
                      <a href={f.linkedin}><FaLinkedin /></a>
                      <a href={f.twitter}><FaYoutube /></a>
                   
                    </div>
                  </div>

                  {/* Arrow for Mobile */}
                  <div className="md:hidden p-2 flex items-center rounded-xl justify-center bg-purple-800 text-white">
                    {isSelected ? <FaArrowUp /> : <FaArrowDown />}
                  </div>
                </div>

                {/* MOBILE DETAILS */}
                {isSelected && (
                  <div className="md:hidden mt-4 bg-[#F0F2F4] p-4 rounded-xl">
                    <h3 className="font-roboto text-[16px] font-bold">{f.name}</h3>
                    <p className="text-gray-600 font-roboto text-[14px]">{f.role}</p>
                    <p className="text-gray-500 mb-4 font-roboto text-[14px]">{f.expect}</p>

                    <h4 className="font-bold mt-3">Summary</h4>
                    <p className="text-gray-500 font-roboto text-[14px]">{f.summary}</p>

                    <h4 className="font-bold mt-3">Services</h4>
                    <ul className="mt-2 space-y-1">
                      {f.services?.map((s: string, idx: number) => (
                        <li key={idx} className="flex items-center gap-2 font-roboto text-[14px]">
                          <FaCheckCircle className="text-purple-600" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-[16px] font-bold mt-10">Businesses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {selected.businesses?.map((b: any, i: number) => (
                <div key={i} className="bg-white p- rounded-xl flex gap-4">
                  <Image
                    src={b.image}
                    alt={b.title}
                    width={100}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                  <div className="p-4">
                    <p className="font-roboto text-[14px] font-bold">{b.year}</p>
                    <h4 className="font-semibold font-roboto text-[14px]">{b.title}</h4>
                    <p className="text-gray-600 font-roboto text-[12px]">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* DESKTOP DETAILS SECTION */}
      <div className="hidden md:block">
        {selected && (
          <div className="mt-16 bg-[#F0F2F4] p-8 rounded-3xl md:px-10 xl:px-12 2xl:px-20 mx-auto px-2">
            <div className="flex items-center gap-6 rounded-3xl">
              <Image
                src={selected.image}
                alt={selected.name}
                width={120}
                height={120}
                className="rounded-full h-32 w-32 object-cover"
              />

              <div>
                <h3 className="font-roboto text-[16px] md:text-[18px] lg:text-[24px] font-bold">{selected.name}</h3>
                <p className="text-gray-600">{selected.role}</p>
                <p className="text-gray-500">{selected.expect}</p>

                <div className="flex gap-4 mt-3 text-gray-700">
                   <a href={selected.facebook}><FaFacebook /></a>
                   <a href={selected.linkedin}><FaLinkedin /></a>
                   <a href={selected.twitter}><FaYoutube /></a>
                 
                </div>
              </div>
            </div>

            <h3 className="font-roboto text-[14px] md:text-[24px] lg:text-[40px] font-bold mt-10 mb-3">Startup Summary</h3>
            <p className="text-gray-700 font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-justify leading-relaxed">{selected.summary}</p>

            <h3 className="font-roboto text-[16px] md:text-[18px] lg:text-[24px] font-bold mt-10 mb-3">Services</h3>
            <ul className="space-y-3 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
              {selected.services?.map((s: string, i: number) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-purple-600 text-xl"/>
                  <span className="text-gray-700">{s}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-roboto text-[16px] md:text-[18px] lg:text-[24px] font-bold mt-10">Businesses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {selected.businesses?.map((b: any, i: number) => (
                <div key={i} className="bg-white p-4 rounded-xl flex gap-4">
                  <Image
                    src={b.image}
                    alt={b.title}
                    width={100}
                    height={100}
                    className="rounded-lg"
                  />
                  <div>
                    <p className="font-roboto text-[12px] md:text-[16px] font-bold">{b.year}</p>
                    <h4 className="font-roboto text-[12px] md:text-[16px] font-semibold">{b.title}</h4>
                    <p className="font-roboto text-[10px] md:text-[14px] text-gray-600">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
