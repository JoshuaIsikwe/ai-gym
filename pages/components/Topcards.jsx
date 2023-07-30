import React from 'react'

const Topcards = () => {
  return (
    <div className='ml-20 grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-md'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>1000 cal</p>
                <p className='text-gray-600'>Daily intake</p>
            </div>
            <p className='bg-green-20 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-300 text-lg'> down 10%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border p-4 rounded-md'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>1500 cal</p>
                <p className='text-gray-600'>Calories burned</p>
            </div>
            <p className='bg-green-20 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-300 text-lg'>up 18%</span>
            </p>
        </div>
        <div className='bg-gray-200 flex justify-between w-full border p-4 rounded-md'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>45 minutes</p>
                <p className='text-gray-600'>Average work out time</p>
            </div>
            <p className='bg-green-20 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-300 text-lg'>Up 10% from last week</span>
            </p>
        </div>
    </div>
  )
}

export default Topcards