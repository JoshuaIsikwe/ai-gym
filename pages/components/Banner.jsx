import Image from 'next/image'
import React from 'react'
import banner from '@/public/illustrations/safe-gym-return.jpg'
import Navbar from './Navbar'
const Banner = () => {
  return (
    <section className=" bg-zinc-700 h-screen">
        <div className="w-full h-full grayscale bg-contact-bg bg-cover lg:bg-center bg-no-repeat">
          <Navbar/>
            <div className='flex items-center h-full relative -space-x-48 lg:-space-x-24 pl-6'>
                <div className=' text-white flex-1 z-10'>
                    <h1 className='text-7xl text-slate-900 font-bold font-sans uppercase mb-8'>Skynet Gym</h1>
                    <p className='max-w-lg text-lg text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='bg-green-200 mt-10 p-1 rounded-md text-slate-700'>Join now</button>
                </div>

                <div className='flex-1'></div>
            </div>
        </div>
    </section>
  )
}

export default Banner