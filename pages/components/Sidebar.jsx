import React, { Component } from 'react';
import Banner from './Banner';
import Dashboard from '@/pages/Dashboard'
import Link from 'next/link';
import {RxDashboard, RxPerson, RxSketchLogo} from 'react-icons/rx'
import {  FiSettings} from 'react-icons/fi'

class Sidebar extends Component {

  render() {
    return (
      <div className='flex'>
        Sidebar Nigga
        <div className='fixed w-20 h-screen bg-slate-500 p-4 flex flex-col justify-between'>
          <div className=' flex flex-col items-center'>
            <Link href=''>
              <div className='bg-blue-400 rounded-md p-3'><RxSketchLogo size={30}/></div>
            </Link>
            <span className=' border-b-2 border-b-black w-full p-2'></span>
            <Link href=''>
              <div className='bg-gray-100 p-3 my-4 rounded-md cursor-pointer hover:bg-gray-400'><RxDashboard size={30}/></div>
            </Link>
            <Link href=''>
              <div className='bg-gray-100 p-3 my-4 rounded-md cursor-pointer hover:bg-gray-400'><RxPerson size={30}/></div>
            </Link>
            <Link href=''>
              <div className='bg-gray-100 p-3 my-4 rounded-md cursor-pointer hover:bg-gray-400'><FiSettings size={30}/></div>
            </Link>
          </div>
        </div>
        <div className='ml-20 w-full'>
        </div>
      </div>
    );
  }
}

export default Sidebar;