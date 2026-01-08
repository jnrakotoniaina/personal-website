import ProjectCard from '@/components/ProjectCard'
import React from 'react'
import { Projects } from '@/constants'

const page = () => {
  return (
    <div
    style={{backgroundImage: "url(/Mountains.jpg"}}
      className='w-screen h-screen flex items-center justify-center bg-center bg-cover px-4 py-10'>
        <div className='grid grid-cols-3 sm:grid-cols-2 min:grid-cols-1 lg:grid-cols-3 gap-10 max-w-[80%] max-h-[80%]'>
          {Projects.map((project, index) =>(
            <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              link={project.link}
             />
          ))}
          </div>
      
    </div>
  )
}

export default page
