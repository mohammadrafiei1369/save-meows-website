import React from "react";

function HeroSection() {
  return (
    <section id="hero" className="py-16 text-center">
      <h1 className="text-4xl font-bold mb-4 animate-fadeIn">SaveMeows</h1>
      <p className="text-xl mb-8 animate-fadeIn">Save cats and get rich!</p>
      <a href="#buy-now" className="px-6 py-3 bg-purple-600 rounded hover:bg-purple-700 animate-pulse text-white">
        Join Presale
      </a>
    </section>
  );
}

export default HeroSection;