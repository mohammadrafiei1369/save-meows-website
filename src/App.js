import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Presale from "./components/Presale";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-blue-900 min-h-screen text-white">
      <Header />
      <HeroSection />
      <About />
      <Tokenomics />
      <Roadmap />
      <Presale />
      <Footer />
    </div>
  );
}

export default App;