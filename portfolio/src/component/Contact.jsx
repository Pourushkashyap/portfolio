import React from 'react'
import { MdMarkEmailRead } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

function Contact() {
  // return (
  //   // <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      
  //   //   <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'> 
  //   //     <div className='pb-8'>
  //   //       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
  //   //       <p className='py-6'>Submit the form to get in touch with me</p>
  //   //     </div> 
  //   //     <div className='flex justify-center items-center'>
  //   //       <form action="https://getform.io/f/bpjmorjb" method="POST" className='flex flex-col w-full md:w-1/2'>
  //   //         <input
  //   //          type="text"
  //   //          name="name"
  //   //          placeholder='Enter your name'
  //   //          className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
  //   //          />
  //   //           <input
  //   //          type="text"
  //   //          name="email"
  //   //          placeholder='Enter your email'
  //   //          className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
  //   //          />
  //   //          <textarea
  //   //           name="message"
  //   //           placeholder='Enter your message'
  //   //           rows='10'
  //   //           className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
  //   //           ></textarea>
  //   //           <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 '>Let's talk</button>
  //   //       </form>
  //   //     </div>
  //   //   </div>
  //   // </div>
  //   <div className=' max-w-screen-2xl bg-gradient-to-b from-black to-gray-800 h-screen w-screen container mx-auto px-4  p-4 md:px-20 '>
  //     <h1 className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>Contact me</h1>
  //     <p className='py-6 text-white'>Submit the form to get in touch with me</p>
  //     <div className='flex flex-col items-center justift-center mt-5'>
  //       <form action="https://getform.io/f/bpjmorjb" method='POST'
  //        className='border-2 w-96 px-8 py-6 bg-white rounded-xl'
  //       >
  //         <h1 className=' text-black text-xl font-semibold mb-4'>Send Your message</h1>
  //         <div className='dlex flex-col mb-4'>
  //           <label className='block text-white'>Fullname</label>
  //           <input 
  //           type='text'
  //           name="name"
  //           className='shadow text-white  bg-transparent border-2 rounded-lg w-full appearance-none norder  py-2 px-3  leading-tight focus:outline-none focus:shadow-outline '
  //           placeholder='Enter your Fullname'
  //           />
  //         </div>
  //         <div className='dlex flex-col mb-4'>
  //           <label className='block text-white'>Email Address</label>
  //           <input 
  //           type='text'
  //           name='email'
  //           className='shadow bg-transparent border-2 rounded-lg w-full appearance-none norder  py-2 px-3  leading-tight focus:outline-none focus:shadow-outline '
  //           placeholder='Enter your Email Address'
  //           />
            
  //         </div>
  //         <div className='flex flex-col mb-4'>
  //           <label className='block text-white'>Message</label>
  //           <textarea 
  //           type='text'
  //           name='message'
  //           className='h-40 shadow rounded-lg w-full  bg-transparent border-2 appearance-none norder  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline '
  //           placeholder='Enter your Email Address'
  //           />
            
  //         </div>
  //         <button className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>Let's talk</button>
  //       </form>
  //     </div>

  //   </div>
  // )

  return (
    <>
    
    <div
    name="contact"
    className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black  to-gray-800 ">

        <div className="container mx-auto px-4 lg:px-20 py-12">
            <div className="lg:flex lg:space-x-12">
                {/* Left Section */}
                <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
                    <p className='text-5xl py-12 text-pink-200'>Let's Talk</p>
                    <p className='text-xl pb-5'>Feel free to reach out for any inquiries or support. I am happy to assist with your questions or discuss any projects. Don't hesitate to get in touch via email, phone, or through the contact form below.

                    </p>

                    <div className='flex flex-col gap-4 text-xl'>
                    <div className='flex gap-2 items-center'>
                        <MdMarkEmailRead className='font-extrabold text-2xl'/>
                        pourushkashyap06@gmail.com
                    </div >
                    <div className='flex gap-1 items-center'>
                        <FaWhatsapp className='font-extrabold text-2xl' />
                        +91 7986355170 
                    </div>
                    <div className='flex gap-1 items-center'>
                        < IoLocationOutline className='font-extrabold text-2xl'/>
                        Ludhiana, Punjab
                    </div>
                </div>



                </div>

                {/* Right Section (Form) */}
                <div className="lg:w-1/2  p-8 ">
                <p className='sm:ml-40 pb-4 text-4xl text-white'>Get in touch</p>

                    <form action="https://getform.io/f/bpjmorjb" method="POST" className="space-y-6">
                        <div>
                            <label className="block text-gray-300 mb-2" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                className="w-full px-4 py-3 bg-gray-700 text-white  focus:outline-none focus:ring-1"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2" htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-3 bg-gray-700 text-white  focus:outline-none focus:ring-2 "
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-300 mb-2" htmlFor="message">Write your message here</label>
                            <textarea
                                name="message"
                                className="w-full h-32 px-4 py-3 bg-gray-700 text-white  focus:outline-none focus:ring-2 "
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-52 bg-gradient-to-r from-pink-600 to-pink-400  hover:bg-pink-600 text-white py-3 rounded-full transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
      </>
    );
}

export default Contact