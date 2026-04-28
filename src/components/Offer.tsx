
import React from 'react';
import Cta from './lib/Cta';

const Offer = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl !mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">
            Work With Sophia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
            Two paths into the mentoring
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-12">
          
          {/* Path 1: Intensive */}
          <article className="relative bg-white border border-zinc-200 rounded-3xl p-8 sm:p-10 flex flex-col shadow-xl shadow-zinc-900/5 transition-transform duration-300 hover:-translate-y-2">
            <span className="text-xs font-bold text-amber-600 tracking-wider uppercase mb-4 block">
              6-Week Intensive
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-900 mb-3 leading-tight">
              The Neuro Change Method
            </h3>
            <p className="text-zinc-600 italic border-b border-zinc-100 pb-6 mb-6">
              For women ready to reset the subconscious patterns behind their results.
            </p>
            
            <ul className="space-y-4 flex-1 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></div>
                <p className="text-zinc-700 leading-relaxed">
                  <strong className="text-emerald-900 font-semibold">Subconscious pattern reset</strong> — release internal blocks that do not shift through insight alone, so aligned action feels natural instead of forced
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></div>
                <p className="text-zinc-700 leading-relaxed">
                  <strong className="text-emerald-900 font-semibold">Evidence-based Neuro Change Method</strong> — a proven framework used by the Neuro Change Institute globally
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></div>
                <p className="text-zinc-700 leading-relaxed">
                  <strong className="text-emerald-900 font-semibold">Group cohort experience</strong> — structured weekly sessions with other women doing serious inner work
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2.5 shrink-0"></div>
                <p className="text-zinc-700 leading-relaxed">
                  <strong className="text-emerald-900 font-semibold">Foundation for the Collective</strong> — completing this path opens the door to Sophia's high-level 1:1 mentoring
                </p>
              </li>
            </ul>

            <div className="p-4 bg-amber-50/50 border border-amber-200/50 rounded-xl mb-6 text-center">
              <p className="text-sm text-amber-800 italic">
                [ Next cohort: INSERT DATE · X spots remaining ]
              </p>
            </div>

            <a 
              href="https://live.vcita.com/site/sophiabailey" 
              target="_blank" 
              rel="noreferrer" 
              className="w-full text-center px-6 py-4 rounded-xl border-2 border-emerald-900 text-emerald-900 font-bold hover:bg-emerald-900 hover:text-white transition-colors duration-200"
            >
              Learn More &amp; Apply
            </a>
          </article>


          {/* Path 2: 1:1 */}
          <article className="relative bg-emerald-900 rounded-3xl p-8 sm:p-10 flex flex-col shadow-2xl shadow-emerald-900/20 transition-transform duration-300 hover:-translate-y-2 border border-emerald-800 overflow-hidden">
            {/* Background glow removed */}

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-amber-400/20 text-amber-400 text-xs font-bold tracking-wider uppercase rounded-md">
                  High-Level · 1:1
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                The NEU Rich Collective
              </h3>
              <p className="text-emerald-100/80 italic border-b border-emerald-800/50 pb-6 mb-6">
                For experienced leaders and coaches ready for their next chapter — personally and professionally.
              </p>
              
              <ul className="space-y-4 flex-1 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 shrink-0"></div>
                  <p className="text-emerald-50 leading-relaxed">
                    <strong className="text-white font-semibold">1:1 sessions with Sophia</strong> — every session built around your breakthroughs, challenges, and vision — not a generic template
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 shrink-0"></div>
                  <p className="text-emerald-50 leading-relaxed">
                    <strong className="text-white font-semibold">Wealth Dynamics profile</strong> — understand exactly how you are wired to create value, make decisions, and lead with less resistance
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 shrink-0"></div>
                  <p className="text-emerald-50 leading-relaxed">
                    <strong className="text-white font-semibold">Napoleon Hill Science of Success</strong> — the inner mechanics of achievement, influence, and sustained confidence
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 shrink-0"></div>
                  <p className="text-emerald-50 leading-relaxed">
                    <strong className="text-white font-semibold">Pathway from Mentee to Mentor</strong> — option to certify as a Neuro Change Practitioner and build your own transformational practice
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 shrink-0"></div>
                  <p className="text-emerald-50 leading-relaxed">
                    <strong className="text-white font-semibold">Business development support</strong> — for coaches ready to position as transformational leaders in their field
                  </p>
                </li>
              </ul>

              <a 
                href="#apply" 
                className="w-full text-center px-6 py-4 rounded-xl bg-amber-400 text-emerald-950 font-bold hover:bg-amber-300 transition-colors duration-200 mt-auto"
              >
                Apply for the Collective
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Offer;
