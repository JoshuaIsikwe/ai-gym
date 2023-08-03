import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
); 

const Charts = () => {

  const [chartData, setChartData] = useState({
    datasets:[],
  })

  const [chartOptions, setChartOptions] = useState({})

  useEffect(()=>{
    setChartData({
      label:[],
      datasets: [
        {
          label: ' Sales $',
          data: [18327, 22201, 19490, 17490, 24183, 22475, 20000],
          border: 'rgb(53, 162, 235)',
          backgroundColor: 'rgb(53, 162, 235, 0.4)',
        },
      ]
    })
    setChartOptions({
      plugins:{
        legend:{
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Revenue'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    })
  }, [])

  return (
    <div className='w-full h-h-v7 md:col-span-2 relative rounded-lg bg-white'>
      <Bar data={chartData} options={chartOptions}/>
    </div>
  )
}

export default Charts