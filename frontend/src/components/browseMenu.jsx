import React from 'react';
import BrowseMenuCard from '@/atoms/BrowseMenuCard';

const BrowseMenu = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center py-10'>
      {/* Heading with responsive text sizes */}
      <h1 className='text-[#2C2F24] font-playfair text-[40px] md:text-[60px] lg:text-[80px] text-center'>
        Browse Our Menu
      </h1>

      {/* Responsive grid layout */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] justify-center items-center px-5'>
        <BrowseMenuCard icon={'/breakfast.svg'} type={'Breakfast'} />
        <BrowseMenuCard icon={'/rice.svg'} type={'Drinks'} />
        <BrowseMenuCard icon={'/drinks.svg'} type={'Main Dishes'} />
        <BrowseMenuCard icon={'/cake.svg'} type={'Desserts'} />
      </div>
    </div>
  );
};

export default BrowseMenu;
