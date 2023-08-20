import React from 'react'
import Topcards from './components/Topcards'
import Charts from './components/Charts'
import {GiLeg} from 'react-icons/gi'
import Image from 'next/image'
import pie from '@/public/illustrations/pie.jpg'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie } from "recharts";

const index = () => {

  const data01 = [
    { name: "Send money", value: 8478584 },
    { name: "Electricity", value: 6358938 },
    { name: "Airtime & Data", value: 3179469},
    { name: "TV subscription", value: 1695716 },
    { name: "RRR", value: 148362 },
  ];
  const data02 = [
    { name: "Send money", value: 404112 },
    { name: "Electricity", value: 101028},
    { name: "Airtime & Data", value: 168389 },
    { name: "TV subscription", value: 80 },
    { name: "RRR", value: 40 },
  ];


  return (
   <main className='min-h-screen '>
    <section className=''>
      <div className='flex justify-between p-4 '>
        <p>Welcome back, Joshua</p>
        <p className='text-xl flex font-bold'>Today is Leg day! <span><GiLeg/></span></p>
        </div>
      <Topcards/>
    </section>

    <section className=' grid grid-cols-1 md:grid-cols-3 p-4 gap-4'>
      <div className='col-span-2 bg-white'>
        <Charts/>
      </div>
      <div className='bg-zinc-300 col-span-1 rounded-lg'>
              <ResponsiveContainer width="100%" className='m-auto' height={400}>
                  <PieChart >
                      <Pie
                        data={data01}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        outerRadius={60}
                        fill="#8884d8"
                      />
                      <Pie
                        data={data02}
                        dataKey="value"
                        cx={200}
                        cy={200}
                        innerRadius={70}
                        outerRadius={90}
                        fill="#82ca9d"
                        label
                      />
                    </PieChart>
                 </ResponsiveContainer>
      </div>
    </section>

    <section className='h-screen '>
      <div classname=''>
        <h1 className='text-4xl uppercase text-center'>Meal Analysis</h1>

        <div className='h-h-v8 bg-white rounded-lg w-full mt-5'>
          <Image alt='pie' src={pie}></Image>
        </div>
        
      </div>
    </section>
   </main>



  )
}

export default index