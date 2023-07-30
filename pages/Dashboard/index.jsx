import React from 'react'
import Dashboard from '@/pages/Dashboard/index'
import Sidebar from '../components/Sidebar'
import Topcards from '../components/Topcards'
import Charts from '../components/Charts'

const index = () => {
  return (
   <main className=''>
    <p>Lorem ipsum dolor sit amet.</p>
    <Sidebar/>
    <Topcards/>

    <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
      <Charts/>
    </div>
   </main>



  )
}

export default index