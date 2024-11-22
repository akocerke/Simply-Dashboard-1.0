import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registriere Chart.js-Komponenten
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const StatisticCardWithChart = ({ title, description, chartData }) => {
  // Erstelle eine Chart.js-Datenstruktur
  const data = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Statistik',
        data: chartData.values,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-4">
        {/* Diagramm einfügen */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default StatisticCardWithChart;
