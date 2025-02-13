// 'use client'
// import { useState } from "react";


// const AdminPanel = () => {
//   const [activeTab, setActiveTab] = useState("menu");

//   return (
//     <div className="p-6 h-full w-full flex flex-col">
//       {/* Tabs */}
//       <div className="flex gap-4 mb-4">
//         <button
//           className={`px-4 py-2 ${activeTab === "menu" ? "bg-[#ad343e] text-white" : "bg-gray-200"}`}
//           onClick={() => setActiveTab("menu")}
//         >
//           Menu
//         </button>
//         <button
//           className={`px-4 py-2 ${activeTab === "bookings" ? "bg-[#ad343e] text-white" : "bg-gray-200"}`}
//           onClick={() => setActiveTab("bookings")}
//         >
//           Bookings
//         </button>
//         <button
//           className={`px-4 py-2 ${activeTab === "Add Item" ? "bg-[#ad343e] text-white" : "bg-gray-200"}`}
//           onClick={() => setActiveTab("Add Item")}
//         >
//           Bookings
//         </button>
//         <button
//           className={`px-4 py-2 ${activeTab === "register" ? "bg-[#ad343e] text-white" : "bg-gray-200"}`}
//           onClick={() => setActiveTab("register")}
//         >
//           Register
//         </button>
//       </div>

//       {/* Render Components Based on Active Tab */}
//       <div className="border p-4 rounded">
//         {activeTab === "menu" && <Menu />}
//         {activeTab === "bookings" && <Bookings />}
//         {activeTab === "Add Item" && <Bookings />}
//         {activeTab === "register" && <Register />}
//       </div>
//     </div>
//   );
// }

// export default AdminPanel;