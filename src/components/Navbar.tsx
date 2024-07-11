import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white/80 backdrop-blur-sm shadow-lg z-50 overflow-y-auto">
      <div className="flex flex-col h-full justify-center py-8">
        <ul className="space-y-4">
          {['Contact', 'Education', 'Experience', 'Projects', 'Skills'].map((item) => (
            <li key={item} className='mx-4'>
              <Link href={`#${item}`}>
              <span className=' block  px-4 py-2 rounded-full text-gray-900 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-300 whitespace-nowrap cursor-pointer'>
              {item}
            </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;