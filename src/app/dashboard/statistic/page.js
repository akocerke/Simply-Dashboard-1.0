"use client";
import React from 'react';
import StatisticCardPage from '../../components/StatisticCardPage';
import StatisticCardWithChart from '../../components/StatisticCardWithChart';
import { statisticData, chartData } from '../../data/statisticData';
const StatisticPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-6xl font-semibold text-center pb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-400 dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-700 dark:to-teal-500">
        Statistik
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Karten mit Dummy-Daten */}
        {statisticData.map((stat, index) => (
          <StatisticCardPage 
            key={index} 
            title={stat.title} 
            description={stat.description} 
            value={stat.value} 
          />
        ))}
        
        {/* Karte mit Diagramm */}
        <StatisticCardWithChart 
          title="Monatliche Verkäufe"
          description="Verkäufe über die letzten 5 Monate"
          chartData={chartData} // Dummy-Daten für das Diagramm
        />
      </div>
    </div>
  );
};

export default StatisticPage;
