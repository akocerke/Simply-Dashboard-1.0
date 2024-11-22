import { IoHomeOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import DarkLightMode from "../components/DarkLightMode";
import { IoIosMenu } from "react-icons/io";
import { FaChartSimple } from "react-icons/fa6";
import { RiUserSettingsLine } from "react-icons/ri";
import LogoutButton from "../components/LogoutButton";
import UserData from "../components/UserData";

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
            <li>
              <a
                href="/"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <IoHomeOutline size={24} className="mr-2" />
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <LuLayoutDashboard size={24} className="mr-2" />
              </a>
            </li>
            <li>
              <a
                href="/dashboard/statistic"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <FaChartSimple size={24} className="mr-2" />
              </a>
            </li>
            <li>
              <a
                href="/dashboard/settings"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <RiUserSettingsLine size={24} className="mr-2" />
              </a>
            </li>
            {/* Weitere Links */}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-gray-800 p-4 text-white shadow">
          <div class="grid grid-cols-1 gap-4 w-full">
            <div>
              <h1 className=" text-start text-3xl font-bold">Dashboard</h1>
            </div>

            <div className="pt-2">
              <DarkLightMode />
            </div>
            <div class="grid grid-cols-subgrid gap-4 col-span-3 pt-4">
              <div class="col-start-1">
                <UserData />
              </div>
              <div class="col-start-2">
                <LogoutButton />
              </div>
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
            <li>
              <a
                href="/"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <IoHomeOutline size={24} className="mr-2" />
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <LuLayoutDashboard size={24} className="mr-2" />
              </a>
            </li>
            <li>
              <a
                href="/dashboard/statistic"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <FaChartSimple size={24} className="mr-2" />
              </a>
            </li>
            <li>
              <a
                href="/dashboard/settings"
                className="py-2 px-4 rounded hover:bg-gray-700 flex items-center"
              >
                <RiUserSettingsLine size={24} className="mr-2" />
              </a>
            </li>
            {/* Weitere Links */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
