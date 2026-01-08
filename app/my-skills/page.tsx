"use client"
import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { SkillData } from '@/constants'
import Image from 'next/image'
import { Autoplay } from 'swiper/modules'


const page = () => {
  return (
    
    <div 
    style={{backgroundImage:"url(/bg-2.jpg"}}
    className='h-screen w-screnn items-center justify-center bg-cover bg-center'>
      <div className= 'flex flex-col gap-20 max-w-[80%] mx-auto text-center items-center'>
        <div className='flex flex-col mt-30 items-center gap-4'>
          <h1 className='font-semibold text-white text-[50px]'> Skills <span className="text-[30pt] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
            {" "}
           </span>
            Technologies
          </h1>
          <p className ='text-white text-[20px] font-semibold'> Technologies, tools, and frameworks I use to design, build, and ship real world products from concept to deployment.
          </p>

        </div>
          <Swiper 
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay:0,
            disableOnInteraction:false
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
          >
            {SkillData.map((skill, index) =>(
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}/>
              </SwiperSlide>
             ))}
          </Swiper>
          <Swiper 
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay:0,
            disableOnInteraction:false,
            reverseDirection:true
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
          >
            {SkillData.map((skill, index) =>(
              <SwiperSlide key={index}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}/>
              </SwiperSlide>
             ))}
          </Swiper>
      </div>
    </div>
  )
}

export default page
