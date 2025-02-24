"use client"
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import React from 'react'
import About1 from '@/components/about1'
import About2 from '@/components/about2'
import About3 from '@/components/about3'
import About4 from '@/components/about4'
const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div>
        <About1 />
        <About2 />
        <About3 />
        <About4 />
    </div>
  )
}

export default About