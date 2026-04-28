
const Problem = () => {
  return (
    <section className="w-full my-20 px-4">
      <div className="max-w-4xl !mx-auto space-y-8">

        {/* Stronger headline with visual emphasis */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight text-zinc-900">
          You have built something real. So why does it still feel like{" "}
          <span className="relative inline-block mt-2">
            <span className="absolute inset-0 bg-amber-400/20 -rotate-1 rounded-sm"></span>
            <span className="relative text-emerald-900">something is missing?</span>
          </span>
        </h2>

        {/* Pain points with visual hierarchy */}
        <ul className="space-y-8 mt-16">
          <li className="flex gap-4 items-start group">
            <div className="shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-3 group-hover:scale-125 transition-transform duration-300"></div>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-zinc-700">
              You lead and inspire everyone around you, but there is{" "}
              <span className="font-bold text-emerald-900">
                no one in your corner doing the same for you.
              </span>
            </p>
          </li>

          <li className="flex gap-4 items-start group">
            <div className="shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-3 group-hover:scale-125 transition-transform duration-300"></div>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-zinc-700">
              You know what to do — and you still find yourself not doing it.{" "}
              <span className="font-bold text-emerald-900">
                Procrastination, not lack of knowledge, is the real problem.
              </span>
            </p>
          </li>

          <li className="flex gap-4 items-start group">
            <div className="shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-3 group-hover:scale-125 transition-transform duration-300"></div>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-zinc-700">
              You have had wins. But success has not brought the certainty you expected.{" "}
              <span className="font-bold text-emerald-900">
                The self-doubt follows you into rooms it has no business being in.
              </span>
            </p>
          </li>

          <li className="flex gap-4 items-start group">
            <div className="shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-3 group-hover:scale-125 transition-transform duration-300"></div>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-zinc-700">
              You have worked with coaches before. The frameworks were fine.{" "}
              <span className="font-bold text-emerald-900">
                But nothing shifted at the level where it actually needed to.
              </span>
            </p>
          </li>

          <li className="flex gap-4 items-start group">
            <div className="shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-3 group-hover:scale-125 transition-transform duration-300"></div>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-zinc-700">
              You sense there is a next level. You just{" "}
              <span className="font-bold text-emerald-900">
                cannot see it clearly from where you are standing right now.
              </span>
            </p>
          </li>
        </ul>

        {/* Closer */}
        <div className="mt-16 text-center">
          <p className="text-xl sm:text-2xl font-serif italic text-amber-600 max-w-2xl mx-auto">
            This is not a willpower problem. It is a pattern problem. And patterns live in the subconscious — which is exactly where this work goes.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Problem;