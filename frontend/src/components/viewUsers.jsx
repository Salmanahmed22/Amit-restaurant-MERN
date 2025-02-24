"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Loading from "@/app/loading";

const ViewUsers = () => {
  const [users, setUsers] = useState(null); // Change initial state to null
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:5000/api/users/", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        setUsers(response.data.data.users);
        console.log(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto bg-gray-100 p-4 gap-2">
      <h1 className="text-xl font-semibold text-gray-800 text-center">View Users</h1>
      <div className="h-full w-[85%] bg-white flex flex-col p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b-2">
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Number of Bookings</th>
            </tr>
          </thead>
          <tbody>
            {users ? (
              users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2 text-center">{user.username}</td>
                    <td className="px-4 py-2 text-center">{user.email}</td>
                    <td className="px-4 py-2 text-center">{user.isAdmin ? "Admin":"User"}</td>
                    <td className="px-4 py-2 text-center">{user.bookings?.length ?? 0}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4">No users found</td>
                </tr>
              )
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewUsers;
