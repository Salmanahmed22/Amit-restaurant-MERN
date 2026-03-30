"use client";
import "./globals.css";
import Footer from "../components/footer";
import TempNewNav from "@/components/temoNewNav";
export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <body>
        <TempNewNav/>
        {children}
         <Footer />
      </body>
    </html>
  );
}