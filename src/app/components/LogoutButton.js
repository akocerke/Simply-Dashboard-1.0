"use client";
import { useRouter } from "next/navigation";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Token entfernen
    localStorage.removeItem("authData");

    // Weiterleitung zur Login-Seite
    router.push("/");
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center text-sm text-gray-600 dark:text-gray-400 dark:hover:text-teal-300 hover:text-cyan-400 pr-4 duration-300"
    >
      <RiLogoutCircleLine size={24} className="mr-2" />
      <span>Logout</span>
    </button>
  );
}
