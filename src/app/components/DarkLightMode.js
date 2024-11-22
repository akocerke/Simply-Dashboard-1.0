// app/components/DarkLightMode.js
"use client";
import React, { useState, useLayoutEffect } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function DarkLightMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Synchronisiert den Theme-Zustand beim Laden der Seite
  useLayoutEffect(() => {
    // Überprüfe das gespeicherte Theme oder nutze das System-Theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "synthwave");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      setIsDarkMode(false);
    }
  }, []); // Diese Logik nur beim initialen Laden ausführen

  // Umschaltfunktion für Dark/Light Mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "synthwave");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
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
