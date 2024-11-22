"use client";
import React from 'react';
import { IoMail } from 'react-icons/io5';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

// Registriere Chart.js-Komponenten
ChartJS.register(Tooltip, Legend, ArcElement);

const SendEmail = ({ title, sent, opened, percentage }) => {
  // Daten für das Donut-Diagramm
  const data = {
    labels: ['Opened', 'Not Opened'],
    datasets: [
      {
        data: [
          parseInt(opened.replace(',', '')),
          parseInt(sent.replace(',', '')) - parseInt(opened.replace(',', '')),
        ],
        backgroundColor: ['#4CAF50', '#FF5722'],
        hoverBackgroundColor: ['#45A049', '#E64A19'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false, // Keine Legende
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    cutout: '70%', // Loch im Donut-Diagramm
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center space-y-2 transition-transform transform hover:scale-105">
      {/* Icon und Titel */}
      <div className="flex flex-col items-center space-y-1 mb-2">
        <IoMail size={24} className="text-teal-500" />
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 text-center">{title}</h3>
      </div>

      {/* Gesendete Emails */}
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100">{sent}</p>
        <span className="text-xs text-gray-500 dark:text-gray-400">sent</span>
      </div>

      {/* Prozentänderung */}
      <p
        className={`text-xs ${
          percentage >= 0 ? 'text-green-500' : 'text-red-500'
        } font-semibold`}
      >
        {percentage >= 0 ? `+${percentage}%` : `${percentage}%`}
      </p>

      {/* Donut-Diagramm */}
      <div className="w-36 h-36">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default SendEmail;
