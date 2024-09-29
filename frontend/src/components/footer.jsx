import React from 'react'
import Image from 'next/image'
import SocialMediaIcons from '@/atoms/SocialMediaIcons'
const Footer = () => {
  return (
    <div className='w-full py-[50px]  md:h-auto lg:h-[578px] flex items-center justify-center bg-[#474747] px-4 sm:px-6 md:px-8 md:py-[50px] lg:px-[180px]'>
        <div className='grid gap-7 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 lg:justify-between lg:items-start md:justify-center md:items-center md:gap-[30px] lg:gap-[135px]'>
            <div className='flex flex-col justify-between gap-[30px] w-[300px] h-[222px]'>
                <div className='flex items-center gap-2'>
                    <Image src="/white logo.svg" color='#fff' width={50} height={50} alt="logo name" className="sm:block" />
                    <Image src={"/logoName white.svg"} width={200} height={50} alt="logo name" ></Image>
                </div>
                <p className='text-[#ADB29E] text-[16px] font-sans font-regular'>In the new era of technology we look a 
                    <br />in the future with certainty and pride to <br />
                    for our company and.
                </p>
                <SocialMediaIcons background="bg-[#AD343E]" />
            </div>
            <div className='flex justify-between items-center gap-[120px]'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[16px] font-sans font-bold text-[#fff] mb-3'>Pages</h1>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>Home</h2>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>About</h2>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>Menu</h2>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>Pricing</h2>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>Blog</h2>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>Contact</h2>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>Delivery</h2>
                </div>
                <div className='flex flex-col gap-[20px] w-[125px]'>
                    <h1 className='text-[16px] font-sans font-bold text-[#fff] mb-3'>Utility Pages</h1>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>Start Here</h2>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>Styleguide</h2>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>Password Protected</h2>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>404 Not Found</h2>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>Licenses</h2>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>Changelog</h2>
                    <h2 className='text-[#ADB29E] text-[14px] font-sans font-regular hover:text-[#AD343E] cursor-pointer'>View More</h2>
                </div>
            </div>
                <div className='flex flex-col items-center justify-between gap-[30px]'>
                    <h1 className='text-[16px] font-sans font-bold text-[#fff] mb-3'>Follow Us On Instagram</h1>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3'>
                            <Image src={"/pexels-steve-3789885 1.png"} width={184} height={160} className='rounded-[10px] hover:scale-110 ease-in-out hover:duration-500 transition-transform cursor-pointer'></Image>
                            <Image src={"/Mask group.png"} width={184} height={160} className='rounded-[10px] hover:scale-110 ease-in-out hover:duration-500 transition-transform cursor-pointer'></Image>
                        </div>
                        <div className='flex gap-3'>
                            <Image src={"/Mask group (1).png"} width={184} height={160} className='rounded-[10px] hover:scale-110 ease-in-out hover:duration-500 transition-transform cursor-pointer'></Image>
                            <Image src={"/Mask group (2).png"} width={184} height={160} className='rounded-[10px] hover:scale-110 ease-in-out hover:duration-500 transition-transform cursor-pointer'></Image>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer