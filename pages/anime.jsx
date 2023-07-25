import React from 'react'
import Lottie, { LottiePlayer } from "lottie-react";
import animee from '@/public/illustrations/gym.json'


const anime = () => {
    
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center '>
            something
            <div>
            <Lottie animationData={animee} loop={true} />
            </div>
        </div>
    </div>
  )
}

export default anime