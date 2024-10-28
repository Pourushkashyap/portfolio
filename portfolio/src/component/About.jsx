import React from 'react'

function About() {
  return (
    <div name="about" className='w-full md:h-screen bg-gradient-to-b from-gray-800 h-[50% ] to-black text-white '>

<div className='max-w-screen-lg px-4 md:px-6 mx-auto flex flex-col  justify-center w-full h-full pt-28 md:pt-1'>
      <div className='pb-8  '> 
        <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
      </div>
      <div className='flex flex-col justify-center'>
      <p className='text-xl '>
      I am a Full Stack Developer and MERN Stack Developer with a strong foundation in Data Structures and Algorithms (DSA) in C++. My skill set includes HTML, CSS, Tailwind, JavaScript, React, MongoDB, Express, and Node.js.
      </p>
      <br />
      <p className='text-xl'>
      I completed my +2 from Punjab Agriculture University, achieving 92.4%, and my 10th grade at Holy Child Foundation High School with 98%. Currently, I am pursuing a Bachelor's degree at CT University, where I maintain an average CGPA of 9.1.


      </p>
      </div>
      </div>
    </div>
  )
}

export default About