"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
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

  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        router.push("/thank-you"); // Redirect
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong!", );
    }
  };



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
        <form onSubmit={handleSubmit} className="bg-[#F5F4F7] shadow-md rounded-xl p-8">
          <h2 className="font-roboto text-[16px] md:text-[30px] lg:text-[48px] font-semibold mb-1">Send us a message</h2>
          <p className="font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-500 mb-6">
            Drop a message and you never know where one connection could lead.
          </p>

          {/* Form */}
          <div 
            
          className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-4 md:space-y-6 mb-6">

            {/* First name */}
            <div>
              <label className="font-roboto text-[14px] md:text-[16px] lg:text-[20px]">First name</label>
              <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                <FiUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Last name */}
            <div>
              <label className="font-roboto text-[14px] md:text-[16px] lg:text-[20px]">Last name</label>
              <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                <FiUser className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="font-roboto text-[14px] md:text-[16px] lg:text-[20px]">Email Address</label>
              <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                <FiMail className="text-gray-400 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="md:col-span-2">
              <label className="font-roboto text-[14px] md:text-[16px] lg:text-[20px]">Phone number</label>
              <div className="flex items-center border rounded-md px-3 py-2 mt-1">
                <FiPhone className="text-gray-400 mr-2" />
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="font-roboto text-[14px] md:text-[16px] lg:text-[20px]">Message</label>
              <div className="flex items-start border rounded-md px-3 py-2 mt-1">
                <FiMessageCircle className="text-gray-400 mr-2 mt-1" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message here"
                  rows={4}
                  className="w-full outline-none"
                ></textarea>
              </div>
            </div>
          <button className="mt-6 w-[200px] md:w-[250px] bg-gradient-to-r from-purple-500 to-blue-500 text-[12px] md:text-[16px] text-white py-2 md:py-3 rounded-3xl font-semibold">
            Send Message
          </button>
             {status && (
                <p className="md:col-span-2 text-sm text-black mt-2">{status}</p>
              )}
        </div> 
        </form>

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
              <h3 className="font-roboto text-[14px] md:text-[16px] lg:text-[20px] font-semibold">Address</h3>
              <p className="font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-200">22 Marikkar St, <br/>
                Dharga Town 12090,<br/> Sri Lanka</p>
            </div>

            <div className="mb-6">
              <h3 className="font-roboto text-[14px] md:text-[16px] lg:text-[20px] font-semibold">Contact</h3>
              <p className="font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-200">077 157 9668</p>
            </div>

            <div className="mb-6">
              <h3 className="font-roboto text-[14px] md:text-[16px] lg:text-[20px] font-semibold">Email</h3>
              <p className="font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-200">hello@zinkq.com</p>
            </div>

            <div className="flex space-x-4 text-white text-[20px]">
              <a href="https://www.facebook.com/profile.php?id=61579360235881#"><FiFacebook /></a>
              <a href="https://www.instagram.com/networkwith.zinkq"><FiInstagram /></a>
              <a href="https://www.linkedin.com/company/zinkq/"><FiLinkedin /></a> 
              {/* <a><FiYoutube /></a> */}
            </div>
          </div>
        </div>
        </section>
        </div>
      </section>
  );
}
