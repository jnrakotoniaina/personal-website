
import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
            <div className='flex flex-row gap-3 items-center'>
                 
            <h1 className='text-white text-[25pt] font-bold'> Portfolio.</h1>
            </div>

            <div className="flex flex-row gap-5 mb-2">
                {/* <a href="www.linkedin.com/in/justin-rakotoniaina-77b54b194">
                  <Image src="/linkedin-box-fill.png"  
                                        alt="LinkedIn Profile"
                                    width={50}              
                                    height={50} 
                                    className="bg-white"/>
                </a> */}
       

            </div>
    </div>
  )
}

export default Navbar
