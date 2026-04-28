import Cta from './lib/Cta';

export const Testimonials = () => {
  return (
    <section className="w-full py-24 px-4 bg-zinc-50 relative">
      <div className="max-w-6xl !mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">
            The Impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-900 leading-tight">
            What happens when you do the work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <article className="flex flex-col bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-zinc-900/5 border border-zinc-100 transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden group">
            {/* Subtle highlight removed */}
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900 font-bold text-xl shrink-0 border-2 border-amber-200">
                S
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 text-lg">Sharleen Linton</h3>
                <p className="text-xs font-semibold text-amber-600 tracking-wider uppercase">United Kingdom</p>
              </div>
            </div>
            
            <blockquote className="flex-1 text-zinc-700 leading-relaxed italic relative z-10 mb-6 font-serif text-lg">
              "You are one of the most down-to-earth, relatable, personable, kind, warm and joyful mentors I have ever come across. Who you are is what is making room for you to do what you do."
            </blockquote>
            
            <div className="mt-auto pt-4 border-t border-zinc-100">
              <p className="text-sm font-medium text-emerald-900 flex items-center gap-2">
                <span className="text-amber-500">✦</span> [ Insert Measurable Outcome ]
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="flex flex-col bg-emerald-900 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-emerald-900/20 border border-emerald-800 transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden group">
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-14 h-14 rounded-full bg-emerald-800 flex items-center justify-center text-amber-400 font-bold text-xl shrink-0 border-2 border-emerald-700">
                J
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Jennifer Williams</h3>
                <p className="text-xs font-semibold text-emerald-300 tracking-wider uppercase">United Kingdom</p>
              </div>
            </div>
            
            <blockquote className="flex-1 text-emerald-50 leading-relaxed italic relative z-10 mb-6 font-serif text-lg">
              "You helped me access ideas and gems that were hidden from my view. You came with wisdom and ideas that got the juices flowing. Now my mind is on overdrive."
            </blockquote>
            
            <div className="mt-auto pt-4 border-t border-emerald-800 relative z-10">
              <p className="text-sm font-medium text-amber-400 flex items-center gap-2">
                <span className="text-emerald-400">✦</span> [ Specific Business Outcome ]
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="flex flex-col bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-zinc-900/5 border border-zinc-100 transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden group">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900 font-bold text-xl shrink-0 border-2 border-amber-200">
                D
              </div>
              <div>
                <h3 className="font-bold text-zinc-900 text-lg">Daniella Blechner</h3>
                <p className="text-xs font-semibold text-amber-600 tracking-wider uppercase">United Kingdom</p>
              </div>
            </div>
            
            <blockquote className="flex-1 text-zinc-700 leading-relaxed italic relative z-10 mb-6 font-serif text-lg">
              "If you have a vision or dream, you must hire this lady. She helps you see the bigger picture and piece together your vision — with passion and compassion."
            </blockquote>
            
            <div className="mt-auto pt-4 border-t border-zinc-100">
              <p className="text-sm font-medium text-emerald-900 flex items-center gap-2">
                <span className="text-amber-500">✦</span> [ Specific Result ]
              </p>
            </div>
          </article>

        </div>

        <div className="mt-16 text-center">
          <Cta text="Apply for Your Discovery Call" />
        </div>
      </div>
    </section>
  );
};
