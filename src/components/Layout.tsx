import { Outlet} from 'react-router-dom';
import Navbar from './navbar';
import Test from './Test';
import PixiJsText from './PixiJsText';

const Layout = () => {
  return (
    <section className='min-h-screen flex flex-col'>
      <Navbar/>
      <div>
        <PixiJsText poem="Call me lazy or maybe crazy"/>
      </div>
      <main className='flex flex-col gap-6 flex-1 bg-dark-black'>
        <Outlet />
      </main>
      
    </section>
  );
};

export default Layout;
