"use client";
import React, { memo, useState, useEffect } from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from "framer-motion";

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
  const topicsForDisplay = Object.keys(mod_array);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});
  const [activeSection, setActiveSection] = useState<string>(topicsForDisplay[0] || 'Web Development');

  // useEffect(() => {
   
  // }, [activeSection]);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Explore my latest work and contributions
          </p>
        </motion.div>

        <nav className="sticky top-2 z-50 bg-transparent">
          <div className="bg-gray-800/95 backdrop-blur-sm rounded-full shadow-xl px-4 py-3 mx-auto max-w-3xl border border-gray-700/50 my-4 hover:border-gray-600/80 transition-all duration-300">
            <div className="flex justify-center py-2 overflow-x-auto no-scrollbar">
              {topicsForDisplay.map((topic) => {
                console.log('Checking topic:', topic, activeSection);
                if (activeSection === topic) {
                  console.log('Active Section:', topic);
                }
                return (
                  <Link key={topic} href={`#${topic}`} passHref onClick={() => handleSectionClick(topic)}>
                    <motion.span 
                      whileHover={{ scale: activeSection === topic ? 1.05 : 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 mx-2 py-2 rounded-full transition-all duration-300 whitespace-nowrap cursor-pointer text-sm font-medium
                      ${activeSection === topic 
                        ? 'text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/20' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/80'
                      }`}>
                      {topic}
                    </motion.span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-12 mt-12"
        >
          {topicsForDisplay.map((topic, index) => (
            <motion.div
              key={topic}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="scroll-mt-32"
            >
              <div id={topic} className="h-16 -mt-16 mb-4 invisible"></div>
              <div 
                className="project-section bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div
                  className="p-6 cursor-pointer hover:bg-gray-800/80 transition-all duration-300"
                  onClick={() => toggleSection(topic)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white flex items-center space-x-3 group">
                      <span className="group-hover:text-blue-400 transition-colors duration-300">{topic}</span>
                      <motion.div
                        className="bg-gray-700 rounded-full p-1.5 text-gray-300 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300"
                      >
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          animate={{ rotate: expandedSections[topic] ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </motion.div>
                    </h3>
                    <span className="text-sm font-medium px-3 py-1 bg-gray-700/50 rounded-full text-blue-300">
                      {mod_array[topic].length} projects
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedSections[topic] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-700"
                    >
                      <div className="p-6 bg-gray-800/30">
                        {mod_array[topic].length === 0 ? (
                          <div className="text-center py-10 text-gray-400 bg-gray-800/20 rounded-lg border border-gray-700">
                            No projects in this category yet
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mod_array[topic].map((project, projectIndex) => (
                              <motion.div
                                key={project.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  delay: 0.1 * projectIndex,
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
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
