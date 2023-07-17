import React from 'react'

const Banner = () => {
  return (
    <section className=" bg-zinc-900 h-screen">
        <div className="container mx-auto h-full">
            <div className='flex items-center h-full relative -space-x-48 pl-6'>
                <div className=' text-white flex-1 z-10'>
                    <h1 className='text-7xl text-gray-400 mb-8'>Skynet Gym</h1>
                    <p className='max-w-lg text-lg text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className='bg-green-200 p-1 rounded-md text-white'>Join now</button>
                </div>

                <div className='bg-blue-500 w-full h-full bg-banner-bg bg-cover bg-right lg:bg-center bg-no-repeat flex-1'>Image </div>
            </div>
        </div>
    </section>
  )
}

export default Banner