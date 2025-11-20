// components/OurStory.tsx
export default function OurStory() {
  return (
    <section className=" mx-2 md:mx-4 lg:mx-8 rounded-b-3xl py-4 md:py-10">
      <div className="md:px-10 xl:px-12 2xl:px-20 mx-auto px-2 rounded-xl md:rounded-3xl bg-[#F0F2F4] w-full h-full py-20 md:py-24 text-center">
        {/* Title */}
        <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-semibold text-gray-900 mb-6">
          Our Story
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 leading-relaxed font-roboto text-[14px] md:text-[16px] lg:text-[20px]">
          Zinkq was born from a simple realization — entrepreneurship can be lonely.
          Too many dreamers give up because they don’t have the right people around
          them. Founded by entrepreneurs who’ve lived that reality, Zinkq exists to
          bring together the builders, thinkers, and doers who are shaping the
          future. We started with a few passionate founders and grew into a national
          community of innovators — from tech startups to creative studios and social
          enterprises. At Zinkq, we believe the next great startup doesn’t need luck —
          it needs a network.
        </p>
      </div>
    </section>
  );
}
