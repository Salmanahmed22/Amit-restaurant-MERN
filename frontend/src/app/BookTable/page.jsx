"use client"
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import React from 'react'
import BookTable from '@/components/bookTable1'
const page = () => {
  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <Loading />;
  return (
    <>
        <BookTable />
    </>
  )
}

export default page