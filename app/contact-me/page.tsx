import React from 'react'
import ContactForm from '@/components/ContactForm'

const page = () => {
  return (
    <div 
    style={{backgroundImage:"url(bg-2.jpg)"}}
    className='w-screen h-screen bg-cover bg-center flex items-center justify-center'>
      <div
        className='h-[70%] w-[50%] relative bg-cover bg-center rounded-xl '>
          <div className='relative top-1 w-[70%] md:w-[100%]  '>
            <ContactForm />
          </div>
      </div>
    </div>
  )
}

export default page
