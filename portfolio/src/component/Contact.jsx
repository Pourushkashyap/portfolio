import React from 'react'

function Contact() {
  return (
    // <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      
    //   <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'> 
    //     <div className='pb-8'>
    //       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
    //       <p className='py-6'>Submit the form to get in touch with me</p>
    //     </div> 
    //     <div className='flex justify-center items-center'>
    //       <form action="https://getform.io/f/bpjmorjb" method="POST" className='flex flex-col w-full md:w-1/2'>
    //         <input
    //          type="text"
    //          name="name"
    //          placeholder='Enter your name'
    //          className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
    //          />
    //           <input
    //          type="text"
    //          name="email"
    //          placeholder='Enter your email'
    //          className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
    //          />
    //          <textarea
    //           name="message"
    //           placeholder='Enter your message'
    //           rows='10'
    //           className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
    //           ></textarea>
    //           <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '>Let's talk</button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className=' max-w-screen-2xl bg-gradient-to-b from-black to-gray-800 h-screen w-screen container mx-auto px-4  p-4 md:px-20 '>
      <h1 className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>Contact me</h1>
      <p className='py-6 text-white'>Submit the form to get in touch with me</p>
      <div className='flex flex-col items-center justift-center mt-5'>
        <form action="https://getform.io/f/bpjmorjb" method='POST'
         className='border-2 w-96 px-8 py-6 rounded-xl'
        >
          <h1 className=' text-white text-xl font-semibold mb-4'>Send Your message</h1>
          <div className='dlex flex-col mb-4'>
            <label className='block text-white'>Fullname</label>
            <input 
            type='text'
            name="name"
            className='shadow text-white  bg-transparent border-2 rounded-lg w-full appearance-none norder  py-2 px-3  leading-tight focus:outline-none focus:shadow-outline '
            placeholder='Enter your Fullname'
            />
          </div>
          <div className='dlex flex-col mb-4'>
            <label className='block text-white'>Email Address</label>
            <input 
            type='text'
            name='email'
            className='shadow bg-transparent border-2 rounded-lg w-full appearance-none norder  py-2 px-3  leading-tight focus:outline-none focus:shadow-outline '
            placeholder='Enter your Email Address'
            />
            
          </div>
          <div className='flex flex-col mb-4'>
            <label className='block text-white'>Message</label>
            <textarea 
            type='text'
            name='message'
            className='h-40 shadow rounded-lg w-full  bg-transparent border-2 appearance-none norder  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline '
            placeholder='Enter your Email Address'
            />
            
          </div>
          <button className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Let's talk</button>
        </form>
      </div>

    </div>
  )
}

export default Contact