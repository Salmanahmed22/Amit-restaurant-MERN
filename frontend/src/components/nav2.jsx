'use client'

import React, { useState,  useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MyButton from '../atoms/myButton'
import { FaBars, FaTimes } from 'react-icons/fa'
import LoginButton from '../atoms/loginButton'

const Nav2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isActive, setIsActive] = useState(1)

  useEffect(() => {
    const savedNav = localStorage.getItem('activeNav')
    if (savedNav) {
      setIsActive(parseInt(savedNav))
    }
  }, [])

  const handleActive = (index) => {
    setIsActive(index)
    localStorage.setItem('activeNav', index.toString())
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: '/', label: 'Home', index: 1 },
    { href: '/about', label: 'About', index: 2 },
    { href: '/Menu', label: 'Menu', index: 3 },
    { href: '/Contact', label: 'Contact', index: 4 },
  ]

  return (
    <nav className='w-full py-4 px-4 sm:px-6 lg:px-8 xl:px-[180px]'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='flex gap-[15px] items-center'>
          <Image src="/logo.svg" width={50} height={50} alt="logo" />
          <Image src="/logoName.svg" width={200} height={50} alt="logo name" className="hidden sm:block" />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex gap-[30px] text-xl font-medium font-sans'>
          {navLinks.map((link) => (
            <div 
              key={link.href}
              className={`w-[77px] h-[32px] rounded-[34px] flex justify-center items-center ${isActive === link.index ? 'bg-[#DBDFD0]' : 'bg-white'}`}
            >
              <Link 
                href={link.href}
                onClick={() => handleActive(link.index)}
                className='hover:text-[#ad343e] transition-colors text-[16px] font-medium'
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>

        <div className='hidden lg:block'>
          <MyButton page='/BookTable'>Book a Table</MyButton>
        </div>
        <LoginButton display={"hidden lg:flex"}/>
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
                onClick={() => {
                  handleActive(link.index)
                  toggleMenu()
                }}
              >
                {link.label}
              </Link>
            ))}
            <div className='mt-6 mb-6'>
              <MyButton page='/BookTable'>Book a Table</MyButton>
            </div>
            <LoginButton display={"flex"}/>
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