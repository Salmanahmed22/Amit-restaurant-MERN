"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import MyButton from "../atoms/myButton";
import { FaBars, FaTimes } from "react-icons/fa";
import LoginButton from "../atoms/loginButton";
import Cookies from "js-cookie";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Nav2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const loggedin = Cookies.get("loggedin") === "true";
  console.log("heyy",loggedin);
  
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/Menu", label: "Menu" },
    { href: "/Contact", label: "Contact" },
  ];

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
        <div className="hidden lg:flex gap-[30px] text-xl font-medium font-sans">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className={`w-[77px] h-[32px] rounded-[34px] flex justify-center items-center 
              ${pathname === link.href ? "bg-[#DBDFD0]" : "bg-white"}`} // Active based on route
            >
              <Link
                href={link.href}
                className="hover:text-[#ad343e] transition-colors text-[16px] font-medium"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <MyButton page="/BookTable">Book a Table</MyButton>
        </div>
        <div className="flex gap-4 items-center">
          {loggedin ? (
            <div className="flex gap-4 items-center">
              <LoginButton display={"hidden lg:flex"} />
              <NotificationsNoneOutlinedIcon className="hidden lg:flex text-[#2C2F24] font-medium"/>
            </div>
          ):(
            <LoginButton display={"hidden lg:flex"} />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col items-center justify-center h-full">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-2xl font-medium py-4 hover:text-[#ad343e] transition-colors 
                ${pathname === link.href ? "text-[#ad343e] font-bold" : ""}`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <NotificationsNoneOutlinedIcon className="text-[#2C2F24] font-medium"/>
            <div className="mt-6 mb-6">
              <MyButton page="/BookTable">Book a Table</MyButton>
            </div>
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

export default Nav2;
