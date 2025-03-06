"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SOCIALS } from "@/config";

// Add social media icons (using basic SVG shapes as placeholders)
const SocialIcons = {
  Github: () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
  LinkedIn: () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  ),
  X: () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  Instagram: () => (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Extract the navigation items from SOCIALS
  const navItems = [
    { name: "Contact", href: "#Contact" },
    { name: "Education", href: "#Education" },
    { name: "Experience", href: "#Experience" },
    { name: "Projects", href: "#Projects" },
    { name: "Skills", href: "#Skills" },
  ];

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-100px 0px -100px 0px",
      threshold: 0.3,
    });

    // Observe all sections
    navItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Check active section on initial load and window resize
  useEffect(() => {
    const checkActiveSection = () => {
      // Find the most visible section
      let mostVisibleSection = "";
      let maxVisibility = 0;
      
      navItems.forEach((item) => {
        const sectionId = item.href.replace("#", "");
        const element = document.getElementById(sectionId);
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the element is visible (as a percentage)
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
        const visiblePercentage = visibleHeight / rect.height;
        
        if (visiblePercentage > maxVisibility) {
          maxVisibility = visiblePercentage;
          mostVisibleSection = sectionId;
        }
      });
      
      // Only update if we found a visible section and it's different from current
      if (mostVisibleSection && mostVisibleSection !== activeSection) {
        setActiveSection(mostVisibleSection);
      }
    };
    
    // Initial check after a short delay to ensure rendering is complete
    const timer = setTimeout(checkActiveSection, 300);
    
    // Check on window resize
    window.addEventListener('resize', checkActiveSection);
    
    // Check on scroll, but throttle it to avoid performance issues
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkActiveSection, 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkActiveSection);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems, activeSection]); // Add dependencies to prevent infinite loop

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    
    // Set active section immediately (only if it's different)
    if (targetId !== activeSection) {
      setActiveSection(targetId);
    }
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      
      // Close menu if on mobile
      if (window.innerWidth < 768) {
        closeMenu();
      }
    }
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Mobile menu button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white shadow-md"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </motion.button>

      {/* Sidebar Navigation - Different behavior for mobile vs desktop */}
      <div className="md:block hidden">
        {/* Desktop version - always visible */}
        <div className="fixed top-0 left-0 h-screen w-64 bg-gray-900 z-40 shadow-lg border-r border-gray-800">
          <div className="flex flex-col h-full p-5">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white">Portfolio</h2>
              <p className="text-gray-400 text-sm">Software Engineer</p>
            </div>
            <nav className="flex-1">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <li key={item.name}>
                      <button
                        className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`}
                        onClick={() => handleNavClick(item.href)}
                      >
                        {item.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-auto pt-4 border-t border-gray-800">
              <div className="flex justify-center space-x-4">
                {SOCIALS.map((social) => {
                  const IconComponent = SocialIcons[social.name as keyof typeof SocialIcons];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <span className="sr-only">{social.name}</span>
                      {IconComponent && <IconComponent />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile version - toggle visibility */}
      <div className="md:hidden block">
        <motion.div
          initial={{ x: -300 }}
          animate={{ 
            x: isOpen ? 0 : -300,
            boxShadow: isOpen ? "0 0 15px 0 rgba(0, 0, 0, 0.3)" : "none"
          }}
          transition={{ duration: 0.2 }}
          className="fixed top-0 left-0 h-screen w-64 bg-gray-900 z-40 shadow-lg border-r border-gray-800"
        >
          <div className="flex flex-col h-full p-5">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white">Portfolio</h2>
              <p className="text-gray-400 text-sm">Software Engineer</p>
            </div>
            <nav className="flex-1">
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <li key={item.name}>
                      <button
                        className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "text-gray-300 hover:bg-gray-800 hover:text-white"
                        }`}
                        onClick={() => handleNavClick(item.href)}
                      >
                        {item.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="mt-auto pt-4 border-t border-gray-800">
              <div className="flex justify-center space-x-4">
                {SOCIALS.map((social) => {
                  const IconComponent = SocialIcons[social.name as keyof typeof SocialIcons];
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <span className="sr-only">{social.name}</span>
                      {IconComponent && <IconComponent />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
