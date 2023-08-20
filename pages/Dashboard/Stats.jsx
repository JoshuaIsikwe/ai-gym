import React from 'react'
import Sidebar from './components/Sidebar'
import Lottie from "lottie-react";
import stats from '@/public/illustrations/gym.json'
import {GiBiceps} from 'react-icons/gi'

const Stats = () => {
  return (
    <div>
        <div className='ml-20 p-4'>
            <h1 className='text-center text-4xl uppercase'>My Personal Stats</h1>
            <div className='flex m-auto w-2/6'>
                <Lottie animationData={stats} width={10} height={10} loop={true} />
            </div>

            <div className='w-full md:w-4/5 m-auto'>
                <section className='bg-green-400 rounded-lg flex flex-col'>
                    <div className='p-10'>
                        <div className='flex flex-wrap py-3 font-bold'>
                            <h1 className='text-2xl md:text-4xl mr-5'>Favorite workout is:</h1> 
                            <div className='flex items-center'>
                                <h1 className='text-xl mr-5 md:text-2xl'>Arms</h1>
                                <GiBiceps size={50}/>
                            </div>
                        </div>
                        <div className='flex'><p className='mr-5'>Record time:</p> <p>40min</p></div>
                        <div className='flex'><p className='mr-3'>Average time:</p> <p>40min</p></div>
                    </div>
                </section>
                
                <section className='flex gap-5 mt-5'>
                    <div className='bg-blue-400 h-h-v5 flex-1 rounded-lg'>
                        
                    </div>
                    <div className='bg-blue-400 h-h-v5 flex-1 rounded-lg'>

                    </div>
                </section>

                <section className='flex gap-5 mt-5'>
                    <div className='h-h-v3 bg-red-500 rounded-lg flex-1'></div>
                </section>
        </div>
        </div>
    </div>
  )
}

export default Stats