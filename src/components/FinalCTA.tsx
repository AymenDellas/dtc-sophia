
import Cta from './lib/Cta';

const FinalCTA = () => {
  return (
    <section className="w-full py-32 px-4 bg-emerald-950 text-center relative overflow-hidden" id="apply">
      
      <div className="relative z-10 max-w-4xl !mx-auto">
        <span className="text-sm font-semibold text-amber-500 tracking-widest uppercase mb-6 block">
          Your Next Step
        </span>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
          You have led long enough <br className="hidden sm:block"/>
          <span className="text-amber-400">without someone in your corner.</span>
        </h2>
        
        <p className="text-lg sm:text-xl md:text-2xl text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-6">
          The discovery call takes 45 minutes. It is a conversation — not a sales pitch. You will leave with clarity on whether this work is right for you, regardless of what you decide next.
        </p>
        
        <div className="mt-8 flex flex-col items-center gap-4">
          <Cta text="Apply for Your Discovery Call" />
          <span className="text-sm font-medium italic text-emerald-300/60 mt-2">
            Application-based. Free. No commitment required.
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
