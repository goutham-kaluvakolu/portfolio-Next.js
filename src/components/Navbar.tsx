import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center items-center h-16 space-x-1 md:space-x-4">
          {['experience', 'education', 'projects', 'contact'].map((item) => (
            <li key={item}>
              <Link href={`#${item}`} passHref>
                <span className="px-4 py-2 rounded-full text-gray-700 hover:text-white hover:bg-gray-800 transition-all duration-300 text-sm md:text-base capitalize font-medium">
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