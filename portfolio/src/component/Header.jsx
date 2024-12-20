import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"
import { FaWhatsapp } from "react-icons/fa";

function Header() {
   const [nav,setnav] = useState(false);

  const links =[
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'portfolio'
    },
    {
      id:4,
      link:'experience',
    },
    {
      id:5,
      link:'contact'
    }
  ]
  return (
   <div className='flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed'>
    <div>
      <h1 className='text-3xl sm:text-5xl font-signature ml-2' style={{ fontFamily: 'Dancing Script, cursive' }}>Pourush</h1>
    </div>
    <ul className='hidden gap-3 md:flex'>
  {links.map(({id,link}) => {
    return (
      <li
        key={id}
        className='relative px-4 hover:scale-105 duration-200 transition-all hover:text-white text-gray-500 cursor-pointer text-xl capitalize font-medium'
      >
        <Link to={link} smooth={true} offset={-50} duration={500} className="relative after:block after:absolute after:left-0 after:bottom-0 after:h-[3px]  after:w-0 after:bg-white after:transition-all after:duration-500 hover:after:w-full">
          {link}
        </Link> 
      </li>
    );
  })}
</ul>
   
    <div  onClick={() => setnav(!nav)} className=' md:hidden cursor-pointer pr-4 z-10 text-gray-500'>
     {nav ?  <FaTimes size={30}/> :  <FaBars size={30}/> }
    </div>

    {nav && (
       <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
       {
         links.map(({id,link}) =>{
          return <li
           key={id}
           className='px-4 hover:underline cursor-pointer capitalize py-6 text-4xl'
           >
              <Link onClick={() => setnav(!nav)} to={link} smooth duration={500}>{link}</Link>
           </li>
         })
       }
 
 
     </ul>
    )}

   

   </div>
  )
}

export default Header