
import { scrollTreshold } from "../utils/scrollTreshold";
import { IoIosArrowUp } from "react-icons/io";
import { 
  motion, 
  AnimatePresence 
} from 'framer-motion';

export default function Footer() {

  const showButton = scrollTreshold(300, false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className='bg-dark-black py-16'>
      <div className='container mx-auto flex justify-between px-8 mb-12 md:px-16 lg:px-32'>
        <ul className='text-white font-light space-y-2'>
          <li className='uppercase text-zinc-400 mb-4'>Shop</li>
          <li className='cursor-pointer text-sm transition-colors hover:text-primary'>Home</li>
          <li className='cursor-pointer text-sm transition-colors hover:text-primary'>Categories</li>
        </ul>
        <ul className='text-white font-light space-y-2'>
          <li className='uppercase text-zinc-400 mb-4'>About</li>
          <li className='cursor-pointer text-sm transition-colors hover:text-primary'>Our Story</li>
          <li className='cursor-pointer text-sm transition-colors hover:text-primary'>Blog</li>
          <li className='cursor-pointer text-sm transition-colors hover:text-primary'>Wholesale</li>
        </ul>
        <ul className='text-white font-light space-y-2'>
          <li className='uppercase text-zinc-400 mb-4'>Help</li>
          <li className='cursor-pointer text-sm transition-colors hover:text-primary'>Contact Us</li>
          <li className='cursor-pointer text-sm transition-colors hover:text-primary'>FAQ</li>
          <li className='cursor-pointer text-sm transition-colors hover:text-primary'>Terms of Service</li>
          <li className='cursor-pointer text-sm transition-colors hover:text-primary'>Privacy Policy</li>
        </ul>
      </div>
      <hr className='my-4 mx-8 md:mx-16 lg:mx-32 text-primary h-4'></hr>
      <div>
        <p className='px-8 md:px-16 lg:px-32 text-sm text-zinc-400'>© 2024 GameVerse. All rights reserved</p>
        <AnimatePresence>
          {showButton && (
            <motion.button
              onClick={scrollToTop}
              className='fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-md z-50'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <IoIosArrowUp />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}
