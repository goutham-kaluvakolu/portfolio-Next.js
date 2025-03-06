"use client";
import React, { memo, useState, useEffect } from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from "framer-motion";
import { useProjectContext } from "@/lib/ProjectContext";

type ProjectProps = {
  homepage: string;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  svn_url: string;
  topics: string[]
}

const Projects = ({ projects, mod_array, error }: { projects: ProjectProps[], mod_array: { [key: string]: Array<any> }, error?: string }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { setCategories } = useProjectContext();
  
  // Memoize the categories array so it doesn't change on every render
  const categories = React.useMemo(() => 
    ["All", ...Object.keys(mod_array)],
    [mod_array]
  );
  
  // Update the context when mod_array changes
  useEffect(() => {
    setCategories(categories);
  }, [setCategories, categories]);
  
  // Generate all projects for the "All" category
  const allProjects = React.useMemo(() => 
    Object.values(mod_array).flat(),
    [mod_array]
  );
  
  // Get projects to display based on selected category
  const displayedProjects = selectedCategory === "All" 
    ? allProjects 
    : mod_array[selectedCategory] || [];

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <div className="text-2xl font-bold text-red-400 p-8 bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-xl border border-red-500/30">
          Error: {error}
        </div>
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <div className="text-2xl font-bold text-gray-300 animate-pulse bg-gray-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div id="Projects" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            Explore my latest work and contributions
          </p>
        </motion.div>

        {/* Category Dropdown in the Secondary Navbar */}
        <nav className="sticky top-2 z-40 bg-transparent mb-4">
          <div className="flex justify-end px-1">
            <div className="bg-gray-800/95 backdrop-blur-sm rounded-lg shadow-xl px-5 py-3 max-w-md w-full sm:w-64 border border-gray-700/50 hover:border-gray-600/80 transition-all duration-300">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                >
                  <span className="flex items-center">
                    <span className="ml-2 truncate font-medium">{selectedCategory}</span>
                  </span>
                  <span className="ml-2 text-xs bg-gray-800 px-2 py-1 rounded-full">
                    {selectedCategory === "All" 
                      ? allProjects.length 
                      : mod_array[selectedCategory]?.length || 0} projects
                  </span>
                  <svg 
                    className={`w-5 h-5 ml-2 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? 'transform rotate-180' : ''}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor" 
                    aria-hidden="true"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto"
                    >
                      <ul className="py-1">
                        {categories.map((category) => (
                          <li key={category}>
                            <button
                              onClick={() => {
                                setSelectedCategory(category);
                                setIsDropdownOpen(false);
                              }}
                              className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-700 ${
                                selectedCategory === category 
                                  ? 'bg-blue-600 text-white' 
                                  : 'text-gray-300'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{category}</span>
                                <span className="ml-2 text-xs bg-gray-700 px-1.5 py-0.5 rounded-full">
                                  {category === "All" 
                                    ? allProjects.length 
                                    : mod_array[category]?.length || 0}
                                </span>
                              </div>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </nav>

        {/* Projects Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          {displayedProjects.length === 0 ? (
            <div className="text-center py-20 text-gray-400 bg-gray-800/20 rounded-lg border border-gray-700">
              No projects in this category yet
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {displayedProjects.map((project, projectIndex) => (
                  <motion.div
                    key={`${project.name}-${projectIndex}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    layout
                    transition={{
                      layout: { type: "spring", bounce: 0.3 },
                      opacity: { duration: 0.3 },
                      delay: 0.05 * (projectIndex % 6), // Limit the max delay for larger lists
                      duration: 0.3
                    }}
                    whileHover={{ y: -5 }}
                    className="transition-all duration-300"
                  >
                    <ProjectCard
                      name={project.name}
                      html_url={project.html_url}
                      description={project.description}
                      topics={project.topics}
                      created_at={project.created_at}
                      homepage={project.homepage}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
