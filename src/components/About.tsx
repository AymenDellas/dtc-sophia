import Cta from './lib/Cta';

const About = () => {
  return (
    <section className="w-full py-24 px-4 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-6xl !mx-auto">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-center">

          {/* Photo Column */}
          <div className="relative group">
            {/* Background offset block */}
            <div className="absolute inset-0 bg-emerald-900 rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>

            <div className="relative aspect-[4/5] bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-xl shadow-zinc-900/10 overflow-hidden z-10">
              <img src="./sophia.png" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Text Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold tracking-widest uppercase rounded-md">
                About Sophia
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 leading-[1.15]">
                30 years. One consistent result: <br className="hidden lg:block" />
                <span className="text-emerald-900">women who lead their lives on their own terms.</span>
              </h2>
            </div>

            <div className="space-y-5 text-lg text-zinc-700 leading-relaxed">
              <p>
                For over three decades, Sophia Bailey-Larsen has been creating space for women in leadership to reconnect with their own inner authority. Based between the UK and Spain, she works with women across the globe — from emerging coaches to senior executives — who are ready for transformation that goes beyond tactics.
              </p>
              <p>
                As Global Director of the Neuro Change Institute, a Certified Leadership Instructor with the Napoleon Hill Foundation, and a Certified Wealth Flow Consultant, Sophia brings a rare combination of evidence-based neuroscience and timeless success philosophy to every session.
              </p>
              <p className="font-medium text-emerald-900 italic border-l-4 border-amber-400 pl-4">
                She is not a hype-based motivator. Her clients describe her as the person who helps them hear their own voice more clearly — and trust it more fully.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-200">
              <ul className="grid sm:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <span className="text-zinc-800 font-medium text-sm">Global Director, Neuro Change Institute</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <span className="text-zinc-800 font-medium text-sm">Certified Leadership Instructor, Napoleon Hill Foundation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <span className="text-zinc-800 font-medium text-sm">Certified Meditation Teacher &amp; Wealth Flow</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></div>
                  <span className="text-zinc-800 font-medium text-sm">30+ years mentoring women globally</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-4">
              <Cta text="Apply for Your Discovery Call" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
