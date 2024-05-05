import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { RiHome4Line } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { LuHeart } from "react-icons/lu";

interface NavbarLink{
  linkHref: string,
  linkName: string,
  linkIcon?: ReactNode
}


const NavbarLink = (props: NavbarLink) => {

  const {linkHref, linkName, linkIcon} = props

  return (
    <li>
      <Link to={linkHref} className='w-fit flex items-center gap-2 transition-colors hover:text-primary'>
        {linkIcon} 
        {linkName}
      </Link>
    </li>
  );
};

export default function Navbar() {
  return (
    <ul className='flex flex-col gap-6 text-stone-200'>
      <NavbarLink linkHref="/" linkName="Home" linkIcon={<RiHome4Line className='h-5 w-5'/>} />
      <NavbarLink linkHref="/categories" linkName="Category"  linkIcon={<BiCategory className='h-5 w-5'/>}/>
      <NavbarLink linkHref="/wishlist" linkName="Wishlist" linkIcon={<LuHeart className='h-5 w-5'/>}/>
    </ul>
  );
}
