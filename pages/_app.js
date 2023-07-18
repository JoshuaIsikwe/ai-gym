import '@/styles/globals.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:['400', '600'] })

export default function App({ Component, pageProps }) {
  return <main className={poppins.className}>
    <Component {...pageProps} />
  </main>

}
