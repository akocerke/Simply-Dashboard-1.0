// components/UserData.js
"use client";

import { useEffect, useState } from "react";

export default function UserData() {
  const [username, setUsername] = useState("");
  const [isOnline, setIsOnline] = useState(true); // Beispiel für den Online-Status

  useEffect(() => {
    // Auth-Daten aus localStorage abrufen
    const authData = localStorage.getItem("authData");

    if (authData) {
      const user = JSON.parse(authData);
      setUsername(user.username || "Gast");
      setIsOnline(user.isOnline || true); // Optional: Online-Status dynamisch setzen
    }
  }, []);

  return (
    <div className="flex items-center space-x-4 text-gray-800 dark:text-gray-200">
      {/* DaisyUI Avatar mit Online-Offline Status */}
      <div className="avatar">
        <div className="w-10 rounded-full">
          {/* Bild oder Initialen (kann hier durch eine URL oder Initialen ersetzt werden) */}
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt={username} />
        </div>
        {/* Online/Offline Indikator */}
        <div
          className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
            isOnline ? "bg-green-500" : "bg-gray-500"
          }`}
        ></div>
      </div>

      {/* Benutzername */}
      <p className="text-sm text-gray-400 dark:text-gray-600">{username}</p>
    </div>
  );
}
