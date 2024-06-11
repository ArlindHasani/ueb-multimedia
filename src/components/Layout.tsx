import { Outlet} from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const Layout = () => {
  return (
    <section className='min-h-screen flex flex-col'>
      <Navbar/>
      <main className='flex flex-col gap-6 flex-1 bg-dark-black'>
        <Outlet />
      </main>
      <Footer/>
    </section>
  );
};

export default Layout;
