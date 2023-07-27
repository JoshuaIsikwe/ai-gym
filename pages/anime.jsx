import React from 'react'
import Lottie from "lottie-react";
import animee from '@/public/illustrations/gym.json'



const anime = () => {
  
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center w-full'>
            something
            <div className=' justify-center w-2/6'>
            <Lottie animationData={animee} width={100} height={100} loop={false} />
            </div>
        </div>
    </div>
  )
}

export default anime