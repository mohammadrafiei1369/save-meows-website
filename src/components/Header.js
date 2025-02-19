import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setWalletConnected(true);
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <header className="p-4 bg-black shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-500">SaveMeows</h1>
        <button onClick={toggleMenu} className="md:hidden text-white">
          ☰
        </button>
        <nav className={`md:block ${menuOpen ? "block" : "hidden"} text-white`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><a href="#buy-now" className="hover:text-purple-500">Buy Now</a></li>
            <li><a href="#stake" className="hover:text-purple-500">Stake</a></li>
            <li><a href="#how-to-buy" className="hover:text-purple-500">How to Buy</a></li>
            <li><a href="#tokenomics" className="hover:text-purple-500">Tokenomics</a></li>
            <li><a href="#roadmap" className="hover:text-purple-500">Roadmap</a></li>
          </ul>
        </nav>
        <button onClick={connectWallet} className="px-4 py-2 bg-purple-600 rounded text-white">
          {walletConnected ? "Wallet Connected" : "Connect Wallet"}
        </button>
      </div>
    </header>
  );
}

export default Header;