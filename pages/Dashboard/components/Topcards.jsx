import React from 'react'
import {MdTrendingDown, MdTrendingUp} from 'react-icons/md'

const Topcards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1  flex justify-between w-full border p-4 bg-white rounded-lg shadow-md'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-semibold '>1000 cal</p>
                <p className='text-gray-600'>Daily intake</p>
            </div>
            <p className='bg-green-400 flex justify-center items-center p-1 rounded-lg'>
                <span className='text-white text-lg font-semibold'> Down 10% from last week</span>
                <span className=''><MdTrendingDown size={40}/></span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1  flex justify-between w-full border p-4 bg-white rounded-lg shadow-md'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-semibold'>1500 cal</p>
                <p className='text-gray-600'>Calories burned</p>
            </div>
            <p className='bg-green-400 flex justify-center items-center p-1 rounded-lg '>
                <span className='text-white text-lg font-semibold'>Up 18% from last weel</span>
                <span className=''><MdTrendingUp size={40}/></span>
            </p>
        </div>
        <div className=' flex justify-between w-full border p-4 rounded-lg bg-white shadow-md'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-semibold'>45 minutes</p>
                <p className='text-gray-600'>Average work out time</p>
            </div>
            <p className='bg-green-400 flex flex-col justify-center items-center p-1 rounded-lg '>
                <span className=''><MdTrendingUp size={40}/></span>
                <span className='text-white text-md font-semibold'>Up 10% from last week</span>
            </p>
        </div>
    </div>
  )
}

export default Topcards