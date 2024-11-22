"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";

export const NavbarWrapper = () => {
  const pathname = usePathname();

  const isDashboard = pathname.startsWith("/dashboard");

  return !isDashboard ? <Navbar /> : null;
};
