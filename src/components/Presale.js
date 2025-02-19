import React, { useState, useEffect } from "react";

function Presale() {
  const [amount, setAmount] = useState("");
  const [tokens, setTokens] = useState(0);
  const [phase, setPhase] = useState(3); // Default phase
  const [timeLeft, setTimeLeft] = useState({ days: 6, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft.seconds > 0 || timeLeft.minutes > 0 || timeLeft.hours > 0 || timeLeft.days > 0) {
        setTimeLeft((prevTime) => ({
          days: prevTime.days - (prevTime.seconds === 0 && prevTime.minutes === 0 && prevTime.hours === 0 ? 1 : 0),
          hours: (prevTime.seconds === 0 && prevTime.minutes === 0 ? prevTime.hours - 1 : prevTime.hours),
          minutes: (prevTime.seconds === 0 ? prevTime.minutes - 1 : prevTime.minutes),
          seconds: prevTime.seconds > 0 ? prevTime.seconds - 1 : 59,
        }));
      } else {
        setPhase((prevPhase) => prevPhase + 1); // Proceed to next phase
        setTimeLeft({ days: 6, hours: 0, minutes: 0, seconds: 0 }); // Reset timer
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [phase, timeLeft]);

  const calculateTokens = (value) => {
    const pricePerToken = 0.0006; // Price in USD
    const usdValue = parseFloat(value) || 0;
    setTokens((usdValue / pricePerToken).toFixed(2));
  };

  const buyTokens = async () => {
    alert("This feature is not connected to a live contract yet!");
  };

  return (
    <section id="buy-now" className="py-16 text-center bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-purple-500 animate-fadeIn">Presale</h2>
      <p className="mb-4 text-white animate-fadeIn">Current Phase: Phase {phase}</p>
      <p className="mb-4 text-white animate-fadeIn">
        Time Left: {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
      </p>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
          calculateTokens(e.target.value);
        }}
        className="border p-2 w-64 mx-auto mb-4 text-black animate-fadeIn"
      />
      <p className="mb-4 text-white animate-fadeIn">Tokens to Receive: {tokens} SMWS</p>
      <button onClick={buyTokens} className="px-6 py-3 bg-purple-600 rounded hover:bg-purple-700 text-white animate-pulse">
        Buy Tokens
      </button>
    </section>
  );
}

export default Presale;