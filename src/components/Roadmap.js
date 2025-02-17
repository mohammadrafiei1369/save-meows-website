import React, { useState } from "react";

function Presale() {
  const [amount, setAmount] = useState("");
  const [tokens, setTokens] = useState(0);

  const calculateTokens = (value) => {
    const pricePerToken = 0.0006; // Price in USD
    const usdValue = parseFloat(value) || 0;
    setTokens((usdValue / pricePerToken).toFixed(2));
  };

  return (
    <section id="buy-now" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">پیش‌فروش</h2>
      <p className="mb-4">قیمت: 1 SMWS = $0.0006</p>
      <input
        type="number"
        placeholder="میزان ارز خود را وارد کنید"
        value={amount}
        onChange={(e) => {
          setAmount(e.target.value);
          calculateTokens(e.target.value);
        }}
        className="border p-2 w-64 mx-auto mb-4"
      />
      <p>توکن‌های دریافتی: {tokens} SMWS</p>
      <button className="px-6 py-3 bg-purple-600 rounded hover:bg-purple-700">
        خرید
      </button>
    </section>
  );
}

export default Presale;