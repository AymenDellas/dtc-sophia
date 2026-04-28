import "./App.css";
import Navbar from "./components/Navbar";
import { TrustBar } from "./components/TrustBar";
import Hero from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Offer from "./components/Offer";
import { WhoIsThisFor } from "./components/WhoIsThisFor";
import { Testimonials } from "./components/Testimonials";
import About from "./components/About";
import { RiskReversal } from "./components/RiskReversal";
import { Urgency } from "./components/Urgency";
import FinalCTA from "./components/FinalCTA";
import FAQ from "./components/FAQ";

import { MobileCTA } from "./components/MobileCTA";

const App = () => {
  return (
    <>
      <Navbar />
      <TrustBar />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <Offer />
      <WhoIsThisFor />
      <Testimonials />
      <About />
      <RiskReversal />
      <Urgency />
      <FAQ />
      <FinalCTA />

      <MobileCTA />
    </>
  );
};

export default App;
