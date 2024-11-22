"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialisiert AOS mit einer Dauer von 1 Sekunde
  }, []);
  return (
    <div
      id="home"
      className="h-screen flex items-center justify-center"
      
    >
      <div data-aos="fade-up"
      data-aos-offset="200">
        <h1 className="text-6xl font-semibold drop-shadow-md text-center">Simple Dashboard</h1>
      </div>
    </div>
  );
}
