import React from 'react'
import { FaWhatsapp } from "react-icons/fa";


function Connection() {
  return (
    <div className='  top-[90%] left-[70%] sm:left-[80%] md:left-[90%]   fixed '> 
        <a href="https://wa.me/917986355170" target='_blank'> <button className='flex gap-2 bg-green-700 p-4 text-white rounded-full px-5 '>Connect <FaWhatsapp className='font-extrabold text-2xl' /></button> </a>
         </div>
  )
}

export default Connection