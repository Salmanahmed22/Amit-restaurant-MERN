import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PendingBookings from "./pendingBookings";
import Menu from "./menu";
import Signup from "./signup";
import ViewUsers from "./viewUsers";
import AddMenuItem from "./addMenuItem";
export default function ProfilePage() {
  // Load the saved tab from localStorage or default to "edit-menu-items"
  const [selectedTab, setSelectedTab] = useState(
    () => localStorage.getItem("selectedTab") || "edit-menu-items"
  );

  // Update localStorage whenever selectedTab changes
  useEffect(() => {
    localStorage.setItem("selectedTab", selectedTab);
  }, [selectedTab]);

  return (
    <div className="container mx-auto p-4">
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="edit-menu-items">Edit menu items</TabsTrigger>
          <TabsTrigger value="add-menu-items">Add menu items</TabsTrigger>
          <TabsTrigger value="pending-bookings">Pending bookings</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="register-admin">Register Admin</TabsTrigger>
        </TabsList>

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
