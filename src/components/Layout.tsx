import { Outlet} from 'react-router-dom';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

const Layout = () => {
  return (
    <div className='min-h-screen flex anim_gradient'>
      <nav className='py-4 px-8 w-64 flex flex-col gap-8 bg-light-black/95'>

        <h1 className='text-2xl text-white font-extrabold'>GAME
          <span className='text-primary'>VERSE</span>
        </h1>

        <Navbar/>
      </nav>
      <main className='flex flex-col gap-6 flex-1 py-4 px-8 bg-light-black/80'>
        <div>
          <SearchBar/>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
