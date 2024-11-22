"use client";
import { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ChatSection from "../components/dashboard/ChatSection";

export default function DashboardPage() {
  const [username, setUsername] = useState("");

  // Hole den Benutzernamen aus dem localStorage, wenn die Komponente geladen wird
  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem("authData"));
    if (authData && authData.username) {
      setUsername(authData.username);
    }
  }, []);

  return (
    <div>
      {/* Header */}
      <h2 className="text-6xl font-semibold text-center pb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-400 dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-700 dark:to-teal-500">
        Dashboard Übersicht
      </h2>

      <div className="shadow-lg p-6 rounded-lg">
        <h3 className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Willkommen,{" "}
          <span className="font-semibold">{username || "Gast"}!</span>
        </h3>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Hier ist dein Dashboard-Überblick. Schau dir die neuesten Updates und
          Informationen an.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Erstes Grid-Element */}
          <div className="bg-blue-100 p-4 rounded-lg shadow-md dark:bg-blue-900 dark:text-white transition-transform transform hover:scale-105 hover:cursor-pointer">
            <div className="flex items-center space-x-4">
              <Badge badgeContent={4} color="warning">
                <MailIcon className="text-4xl dark:text-gray-300" />
              </Badge>
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                E-Mail
              </h4>
            </div>

            {/* Beschreibender Text */}
            <p className="pt-4 text-gray-600 dark:text-gray-400">
              Neue E-Mails
            </p>
          </div>

          {/* Zweites Grid-Element */}
          <div className="bg-green-100 p-4 rounded-lg shadow-md dark:bg-green-800 dark:text-white transition-transform transform hover:scale-105 hover:cursor-pointer">
            <div className="flex items-center space-x-4">
              <span className=" text-gray-600 dark:text-gray-400">
                <Badge badgeContent={4} color="secondary">
                  <AddReactionIcon className="text-4xl dark:text-gray-300" />
                </Badge>
              </span>
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Benutzer Anfragen
              </h4>
            </div>
            {/* Beschreibender Text */}
            <p className="pt-4 text-gray-600 dark:text-gray-400">
              Benutzeranfragen zu bearbeitet
            </p>
          </div>

          {/* Drittes Grid-Element */}
          <div className="bg-yellow-100 p-4 rounded-lg shadow-md dark:bg-yellow-800 dark:text-white transition-transform transform hover:scale-105 hover:cursor-pointer">
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 dark:text-gray-400">
                <Badge badgeContent={4} color="info">
                  <ShoppingCartIcon className="text-4xl dark:text-gray-300" />
                </Badge>
              </span>
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Bestellung zu bearbeiten
              </h4>
            </div>
            {/* Beschreibender Text */}
            <p className="pt-4 text-gray-600 dark:text-gray-400">
              Offene Bestellungen
            </p>
          </div>
        </div>
        <div className="pt-6">
          <ChatSection />
        </div>
      </div>
    </div>
  );
}
