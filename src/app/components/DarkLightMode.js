"use client";
import React, { useState, useEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function DarkLightMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Synchronisiert den Theme-Zustand beim Laden der Seite
  useEffect(() => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "synthwave");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  // Umschaltfunktion für Dark/Light Mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "synthwave"); // Synthwave aktivieren
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light"); // Standard Light Mode
      localStorage.theme = "light";
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Zeige nur das Sonne-Icon für Light Mode */}
      {!isDarkMode && (
        <IoSunnyOutline
          size={20}
          className="transition-colors duration-300 text-purple-400 hover:text-purple-600 cursor-pointer"
          onClick={toggleTheme} // Klick auf das Sonne-Icon wechselt das Theme
        />
      )}

      {/* Zeige nur das Mond-Icon für Dark Mode */}
      {isDarkMode && (
        <IoMoonOutline
          size={20}
          className="transition-colors duration-300 text-teal-300 hover:text-teal-500 cursor-pointer"
          onClick={toggleTheme} // Klick auf das Mond-Icon wechselt das Theme
        />
      )}
    </div>
  );
}
