"use client";

import { useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registriere die benötigten Chart.js-Komponenten
ChartJS.register(ArcElement, Tooltip, Legend);

const CircleChart = ({ title, description, chartData }) => {
  const chartRef = useRef(null);

  // Bereite die Daten für das Kreisdiagramm vor
  const data = {
    labels: chartData.labels, // Label für jedes Segment
    datasets: [
      {
        data: chartData.values, // Werte für jedes Segment
        backgroundColor: [
          "#FF6384", // Januar
          "#36A2EB", // Februar
          "#FFCE56", // März
          "#4BC0C0", // April
          "#9966FF", // Mai
        ], // Hintergrundfarbe für jedes Segment
        hoverBackgroundColor: [
          "#FF6384", // Hover-Farbe für Januar
          "#36A2EB", // Februar
          "#FFCE56", // März
          "#4BC0C0", // April
          "#9966FF", // Mai
        ],
      },
    ],
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-gray-800 dark:text-white flex flex-col items-center justify-center">
  {/* Titel und Beschreibung */}
  <h3 className="text-lg font-semibold text-center mb-4">{title}</h3>
  <p className="text-center mb-6 text-gray-600 dark:text-gray-300">{description}</p>

  {/* Diagramm */}
  <Pie ref={chartRef} data={data} className="max-w-52 max-h-56" />
</div>

  );
};

export default CircleChart;
