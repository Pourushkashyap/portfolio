import React from 'react';
import arrayDestruct from '../assets/arrayDestruct.jpeg'
import installNode from '../assets/installNode.jpeg'
import navbar from '../assets/navbar.png'
import reactParallax from '../assets/reactParallax.jpeg'
import reactSmooth from '../assets/reactSmooth.jpg'
import reactWeather from '../assets/reactWeather.jpg'
import swiggy2 from '../assets/swiggy2.jpg'
import netflix from '../assets/netflix.jpeg'
import leetcode from '../assets/leetcode.jpeg'
function Portfolio() {

    const portfolios = [
        {
            id:1,
            src:arrayDestruct,
        },
        {
            id:2,
            src:leetcode,
            link:"https://leetcode.com/u/_pourush2005/"
        },
        {
            id:3,
            src:navbar,
            link:"https://github.com/Pourushkashyap/HealthSpot"
        },
        {
            id:4,
            src:reactSmooth,
            link:"https://github.com/Pourushkashyap/portfolio"
        },
        {
            id:5,
            src:swiggy2,
            link:'https://github.com/Pourushkashyap/SwiggyClone2'
        },
        {
            id:6,
            src:netflix,
            link:"https://github.com/Pourushkashyap/Netflixclone" 
        },
    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>


      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 pt-8 md:pt-0'>
            <p className='text-4xl font-bold inline border-b-4'>Portfolio</p>

            <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
         
         {portfolios.map(({id,src,link}) =>(
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 w-[309px] h-[174px] hover:scale-105' />
            <div className='flex items-center justify-center'>
                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</button>
             <a href={link}><button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</button></a>   
            </div>
        </div>
         )) }

           



        </div>
      </div>
     
    </div>
  );
}

export default Portfolio;