import { FaC, FaCircleCheck } from "react-icons/fa6";

export default function Community() {
    return (
        <section className="mx-2 md:mx-4 lg:mx-8 rounded-b-3xl py-4 md:py-10">
            <div className="md:px-10 xl:px-12 2xl:px-20 mx-auto px-6 rounded-xl md:rounded-3xl bg-[#F0F2F4] w-full py-10 md:py-10 ">
                <div className="max-w-4xl">
        <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-bold text-[#1A1A1A]">
          Our Community
        </h2>

        <p className="mt-4 font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-700">
          Zinkq is made up of:
        </p>

        <ul className="mt-4 space-y-3 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
          {[
            "Early-stage founders bringing ideas to life",
            "Growth-stage startups scaling across borders",
            "Professionals supporting the startup ecosystem",
            "Investors and mentors who believe in local talent",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
                <FaCircleCheck className="text-blue-600 flex-shrink-0 w-3 h-3 md:w-6 md:h-6 mt-1 items-center" />
                <p>
              <span className="text-gray-800 font-roboto text-[14px] md:text-[16px] lg:text-[20px]">{item}</span>
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-4 font-roboto text-[14px] md:text-[16px] lg:text-[20px] text-gray-700 leading-relaxed">
          Together, we’re redefining Sri Lanka’s startup story —
          one connection at a time.
        </p>
      </div>
            </div>
        </section>
    )

}