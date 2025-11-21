export default function ThankYouPage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-black"></div>

      {/* Glow Effects */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/30 blur-3xl rounded-full -top-20 -left-20"></div>
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full bottom-0 right-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-lg text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          🎉 Thank You!
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
          Your message has been sent successfully.  
          We’ll get back to you as soon as possible.
        </p>

        <a
          href="/"
          className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 px-8 py-3 rounded-full text-white text-lg font-medium transition-all shadow-md"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
