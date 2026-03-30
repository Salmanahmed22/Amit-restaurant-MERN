"use client";
import Nav1 from "../components/nav1";
import Nav2 from "../components/nav2";
import AdminNav from "../components/adminNav";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function TempNewNav({ children }) {
  const [mounted, setMounted]      = useState(false);      // ← new
  const [isAdminPage, setIsAdmin]  = useState(false);

  useEffect(() => {
    // code inside useEffect runs only in the browser
    setIsAdmin(Cookies.get("isAdmin") === "true");
    setMounted(true);

    const id = setInterval(() => {
      setIsAdmin(Cookies.get("isAdmin") === "true");
    }, 2000);

    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;

  return (
      <div>
        <Nav1 />
        {isAdminPage ? (
          <AdminNav />            /* admin gets only the admin nav */
        ) : (
          <>                    
            <Nav2 />
          </>
        )}

        
      </div>
  );
}