import React from 'react'
import pourush from '../assets/pourush.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll"
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div 
    name="home" 
    className='h-screen pt-32 w-full bg-gradient-to-b from-black via-black to-gray-800 '
    >
       <div className='max-w-screen-lg mx-auto gap-32 flex flex-col items-center justify-between h-full px-4 md:flex-row'>
      <div className=' w-1/2 flex flex-col justify-center h-full'>
        <h2 className='text-4xl sm:text-7xl font-bold text-white'>
          <span>I'm a </span>
          <ReactTyped
          
          strings={[" Full Stack Developer", " Programmer", " Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
          {/* <span> Full Stack Developer </span> */}
          
        </h2>
       
        <p className='text-gray-500 py-4 max-w-md'>Passionate Full Stack Developer with a strong foundation in the MERN stack and proficiency in Data Structures & Algorithms. I specialize in building scalable web applications and have solved 100+ DSA problems on Coding Ninja and 60+ on LeetCode, showcasing my problem-solving skills through thoughtful design and clean code
        </p>
        <div>
          
          <Link
           to="portfolio"
          smoothduration={500}
          className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
            
            Portfolio 
            <span className='group-hover:rotate-90 duration-300'>
            <MdKeyboardArrowRight size={25} className='ml-1'/>
            </span>
           
          </Link>
        </div>
      </div>
      <div>
        <img src={pourush} alt="my profile"
        className='rounded-2xl mx-auto w-2/3 md:w-full' />
      </div>
    </div>
    </div>
  )
}

export default Home