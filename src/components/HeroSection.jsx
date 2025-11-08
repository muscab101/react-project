import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
  return (
    <div className=' flex flex-col items-center mt-6 lg:mt-10'>
      <h1 className="text-3xl sm:text-6xl lg:text-5xl text-center tracking-wide">
        VirtualR build tools <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ">for <br /> developers</span> 
      </h1>
      <p className=' mt-5 text-[12px] text-center text-neutral-500 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus deserunt aut dicta  praesentium quidem, adipisci ab<br /> accusantium facilis similique, fuga incidunt?</p>
      <div className="flex justfiy-center my-10 lg:mx-0 mx-[2rem]">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 lg:h-[45px] lg:w-[120px] h-[45px] w-[120px] text-center lg:pt-[9px] pt-[9px] mx-3 rounded-md">
            Start for free
        </a>
        <a href="#" className="lg:h-[45px] lg:w-[160px] h-[45px] w-[170px] text-center lg:pt-[9px] pt-[9px] mx-3 rounded-md border">
            Documentation
        </a>
      </div>
      <div className="flex lg:flex-row flex-col mt-10 justify-center lg:mx-[4rem]">
        <video autoPlay loop muted className=' rounded-lg lg:w-1/2 border border-orange-700 shadow-amber-400 mx-2 my-4'>
        <source src={video1} type="video/mp4" />
        your browser does not support the video tag
        </video>

        <video autoPlay loop muted className=' rounded-lg lg:w-1/2 border border-orange-700 shadow-amber-400 mx-2 my-4'>
        <source src={video2} type="video/mp4" />
        your browser does not support the video tag
        </video>
      </div>
    </div>
  )
}

export default HeroSection
