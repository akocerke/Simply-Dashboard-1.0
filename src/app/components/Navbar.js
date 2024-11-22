"use client";
import { IoHomeOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import DarkLightMode from "./DarkLightMode";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineLogin } from "react-icons/ai";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsClient(true); // Sicherstellen, dass der Code nur im Client ausgeführt wird
    
    // Überprüfen, ob der Benutzer im localStorage eingeloggt ist
    const authData = localStorage.getItem("authData");
    if (authData) {
      setIsLoggedIn(true); // Wenn Benutzerdaten vorhanden sind, ist der Benutzer eingeloggt
    } else {
      setIsLoggedIn(false); // Wenn keine Benutzerdaten vorhanden sind, ist der Benutzer nicht eingeloggt
    }
  }, []);

  if (!isClient) {
    return null; // Auf Server nicht rendern
  }

  return (
    <div className="btm-nav bg-gray-950 bg-opacity-45">
      {/* Home Link */}
      <Link href="/" passHref>
        <button className="text-gray-400 dark:text-gray-600 dark:hover:text-teal-300 hover:text-teal-300">
          <IoHomeOutline size={24} />
        </button>
      </Link>

      {/* Dashboard Link nur anzeigen, wenn der Benutzer eingeloggt ist */}
      {isLoggedIn && (
        <Link href="/dashboard" passHref>
          <button className="text-gray-400 dark:text-gray-600 dark:hover:text-teal-300 hover:text-cyan-400">
            <LuLayoutDashboard size={26} />
          </button>
        </Link>
      )}

      {/* Login Link nur anzeigen, wenn der Benutzer nicht eingeloggt ist */}
      {!isLoggedIn && (
        <Link href="/login" passHref>
          <button className="text-gray-400 dark:text-gray-600 dark:hover:text-teal-300 hover:text-cyan-400">
            <AiOutlineLogin size={26} />
          </button>
        </Link>
      )}

      {/* Dark/Light Mode */}
      <div className="text-gray-400 dark:text-gray-600 dark:hover:text-teal-300 hover:text-cyan-400">
        <DarkLightMode size={26} />
      </div>

      {/* GitHub Link */}
      <a
        href="https://github.com/akocerke"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 dark:text-gray-600 dark:hover:text-teal-300 hover:text-cyan-400"
      >
        <IoLogoGithub size={26} />
      </a>
    </div>
  );
};
