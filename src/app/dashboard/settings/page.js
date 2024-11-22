"use client";

import { FaSave } from "react-icons/fa";

export default function Settings() {
  return (
    <div className="p-6 flex flex-col items-center justify-center w-full">
      {/* Settings Title */}
      <h2 className="text-6xl font-semibold text-center pb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-400 dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-700 dark:to-teal-500">
        Settings
      </h2>

      {/* Settings Form Container */}
      <div className="p-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full space-y-8">
        {/* Settings Form */}
        <div className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">Benutzername</label>
            <input
              type="text"
              className="w-full p-4 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-gray-800 rounded-lg shadow-md focus:ring-2 focus:ring-purple-500 dark:focus:ring-teal-300 transition-all duration-300 transform hover:scale-105"
              placeholder="Gebe deinen Benutzername ein"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">E-Mail</label>
            <input
              type="email"
              className="w-full p-4 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-gray-800 rounded-lg shadow-md focus:ring-2 focus:ring-purple-500 dark:focus:ring-teal-300 transition-all duration-300 transform hover:scale-105"
              placeholder="Gebe deine E-mail ein"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-lg font-medium text-gray-600 dark:text-gray-300 mb-2">Passwort</label>
            <input
              type="password"
              className="w-full p-4 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 text-gray-800 rounded-lg shadow-md focus:ring-2 focus:ring-purple-500 dark:focus:ring-teal-300 transition-all duration-300 transform hover:scale-105"
              placeholder="Gebe dein Passwort ein"
            />
          </div>
        </div>

        {/* Save Settings Button */}
        <div className="mt-8">
          <button className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-teal-400 dark:from-indigo-700 dark:to-teal-500 text-white font-semibold rounded-lg shadow-xl transform hover:scale-105 transition-all duration-200 hover:shadow-2xl flex items-center justify-center">
            <FaSave className="mr-3" />
            Speichern Settings
          </button>
        </div>
      </div>
    </div>
  );
}
