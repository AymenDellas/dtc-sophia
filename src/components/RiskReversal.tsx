
export const RiskReversal = () => {
  return (
    <section className="w-full py-24 px-4 bg-zinc-100 relative overflow-hidden">
      
      <div className="max-w-4xl !mx-auto text-center relative z-10">
        <span className="inline-block mb-6 px-4 py-1.5 bg-emerald-900/5 border border-emerald-900/10 text-emerald-900 text-xs font-bold tracking-widest uppercase rounded-full">
          No Risk. No Obligation.
        </span>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-zinc-900 mb-8 leading-tight">
          The discovery call is free.<br className="hidden sm:block"/>
          <span className="text-amber-600 font-sans font-bold not-italic">The only requirement is that you are ready.</span>
        </h2>
        
        <div className="space-y-6 text-lg sm:text-xl text-zinc-700 max-w-3xl mx-auto leading-relaxed">
          <p>
            Your first step is a no-obligation conversation with Sophia. No pitch, no pressure, no commitment required. The call exists to find out whether this is the right path for you at this point in your journey.
          </p>
          <div className="p-8 bg-white border-2 border-amber-200 rounded-3xl shadow-xl shadow-amber-900/5 my-10 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-emerald-950 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
              The Guarantee
            </div>
            <p className="text-emerald-950 font-medium">
              If you are accepted into the mentoring and show up fully — doing the sessions, doing the inner work — and you do not experience meaningful progress, <strong className="text-emerald-700">Sophia will continue working with you until you do, at no additional cost.</strong>
            </p>
          </div>
          <p className="text-xs text-amber-600 font-semibold italic opacity-80 border border-dashed border-amber-300 p-2 inline-block rounded">
            [ Confirm guarantee language with Sophia before launch ]
          </p>
        </div>
      </div>
    </section>
  );
};
