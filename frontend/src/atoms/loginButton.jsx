import React from 'react'
import Link from 'next/link'
const LoginButton = ({display}) => {
  return (
    <Link href={'/Login'} className={`${display} w-[150px] h-[50px] bg-[#DBDFD0] text-[#2C2F24] font-playfair font-semibold justify-center items-center  text-center rounded-lg shadow-md hover:text-[#ad343e]`}><h1>LOGIN</h1></Link>
  )
}

export default LoginButton