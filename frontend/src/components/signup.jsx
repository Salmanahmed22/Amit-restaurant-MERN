'use client'
import React, { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";


const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAdmin: false,
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const issAdmin = Cookies.get("isAdmin");
      if (issAdmin) {
        formData.isAdmin = issAdmin;
      }

      await axios.post("http://localhost:5000/api/auth/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        isAdmin: formData.isAdmin
      });



      toast.success("Signup successful! Please log in.");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAdmin: false,
      });
      //redirect
      if (issAdmin) {
        window.location.href = "/admin";
      }else{
        window.location.href = "/Login";
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center bg-[#F9F9F7] pb-[40px]">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-[#2C2F24] font-playfair text-[40px] md:text-[60px] lg:text-[80px] text-center">
        Signup
      </h1>
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col justify-center w-[650px] h-auto bg-[#fff] rounded-[16px] p-8 shadow-lg gap-3"
      >
        <div>
          <Label className="text-[#414536] font-medium" htmlFor="username">Username</Label>
          <Input 
            type="text" 
            id="username"
            name="username"
            placeholder="Enter Your name"
            value={formData.username}
            onChange={handleChange}
            required
            className="rounded-[118px] h-[48px] md:h-[64px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b23b3b] focus-visible:border-[#b23b3b]"
          />
        </div>
        <div>
          <Label className="text-[#414536] font-medium" htmlFor="email">Email</Label>
          <Input 
            type="email" 
            id="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-[118px] h-[48px] md:h-[64px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b23b3b] focus-visible:border-[#b23b3b]"
          />
        </div>
        <div>
          <Label className="text-[#414536] font-medium" htmlFor="password">Password</Label>
          <Input 
            type="password" 
            id="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="rounded-[118px] h-[48px] md:h-[64px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b23b3b] focus-visible:border-[#b23b3b]"
          />
        </div>
        <div>
          <Label className="text-[#414536] font-medium" htmlFor="confirmPassword">Confirm Password</Label>
          <Input 
            type="password" 
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Your Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="rounded-[118px] h-[48px] md:h-[64px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b23b3b] focus-visible:border-[#b23b3b]"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full h-[48px] md:h-[64px] bg-[#b23b3b] hover:bg-[#9e3434] rounded-[118px]" 
          disabled={loading}
        >
          {loading ? "Signing up..." : "Signup"}
        </Button>
      </form>
    </div>
  );
};

export default Signup;
