import Image from 'next/image'
import React from 'react'
import banner from '@/public/illustrations/safe-gym-return.jpg'
const Banner = () => {
  return (
    <section className=" bg-zinc-700 h-screen">
        <div className="container mx-auto h-full">
            <div className='flex items-center h-full relative -space-x-48 lg:-space-x-24 pl-6'>
                <div className=' text-white flex-1 z-10'>
                    <h1 className='text-7xl text-gray-400 mb-8'>Skynet Gym</h1>
                    <p className='max-w-lg text-lg text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='bg-green-200 mt-10 p-1 rounded-md text-white'>Join now</button>
                </div>

                <div className=' w-full h-full grayscale bg-contact-bg bg-auto bg-center lg:bg-center bg-no-repeat flex-1'> TEST YOUR LIMITS...</div>
            </div>
        </div>
    </section>
  )
}

export default Banner