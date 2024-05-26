import { Outlet} from 'react-router-dom';
import Navbar from './navbar';

const Layout = () => {
  return (
    <section className='min-h-screen flex flex-col'>

      <Navbar/>

      <main className='flex flex-col gap-6 flex-1 bg-dark-black'>
        <Outlet />
      </main>
      
    </section>
  );
};

export default Layout;
