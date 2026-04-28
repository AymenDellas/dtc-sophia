import { useState } from 'react';

const faqData = [
  {
    q: "What is the difference between the Neuro Change Method and the NEU Rich Collective?",
    a: "The Neuro Change Method is a structured 6-week group program that works at the subconscious level to reset patterns and create consistent results. It is the foundation. The NEU Rich Collective is Sophia's high-level 1:1 mentoring experience — deeper, longer-term, and tailored entirely to you. Experienced leaders and coaches can apply to the Collective directly without completing the 6-week program first."
  },
  {
    q: "How much does it cost?",
    a: <span className="inline-block mt-2 px-3 py-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-sm italic rounded-md">[ Investment discussed on the discovery call — insert pricing here or confirm with Sophia ]</span>
  },
  {
    q: "How much time does this require each week?",
    a: "The Neuro Change Method runs over 6 weeks with structured group sessions. The NEU Rich Collective is built around your schedule and designed for women in active leadership. Sophia will be specific about time commitment on your discovery call."
  },
  {
    q: "I have worked with coaches before and it did not really stick. How is this different?",
    a: "Most coaching works at the level of strategy and awareness. Sophia's work goes beneath that — to the subconscious patterns and beliefs that were running the show before awareness ever arrived. That is why people who have been through multiple coaching programs describe working with Sophia as the first time something actually shifted."
  },
  {
    q: "What happens after I apply?",
    a: "Sophia or her team will review your application and reach out to schedule your discovery call. On the call, you will talk through where you are, what you are working toward, and whether this path is the right fit. No pressure, no obligation — you leave with clarity either way."
  },
  {
    q: "Is this only for coaches?",
    a: "No. Sophia works with women in leadership across industries — coaches, executives, entrepreneurs, and professionals. The common thread is not your job title. It is where you are in your journey: you have built real things, you lead real people, and you are ready for the inner work that matches the outer responsibility you carry."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-4 bg-white relative">
      <div className="max-w-4xl !mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">
            Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 leading-tight">
            What you need to know before applying
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border-2 transition-colors duration-200 rounded-2xl overflow-hidden ${
                  isOpen ? 'border-emerald-900 bg-emerald-50/30' : 'border-zinc-200 hover:border-emerald-900/40 bg-white'
                }`}
              >
                <div 
                  className="px-6 py-5 sm:px-8 sm:py-6 cursor-pointer flex justify-between items-center gap-4 select-none"
                  onClick={() => toggleAccordion(index)}
                  onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                          toggleAccordion(index);
                      }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-lg sm:text-xl font-bold pr-8 transition-colors ${isOpen ? 'text-emerald-900' : 'text-zinc-800'}`}>
                    {faq.q}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    isOpen ? 'bg-emerald-900 text-white rotate-45' : 'bg-zinc-100 text-zinc-500 hover:bg-zinc-200'
                  }`}>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8 text-zinc-600 leading-relaxed text-base sm:text-lg border-t border-emerald-900/10 mt-2">
                    <div className="pt-4">{faq.a}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
