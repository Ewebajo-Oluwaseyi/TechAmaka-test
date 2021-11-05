import { useState } from 'react';
import Search from '../Input/Searchbar';
import Link from 'next/link';

const Navbar = () => {

  return (
  <div>
  <nav className="bg-gray-800 px-4">
    <div className="flex items-center justify-start h-20">
      <Link href={'/'}>
        <a className="text-white text-xl lg:text-3xl">Event Listing</a>
      </Link>
    </div>
  
  </nav>
  </div>
)};

export default Navbar;