const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-[#4E8D7C] text-white text-center">
      <div className="container section-container mx-auto px-6 md:px-12 min-h-[460px] flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Wellness Begins Within
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-[#FAF9F6]/90">
          Discover how EverGlow helps you find balance and harmony in everyday life.
          Start your journey toward a better you today.
        </p>
        <button className="px-8 py-3 bg-[#F4A261] text-white font-semibold rounded-full shadow-md hover:bg-[#e69550] transition-colors duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
