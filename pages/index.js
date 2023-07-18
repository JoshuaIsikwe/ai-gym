import home1 from '@/public/illustrations/brain.png'
import home2 from '@/public/illustrations/learn.png'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/pages/components/Navbar'
import Banner from './components/Banner'



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
      <section>
        <div>

        </div>
        </section>
    </main>
  )
}
