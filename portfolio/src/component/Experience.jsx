import React from 'react'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.jpeg'
import JS from '../assets/JS.png'
import Reactimg from '../assets/Reactimg.png'
import DSA from '../assets/DSA.jpeg'
import Tailwind from '../assets/Tailwind.jpeg'
import Node1 from '../assets/Node1.png'
import Express from '../assets/Express.jpg'
import MongoDb from '../assets/MongoDb.png'
function Experience() {

    const techs =[
        {
            id:1,
            src:HTML,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:CSS,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:JS,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:Reactimg,
            title:'React',
            style:'shadow-blue-600'
        },
        {
            id:5,
            src:DSA,
            title:'DSA',
            style:'shadow-orange-500'
        },
        {
            id:6,
            src:Tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'
        },
        {
            id:7,
            src:Express,
            title:'Express.js',
            style:'shadow-green-500'
        },
        {
            id:8,
            src:MongoDb,
            title:'MongoDB',
            style:'shadow-pink-500'
        },
        {
            id:9,
            src:Node1,
            title:'Node.js',
            style:'shadow-green-800'
        }
    ]

  return (
    <div
     name='experience'
      className='bg-gradient-to-b from-gray-800 to-black w-full md:h-screen'
      >
        <div 
        className='max-w-screen-lg   mx-auto p-4 flex flex-col justify-center w-full h-full text-white
        '>
            <div className=''>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>


            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            { techs.map(({id,src,title,style}) =>{
                return  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}  >
                <img src={src} alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
            </div>
            })}

               
            </div>
        </div>
    </div>
  )
}

export default Experience






           