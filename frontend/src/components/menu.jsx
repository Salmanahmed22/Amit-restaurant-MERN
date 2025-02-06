'use client'
import React from 'react'
import MenuCategoryButton from '@/atoms/menuCategoryButton'
import { useState } from 'react'
import MenuCard from '@/atoms/menuCard'

const Menu = () => {
    const [isActive, setIsActive] = useState(1)
    const handleActive = (index) => {
        setIsActive(index)
    }
  return (
    <div className='w-full h-auto flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-[180px] overflow-hidden'>
    
        <div className='w-full h-auto flex flex-col items-center gap-10 justify-center py-6 sm:py-8 md:py-10'>
            <h1 className='text-[#2C2F24] font-sans text-3xl sm:text-[40px] md:text-[60px] lg:text-[80px] text-center'>Our Menu</h1>
            <p className='text-[#495460] font-sans text-base sm:text-[18px] md:text-[20px] lg:text-[24px] text-center px-4'>
                We consider all the drivers of change gives you the components
                <br className='hidden sm:block' />
                you need to change to create a truly happens.
            </p>    
        </div>

        <div className='w-full max-w-[850px] h-auto flex flex-wrap items-center justify-center gap-2 sm:gap-[15px] px-4'>
            <MenuCategoryButton onClick={()=>handleActive(1)} 
                className={`text-sm sm:text-base ${isActive === 1 ? 'border-[#ad343e] text-[#fff] bg-[#ad343e]' : "border-[#2c2f2449] text-[#2C2F24] bg-white"}`} 
                page={'/Menu'}>All</MenuCategoryButton>
            <MenuCategoryButton onClick={()=>handleActive(2)} 
                className={`text-sm sm:text-base ${isActive === 2 ? 'border-[#ad343e] text-[#fff] bg-[#ad343e]' : "border-[#2c2f2449] text-[#2C2F24] bg-white"}`} 
                page={'/Menu'}>Breakfast</MenuCategoryButton>
            <MenuCategoryButton onClick={()=>handleActive(3)} 
                className={`text-sm sm:text-base ${isActive === 3 ? 'border-[#ad343e] text-[#fff] bg-[#ad343e]' : "border-[#2c2f2449] text-[#2C2F24] bg-white"}`} 
                page={'/Menu'}>Main Dish</MenuCategoryButton>
            <MenuCategoryButton onClick={()=>handleActive(4)} 
                className={`text-sm sm:text-base ${isActive === 4 ? 'border-[#ad343e] text-[#fff] bg-[#ad343e]' : "border-[#2c2f2449] text-[#2C2F24] bg-white"}`} 
                page={'/Menu'}>Drinks</MenuCategoryButton>
            <MenuCategoryButton onClick={()=>handleActive(5)} 
                className={`text-sm sm:text-base ${isActive === 5 ? 'border-[#ad343e] text-[#fff] bg-[#ad343e]' : "border-[#2c2f2449] text-[#2C2F24] bg-white"}`} 
                page={'/Menu'}>Desserts</MenuCategoryButton>
        </div>

        {/* Menu Cards Grid */}
        <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 sm:gap-6 lg:gap-[20px] mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-8 lg:mb-10 px-4'>
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
        </div>
    </div>
  )
}

export default Menu