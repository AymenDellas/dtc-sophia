

const Cta = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center mt-12 pb-8">
      <a
        href="#apply"
        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-emerald-900 transition-all duration-200 bg-amber-400 border border-transparent rounded-xl hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 hover:shadow-[0_8px_30px_rgb(251,191,36,0.5)] hover:-translate-y-1"
      >
        {text}
      </a>
    </div>
  );
};

export default Cta;
