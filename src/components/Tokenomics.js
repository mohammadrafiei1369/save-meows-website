import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Register all components for Chart.js
Chart.register(...registerables);

function Tokenomics() {
  const data = {
    labels: ["Presale", "Development Team", "Founders", "Staking Rewards"],
    datasets: [
      {
        data: [50, 15, 5, 25], // Distribution in billion SMWS
        backgroundColor: ["#7e5bef", "#3b82f6", "#16a34a", "#ef4444"],
        hoverBackgroundColor: ["#6d28d9", "#1d4ed8", "#15803d", "#dc2626"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (label) {
              label += ": " + context.raw + " billion SMWS";
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <section id="tokenomics" className="py-16 text-center bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-purple-500 animate-fadeIn">Tokenomics</h2>
      <div className="flex justify-center">
        <Pie data={data} options={options} />
      </div>
      <p className="mt-4 text-white animate-fadeIn">
        Total Supply: 115 billion SMWS <br />
        Distribution: Presale (50 billion), Development Team (15 billion), Founders (5 billion), Staking Rewards (25 billion).
      </p>
    </section>
  );
}

export default Tokenomics;