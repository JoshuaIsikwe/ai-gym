import home1 from '@/public/illustrations/brain.png'
import home2 from '@/public/illustrations/learn.png'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/pages/components/Navbar'
import Banner from './components/Banner'
import { FaUserAlt} from "react-icons/fa";
import { CgGym} from "react-icons/cg";
import { GiMeal} from "react-icons/gi";



export default function Home() {
  return (
    <main 
      className= 'gap-16 md:h-full md:pb-0 bg-gray-100'
    >
      <Banner/>
      <section>
        <div className='flex w-full flex-col p-3 md:p-10 items-center md:h-5/6' >
          <div className='flex-1 flex-col text-center'>
              <h1 className='text-5xl'>AI GYM</h1>
              <p className='w-full md:w-2/4 text-justify mx-auto'>Transforms mind dolor sit amet consectetur adipisicing elit. Quas rem quae tenetur provident et quis earum facere obcaecati optio reprehenderit!</p>
          </div>
          <div className='flex-1 w-2/4 md:w-1/4'>
            <Image alt='Gym name' src={home1}/>
          </div>
          <div className='flex h-screen gap-10 items-center '>
            <div className='flex-1 text-red-700 font-bold uppercase text-right'>As you learn we learn, both bla bla muscles exercises it amet consectetur adipisicing elit. Blanditiis error excepturi et officiis assumenda repudiandae, modi odit maiores. Labore, non!</div>
            <div className='flex-1'><Image src={home2} alt='artificial intelligence software'/></div>
          </div>
        </div>
      </section>
      <section className='box flex flex-wrap justify-evenly'>
      <div className='rounded-3xl shadow-xl shadow-gray-400 relative flex flex-col p-8 items-center text-center h-96 w-3/4 mx-auto mt-10 md:w-2/3 lg:w-1/4'>
                <CgGym className=' text-5xl text-gray-700 hover:scale-110 hover:text-blue-500'/>
                <h5 className='text-2xl font-bold mb-2'>Gym Buddy</h5>
                <div className='pra '>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, cupiditate.</p>
                  <Link href=''>
                    <li className='button font-bold transition-colors border outline-none border-solid bg-blue-300 rounded-3xl  cursor-pointer list-none absolute w-2/4 p-2 left-0 right-0 mx-auto self-center bottom-1/4 hover:bg-transparent font hover:text-red-500 hover:scale-105'>Read more</li>
                  </Link>
                </div>
              </div>
              <div className='rounded-3xl shadow-xl shadow-gray-400 relative flex flex-col p-8 items-center text-center h-96 w-3/4 mx-auto mt-10 md:w-2/3  lg:w-1/4'>
                <FaUserAlt className=' text-5xl text-gray-700 hover:scale-110  hover:text-blue-500'/>
                <h5 className='text-2xl font-bold mb-2'>Monitor</h5>
                <div className='pra '>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  <Link href=''>
                    <li className='button font-bold transition-colors border outline-none border-solid bg-blue-300 rounded-3xl  cursor-pointer list-none absolute w-2/4 p-2 left-0 right-0 mx-auto self-center bottom-1/4 hover:bg-transparent font hover:text-red-500 hover:scale-105'>Read more</li>
                  </Link>
                </div>
              </div> 
              <div className='rounded-3xl shadow-xl shadow-gray-400 relative flex flex-col p-8 items-center text-center h-96 w-3/4 mx-auto mt-10 md:w-2/3 lg:w-1/4'>
                <GiMeal className=' text-5xl text-gray-700 hover:scale-110  hover:text-blue-500'/>
                <h5 className='text-2xl font-bold mb-2'>Diet and meal plan</h5>
                <div className=''>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, recusandae.</p>
                  <Link href='/'>
                    <li className='button  font-bold transition-colors border outline-none border-solid bg-blue-300 rounded-3xl  cursor-pointer list-none absolute w-2/4 p-2 left-0 right-0 mx-auto self-center bottom-1/4 hover:bg-transparent font hover:text-red-500 hover:scale-105'>Read more</li>
                  </Link>
                </div>
              </div>
        </section>
    </main>
  )
}
