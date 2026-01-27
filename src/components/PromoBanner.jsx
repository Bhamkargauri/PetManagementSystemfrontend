import petbanner from "../assets/petbanner.png";
const PromoBanner = () => {
  return (
    <section className="font-['Comic_Sans_MS'] w-full flex justify-center px-4 py-24 bg-[#fffaf3]">
      <div
        className="relative w-full max-w-6xl rounded-[60px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${petbanner})`,
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 " />

        {/* Glow blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/30 rounded-full blur-3xl" />
        <div className="absolute top-12 -right-24 w-72 h-72 bg-white/20 rounded-full blur-3xl" />

        {/* CONTENT */}
        <div className="relative text-center px-6 pt-10 pb-60">
          <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/30 text-white text-sm font-semibold backdrop-blur-md">
            Stay & Save 🐾
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-xl">
            Get Your <br className="hidden md:block" />
            Awesome Discount
          </h2>

          <p className="text-white text-sm md:text-base drop-shadow-lg">
            Special prices for long term stays over 30 days
          </p>

          <button className="mt-6 px-10 py-4 rounded-full bg-white text-orange-500 font-bold text-sm md:text-base hover:scale-105 transition-all duration-300 shadow-xl">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
