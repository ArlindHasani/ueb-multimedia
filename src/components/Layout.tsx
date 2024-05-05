import { Outlet} from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className='min-h-screen flex anim_gradient'>
      <nav className='py-4 px-8 w-64 flex flex-col gap-6 bg-black/75'>

        <h1 className='text-2xl text-white font-extrabold'>GAME
          <span className='text-primary'>VERSE</span>
        </h1>

        <Navbar/>
      </nav>
      <main className='flex flex-col flex-1 py-4 px-8 bg-black/50'>
        <div>
          TYes
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
