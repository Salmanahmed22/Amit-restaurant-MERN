import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MyButton from '../atoms/myButton'
const Nav2 = () => {
  return (
    <div className='h-[100px] w-[100%] flex justify-between items-center px-[180px]'>
        <div className='flex gap-[15px] items-center'>
            <Image src={"/logo.svg"} width={50} height={50} alt={"logo"}></Image>
            <Image src={"/logoName.svg"} width={200} height={200} alt={"logo"}></Image>
        </div>
        {/* make navigation links */}
        <div className='flex gap-[40px] text-xl font-medium font-sans'>
            <Link href={'/'} className='hover:text-[#ad343e] '>Home</Link>
            <Link href={'/about'}  className='hover:text-[#ad343e] '>About</Link>
            <Link href={'/Menu'}  className='hover:text-[#ad343e] '>Menu</Link>
            <Link href={'/PAges'}  className='hover:text-[#ad343e] '>Pages</Link>
            <Link href={'/contact'} className='hover:text-[#ad343e] '>Contact</Link>
        </div>
        <MyButton page={'/BookTable'}>Book a Table</MyButton>
    </div>
  )
}

export default Nav2