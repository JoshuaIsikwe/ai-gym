import React, { Fragment, useEffect, useState } from 'react'
import Header from '@/pages/Dashboard/components/Header'
import { Transition } from '@headlessui/react';
import Sidebar2 from '@/pages/Dashboard/components/Sidebar2'
import Footer from '../Footer';

export default function Layout ({children}){
    const[showNav, setShowNav] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    function handleResize () {
        if (innerWidth <= 640) {
            setShowNav(false)
            setIsMobile(true)
        }else{
            setShowNav(true)
            setIsMobile(false)
        }
    }

    useEffect(()=>{
        if (typeof window != undefined){
            addEventListener('resize', handleResize)
        }

        return ()=>{
            removeEventListener ('resize', handleResize);
        }
    }, [])

  return (
    <>
        <Header showNav={showNav} setShowNav={setShowNav} />
        <Transition 
            as={Fragment}
            show={showNav}
            enter='transform transition duration-300'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transform transition duration-300 ease-in-out'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
        >
            <Sidebar2 showNav={showNav}/>
        </Transition>
        <main className={`pt-16 transition-all duration-300 ${showNav && !isMobile ? "pl-56" :''}`}>
            <div className='p-4  bg-gray-200'>
                {children}
            </div>
            <Footer/>
        </main>
    </>

  )
}

