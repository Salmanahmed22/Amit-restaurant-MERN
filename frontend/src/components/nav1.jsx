import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa6"

const Nav1 = () => {
  return (
    <div className='w-full bg-[#474747] py-2 px-4 sm:px-6 md:px-8 lg:px-[180px] overflow-hidden'>
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-[30px] items-center sm:items-start'>
          <a href="tel:+1234567890" className='flex gap-[5px] items-center cursor-pointer'>
            <Image src="/phone.svg" width={15} height={15} alt="Phone icon" />
            <Image src="/phoneNumber.svg" width={100} height={20} alt="Phone number" />
          </a>
          <a href="mailto:yummy@bistrobliss.com" className='flex gap-[5px] items-center cursor-pointer'>
            <Image src="/mail.svg" width={20} height={20} alt="Mail icon" />
            <Image src="/yummy@bistrobliss.svg" width={130} height={20} alt="Email address" />
          </a>
        </div>
        <div className='flex items-center gap-[10px] mt-4 sm:mt-0'>
          {[FaTwitter, FaFacebookF, FaInstagram, FaGithub].map((Icon, index) => (
            <a key={index} href="#" className='w-[35px] h-[35px] bg-[#5C5C5C] rounded-full flex justify-center items-center cursor-pointer transition-colors hover:bg-[#6C6C6C]' aria-label={`Social media link ${index + 1}`}>
              <Icon size={20} color='white' />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Nav1