"use client";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white py-4 h-16">
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="#experience" className="hover:underline" >
            Experience
          </a>
        </li>
        <li>
          <a href="#education" className="hover:underline">
            Education
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;