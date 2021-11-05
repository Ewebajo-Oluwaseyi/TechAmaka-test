//import { Navbar, Footer, Showcase } from '../index';
import Navbar from './Navbar';
import Footer from './Footer';
import Showcase from '../Section/Showcase';
import { useRouter } from 'next/router';

const Layout = ({children}) => {
    const router = useRouter();

    return (
        <>
          <Navbar/>
            {router.pathname === '/' && <Showcase />}
            <div className="h-full max-w-screen-lg mt-10 mb-20 mx-auto px-5 font-open-sans bg-white dark:bg-gray-800">
              {children}
            </div>
          <Footer/>
        </>
    )
}

export default Layout