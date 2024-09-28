'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MyButton from '../atoms/myButton'
import { FaBars, FaTimes } from 'react-icons/fa'

const Nav2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/Menu', label: 'Menu' },
    { href: '/Pages', label: 'Pages' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className='w-full py-4 px-4 sm:px-6 lg:px-8 xl:px-[180px]'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='flex gap-[15px] items-center'>
          <Image src="/logo.svg" width={50} height={50} alt="logo" />
          <Image src="/logoName.svg" width={200} height={50} alt="logo name" className="sm:block" />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex gap-[40px] text-xl font-medium font-sans'>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className='hover:text-[#ad343e] transition-colors'>
              {link.label}
            </Link>
          ))}
        </div>

        <div className='hidden lg:block'>
          <MyButton page='/BookTable'>Book a Table</MyButton>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='lg:hidden text-2xl'
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='lg:hidden fixed inset-0 z-50 bg-white'>
          <div className='flex flex-col items-center justify-center h-full'>
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className='text-2xl font-medium py-4 hover:text-[#ad343e] transition-colors'
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className='mt-6'>
              <MyButton page='/BookTable'>Book a Table</MyButton>
            </div>
          </div>
          <button 
            className='absolute top-4 right-4 text-2xl'
            onClick={toggleMenu}
            aria-label='Close menu'
          >
            <FaTimes />
          </button>
        </div>
      )}
    </nav>
  )
}

export default Nav2