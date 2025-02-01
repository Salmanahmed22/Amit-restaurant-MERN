'use client'
import React, { use } from 'react'
import MenuCategoryButton from '@/atoms/menuCategoryButton'
import { useState } from 'react'
const Menu = () => {
    const [isActive, setIsActive] = useState(1)
    const handleActive = (index) => {
        setIsActive(index)
    }
  return (
    <div className='w-full h-screen flex flex-col items-center sm:px-6 md:px-8 lg:px-[180px] overflow-hidden'>
        <div className='w-full h-auto flex flex-col items-center justify-center py-10 '>
            <h1 className='text-[#2C2F24] font-sans text-[40px] md:text-[60px] lg:text-[80px] text-center'>Our Menu</h1>
            <p className='text-[#495460] font-sans text-[18px] md:text-[20px] lg:text-[24px] text-center'>We consider all the drivers of change gives you the components <br />
            you need to change to create a truly happens.
            </p>    
        </div>
        <div className='w-[850px] h-auto flex items-center justify-center gap-[15px]'>
            <MenuCategoryButton onClick={()=>handleActive(1)} className={`${isActive === 1 ? 'border-[#ad343e] text-[#fff] bg-[#ad343e]' : "border-[#2c2f2449] text-[#2C2F24] bg-white"}`} page={'/Menu'}>All</MenuCategoryButton>
            <MenuCategoryButton onClick={()=>handleActive(2)} className={`${isActive === 2 ? 'border-[#ad343e] text-[#fff] bg-[#ad343e]' : "border-[#2c2f2449] text-[#2C2F24] bg-white"}`} page={'/Menu'}>Breakfast</MenuCategoryButton>
            <MenuCategoryButton onClick={()=>handleActive(3)} className={`${isActive === 3 ? 'border-[#ad343e] text-[#fff] bg-[#ad343e]' : "border-[#2c2f2449] text-[#2C2F24] bg-white"}`} page={'/Menu'}>Main Dish</MenuCategoryButton>
            <MenuCategoryButton onClick={()=>handleActive(4)} className={`${isActive === 4 ? 'border-[#ad343e] text-[#fff] bg-[#ad343e]' : "border-[#2c2f2449] text-[#2C2F24] bg-white"}`} page={'/Menu'}>Drinks</MenuCategoryButton>
            <MenuCategoryButton onClick={()=>handleActive(5)} className={`${isActive === 5 ? 'border-[#ad343e] text-[#fff] bg-[#ad343e]' : "border-[#2c2f2449] text-[#2C2F24] bg-white"}`} page={'/Menu'}>Desserts</MenuCategoryButton>
        </div>

    </div>
  )
}

export default Menu