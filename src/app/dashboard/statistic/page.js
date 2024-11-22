"use client";
import React from "react";
import StatisticCardPage from "../../components/charts/StatisticCardPage";
import StatisticCardWithChart from "../../components/charts/StatisticCardWithChart";
import CircleChart from "../../components/charts/StatisticChartCircle";
import { statisticData, chartData } from "../../data/statisticData";
import SendEmail from '../../components/charts/SenEmail';
import { emailData } from '../../data/dashboardData';

const StatisticPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-6xl font-semibold text-center pb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-400 dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-700 dark:to-teal-500">
        Statistik
      </h2>
      
      {/* Diagramme */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Karte mit Diagramm */}
        <StatisticCardWithChart
          title="Monatliche Verkäufe"
          description="Verkäufe über die letzten 5 Monate"
          chartData={chartData} // Dummy-Daten für das Diagramm
        />
        
        {/* Karte mit Circle Diagram */}
        <CircleChart
          title="Monatliche Verkaufsstatistik"
          description="Verkäufe im Laufe der letzten 5 Monate"
          chartData={chartData} // Dummy-Daten für das Diagramm
        />
        {/* Dounut-Diagram */}
        <SendEmail
        title={emailData[0].title}
        sent={emailData[0].value}
        opened={emailData[0].opened}
        percentage={emailData[0].percentage}
      />
      </div>

      {/* Karten mit Dummy-Daten */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {statisticData.map((stat, index) => (
          <StatisticCardPage
            key={index}
            title={stat.title}
            description={stat.description}
            value={stat.value}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

      
      </div>
    </div>
  );
};

export default StatisticPage;
