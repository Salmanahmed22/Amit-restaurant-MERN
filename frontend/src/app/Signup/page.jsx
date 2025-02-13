"use client"
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import React from 'react'
import Signup from '@/components/signup'
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
    <Signup/>
  )
}

export default Page