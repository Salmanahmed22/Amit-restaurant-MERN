import Image from 'next/image'

export default function About1() {
  return (
    <div className="w-full py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8 lg:py-[50px] lg:px-[180px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[90px]">
        <div className="relative w-full max-w-[650px] h-[500px] sm:h-[600px] lg:h-[612px] flex items-center justify-center">
          <Image
            src="/about1.jpg"
            className="z-0 absolute left-0 top-0 rounded-[12px] object-cover sm:h-[450px] sm:w-[500px]"
            width={599}
            height={566}
            alt="About us image"
          />
          <div className="z-10 p-4 lg:w-auto lg:h-[321px] lg:bottom-[120px] lg:-right-7
           sm:h-[300px] sm:w-[400px] sm:p-6 rounded-[12px]
           md:w-[411px] md:h-[321px] md:bottom-[120px] md:-right-7 bg-[#474747] absolute sm:bottom-[100px] ">
            <h2 className="text-white font-sans text-xl sm:text-2xl font-bold mb-4">
              Come and visit us
            </h2>
            <div className="flex flex-col gap-4">
              <a
                href="tel:+14148570107"
                className="flex gap-2 sm:gap-[5px] items-center cursor-pointer"
              >
                <Image src="/phone.svg" width={15} height={15} alt="Phone icon" />
                <p className="text-white text-sm sm:text-base font-sans font-normal leading-tight sm:leading-[24px]">
                  (414) 857 - 0107
                </p>
              </a>
              <a
                href="mailto:happytummy@restaurant.com"
                className="flex gap-2 sm:gap-[5px] items-center cursor-pointer"
              >
                <Image src="/mail.svg" width={20} height={20} alt="Mail icon" />
                <p className="text-white text-sm sm:text-base font-sans font-normal leading-tight sm:leading-[24px]">
                  happytummy@restaurant.com
                </p>
              </a>
              <div className="flex gap-2 sm:gap-[5px] items-start cursor-pointer">
                <Image src="/location.svg" width={20} height={20} alt="Location icon" />
                <p className="text-white text-sm sm:text-base font-sans font-normal leading-tight sm:leading-[24px]">
                  837 W. Marshall Lane Marshalltown,
                  <br /> IA 50158, Los Angeles
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[575px] gap-3 mt-8 lg:mt-0">
          <h1 className="text-[#2C2F24] text-3xl sm:text-4xl lg:text-[55px] font-medium font-playfair leading-tight lg:leading-[55px]">
            We provide healthy food for your family.
          </h1>
          <p className="text-[#2C2F24] text-base sm:text-lg font-sans font-medium leading-snug sm:leading-[28px]">
            Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
          </p>
          <p className="text-[#2C2F24] text-sm sm:text-base font-sans font-normal leading-snug sm:leading-[24px]">
            At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
          </p>
        </div>
      </div>
    </div>
  )
}