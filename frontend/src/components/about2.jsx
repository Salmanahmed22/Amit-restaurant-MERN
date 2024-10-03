import Image from 'next/image'

export default function About2() {
  return (
    <div className="w-full ">
      <div 
        className="bg-[url('/about2.jpg')] w-full h-[640px] bg-no-repeat bg-cover bg-center 
                   flex flex-col items-center justify-center space-y-8"
      >
        <Image 
          src="/Play.png" 
          width={106} 
          height={106} 
          alt="Play button"
          className="cursor-pointer transition-transform hover:scale-110"
        />
        <Image 
          src="/Title.png" 
          width={596} 
          height={121} 
          alt="Title"
        />
      </div>
    </div>
  )
}