import React, { Fragment, forwardRef, useEffect, useState } from 'react'
import logo from '@/public/illustrations/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Menu, Transition } from '@headlessui/react'
import { BsChevronDown } from 'react-icons/bs'
import { TbLogout} from 'react-icons/tb'
import pfp from '@/public/illustrations/pie.jpg'
import { GiGymBag } from 'react-icons/gi'
import { MdOutlineMonitorHeart } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'



/*const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ]*/

const Sidebar = forwardRef (({showNav}, ref)=>{
    const router = useRouter();

    return (
        <div ref={ref} className='fixed w-56 h-full bg-white shadow-md'>
            <div className='flex flex-col md:flex-row justify-center items-center mt-6 mb-14'>
                <Image src={logo} width={50} alt='University Logo'></Image>
                <h1 className='font-bold ml-3'>FitAI</h1>
            </div>

            <div className='flex flex-col text-lg'>
                <Link href='/Dashboard'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/Dashboard' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div className='flex items-center gap-2'>
                            <p><GiGymBag/></p>
                            <p>Overview</p>
                        </div>
                    </div>
                </Link>
                <Link href='/Dashboard/Stats'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/Dashboard/Stats' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div className='flex items-center gap-2'>
                            <p><MdOutlineMonitorHeart/></p>
                            <p>My Stats</p>
                        </div>
                    </div>
                </Link>
                <Link href='/'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/s' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div className='flex items-center gap-2'>
                            <p><CgProfile/></p>
                            <p>Profile</p>
                        </div>
                    </div>
                </Link>
                <Link href='/Dashboard/Settings'>
                    <div className={`pl-6 py-2 mx-3 rounded cursor-pointer mb-1 flex items-center transition-colors
                     ${router.pathname =='/Dashboard/Settings' ? "text-blue-500"
                     : "text-black hover:bg-gray-200"
                    }`}>
                        <div className='flex items-center gap-2'>
                            <p><FiSettings/></p>
                            <p>Settings</p>
                        </div>
                    </div>
                </Link>
                
                
                <Menu as='div' className='relative mt-40 inline-block text-left'>
                    <div>
                        <Menu.Button className='inline-flex w-full justify-center '>
                            <Image src={pfp}
                            width={30}
                            alt='profile picture'
                            className='rounded-full md:mr-4 border-2 border-white shadow-sm'
                            />
                            <div className='text-left'>
                                <span className='flex gap-1 font-medium '>Joshua Isikwe <BsChevronDown/></span>
                                <span className='text-xs text-gray-500'>Rankings?</span>
                                <div>
                                    <span className='text-xs flex mt-4 text-gray-500'><TbLogout/> Logout</span>
                                </div>
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition 
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform scale-95'
                    enterTo='transform scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform scale-100'
                    leaveTo='transform scale-95'
                    >
                        <Menu.Items className="absolute right-0 block w-56 z-50 mt-2 origin-top-right bg-gray-300 rounded shadow-sm">
                            <div className='p-1'>
                                <Menu.Item>
                                    <Link className='text-blue-400' href='/'>About Trinity</Link>
                                </Menu.Item>
                            </div>
                            <div className='p-1'>
                                <Menu.Item>
                                    <Link className='text-blue-400' href='/'>Other Admins</Link>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
})

Sidebar.displayName = "Sidebar";

export default Sidebar
