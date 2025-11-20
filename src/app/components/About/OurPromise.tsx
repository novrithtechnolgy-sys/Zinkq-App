export default function OurPromise() {
  return (
    <section className="text-white mx-2 md:mx-4 lg:mx-8 md:mb-20">
        <div className="md:px-10 xl:px-12 2xl:px-20 mx-auto px-2 rounded-xl md:rounded-3xl w-full h-full py-10 md:py-0">
      <div className="mx-auto text-center">
        {/* Title */}
        <h2 className="font-roboto text-[20px] md:text-[38px] lg:text-[56px] font-bold text-[#1A1A1A]">
          Our Promise
        </h2>

        {/* Subtitle */}
        <p className="font-roboto text-[14px] md:text-[16px] lg:text-[20px] mt-4 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          We’ll stay real, collaborative, and transparent — always focused on
          empowering founders, not exploiting them. Because when one of us wins,
          we all rise.
        </p>

        {/* Images Row */}
        <div className="mt-12 grid grid-cols-3 gap-2 md:gap-8">
          {/* Image 1 */}
          <img
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763312607/ovxh2tc8jzfffmkxc8x0.jpg"
            alt="People collaborating"
            className="w-full h-34 md:h-64 object-cover rounded-xl md:rounded-3xl"
          />

          {/* Image 2 */}
          <img
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763312607/bs4wqgiz3qonqaybgdca.jpg"
            alt="Team unity"
            className="w-full h-34 md:h-64 object-cover rounded-xl md:rounded-3xl"
          />

          {/* Image 3 */}
          <img
            src="https://res.cloudinary.com/dgm9hbcb1/image/upload/v1763312607/ovxh2tc8jzfffmkxc8x0.jpg"
            alt="Handshake partnership"
            className="w-full h-34 md:h-64 object-cover rounded-xl md:rounded-3xl"
          />
        </div>
      </div>
    </div>
    </section>
  );
}
