
import { FlickeringGrid } from "./ui/flickering-grid";
import Cta from "./lib/Cta";

const Solution = () => {
  return (
    <section className="w-full py-12 px-4">
      <div className="relative max-w-4xl mx-auto">
        {/* Main card */}
        <div className="relative z-10 rounded-3xl overflow-hidden bg-linear-to-br from-emerald-50 via-emerald-50 to-emerald-100 shadow-2xl shadow-emerald-900/10">
          <FlickeringGrid
            className="z-0 absolute inset-0 size-full opacity-60"
            squareSize={4}
            gridGap={6}
            color="#0D2B22"
            maxOpacity={0.15}
            flickerChance={0.05}
          />

          <div className="relative z-10 p-5 sm:p-8 md:p-12 lg:p-16 space-y-8 sm:space-y-10">
            {/* Header badge */}
            <div className="flex justify-center -mt-4">
              <div className="inline-block px-2 sm:px-8 py-3 rounded-full">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-900 tracking-tight text-center">
                  What changes when you work with{" "}
                  <span className="px-3 sm:px-4 py-2 inline-block bg-amber-400 text-emerald-950 shadow-xl shadow-amber-900/20 rounded-lg">
                    Sophia Bailey
                  </span>
                </h2>
              </div>
            </div>

            {/* Main description */}
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <p className="text-2xl sm:text-3xl md:text-4xl text-zinc-700 font-medium">
                A transformational mentoring space{" "}
                <span className="text-emerald-800 font-bold">
                  for women in leadership
                </span>{" "}
                ready for a level of inner change that matches their outer ambition.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-600 mt-4">
                We do not teach you to think differently. We work at the level beneath thought — the subconscious patterns quietly running your decisions.
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 py-4">
              <div className="h-px w-16 sm:w-24 bg-linear-to-r from-transparent to-amber-400"></div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 text-center">
                The Modalities
              </h3>
              <div className="h-px w-16 sm:w-24 bg-linear-to-l from-transparent to-amber-400"></div>
            </div>

            <ul className="text-zinc-900 text-base sm:text-lg md:text-xl list-disc space-y-6 max-w-3xl mx-auto pl-5">
              <li>
                <span className="font-bold text-emerald-900">Neuro Change Method:</span> Reset the subconscious patterns controlling your results, so aligned action feels natural, not forced.
              </li>
              <li>
                <span className="font-bold text-emerald-900">Wealth Dynamics:</span> Understand exactly how you are wired to create value and make decisions{" "}
                <span className="bg-amber-400/30 px-2 font-medium">with less resistance.</span>
              </li>
              <li>
                <span className="font-bold text-emerald-900">Science of Success:</span> Apply Napoleon Hill's timeless inner mechanics of achievement to secure{" "}
                <span className="bg-amber-400/30 px-2 font-medium">sustained confidence.</span>
              </li>
            </ul>

            {/* Conclusion text inside card */}
            <div className="text-center mt-10">
              <p className="text-lg sm:text-xl font-medium text-emerald-900 italic">
                You leave with something more valuable than a strategy: you leave knowing how you are wired to succeed — and trusting it.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        {/* Removed mesh gradients */}
        
        <Cta text="Apply For Your Discovery Session" />
      </div>
    </section>
  );
};

export default Solution;
