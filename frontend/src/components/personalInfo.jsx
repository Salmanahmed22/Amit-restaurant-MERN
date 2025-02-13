"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";

export default function ProfileInfo() {
  const [user, setUser] = useState({ username: "", email: "" , newPassword:"", confirmPassword:""});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        setUser(response.data.data.user);
      } catch (error) {
        Toaster.error(error.message);
      } finally {
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    

    if(user.newPassword !== user.confirmPassword) {
        Toaster.error("Passwords do not match");
      return;
    }
    const id = Cookies.get("id");
    try {
      const response = await axios.put(
        "http://localhost:5000/api/users/profile",
        { username: user.username, email: user.email , password:user.newPassword, _id:id},
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.data.user);
      
      Cookies.set("username", response.data.data.user.username);
      Toaster.success("Profile updated successfully!");
    } catch (error) {
        Toaster.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-xl font-semibold text-gray-800 text-center">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">new password</label>
            <input
              type="password"
              name="newPassword"
              value={user.newPassword}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm new password</label>
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-[#ad343e] text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
