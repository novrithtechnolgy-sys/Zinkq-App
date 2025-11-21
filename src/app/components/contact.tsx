"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiYoutube,
} from "react-icons/fi";

export default function Contactpage() {
  return (
    <section className="mx-2 md:mx-4 lg:mx-8 pb-10">
        <div className="md:px-10 xl:px-12 2xl:px-20 mx-auto px-2 rounded-xl md:rounded-3xl ">
      
      {/* Section Heading */}
      <section className="text-center ">
        <h1 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-bold">
          Let’s <span className="text-blue-600">Build</span> Together
        </h1>
        <p className="text-gray-600 mt-2 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
          Have a question, collaboration idea, or want to feature your startup?
          We’d love to hear from you.
        </p>
      </section>

      {/* Main Section */}
      <section className="w-full mt-20 grid grid-cols-1 md:grid-cols-2 gap-4  md:px-0">

        {/* LEFT: FORM */}
        <div className="bg-[#F5F4F7] shadow-md rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-1">Send us a message</h2>
          <p className="text-sm text-gray-500 mb-6">
            Drop a message — you never know where one connection could lead.
          </p>

          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 md:space-y-6 mb-6">

            {/* First name */}
            <div>
              <label className="text-sm">First name</label>
              <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                <FiUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Last name */}
            <div>
              <label className="text-sm">Last name</label>
              <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                <FiUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="text-sm">Email Address</label>
              <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                <FiMail className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="md:col-span-2">
              <label className="text-sm">Phone number</label>
              <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                <FiPhone className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="text-sm">Message</label>
              <div className="flex items-start border rounded-md px-3 py-2 mt-1">
                <FiMessageCircle className="text-gray-400 mr-2 mt-1" />
                <textarea
                  placeholder="Type your message here"
                  rows={4}
                  className="w-full outline-none"
                ></textarea>
              </div>
            </div>
          </form>

          <button className="mt-6 w-[200px] md:w-[250px] bg-gradient-to-r from-purple-500 to-blue-500 text-[12px] md:text-[16px] text-white py-2 md:py-3 rounded-3xl font-semibold">
            Send Message
          </button>
        </div>

        {/* RIGHT: IMAGE + GRADIENT + TEXT */}
        <div className="relative rounded-2xl overflow-hidden shadow-md h-[600px] md:h-auto">
          
          {/* Background Image */}
          <Image
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763644503/xcnt8omaujbfwotq128n.jpg"
            alt="Contact Background"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />

          {/* Gradient Layer 1: Black fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* Gradient Layer 2: Purple glow bottom-left */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(123,31,255,0.9),rgba(0,0,0,0))]"></div>

          {/* Contact Info */}
          <div className="absolute bottom-6 left-6 text-white">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-sm text-gray-200">22 Marikkar St, <br/>
                Dharga Town,<br/> Aluthgama, Sri Lanka</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-sm text-gray-200">077 157 9668</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-sm text-gray-200">inqary.digitalescaps@gmail.com</p>
            </div>

            <div className="flex space-x-4 text-white text-xl">
              <FiFacebook />
              <FiInstagram />
              <FiYoutube />
              <FiLinkedin />
            </div>
          </div>
        </div>
        </section>
        </div>
      </section>
  );
}
