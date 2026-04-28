export const SocialProof = () => {
  const testis = [
    {
      fullName: "Jennifer Williams",
      testi:
        "Thank you Sophia for helping me access ideas and gems that was hidden from my view when it came to my business. I presented you with a problem of how to market a specific service and you came with wisdom and ideas that helped me get the juices flowing. Now my mind is on overdrive!! Sometimes we all need that push and nudge in the right direction and you have done just that for me. You are ‘High Class’, and thank you again for your wealth of knowledge and expertise. Sophia, you are a true gem! Blessings xx",
    },
    {
      fullName: "Errol Charles",
      testi:
        "Before speaking to you I was not sure about the direction I was taking to fulfil my dreams. Throughout our conversation I felt encouraged and listened to. I am now left feeling more confident and motivated to continue on my path. Thanks for the advice. I am looking forward to our next session and a productive working relationship to help me achieve my goals.",
    },
    {
      fullName: "Sgarkeen Linton",
      testi:
        "My goodness! Okay, let me start by saying this. I’ve been living a lot of what Sophia taught today whilst acknowledging that I need a mentor to take me to the next level. But can I just say that YOU are one of the most down-to-earth, relatable, personable, kind, warm and joyful mentors I’ve ever come across? Who YOU are is what is making room for you to do what you do. The knowledge you have is wonderful. I’m grateful to have encountered someone like you. Thank you.",
    },
    {
      fullName: "Felecia Starks",
      testi:
        "I had the pleasure of meeting Sophia in September 2013 and we instantly connected! I had the most amazing discovery session with Sophia and was extremely impressed! I cannot believe how she was able to take my thoughts and recap them perfectly and helped me brainstorm ideas so that I know exactly what I should do next so I can ‘birth’ MY baby!.",
    },
    {
      fullName: "Daniella Blechner",
      testi:
        "Thank you Sophia Bailey for sharing this. I meant every word. If you have a vision or dream, you must hire this lady. I had an Intuitive Discovery Session and a Wealth Creation session with Sophia and she is amazing. She helps you see the ‘bigger picture’ and piece together your Vision. Not only that she is a great friend who always has time for me and works with passion AND compassion.",
    },
  ];

  const StarRating = () => (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );

  return (
    <div className="proof-strip">
      <div className="proof-track">
        <ul className="proof-grid">
          {testis.map((val, i) => (
            <li className="proof-pill" key={`orig-${i}`}>
              <StarRating />
              <blockquote>"{val.testi}"</blockquote>
              <cite>— {val.fullName}</cite>
            </li>
          ))}
        </ul>
        {/* Duplicate the list to create the infinite loop effect */}
        <ul className="proof-grid" aria-hidden="true">
          {testis.map((val, i) => (
            <li className="proof-pill" key={`dup-${i}`}>
              <StarRating />
              <blockquote>"{val.testi}"</blockquote>
              <cite>— {val.fullName}</cite>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
