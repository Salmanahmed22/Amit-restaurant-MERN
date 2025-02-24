"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import axios from "axios";

const Form = () => {
  // Single state object for all inputs
  const [inputData, setInputData] = useState({
    name: "",
    phone: "",
    email: "",
    time: "",
    capacity: "",
    date: new Date(),
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (field, value) => {
    setInputData((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate inputs
    if (!inputData.name || !inputData.phone || !inputData.email || !inputData.time || !inputData.capacity) {
      toast.error("⚠️ Please fill in all fields.");
      setLoading(false);
      return;
    }

    const bookingData = {
      ...inputData,
      date: inputData.date.toISOString().split("T")[0], // Format date as YYYY-MM-DD
      userId: Cookies.get("id"), 
    };

    try {
      const token = Cookies.get("token");
      const response = await axios.post("http://localhost:5000/api/bookings/", bookingData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      
      if (response.status === 200) {
        toast.success("✅ Booking successful!");
        setInputData({ name: "", phone: "", email: "", time: "", capacity: "", date: new Date() });
      }
    } catch (error) {
      toast.error(`❌ ${error.response?.data?.message || "Failed to book a table"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="lg:w-[812px] lg:h-[505px] bg-[#FFFFFF] rounded-[16px] p-4 md:p-8 md:w-[600px] md:h-[550px] flex flex-col gap-4 md:gap-[10px] justify-around shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Popover>
              <PopoverTrigger className="w-full rounded-[118px] h-[48px] md:h-[64px]" asChild>
                <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !inputData.date && "text-muted-foreground")}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {inputData.date ? inputData.date.toLocaleDateString() : "MM/DD/YYYY"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={inputData.date} onSelect={(date) => handleChange("date", date)} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Select onValueChange={(value) => handleChange("time", value)}>
              <SelectTrigger className="w-full rounded-[118px] h-[48px] md:h-[64px]">
                <SelectValue placeholder="Select time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="18:00">06:00 PM</SelectItem>
                <SelectItem value="18:30">06:30 PM</SelectItem>
                <SelectItem value="19:00">07:00 PM</SelectItem>
                <SelectItem value="19:30">07:30 PM</SelectItem>
                <SelectItem value="20:00">08:00 PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input className="rounded-[118px] h-[48px] md:h-[64px]" id="name" placeholder="Enter your name" value={inputData.name} onChange={(e) => handleChange("name", e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input className="rounded-[118px] h-[48px] md:h-[64px]" id="phone" placeholder="x-xxx-xxx-xxxx" value={inputData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input className="rounded-[118px] h-[48px] md:h-[64px]" id="email" placeholder="Enter your email" value={inputData.email} onChange={(e) => handleChange("email", e.target.value)} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="capacity">Total Persons</Label>
          <Select onValueChange={(value) => handleChange("capacity", value)}>
            <SelectTrigger className="w-full rounded-[118px] h-[48px] md:h-[64px]">
              <SelectValue placeholder="Select number of persons" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Person</SelectItem>
              <SelectItem value="2">2 Persons</SelectItem>
              <SelectItem value="3">3 Persons</SelectItem>
              <SelectItem value="4">4 Persons</SelectItem>
              <SelectItem value="+5">+5 Persons</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full h-[48px] md:h-[64px] bg-[#b23b3b] hover:bg-[#9e3434] rounded-[118px]" disabled={loading}>
          {loading ? "Booking..." : "Book A Table"}
        </Button>
      </form>
    </div>
  );
};

export default Form;
