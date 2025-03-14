import React from 'react'
import Link from 'next/link'
const MenuCategoryButton = ({isAdmin,children,page, className = '',onClick}) => {
  return (
    <button href={"/Menu"}>
            <div onClick={onClick} className={`flex cursor-pointer justify-center items-center rounded-[50px] w-[120px] h-[48px] font-bold border-2 border-solid ${className}`} >
              {children}
            </div>
    </button>
  )
}

export default MenuCategoryButton