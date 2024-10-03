import React from 'react'
import Image from 'next/image'

const About3 = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[180px] py-8 sm:py-12 md:py-16 lg:py-[80px] w-full'>
      <div className='w-full flex flex-col md:flex-row bg-white items-start md:items-center gap-8 md:gap-[40px] lg:gap-[80px]'>
        <FeatureItem
          imageSrc="/restaurant-menu 1.png"
          imageWidth={38}
          imageHeight={44}
          title="Multi Cuisine"
          description="In the new era of technology we look in the future with certainty life."
        />
        <FeatureItem
          imageSrc="/Group.png"
          imageWidth={40}
          imageHeight={40}
          title="Easy To Order"
          description="In the new era of technology we look in the future with certainty life."
        />
        <FeatureItem
          imageSrc="/timer 1.png"
          imageWidth={36}
          imageHeight={36}
          title="Fast Delivery"
          description="In the new era of technology we look in the future with certainty life."
        />
      </div>
    </div>
  )
}

const FeatureItem = ({ imageSrc, imageWidth, imageHeight, title, description }) => (
  <div className='flex gap-6 items-start'>
    <Image src={imageSrc} width={imageWidth} height={imageHeight} alt={title} />
    <div className='flex flex-col gap-2 sm:gap-4'>
      <h2 className='text-[#2C2F24] font-sans text-lg sm:text-xl lg:text-[20px] leading-tight font-bold'>{title}</h2>
      <p className='text-sm sm:text-base lg:text-[16px] leading-normal sm:leading-relaxed lg:leading-[24px] font-sans'>{description}</p>
    </div>
  </div>
)

export default About3