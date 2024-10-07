import React from 'react'
import Image from 'next/image'

const StatCard = ({ image, value, label }) => (
    <div className='w-full h-[174px] bg-white rounded-[8px] flex flex-col justify-center items-center gap-4 p-4 shadow-sm'>
      {image ? (
        <Image src={image} width={80} height={55} alt={label} className="w-auto h-[55px]" />
      ) : (
        <h1 className='text-[#2C2F24] font-playfair text-4xl sm:text-[55px]'>{value}</h1>
      )}
      <h2 className='text-center text-sm sm:text-base'>{label}</h2>
    </div>
  )

export default StatCard