"use client";
import { useState, useEffect } from "react";
import Home1 from "../components/home1";
import BrowseMenu from "../components/browseMenu";
import Loading from "./loading"; // Import the loading component
import Cookies from "js-cookie";
import { isTokenExpired, logoutUser } from "@/lib/auth";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    const loggedin = Cookies.get("loggedin") === "true";
    if (isTokenExpired() && loggedin) {
      console.log("Token expired");
      
      toast.error("Your session has expired. Please log in again.");
      setTimeout(() => {
        
        logoutUser(); 
      }, 500)
    }
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div>
      <Home1 />
      <BrowseMenu />
    </div>
  );
}
