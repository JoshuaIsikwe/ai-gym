import React from 'react'
import Dashboard from '@/pages/Dashboard/index'
import Sidebar from '../components/Sidebar'
import Topcards from '../components/Topcards'
import Charts from '../components/Charts'

const index = () => {
  return (
   <main className='bg-gray-700 min-h-screen'>
    <p>Lorem ipsum dolor sit amet.</p>
    <Sidebar/>
    <Topcards/>

    <div className='p-4 ml-20 grid md:grid-cols-3 grid-cols-1 gap-4 bg-'>
     
    </div>
   </main>



  )
}

export default index