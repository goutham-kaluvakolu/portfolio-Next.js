import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-white/80 backdrop-blur-sm shadow-lg z-50 overflow-y-auto">
      <div className="flex flex-col h-full justify-center py-8">
        <ul className="space-y-4">
          {['contact', 'education', 'experience', 'projects', 'skills'].map((item) => (
            <li key={item}>
              <Link href={`#${item}`}>
                <span className="block px-6 py-3 text-gray-700 hover:text-white hover:bg-gray-800 transition-all duration-300 text-base capitalize font-medium">
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