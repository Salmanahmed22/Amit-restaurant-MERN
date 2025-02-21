import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MyBookings from "./myBookings"
import Menu from "./menu"
import Signup from "./signup"
export default function ProfilePage() {
  return (
    <>
    <div className="container mx-auto p-4">
      <Tabs defaultValue="edit-menu-items" className="w-full">

        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="edit-menu-items">Edit menu items</TabsTrigger>
          <TabsTrigger value="add-menu-items">Add menu items</TabsTrigger>
          <TabsTrigger value="pending-bookings">Pending bookings</TabsTrigger>
          <TabsTrigger value="users">users</TabsTrigger>
          <TabsTrigger value="register-admin">register admin</TabsTrigger>
        </TabsList>

        <TabsContent value="edit-menu-items">
          <Menu/>
        </TabsContent>

        <TabsContent value="add-menu-items">
          <MyBookings />
        </TabsContent>

        <TabsContent value="pending-bookings">
          <MyBookings />
        </TabsContent>

        <TabsContent value="users">
          <MyBookings />
        </TabsContent>

        <TabsContent value="register-admin">
          <Signup/>
        </TabsContent>
                
      </Tabs>

    </div>
    </>
  )
}