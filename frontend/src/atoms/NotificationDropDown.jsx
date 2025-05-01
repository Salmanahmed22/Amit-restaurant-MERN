"use client"
import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

const NotificationDropDown = ({notifications,onUpdate}) => {
    const [myNotifications, setMyNotifications] = useState(notifications);
    const userId = Cookies.get("id");
    
    useEffect(() => {
        async function fetchUserNotifications() {
      
            try {
              const response = await axios.get(`http://localhost:5000/api/notifications?userId=${userId}`);
              console.log("userIdd",userId);
              setMyNotifications(response.data.data.notifications);
              console.log("notificationnnn",response.data.data.notifications);
              
            } catch (error) {
              console.error("Error fetching notifications:", error);
            }
          }
          fetchUserNotifications();
    },[])
    const handleClick = async (notificationId, seen) => {
        console.log("notificationId", notificationId);
        
        try {
            await axios.put(`http://localhost:5000/api/notifications`, {seen, notificationId});
            
            // Update the local state to mark notification as seen
            setMyNotifications(prevNotifications => 
                prevNotifications.map(notification =>
                    notification._id === notificationId 
                        ? {...notification, seen: true} 
                        : notification
                )
            );
        } catch(err) {
            console.error("Error updating notification:", err.message);
        }
    }

    const markAllAsRead = async () => {
        try {
            console.log("markAllasRead");
            
            // Update all notifications as seen in the local state
            setMyNotifications(prevNotifications => 
                prevNotifications.map(notification => ({...notification, seen: true}))
            );

            await axios.put(`http://localhost:5000/api/notifications/mark-all-read?userId=${userId}`);
            
        } catch(err) {
            console.error("Error marking all as read:", err.message);
        }
    }

    return (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 border border-gray-200">
            <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-[#2C2F24]">Notifications</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
                {myNotifications.length > 0 ? (
                myNotifications.map((notification) => (
                    <div
                    key={notification._id}
                    className={`p-4 border-b border-gray-100 hover:bg-gray-50 transition-transform hover:scale-105 cursor-pointer ${!notification.seen ? "bg-gray-50" : ""}`}
                    onClick={
                        () => handleClick(notification._id, true)
                        .then(() => onUpdate(myNotifications))
                    }
                    >
                    <div className="flex items-start">
                        <div className="flex-1">
                        <p className={`text-sm ${!notification.seen ? "font-medium" : ""}`}>
                            {notification.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                        {!notification.seen && <span className="h-2 w-2 bg-[#ad343e] rounded-full"></span>}
                    </div>
                    </div>
                ))
                ) : (
                <div className="p-4 text-center text-gray-500">No notifications</div>
                )}
            </div>
            <div className="p-2 text-center border-t border-gray-200">
                <button 
                    className="text-sm text-[#ad343e] hover:underline"
                    onClick={markAllAsRead}
                >
                    Mark all as read
                </button>
            </div>
        </div>
    )
}

export default NotificationDropDown