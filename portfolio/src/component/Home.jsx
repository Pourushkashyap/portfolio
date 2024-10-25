import React from 'react'
import pourush2 from '../assets/pourush2.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div 
    name="home" 
    className='md:h-screen pt-32 w-full bg-gradient-to-b from-black via-black to-gray-800 '
    >
       <div className='max-w-[1280px] mx-auto  flex flex-col items-center justify-between h-full px-4 md:flex-row'>
      <div className=' w-1/2 flex flex-col justify-center h-full'>
        <h2 className='text-4xl md:text-6xl font-bold text-white'>
          <span>I'm a </span>
          <ReactTyped
          
          strings={[" Full Stack Developer", " Programmer", " Coder"]}
          typeSpeed={100}
          backSpeed={100}
          loop={true}
        />
          {/* <span> Full Stack Developer </span> */}
          
        </h2>
       
        <p className='text-gray-500 py-4 max-w-md'>Full Stack Developer skilled in the MERN stack and Data Structures & Algorithms, experienced in building scalable applications and solving complex problems with a focus on clean and efficient code.
        </p>
        <div>
          
          <Link
           to="portfolio"
          smoothduration={500}
          className=' group text-white w-fit px-3 sm:px-6 sm:py-2 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
            
            Portfolio 
            <span className='group-hover:rotate-90 duration-300'>
            <MdKeyboardArrowRight size={25} className='ml-1'/>
            </span>
           
          </Link>
        </div>
      </div>
      <div className=' ml-1/2 w-2/3 '>
        <img src={pourush2} style={{width:'400px'}} alt="my profile"
        className='rounded-full sm:rounded-2xl mx-auto md:w-2/3 w-[150px]   ' />
      </div>
    </div>
    </div>
  )
}

export default Home