import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const BrowseMenuCard = ({icon,type }) => {
  return (
    <div className='flex flex-col gap-[20px] justify-center items-center h-[375px] border-2 border-solid border-[#f3f3f0] text-center px-[20px] rounded-[15px]'>
            <div className='w-[100px] h-[100px] bg-[#f3f3f0] rounded-[50px] flex justify-center items-center'>
                <Image src={icon} width={50} height={50}></Image>
            </div>
            <h2 className='text-[#2C2F24] text-[20px] font-sans font-semibold'>{type}</h2>
            <p className='text-[#2C2F24] text-[14px] font-sans font-medium '>In the new era of technology we
                <br />
                look in the future with certainty
                <br />and pride for our life.
            </p>
            <Link href={'/Menu'} className='text-[#ad343e] font-sans font-semibold'>Explore Menu</Link>
        </div>
  )
}

export default BrowseMenuCard