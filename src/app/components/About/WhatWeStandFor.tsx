// components/WhatWeStandFor.tsx

import { FaBookOpen, FaCheckCircle, FaCircle, FaDotCircle, FaEye, FaLayerGroup, FaRegDotCircle, FaUsers } from "react-icons/fa";
import { FaChartLine, FaUser } from "react-icons/fa6";




export default function WhatWeStandFor() {
  return (
    <section className="md:py-10 text-white mx-2 md:mx-4 lg:mx-8">
      <div className="grid md:grid-cols-2 flex flex-col md:flex-row gap-10 items-center mx-auto md:px-10 xl:px-12 2xl:px-20 px-2 md:h-[400px] py-10">
        
        {/* LEFT SIDE */}
        <div className="order-2 md:order-1">
          <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-bold text-gray-900 mb-8">
            What We Stand For
          </h2>

          <ul className="space-y-4 font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-700">
            <li className="flex items-start gap-3">
              <FaUsers className="text-blue-600 w-6 h-6 mt-1" />
              <p>
                <span className="font-semibold text-blue-600">Connection</span>{" "}
                – Real relationships over empty networking.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <FaLayerGroup className="text-blue-600 w-6 h-6 mt-1" />
              <p>
                <span className="font-semibold text-blue-600">Collaboration</span>{" "}
                – Building together, not competing alone.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <FaBookOpen className="text-blue-600 w-6 h-6 mt-1" />
              <p>
                <span className="font-semibold text-blue-600">Knowledge</span>{" "}
                – Learning from each other’s real experiences.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <FaEye className="text-blue-600 w-6 h-6 mt-1" />
              <p>
                <span className="font-semibold text-blue-600">Visibility</span>{" "}
                – Putting founders and ideas in the spotlight.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <FaChartLine className="text-blue-600 w-6 h-6 mt-1" />
              <p>
                <span className="font-semibold text-blue-600">Growth</span>{" "}
                – Turning vision into measurable success.
              </p>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-100 order-1 md:order-1">
          <img
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763312608/dne2kuznj9quynh46bgq.jpg"   // <-- update path
            className="w-full h-full object-cover"
            alt="Team discussion"
          />

          {/* PURPLE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/60 via-purple-500/40 to-transparent"></div>
        </div>

      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-auto md:px-10 xl:px-12 2xl:px-20 px-2 md:h-[400px] py-10 md:mt-30">
        
        {/* LEFT SIDE */}
        <div className="order-2 md:order-2 ">
          <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-bold text-gray-900 mb-8">
            What We Do
          </h2>

          <ul className="space-y-4 font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-700">
            <li className="flex items-start gap-3">
              <FaCircle className="text-blue-600 w-4 h-4 md:w-6 md:h-6 mt-1" />
              <p>
                <span className="font-semibold text-blue-600">Founder Features :</span>{" "}
                Tell your story. Inspire others.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <FaCircle className="text-blue-600 w-4 h-4 md:w-6 md:h-6 mt-1" />
              <p>
                <span className="font-semibold text-blue-600">Startup Directory:</span>{" "}
                 Showcase your business and attract opportunities.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <FaCircle className="text-blue-600 w-4 h-4 md:w-6 md:h-6 mt-1" />
              <p>
                <span className="font-semibold text-blue-600">Networking Events:</span>{" "}
                Meet mentors, investors, and peers.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <FaCircle className="text-blue-600 w-4 h-4 md:w-6 md:h-6 mt-1" />
              <p>
                <span className="font-semibold text-blue-600">Learning Labs:</span>{" "}
                Workshops to upskill and grow your team.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <FaCircle className="text-blue-600 w-4 h-4 md:w-6 md:h-6 mt-1" />
              <p>
                <span className="font-semibold text-blue-600">Mentorship Access:</span>{" "}
                Real guidance from successful entrepreneurs.
              </p>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden order-1 md:order-1">
          <img
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763312608/z1ezx1vxnypdsaddet1n.jpg"   // <-- update path
            className="w-full h-full object-cover"
            alt="Team discussion"
          />

          {/* PURPLE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/60 via-purple-500/40 to-transparent"></div>
        </div>

      </div>
    </section>
  );
}
