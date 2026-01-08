"use client"
import React, {useState} from 'react'
import {motion} from'framer-motion'


interface Props{
    image:string;
    title:string;
    text:string;
    link:string;
}

const ProjectCard = ({image, title, text, link}:Props) => {
    const[isFlipped, setIsFlipped]= useState(false)
    const[isAnimating, setIsAnimating]= useState(false)

    function handleFlip () {
        if(!isAnimating) {
            setIsFlipped(!isFlipped)
            setIsAnimating(true)
        }
    }
  return (
    <div
    onClick={handleFlip}
    className='w-[350px] h-[280px] rounded-md cursor-pointer'>
        <motion.div
        className='flip-card-inner w-full h-full'
        initial={false}
        animate={{rotateY: isFlipped ? 180:360}}
        transition={{ duration:0.1}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div 
            style={{backgroundImage:`url(${image})`}}
            className= 'w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4'>
                <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-5 group-hover:opacity-40'/>
                    <div className='absolute inset-0 w-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
                    </div>
            </div>
            <div 
            style={{backgroundImage:`url(${image})`}}
            className= 'w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded0lg p-4'>
                <div className='absolute inset-0 w-full rounded-md bg-gradient-to-r from-purple-500 to-cyan-500 z-[-1]'/>
                    <div className='flex flex-col gap-5 py-3 z-[30]'>
                        <h1 className= 'text-whote text-[18pt] font-semibold'>{title}</h1>
                            <p className='text-white text-[14pt]'>
                                {text}
                            </p>
                            <a 
                                 href={link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-black border-2 w-30 text-center rounded bg-amber-50 font-bold hover:text-purple-500"
                                >
                             View Project
                             </a>
                    </div>
            </div>
        </motion.div>
      
    </div>
  )
}

export default ProjectCard
