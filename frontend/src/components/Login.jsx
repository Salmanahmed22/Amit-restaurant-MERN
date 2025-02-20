'use client';
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      const response = res.data
      console.log('Full Response:', response); // Check full structure
      console.log('Response Data:', response?.data?.token); // Check what's inside data
    
      const token = response.data?.token;
      const isAdmin = response.data?.isAdmin;
      const username = response.data?.username;
      const id = response.data?.id;
      if (token) {
        document.cookie = `token=${token}`;
        document.cookie = `isAdmin=${isAdmin}`;
        document.cookie = `username=${username}`;
        document.cookie = `id=${id}`;
        toast.success('Login successful!');
        setTimeout(() => {
          if (isAdmin) {
            window.location.href = '/admin';
          } else {
            window.location.href = '/';
          }
        },1000)
      } else {
        toast.error('Login failed: Token not found.');
      }
    } catch (error) {
      console.error('Login Error:', error);
      toast.error(error.response?.data?.message || 'Login failed.');
    }
     finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-[#F9F9F7]'>
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className='text-[#2C2F24] font-playfair text-[40px] md:text-[60px] lg:text-[80px] text-center'>Login</h1>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center w-[650px] h-auto bg-[#fff] rounded-[16px] p-8 shadow-lg gap-6'>
        <div>
          <Label className='text-[#414536] font-medium' htmlFor="email">Email</Label>
          <Input 
            className="rounded-[118px] h-[48px] md:h-[64px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b23b3b] focus-visible:border-[#b23b3b]" 
            type="email" 
            id="email"
            name="email"
            placeholder="Enter Your Email" 
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label className='text-[#414536] font-medium' htmlFor="password">Password</Label>
          <Input 
            className="rounded-[118px] h-[48px] md:h-[64px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b23b3b] focus-visible:border-[#b23b3b]" 
            type="password" 
            id="password"
            name="password"
            placeholder="Enter Your Password" 
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit" className="w-full h-[48px] md:h-[64px] bg-[#b23b3b] hover:bg-[#9e3434] rounded-[118px]" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
        <div className='flex justify-center items-center gap-2'>
          <h2>Don't have an account?</h2>
          <Link className='text-[#b23b3b] hover:text-[#9e3434]' href='/Signup'>Signup Now</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;