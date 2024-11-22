'use client';  // Diese Zeile markiert die Komponente als Client-Komponente

import { useRouter } from 'next/router';
import DarkLightMode from './DarkLightMode'; // Dein Dark/Light Mode Toggle

export default function DashboardHeader() {
  const router = useRouter();  // useRouter nur hier im Client verwenden
  const pathnames = router.asPath.split('/').filter((path) => path);

  // Dummy-Daten für Benutzeravatar und Name
  const username = "Max Mustermann";
  const avatarUrl = "https://via.placeholder.com/40";  // Beispiel-Avatar-URL

  return (
    <header className="bg-gray-800 p-4 text-white shadow">
      <div className="flex justify-between items-center w-full">
        <div>
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <nav className="text-sm text-gray-400">
            {/* Breadcrumbs dynamisch */}
            {pathnames.length > 0 ? (
              <>
                <span>{pathnames[0]}</span>
                {pathnames.slice(1).map((name, index) => (
                  <span key={index} className="mx-2">
                    &gt; <span>{name}</span>
                  </span>
                ))}
              </>
            ) : (
              <span>Home</span>
            )}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Suchleiste */}
          <input 
            type="text" 
            placeholder="Suche..." 
            className="p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          {/* Benutzeravatar und Name */}
          <div className="flex items-center space-x-2">
            <img 
              src={avatarUrl} 
              alt="Benutzer Avatar" 
              className="rounded-full"
            />
            <span className="text-white">{username}</span>
          </div>

          {/* Dark/Light Mode Toggle */}
          <DarkLightMode />
        </div>
      </div>
    </header>
  );
}
