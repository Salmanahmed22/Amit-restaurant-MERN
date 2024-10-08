import React from 'react';
import MyButton from '@/atoms/myButton';
import Link from 'next/link';

const Home1 = () => {
  return (
    <div className='w-full h-[850px] md:h-[750px] lg:h-[850px] flex items-center justify-center px-5 md:px-[100px] lg:px-[180px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url("/homeBackground.jpg")' }}>
      <div className='text-center flex flex-col items-center justify-center'>
        <p className='text-[40px] md:text-[60px] lg:text-[100px] text-[#2C2F24] font-playfair leading-none'>
          Best food for<br />
          your taste
        </p>
        <p className='text-[16px] md:text-[18px] lg:text-[20px] font-sans text-[#2C2F24] h-auto mt-2'>
          Discover delectable cuisine and unforgettable moments<br />
          in our welcoming, culinary haven.
        </p>
       
        <div className='flex flex-col sm:flex-row gap-[20px] mt-5'>
          <div className='flex gap-[10px] cursor-pointer w-[200px] h-[65px] justify-center items-center font-sans font-semibold border-2 border-[#ad343e] bg-[#ad343e] text-[#fff] rounded-[50px] hover:bg-[#9e3434]'>
            <Link href={'/BookTable'}>Book a Table</Link>
          </div>
          <MyButton page={'/Menu'}>Explore Menu</MyButton>
        </div>
      </div>
    </div>
  );
};

export default Home1;
