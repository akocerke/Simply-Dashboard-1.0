import React from 'react';

const StatisticCardPage = ({ title, description, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-transform transform hover:scale-105">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      <div className="mt-2 text-xl font-bold text-gray-900 dark:text-gray-100">{value}</div>
    </div>
  );
};

export default StatisticCardPage;
