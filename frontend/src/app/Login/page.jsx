"use client"
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import React from 'react'
import Login from '@/components/Login'
const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <Loading />;
  return (
    <Login/>
  )
}

export default Page