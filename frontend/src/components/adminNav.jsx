"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import { FaBars, FaTimes } from "react-icons/fa";
import LoginButton from "../atoms/loginButton";

const AdminNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 px-4 sm:px-6 lg:px-8 xl:px-[180px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-[15px] items-center">
          <Image src="/logo.svg" width={50} height={50} alt="logo" />
          <Image src="/logoName.svg" width={200} height={50} alt="logo name" className="hidden sm:block" />
        </div>

        {/* Desktop Navigation */}
        <h1 className="text-4xl font-semibold text-center text-[#2C2F24]">
            Admin Panel
        </h1>
        <LoginButton display={"hidden lg:flex"} />

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col items-center justify-center h-full">
            <LoginButton display={"flex"} />
          </div>
          <button className="absolute top-4 right-4 text-2xl" onClick={toggleMenu} aria-label="Close menu">
            <FaTimes />
          </button>
        </div>
      )}
    </nav>
  );
};

export default AdminNav;
