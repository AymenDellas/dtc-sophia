import Cta from './lib/Cta';

export const WhoIsThisFor = () => {
  return (
    <section className="w-full py-24 px-4 bg-emerald-950 text-white relative overflow-hidden">
      <div className="relative z-10 max-w-6xl !mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-amber-500 tracking-widest uppercase">
            Is This For You?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Clarity on <span className="text-amber-400">alignment.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          
          {/* For You List */}
          <div className="space-y-8 bg-white/5 p-8 sm:p-10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-amber-400 border-b border-white/10 pb-4">
              This mentoring is for you if:
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start group">
                <div className="shrink-0 w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">✓</div>
                <p className="text-emerald-50 leading-relaxed">
                  You are a woman in leadership — coach, executive, entrepreneur, or professional — who has built something real and knows <strong className="text-white">there is more</strong>
                </p>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="shrink-0 w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">✓</div>
                <p className="text-emerald-50 leading-relaxed">
                  You have tried coaching before and found it useful, but <strong className="text-white">it did not go deep enough</strong> to shift what actually needed to shift
                </p>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="shrink-0 w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">✓</div>
                <p className="text-emerald-50 leading-relaxed">
                  You are tired of managing everyone else's growth while your own development <strong className="text-white">sits on the back burner</strong>
                </p>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="shrink-0 w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">✓</div>
                <p className="text-emerald-50 leading-relaxed">
                  You are ready to do <strong className="text-white">real inner work</strong> — not just strategy sessions or accountability calls
                </p>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="shrink-0 w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">✓</div>
                <p className="text-emerald-50 leading-relaxed">
                  You want clarity that stays. Not a high that fades after the call ends.
                </p>
              </li>
            </ul>
          </div>

          {/* Not For You List */}
          <div className="space-y-8 p-8 sm:p-10 border border-emerald-900/50 rounded-3xl opacity-80 hover:opacity-100 transition-opacity">
            <h3 className="text-2xl font-bold text-emerald-300/50 border-b border-white/5 pb-4">
              This is <span className="text-emerald-200">not for you</span> if:
            </h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start group">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-900/50 text-emerald-400 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">✕</div>
                <p className="text-emerald-100/70 leading-relaxed">
                  You are looking for a quick tactical fix or a plug-and-play framework
                </p>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-900/50 text-emerald-400 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">✕</div>
                <p className="text-emerald-100/70 leading-relaxed">
                  You are not ready to examine the beliefs and patterns underneath your current results
                </p>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="shrink-0 w-6 h-6 rounded-full bg-emerald-900/50 text-emerald-400 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform">✕</div>
                <p className="text-emerald-100/70 leading-relaxed">
                  You want someone to hand you a plan — Sophia guides your own breakthrough, she does not do the thinking for you
                </p>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 text-center">
          <Cta text="Apply for Your Discovery Call" />
        </div>
      </div>
    </section>
  );
};
