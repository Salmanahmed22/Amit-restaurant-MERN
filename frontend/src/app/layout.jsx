"use client";
import "./globals.css";
import Nav1 from "../components/nav1";
import Nav2 from "../components/nav2";
import Footer from "@/components/footer";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import AdminNav from "../components/adminNav";


export default function RootLayout({ children }) {
  const [isAdminPage, setIsAdminPage] = useState(Cookies.get("isAdmin") === "true");

  useEffect(() => {
    const checkCookieChange = () => {
      const adminStatus = Cookies.get("isAdmin") === "true";
      setIsAdminPage(adminStatus);
    };

    // Check every 2 seconds (or adjust as needed)
    const interval = setInterval(checkCookieChange, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <html lang="en">
      <body>
        <Nav1 />
        {isAdminPage ? <AdminNav /> : <Nav2 />}
        {children}
        {!isAdminPage && <Footer />}
      </body>
    </html>
  );
}