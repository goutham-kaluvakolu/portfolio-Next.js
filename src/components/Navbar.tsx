"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="fixed top-4 left-4 z-50 md:hidden text-gray-500 hover:text-gray-700">
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
        </svg>
      </button>
      <nav className={`fixed left-0 top-0 h-full w-64 bg-white/80 backdrop-blur-sm shadow-lg z-40 overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="flex h-full justify-center py-8">
          <ul className="space-y-4 flex flex-col">
            {['Contact', 'Education', 'Experience', 'Projects', 'Skills'].map((item) => (
              <li key={item} className='mx-4'>
                <Link href={`#${item}`}>
                  <span className='block px-4 py-2 rounded-full text-gray-900 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-300 whitespace-nowrap cursor-pointer'>
                    {item}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;