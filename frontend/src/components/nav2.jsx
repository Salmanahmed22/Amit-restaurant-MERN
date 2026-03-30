"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MyButton from "../atoms/myButton"
import { FaBars, FaTimes } from "react-icons/fa"
import LoginButton from "../atoms/loginButton"
import Cookies from "js-cookie"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import NotificationDropDown from "@/atoms/NotificationDropDown"
import axios from "axios"

const Nav2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [unSeenNotification, setUnSeenNotification] = useState(false)
  
  const [notifications, setNotifications] = useState([])
  const notificationRef = useRef(null)
  const pathname = usePathname()
  const loggedin = Cookies.get("loggedin") === "true"
  const userId = Cookies.get("id");
  console.log("is login? ", loggedin)

  useEffect(() => {
    async function fetchUserNotifications() {
      
      try {
        const response = await axios.get(`http://localhost:5000/api/notifications?userId=${userId}`);
        setNotifications(response.data.data.notifications);
        handleIfThereIsUnseenNotification(response.data.data.notifications);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    }

    if(loggedin){
      fetchUserNotifications();
    }

    
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [loggedin])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/Menu", label: "Menu" },
    { href: "/Contact", label: "Contact" },
  ]

  const handleIfThereIsUnseenNotification = (notifications) => {
    if(notifications.some((n) => !n.seen)){      
      setUnSeenNotification(true);
    }
  }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen)
    console.log("clicked notification");
    
  }

  return (
    <nav className="w-full py-4 px-4 sm:px-6 lg:px-8 xl:px-[180px]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex gap-[15px] justify-center items-center">
          <Image src="/logo.svg" width={50} height={50} alt="logo"/>
          <Image src="/logoName.svg" width={200} height={50} alt="logo name" className="hidden sm:block w-auto h-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-[30px] text-xl font-medium font-sans">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className={`w-[77px] h-[32px] rounded-[34px] flex justify-center items-center 
              ${pathname === link.href ? "bg-[#DBDFD0]" : "bg-white"}`} // Active based on route
            >
              <Link href={link.href} className="hover:text-[#ad343e] transition-colors text-[16px] font-medium">
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
            <div className="flex gap-4 items-center relative">
              <LoginButton display={"hidden lg:flex"} />
              <div className="relative" ref={notificationRef}>
                <div className="relative">
                  <NotificationsNoneOutlinedIcon
                    className="hidden lg:flex text-[#2C2F24] font-medium cursor-pointer hover:text-[#ad343e]"
                    onClick={toggleNotifications}/>
                  {unSeenNotification && (
                    <span className="absolute -top-1 -right-1 bg-[#ad343e] rounded-full w-2 h-2"></span>
                  )}
                </div>

                {/* Notification Dropdown */}
                {isNotificationsOpen && (
                  <NotificationDropDown
                   notifications={notifications}
                   onUpdate={handleIfThereIsUnseenNotification} />
                )}
              </div>
            </div>
          ) : (
            <LoginButton display={"hidden lg:flex"} />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
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
            {loggedin && (
              <div className="relative mb-4">
                <NotificationsNoneOutlinedIcon
                  className="text-[#2C2F24] font-medium cursor-pointer text-2xl"
                  onClick={toggleNotifications}
                />
                {notifications.some((n) => !n.seen) && (
                  <span className="absolute -top-1 -right-1 bg-[#ad343e] rounded-full w-2 h-2"></span>
                )}

                {/* Mobile Notification Dropdown */}
                {isNotificationsOpen && (
                  <div className="fixed inset-0 z-50 bg-white p-4 overflow-y-auto">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-2">
                      <h3 className="text-xl font-medium text-[#2C2F24]">Notifications</h3>
                      <button onClick={toggleNotifications}>
                        <FaTimes className="text-2xl" />
                      </button>
                    </div>
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-gray-100 ${!notification.read ? "bg-gray-50" : ""}`}
                        >
                          <div className="flex items-start">
                            <div className="flex-1">
                              <p className={`${!notification.seen ? "font-medium" : ""}`}>{notification.massage}</p>
                              <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
                            </div>
                            {!notification.seen && <span className="h-2 w-2 bg-[#ad343e] rounded-full mt-2"></span>}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500">No notifications</div>
                    )}
                    <div className="p-4 text-center">
                      <button className="text-[#ad343e] hover:underline">Mark all as read</button>
                    </div>
                  </div>
                )}
              </div>
            )}
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
  )
}

export default Nav2

