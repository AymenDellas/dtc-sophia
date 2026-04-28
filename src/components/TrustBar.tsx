export const TrustBar = () => {
  return (
    <div className="w-full bg-white py-10 px-4 border-b border-zinc-200">
      <div className="max-w-5xl !mx-auto flex flex-col items-center justify-center space-y-6">
        <p className="text-xs sm:text-sm font-bold text-amber-600 tracking-[0.2em] uppercase text-center">
          Internationally Certified & Recognized
        </p>

        {/* Certification Logos - User needs to save the image as public/certifications.png */}
        <div className="w-full flex justify-center opacity-90 transition-opacity duration-300 hover:opacity-100">
          <img
            src="./certifications.png"
            alt="Professional Certifications including Centre of Excellence, Neuro Change Institute, and Napoleon Hill Foundation"
            className="h-16 sm:h-20 md:h-28 w-auto object-contain drop-shadow-sm mix-blend-multiply"
          />
        </div>
      </div>
    </div>
  );
};
