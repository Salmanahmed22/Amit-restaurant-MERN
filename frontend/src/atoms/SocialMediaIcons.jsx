import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa6"

const SocialMediaIcons = ({background}) => {
  return (
    <div className='flex items-center gap-[10px] mt-4 sm:mt-0'>
          {[FaTwitter, FaFacebookF, FaInstagram, FaGithub].map((Icon, index) => (
            <a key={index} href="#" className={`w-[35px] h-[35px] ${background} rounded-full flex justify-center items-center cursor-pointer transition-colors hover:bg-[#6C6C6C]`} aria-label={`Social media link ${index + 1}`}>
              <Icon size={20} color='white' />
            </a>
          ))}
    </div>
  )
}

export default SocialMediaIcons