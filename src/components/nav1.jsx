import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


const Nav1 = () => {
  return (
    <div className='w-full h-[45px] flex px-[180px] bg-[#474747] overflow-hidden justify-between'>
      <div className='flex gap-[30px]'>
        <div className='flex gap-[5px] cursor-pointer'>
          <Image src={"/phone.svg"} width={15} height={15}></Image>
          <Image src={"/phoneNumber.svg"} width={100} height={200}></Image>
        </div>
        <div className='flex gap-[5px] cursor-pointer'>
          <Image src={"/mail.svg"} width={20} height={20}></Image>
          <Image src={"/yummy@bistrobliss.svg"} width={130} height={3000}></Image>
        </div>
      </div>
      <div className='flex items-center gap-[10px]'>
        <div className='w-[35px] h-[35px] bg-[#5C5C5C] rounded-full justify-center items-center flex cursor-pointer'>
            < FaTwitter width={50} height={50} color='white'/>
        </div>
        <div className='w-[35px] h-[35px] bg-[#5C5C5C] rounded-full justify-center items-center flex cursor-pointer'>
            < FaFacebookF width={50} height={50} color='white'/>
        </div>
        <div className='w-[35px] h-[35px] bg-[#5C5C5C] rounded-full justify-center items-center flex cursor-pointer'>
            < FaInstagram width={50} height={50} color='white'/>
        </div>
        <div className='w-[35px] h-[35px] bg-[#5C5C5C] rounded-full justify-center items-center flex cursor-pointer'>
            < FaGithub width={50} height={50} color='white'/>
        </div>
      </div>
    </div>
  )
}

export default Nav1;