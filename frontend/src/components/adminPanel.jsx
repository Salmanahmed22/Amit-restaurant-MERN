"use client";
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PendingBookings from "./pendingBookings";
import Menu from "./menu";
import Signup from "./signup";
import ViewUsers from "./viewUsers";
import AddMenuItem from "./addMenuItem";

export default function ProfilePage() {
  // Start with a default value
  const [selectedTab, setSelectedTab] = useState("edit-menu-items");
  const [mounted, setMounted] = useState(false);

  // Move localStorage operations to useEffect
  useEffect(() => {
    // This will only run in the browser
    const savedTab = localStorage.getItem("selectedTab");
    if (savedTab) {
      setSelectedTab(savedTab);
    }
    setMounted(true);
  }, []);

  // Save to localStorage when tab changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("selectedTab", selectedTab);
    }
  }, [selectedTab, mounted]);

  // Optional: Prevent rendering until after mount
  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <div className="container mx-auto p-4">
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <div className="pb-8 md:pb-10 lg:pb-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-y-1">
            <TabsTrigger value="edit-menu-items">Edit menu items</TabsTrigger>
            <TabsTrigger value="add-menu-items">Add menu items</TabsTrigger>
            <TabsTrigger value="pending-bookings">Pending bookings</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="register-admin">Register Admin</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="edit-menu-items">
          <Menu />
        </TabsContent>

        <TabsContent value="add-menu-items">
          <AddMenuItem />
        </TabsContent>

        <TabsContent value="pending-bookings">
          <PendingBookings />
        </TabsContent>

        <TabsContent value="users">
          <ViewUsers />
        </TabsContent>

        <TabsContent value="register-admin">
          <Signup />
        </TabsContent>
      </Tabs>
    </div>
  );
}