import React from 'react'
import {AiFillWechat} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
       <div className='flex items-center m-auto justify-center'>
        <AiFillWechat size={30} className='mr-3 hover:scale-150 hover:text-blue-400'/>
        <h1 className='text-2xl font-bold text-blue-400'>FitAI</h1>
       </div>
       <div className='mt-2 justify-around flex m-auto w-4/6 text-gray-500'>
        <span>©2023 FitAI. All Rights Reserved</span>
        <span className='text-lg'>By Chibs and Josh</span>
       </div>
    </div>
  )
}

export default Footer