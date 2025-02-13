import React from 'react'
import Link from 'next/link'
const MenuCategoryButton = ({children,page, className = '',onClick}) => {
  return (
    <Link href={"/Menu"}>
            <div onClick={onClick} className={`flex cursor-pointer justify-center items-center rounded-[50px] w-[120px] h-[48px] font-bold border-2 border-solid ${className}`} >
              {children}
            </div>
    </Link>
  )
}

export default MenuCategoryButton