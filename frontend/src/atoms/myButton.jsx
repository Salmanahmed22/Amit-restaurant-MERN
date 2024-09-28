import React from 'react'
import Link from 'next/link'

const MyButton = ({children,page}) => {
  return (
          <Link href={`${page}`}>
            <div className='flex cursor-pointer justify-center items-center rounded-[50px] w-[200px] h-[65px] font-bold text-[#000000] border-[#000000] border-2 border-solid hover:text-[#ad343e] hover:border-[#ad343e]' >
              {children}
            </div>
          </Link>
  )
}

export default MyButton