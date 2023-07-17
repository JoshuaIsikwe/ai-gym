import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image';
import logo from "@/public/illustrations/logo.png"
import Link from 'next/link';


const Navbar = props=> {
  
  return (
    <nav className=''>
      <div className="flex sticky item-center bg-inherit justify-between z-50 top-0 w-full py-6 border-b-2 border-b-slate-300">
          <div className="flex item-center justify-between mx-auto w-5/6">
            <div className="flex item-center justify-between w-full gap-16">
              <Image src={logo} width={40} alt='logo' />

              <div className="flex item-center justify-between w-full">
                <div className="item-center hidden justify-between gap-8 text-sm md:flex">
                  <Link href='/' className='text-lg px-5 hover:text-xl hover:text-blue-500' >Home</Link>
                  <Link href='/Benefits' className='text-lg px-5 hover:text-xl hover:text-blue-500' >Benefits</Link>
                  <Link href='/Blog' className='text-lg px-5 hover:text-xl hover:text-blue-500' >Blog</Link>
                  <Link href='/Contact' className='text-lg px-5 hover:text-xl hover:text-blue-500'>Contact Us</Link>
                </div>
                <div className='flex item-center justify-between gap-8'>
                  <p>Sign In</p>
                  <Link href='/Registration'><button className='bg-transparent hover:transition-500 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Become a member</button></Link>
                </div>
              </div>

            </div>
          </div>
      </div>
      </nav>
  )
}

Navbar.propTypes = {}

export default Navbar