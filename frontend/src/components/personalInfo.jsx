"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast, { Toaster } from "react-hot-toast";

export default function ProfileInfo() {
  const [user, setUser] = useState({ username: "", email: "", newPassword: "", confirmPassword: "" });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        
        // Only update the fields from API, preserve password fields
        setUser(prevUser => ({
          ...prevUser,
          username: response.data.data.user.username || "",
          email: response.data.data.user.email || "",
          // Keep the password fields as they were
        }));
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.newPassword !== user.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    const id = Cookies.get("id");
    Cookies.set("username", user.username);
    try {
      await axios.put(
        "http://localhost:5000/api/users/profile",
        { username: user.username, email: user.email, password: user.newPassword, _id: id },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Toaster position="top-center" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white shadow-lg rounded-lg p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center">Edit Profile</h1>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded focus:ring focus:ring-red-300"
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
                className="mt-1 p-2 w-full border rounded focus:ring focus:ring-red-300"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={user.newPassword}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded focus:ring focus:ring-red-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded focus:ring focus:ring-red-300"
              />
            </div>

            <button
              type="submit"
              className="bg-[#ad343e] text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
