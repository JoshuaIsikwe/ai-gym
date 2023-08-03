import React from 'react'
import {MdTrendingDown, MdTrendingUp} from 'react-icons/md'

const Topcards = () => {
  return (
    <div className='ml-20 grid lg:grid-cols-5 gap-4 p-4'>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>1000 cal</p>
                <p className='text-gray-600'>Daily intake</p>
            </div>
            <p className='bg-green-400 flex justify-center items-center p-1 rounded-lg'>
                <span className='text-white text-lg font-bold'> Down 10% from last week</span>
                <span className=''><MdTrendingDown size={40}/></span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>1500 cal</p>
                <p className='text-gray-600'>Calories burned</p>
            </div>
            <p className='bg-green-400 flex justify-center items-center p-1 rounded-lg'>
                <span className='text-white text-lg font-bold'>Up 18% from last weel</span>
                <span className=''><MdTrendingUp size={40}/></span>
            </p>
        </div>
        <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold'>45 minutes</p>
                <p className='text-gray-600'>Average work out time</p>
            </div>
            <p className='bg-green-400 flex flex-col justify-center items-center p-1 rounded-lg'>
                <span className=''><MdTrendingUp size={40}/></span>
                <span className='text-white text-md font-bold'>Up 10% from last week</span>
            </p>
        </div>
    </div>
  )
}

export default Topcards