import React from 'react'
import Image from 'next/image'
import StatCard from '@/atoms/StatCard'
const About4 = () => {
  return (
    <div className='w-full min-h-screen bg-[#F9F9F7] flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[180px] py-12 gap-8 lg:gap-[131px] justify-center items-center'>
      <div className='flex flex-col gap-6 md:gap-[24px] items-start max-w-2xl'>
        <Image src="/text1.png" width={450} height={121} alt="About Us" className="w-full max-w-[450px] h-auto" />
        <p className='leading-relaxed text-sm sm:text-base md:text-[16px] font-sans text-[#414536]'>
          At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-[24px] w-full'>
          <StatCard image="/3.svg" value="3" label="Locations" />
          <StatCard image="/1995.svg" value="1995" label="Founded" />
          <StatCard image="/65+.svg" value="65+" label="Staff Members" />
          <StatCard value="100%" label="Satisfied Customers" />
        </div>
      </div>
      <div className='w-full lg:w-[500px] h-[300px] lg:h-[600px] bg-[url("/about4.jpg")] bg-cover bg-center rounded-[12px]'></div>
    </div>
  )
}



export default About4