import { IoHomeOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import DarkLightMode from "../components/DarkLightMode";
import { IoIosMenu } from "react-icons/io";
import { FaChartSimple } from "react-icons/fa6";
import { RiUserSettingsLine } from "react-icons/ri";
import LogoutButton from "../components/LogoutButton";
import UserData from "../components/user/UserData";

export const metadata = {
  title: "Dashboard",
  description: "Übersicht über dein Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-gray-100 p-4 hidden lg:block">
        <nav>
          <ul className="space-y-4">
            {/* Allgemeine Links */}
            <li>
              <h3 className="text-lg font-semibold text-gray-400 dark:text-gray-500">Allgemein</h3>
            </li>
            <li>
              <a
                href="/"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <IoHomeOutline size={24} className="mr-2" />
                Startseite
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <LuLayoutDashboard size={24} className="mr-2" />
                Dashboard
              </a>
            </li>

            {/* Statistiken */}
            <li>
              <h3 className="text-lg font-semibold text-gray-400 dark:text-gray-500">Statistiken</h3>
            </li>
            <li>
              <a
                href="/dashboard/statistic"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <FaChartSimple size={24} className="mr-2" />
                Statistiken
              </a>
            </li>

            {/* Benutzer */}
            <li>
              <h3 className="text-lg font-semibold text-gray-400 dark:text-gray-500">Benutzer</h3>
            </li>
            <li>
              <a
                href="/dashboard/settings"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <RiUserSettingsLine size={24} className="mr-2" />
                Einstellungen
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-gray-800 p-4 text-white shadow-md">
          <div className="flex justify-between items-center w-full">
            {/* Dashboard Title */}
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-start">Dashboard</h1>
            </div>

            {/* Dark/Light Mode */}
            <div className="flex items-center">
              <DarkLightMode />
            </div>
          </div>

          {/* User Info and Logout */}
          <div className="flex justify-between items-center pt-4">
            {/* User Data */}
            <div className="flex items-center space-x-4">
              <UserData />
            </div>

            {/* Logout Button */}
            <div className="flex items-center">
              <LogoutButton />
            </div>
          </div>
        </header>

        {/* Dynamischer Inhalt */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
          {children}
        </main>
      </div>

      {/* Mobile Sidebar Button (visible on small screens) */}
      <div className="lg:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <label
          htmlFor="my-drawer"
          className="btn bg-gray-900 text-gray-200 dark:bg-gray-800 dark:text-gray-400 drawer-button"
        >
          <span className="text-2xl">
            <IoIosMenu size={24} />
          </span>{" "}
          {/* Hamburger Icon */}
        </label>
      </div>

      {/* Drawer Sidebar for Mobile */}
      <input id="my-drawer" type="checkbox" className="drawer-toggle hidden" />
      <div className="drawer-content">{/* Main content here */}</div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <nav className="menu bg-gray-800 p-4 text-gray-100">
          <ul className="space-y-4">
            {/* Mobile Version */}
            <li>
              <a
                href="/"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <IoHomeOutline size={24} className="mr-2" />
                Startseite
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <LuLayoutDashboard size={24} className="mr-2" />
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="/dashboard/statistic"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <FaChartSimple size={24} className="mr-2" />
                Statistiken
              </a>
            </li>
            <li>
              <a
                href="/dashboard/settings"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <RiUserSettingsLine size={24} className="mr-2" />
                Einstellungen
              </a>
            </li>
            {/* Weitere Links */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
