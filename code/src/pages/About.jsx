import React from 'react'

import ourStory from '../../public/ourStory.png'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='p-2 md:px-4 lg:px-10 lg:py-4 flex flex-col gap-3 lg:gap-10'>
      {/* Text Content */}
      <div className='w-full mb-3 py-1.5 flex justify-center items-center'>
        <h1 className='font-semibold lg:text-5xl'>About Us</h1>
      </div>

      {/* Image Container */}
      <div className='w-full mb-3  px-3  py-3  flex justify-center items-center'>
        <div className='w-72 rounded-2xl h-40 md:w-full md:h-80 lg:h-[480px] lg:px-4 '>
          <img className='w-full h-full object-center object-cover  rounded-2xl' src="https://images.unsplash.com/photo-1654863404432-cac67587e25d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="" />
        </div>
      </div>



      {/* Our Story */}
      <div className='w-full mb-3 py-1.5 flex flex-col gap-3 md:flex-row'>

        {/* Text PART */}
        <div className='w-full px-3  py-3 lg:w-1/2 flex flex-col justify-center gap-3'>
          <h1 className='text-xl font-semibold text-center md:text-left md:text-2xl lg:text-4xl'>Our Story</h1>
          <p className='text-xs text-center text-gray-600 md:text-left md:text-sm lg:text-xl'><span className='font-semibold text-orange-600'>Cookify</span> started from a simple idea: that cooking should be a
            joyful and accessible experience for everyone. We believe in the
            power of food to bring people together, and our journey began in
            a small kitchen with a passion for sharing delicious, easy-to-
            follow recipes. We've grown into a community of food lovers,
            dedicated to inspiring your next culinary adventure.</p>
        </div>

        {/* Image Container */}
        <div className='w-full  px-3  py-3  flex justify-center items-center  lg:w-1/2'>
          <div className='w-72 rounded-2xl h-40 md:w-full md:h-80 lg:h-[480px] lg:px-4 '>
            <img className='w-full h-full  object-contain object-center   rounded-2xl' src={ourStory} alt="" />
          </div>
        </div>
      </div>



      {/* Our Mission */}
      {/* Image Container */}
      <div className='w-full mb-3  px-3  py-3'>
        <div className='rounded-2xl py-2 px-2 lg:py-16 bg-[#f6e1cd] flex justify-center flex-col items-center gap-4'>
          <h1 className='text-center  font-family-dancing text-[#ee8c2b] font-semibold md:text-3xl lg:text-5xl'>Our Mission</h1>
          <p className='text-sm mt-2 text-center font-family-heading md:w-[80%] lg:text-2xl'>"To inspire and empower home
            cooks of all levels to create amazing
            meals with confidence and joy."</p>
        </div>
      </div>





    </div>
  )
}

export default About