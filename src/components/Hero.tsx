
import Cta from './lib/Cta';

const Hero = () => {
  return (
    <section className="w-full  flex flex-col justify-center items-center px-4 relative overflow-hidden pt-20 pb-12">

      <div className="max-w-4xl !mx-auto space-y-10 text-center relative z-10 fade-up d1">

        {/* Eyebrow */}
        <div className="flex justify-center -mt-4 mb-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-emerald-900/10 bg-emerald-50">
            <span className="text-xs sm:text-sm font-semibold text-amber-600 tracking-wider uppercase">
              Exclusive Mentoring
            </span>
          </div>
        </div>

        {/* Stronger headline with visual emphasis */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center leading-[1.1] text-zinc-900 tracking-tight">
          The Women Who Lead Everyone Else Finally Have <br className="hidden sm:block" />
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-amber-400/20 -rotate-1"></span>
            <span className="relative text-emerald-900">Someone to Lead Them.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 max-w-3xl mx-auto leading-relaxed fade-up d2">
          A private mentoring experience for women leaders and coaches ready to clear the internal noise, reclaim their direction, and lead their life with the same power they bring to everyone else.
        </p>

        {/* CTA Area */}
        <div className="fade-up d3 flex flex-col items-center gap-4 mt-8">
          <Cta text="Apply for Your Discovery Call" />
          <p className="text-xs sm:text-sm text-zinc-500 font-medium italic">
            Application-based. Limited to women who are ready to do the real work.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
