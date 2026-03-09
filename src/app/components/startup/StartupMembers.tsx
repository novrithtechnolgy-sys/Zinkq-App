"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import {
  FaArrowDown,
  FaArrowUp,
  FaCheckCircle,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSearch,
} from "react-icons/fa";

type Founder = {
  name: string;
  role?: string;
  expect?: string;
  summary?: string;
  location?: string;
  image?: any;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  services?: string[];
  businesses?: {
    image: string;
    year?: string;
    title?: string;
    desc?: string;
  }[];
};

export default function StartupMembers() {
  const [founders, setFounders] = useState<Founder[]>([]);
  const [filtered, setFiltered] = useState<Founder[]>([]);
  const [selected, setSelected] = useState<Founder | null>(null);

  const [activeCategory, setActiveCategory] = useState("industry");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("/api/founders")
      .then((res) => res.json())
      .then((data) => {
        setFounders(data || []);
        setFiltered(data || []);
        setSelected(data?.[0] || null);
      });
  }, []);

  useEffect(() => {
    if (!searchText.trim()) {
      setFiltered(founders);
      return;
    }

    const q = searchText.toLowerCase();

    const filteredData = founders.filter((f) => {
      if (activeCategory === "industry") {
        return f.services?.some((s) => s?.toLowerCase().includes(q));
      }

      if (activeCategory === "stage") {
        return f.role?.toLowerCase().includes(q);
      }

      if (activeCategory === "location") {
        return f.location?.toLowerCase().includes(q);
      }

      return false;
    });

    setFiltered(filteredData);
  }, [searchText, activeCategory, founders]);

  // keep selected valid after filtering
  useEffect(() => {
    if (!filtered.length) {
      setSelected(null);
      return;
    }

    const stillExists = filtered.some((f) => f.name === selected?.name);
    if (!stillExists) {
      setSelected(filtered[0]);
    }
  }, [filtered, selected]);

  const rows = useMemo(() => {
    const chunkSize = 4;
    const result: Founder[][] = [];

    for (let i = 0; i < filtered.length; i += chunkSize) {
      result.push(filtered.slice(i, i + chunkSize));
    }

    return result;
  }, [filtered]);

  const getImageUrl = (image: any) => {
    if (!image) return "";
    try {
      return urlFor(image).url();
    } catch {
      return "";
    }
  };

  const renderSocialLinks = (item: Founder) => (
    <div className="flex justify-center md:justify-start gap-4 mt-3 text-gray-700">
      {item.facebook ? (
        <a href={item.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      ) : null}
      {item.instagram ? (
        <a href={item.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      ) : null}
      {item.linkedin ? (
        <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      ) : null}
    </div>
  );

  const renderDesktopDetails = (item: Founder) => {
    const img = getImageUrl(item.image);

    return (
      <div className="mt-8 bg-[#F0F2F4] p-8 rounded-3xl md:px-10 xl:px-12 2xl:px-20">
        <div className="flex items-center gap-6 rounded-3xl">
          <Image
            src={img || "/placeholder.png"}
            alt={item.name}
            width={400}
            height={400}
            className="rounded-full h-32 w-32 object-cover"
          />

          <div className="space-y-1">
            <h3 className="font-roboto text-[16px] md:text-[18px] lg:text-[24px] font-bold">
              {item.name}
            </h3>
            <p className="text-gray-600">{item.role}</p>
            <p className="text-gray-500">{item.expect}</p>
            {renderSocialLinks(item)}
          </div>
        </div>

        <h3 className="font-roboto text-[14px] md:text-[24px] lg:text-[40px] font-bold mt-10 mb-3">
          Startup Summary
        </h3>
        <p className="text-gray-700 font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-justify leading-relaxed">
          {item.summary}
        </p>

        <h3 className="font-roboto text-[16px] md:text-[18px] lg:text-[24px] font-bold mt-10 mb-3">
          Services
        </h3>
        <ul className="space-y-3 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
          {item.services?.map((s, i) => (
            <li key={i} className="flex items-center gap-2">
              <FaCheckCircle className="text-purple-600 text-xl" />
              <span className="text-gray-700">{s}</span>
            </li>
          ))}
        </ul>

        <h3 className="font-roboto text-[16px] md:text-[18px] lg:text-[24px] font-bold mt-10">
          Businesses
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {item.businesses?.map((b, i) => (
            <div key={i} className="bg-white p-4 rounded-xl flex gap-4">
              <Image
                src={b.image || "/placeholder.png"}
                alt={b.title || "Business"}
                width={100}
                height={100}
                className="rounded-lg object-cover w-[100px] h-[100px]"
              />
              <div>
                <p className="font-roboto text-[12px] md:text-[16px] font-bold">
                  {b.year}
                </p>
                <h4 className="font-roboto text-[12px] md:text-[16px] font-semibold">
                  {b.title}
                </h4>
                <p className="font-roboto text-[10px] md:text-[14px] text-gray-600">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="px-2 md:px-0 md:mx-4 lg:mx-8 mx-auto">
      <div className="md:px-10 xl:px-12 2xl:px-20 mx-auto px-2 rounded-xl md:rounded-3xl w-full">
        <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-bold text-center text-[#1A1A1A]">
          Our Members’ <span className="text-blue-500">Startups</span>
        </h2>

        <p className="mt-2 text-center px-4 md:px-0 text-gray-600 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
          We are a team of entrepreneurs, creators, and innovators who are
          passionate
        </p>

        {/* Mobile tabs */}
        <div className="md:hidden flex items-center gap-3 text-sm font-medium mt-4 flex-wrap">
          <button
            onClick={() => setActiveCategory("industry")}
            className={`px-6 py-2 rounded-full font-bold ${
              activeCategory === "industry"
                ? "bg-purple-600 text-white"
                : "text-gray-700"
            }`}
          >
            Industry
          </button>
          <button
            onClick={() => setActiveCategory("stage")}
            className={`px-6 py-2 rounded-full font-bold ${
              activeCategory === "stage"
                ? "bg-purple-600 text-white"
                : "text-gray-700"
            }`}
          >
            Stage
          </button>
          <button
            onClick={() => setActiveCategory("location")}
            className={`px-6 py-2 rounded-full font-bold ${
              activeCategory === "location"
                ? "bg-purple-600 text-white"
                : "text-gray-700"
            }`}
          >
            Location
          </button>
        </div>

        {/* Search */}
        <div className="w-full mt-10">
          <div className="flex items-center bg-[#F7F7F7] rounded-xl px-4 py-3 mx-auto">
            <input
              type="text"
              placeholder={`Search by ${activeCategory}...`}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 px-2"
            />

            <FaSearch className="text-[20px] text-gray-400 mr-4" />

            <div className="hidden md:flex items-center gap-3 text-sm font-medium">
              <button
                onClick={() => setActiveCategory("industry")}
                className={`px-6 py-2 rounded-full font-bold ${
                  activeCategory === "industry"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700"
                }`}
              >
                Industry
              </button>
              <button
                onClick={() => setActiveCategory("stage")}
                className={`px-6 py-2 rounded-full font-bold ${
                  activeCategory === "stage"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700"
                }`}
              >
                Stage
              </button>
              <button
                onClick={() => setActiveCategory("location")}
                className={`px-6 py-2 rounded-full font-bold ${
                  activeCategory === "location"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700"
                }`}
              >
                Location
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden grid grid-cols-1 gap-6 mt-10">
          {filtered.map((f, i) => {
            const isSelected = selected?.name === f.name;
            const img = getImageUrl(f.image);

            return (
              <div key={i} className="w-full">
                <div
                  onClick={() => setSelected(isSelected ? null : f)}
                  className={`cursor-pointer border border-gray-400 rounded-xl overflow-hidden transition text-[#1A1A1A] flex flex-row justify-between ${
                    isSelected ? "bg-purple-100 border-purple-400" : "bg-white"
                  }`}
                >
                  <Image
                    src={img || "/placeholder.png"}
                    alt={f.name}
                    width={600}
                    height={400}
                    className="w-2/5 object-cover"
                  />

                  <div className="p-4 text-center w-full">
                    <h3 className="font-roboto text-[16px] font-bold">
                      {f.name}
                    </h3>
                    <p className="font-roboto text-[14px] text-gray-600">
                      {f.role}
                    </p>
                    <p className="font-roboto text-[12px] text-gray-500 mt-1">
                      {f.expect}
                    </p>

                    <div className="flex justify-center gap-4 mt-3 text-gray-700">
                      {f.facebook ? (
                        <a
                          href={f.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook />
                        </a>
                      ) : null}
                      {f.instagram ? (
                        <a
                          href={f.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram />
                        </a>
                      ) : null}
                      {f.linkedin ? (
                        <a
                          href={f.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex items-center flex-row justify-end w-[70px]">
                    <div className="p-2 flex items-center rounded-xl bg-purple-800 text-white h-full">
                      {isSelected ? <FaArrowUp /> : <FaArrowDown />}
                    </div>
                  </div>
                </div>

                {isSelected && (
                  <div className="mt-4 bg-[#F0F2F4] p-4 rounded-xl">
                    <h3 className="font-roboto text-[16px] font-bold">
                      {f.name}
                    </h3>
                    <p className="text-gray-600 font-roboto text-[14px]">
                      {f.role}
                    </p>
                    <p className="text-gray-500 mb-4 font-roboto text-[14px]">
                      {f.expect}
                    </p>

                    <h4 className="font-bold mt-3">Summary</h4>
                    <p className="text-gray-500 font-roboto text-[14px] text-justify">
                      {f.summary}
                    </p>

                    <h4 className="font-bold mt-3">Services</h4>
                    <ul className="mt-2 space-y-1">
                      {f.services?.map((s, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 font-roboto text-[14px]"
                        >
                          <FaCheckCircle className="text-purple-600" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-[16px] font-bold mt-10">Businesses</h3>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                      {f.businesses?.map((b, bi) => (
                        <div
                          key={bi}
                          className="bg-white rounded-xl flex gap-3 p-3"
                        >
                          <Image
                            src={b.image || "/placeholder.png"}
                            alt={b.title || "Business"}
                            width={90}
                            height={90}
                            className="rounded-lg object-cover w-[90px] h-[90px]"
                          />
                          <div className="p-1">
                            <p className="font-roboto text-[14px] font-bold">
                              {b.year}
                            </p>
                            <h4 className="font-semibold font-roboto text-[14px]">
                              {b.title}
                            </h4>
                            <p className="text-gray-600 font-roboto text-[12px]">
                              {b.desc}
                            </p>
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

        {/* DESKTOP ROWS OF 4 + DETAILS AFTER EACH ROW */}
        <div className="hidden md:block mt-10">
          {rows.map((row, rowIndex) => {
            const rowHasSelected = row.some((item) => item.name === selected?.name);

            return (
              <div key={rowIndex} className="mb-10">
                <div className="grid grid-cols-4 gap-6">
                  {row.map((f, i) => {
                    const isSelected = selected?.name === f.name;
                    const img = getImageUrl(f.image);

                    return (
                      <div key={i} className="w-full">
                        <div
                          onClick={() => setSelected(f)}
                          className={`cursor-pointer border rounded-xl overflow-hidden transition text-[#1A1A1A] h-full flex flex-col ${
                            isSelected
                              ? "bg-purple-100 border-purple-400"
                              : "bg-white border-gray-300 hover:border-purple-300"
                          }`}
                        >
                          <Image
                            src={img || "/placeholder.png"}
                            alt={f.name}
                            width={600}
                            height={400}
                            className="w-full h-48 object-cover"
                          />

                          <div className="p-4 text-center flex flex-col h-full">
                            <h3 className="font-roboto text-[20px] font-bold">
                              {f.name}
                            </h3>
                            <p className="font-roboto text-[16px] text-gray-600">
                              {f.role}
                            </p>
                            <p className="font-roboto text-[14px] text-gray-500 mt-1">
                              {f.expect}
                            </p>

                            <div className="mt-auto pt-3 flex justify-center gap-4 text-gray-700">
                              {f.facebook ? (
                                <a
                                  href={f.facebook}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaFacebook />
                                </a>
                              ) : null}
                              {f.instagram ? (
                                <a
                                  href={f.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaInstagram />
                                </a>
                              ) : null}
                              {f.linkedin ? (
                                <a
                                  href={f.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FaLinkedin />
                                </a>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {rowHasSelected && selected ? renderDesktopDetails(selected) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}