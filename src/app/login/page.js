"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Login() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulierte Logik für den Login
    const email = "demo@example.com";
    const password = "password";

    if (email === "demo@example.com" && password === "password") {
      // Erfolgreiche Anmeldung
      const user = {
        token: "fake-jwt-token",
        username: "User Demo",
      };

      // Speichern des Benutzers und Tokens im localStorage
      localStorage.setItem("authData", JSON.stringify(user));

      // Erfolgs-Toast
      toast.success("Erfolgreich eingeloggt!", {});

      // Weiterleitung zum Dashboard
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } else {
      // Fehlermeldung
      toast.error("Falsche Login-Daten! Bitte versuche es erneut.", {});
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:bg-gradient-to-r dark:from-pink-700 dark:via-purple-800 dark:to-blue-800 text-gray-100 dark:text-gray-300 p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">E-Mail</label>
            <input
              type="email"
              className="input input-bordered w-full text-gray-500"
              value="demo@example.com"
              readOnly
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Passwort</label>
            <input
              type="password"
              className="input input-bordered w-full text-gray-500"
              value="password"
              readOnly
            />
          </div>
          <button
            type="submit"
            className="shadow-lg btn border-0 dark:border dark:border-gray-400 dark:bg-purple-950 dark:hover:bg-pink-950 bg-purple-900 hover:bg-purple-950 text-gray-100 w-full duration-300 dark:text-gray-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
