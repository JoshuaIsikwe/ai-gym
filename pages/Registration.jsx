import Image from 'next/image'
import React from 'react'
import home1 from '@/public/illustrations/safe-gym-return.jpg'
import Link from 'next/link'

const Registration = () => {
  return (
    <section className='bg-gray-200  w-11/12 md:w-4/5 m-auto my-24 flex  items-center justify-center'>
        <div className='bg-gradient-to-br from-blue-500 to-blue flex-col md:flex-row flex-wrap h-5/6 rounded-2xl text-center w-full md:w-5/6 flex p-5'>
            <div className='flex-1'>
                <h1 className= ' text-left text-slate-200 text-4xl '>SIGN UP</h1>
                <p className=' text-left'>If you are already a member sign up <Link className='text-blue-500 underline' href=''>Login</Link></p>

                <form action="" className='flex-col w-5/6 flex mt-4 gap-4'>

                    <input className='p-2 rounded' type="text" name='Full name'
                    placeholder='Full Name'
                    />
                    <input className='p-2 rounded' type="password" name='password'
                    placeholder='Password'
                    />
                    <input className='p-2 rounded' type="text" name='Full name'
                    placeholder='Confirm password'
                    />
                    <input className='p-2 rounded' type="email" name='email'
                    placeholder='Email-address'
                    />
                    <input className='p-2 rounded' type="email" name='email'
                    placeholder='Confirm email'
                    />

                    <button onClick="" onSubmit="" className='p-3 bg-blue-400 hover:bg-slate-100 transition'>Register</button>

                </form>

                <div className=' mt-10 grid grid-cols-3 items-center'>
                   <hr />  
                   <h1 className='text-center'>OR</h1>
                   <hr/>
                </div>
                <button className=' bg-blue-400 mt-3  hover:bg-slate-100 w-1/3'>Log In (LeftArrow) </button>
            </div>
            <div className='flex-1 items-center rounded-xl'>
                <h1>AIGym</h1>
                <Image src={home1} className='h-5/6 mt-10 rounded-md object-cover'/> 
            </div> 
        </div>
    </section>
  )
}

export default Registration