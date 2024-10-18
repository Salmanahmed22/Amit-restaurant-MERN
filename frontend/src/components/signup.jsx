import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
const Signup = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-[#F9F9F7]'>
      <h1 className='text-[#2C2F24] font-playfair text-[40px] md:text-[60px] lg:text-[80px] text-center'>Signup</h1>
      <div className='flex flex-col justify-center w-[650px] h-[650px] bg-[#fff] rounded-[16px] p-8 shadow-lg gap-3'>
        <div>
          <Label className='text-[#414536] font-medium' htmlFor="Username">Username</Label>
          <Input 
            className="rounded-[118px] h-[48px] md:h-[64px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b23b3b] focus-visible:border-[#b23b3b]" 
            type="text" 
            id="Username"
            placeholder="Enter Your Username" 
          />
        </div>
        <div>
          <Label className='text-[#414536] font-medium' htmlFor="Phone number">Phone number</Label>
          <Input 
            className="rounded-[118px] h-[48px] md:h-[64px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b23b3b] focus-visible:border-[#b23b3b]" 
            type="text" 
            id="Phone number"
            placeholder="x-xxx-xxx-xxxx" 
          />
        </div>
        <div>
          <Label className='text-[#414536] font-medium' htmlFor="email">Email</Label>
          <Input 
            className="rounded-[118px] h-[48px] md:h-[64px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b23b3b] focus-visible:border-[#b23b3b]" 
            type="text" 
            id="email"
            placeholder="Enter Your Email" 
          />
        </div>
        <div>
          <Label className='text-[#414536] font-medium' htmlFor="password">Password</Label>
          <Input 
            className="rounded-[118px] h-[48px] md:h-[64px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b23b3b] focus-visible:border-[#b23b3b]" 
            type="password" 
            id="password"
            placeholder="Enter Your Password" 
          />
        </div>
        <div>
          <Label className='text-[#414536] font-medium' htmlFor="Confirm Password">Confirm Password</Label>
          <Input 
            className="rounded-[118px] h-[48px] md:h-[64px] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#b23b3b] focus-visible:border-[#b23b3b]" 
            type="Password" 
            id="Confirm Password"
            placeholder="Confirm Your Password" 
          />
        </div>
        <Button className="w-full h-[48px] md:h-[64px] bg-[#b23b3b] hover:bg-[#9e3434] rounded-[118px]">Signup</Button>
      </div>
    </div>
  )
}

export default Signup