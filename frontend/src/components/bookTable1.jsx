import React from 'react'
import Form from '@/atoms/form'
const BookTable = () => {
  return (
    <div>
      <div className="w-full h-[587px] flex justify-center bg-[#F9F9F7] relative">
      <div className="flex flex-col items-center gap-[24px] absolute top-[80px]">
          <h1 className='text-[#2C2F24] font-playfair lg:text-[100px] lg:leading-[96px] md:text-[60px] md:leading-[56px] sm:text-[60px] sm:leading-[56px] text-center font-medium m'>Book A Table</h1>
          <p className='text-[#495460] font-sans lg:text-[18px] lg:leading-[28px] md:text-[12px] md:leading-[20px] sm:text-[10px] sm:leading-[20px] text-center'>We consider all the drivers of change gives you the components <br />you need to change to create a truly happens.</p>
      </div>
      <div className="absolute left-[50%] lg:left-[46%] transform -translate-x-1/2 lg:translate-y-[60%] md:translate-y-[50%] translate-y-[40%] w-[90%] sm:w-[500px] md:w-[600px] lg:w-[700px]">
      <Form />
      </div>
      </div>
      <div className="w-full h-[767px] bg-[url('/Map.jpg')] bg-center bg-cover">
        
      </div>
    </div>
  )
}

export default BookTable