import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
import Footer from './components/Footer'
import DefaultLayout from '@/pages/components/layouts/DefaultLayout';
import DashboardLayout from '@/pages/components/layouts/DashboardLayout';
import HomeLayout from '@/pages/components/layouts/HomeLayout';
import { useRouter } from 'next/router';


const poppins = Poppins({ subsets: ['latin'], weight:['400', '600', '900'] })

export default function App({ Component, pageProps }) {

  const router = useRouter();

  const getLayout = () => {
    if (router.pathname.startsWith('/Dashboard')) {
      return DashboardLayout;
    }
    if (router.pathname.endsWith('/')) {
      return HomeLayout;
    }
    return DefaultLayout;
  };

  const Layout = getLayout();

  return (
    <main className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )

}
