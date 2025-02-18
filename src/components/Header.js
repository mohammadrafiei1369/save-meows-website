import React, { useState } from "react";

function Header() {
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = async () => {
    setWalletConnected(true);
  };

  return (
    <header className="p-4 bg-black shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SaveMeows</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#buy-now">خرید</a></li>
            <li><a href="#stake">استیک</a></li>
            <li><a href="#how-to-buy">چگونه خرید کنید</a></li>
            <li><a href="#tokenomics">توکنومیکس</a></li>
            <li><a href="#roadmap">نقشه راه</a></li>
          </ul>
        </nav>
        <button onClick={connectWallet} className="px-4 py-2 bg-purple-600 rounded">
          {walletConnected ? "ولت متصل" : "اتصال به ولت"}
        </button>
      </div>
    </header>
  );
}

export default Header;