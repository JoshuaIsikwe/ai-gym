import home1 from '@/public/illustrations/Home-pic-1.png'
import gymLogo from '@/public/illustrations/GymName.png'
import bg1 from '@/public/illustrations/bg1.png'
import Link from 'next/link'
import Image from 'next/image'



export default function Home() {
  return (
    <main
      className= 'gap-16 py-10 md:h-full md:pb-0 bg-gray-100 '
    >
      <section>
        <div className='flex p-10 md:h-5/6 opacity-40' >
          <div className='flex-1 '>
            <Image alt='Gym name' src={gymLogo}/>
            <div className='text-left'>
              <h1 className='text-5xl'>AI GYM</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quisquam soluta cupiditate aliquid culpa magnam ipsam non sit sapiente, quas et nisi optio. Beatae nihil reiciendis aspernatur laboriosam laborum sapiente?</p>
            </div>
          </div>
          <div className='flex-1'>
            <Image alt='Gym name' src={home1}/>
          
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
