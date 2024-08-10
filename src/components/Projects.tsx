"use client";
import React, { memo, useState } from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';

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
  const hash: { [key: string]: boolean } = {};
  topicsForDisplay.forEach((topic: string) => {
    hash[topic] = true
  })

  const [displayState, setDisplayState] = useState({
    ...hash,
  });
  console.log("displayState", displayState);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-2xl font-bold text-red-600 p-6 bg-white rounded-lg shadow-lg">
          Error: {error}
        </div>
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-2xl font-bold text-gray-600 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className=" min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Projects
        </h1>
        <MemoizedProjectsNav mod_array={mod_array} />
        <div className=''>
          <MemoizedProjectsMiniSection mod_array={mod_array} displayState={displayState} setDisplayState={setDisplayState} />
        </div>
      </div>
    </div>
  );
};

const ProjectsNav = ({ mod_array }: { mod_array: { [key: string]: Array<any> } }) => {
  const topics = Object.keys(mod_array);

  return (
    <nav className='hidden md:block sticky rounded-full w-full h-14 top-2 bg-white py-4 shadow-lg z-10 backdrop-blur-sm overflow-x-auto overflow-y-hidden opacity-80'>
      <div className='flex justify-center space-x-2 px-4'>
        {topics.map((topic) => (
          <Link key={topic} href={`#${topic}`} passHref>
            <span className='px-4 py-2 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-200 transition-colors duration-300 whitespace-nowrap cursor-pointer'>
              {topic}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

const ProjectsMiniSection = ({ mod_array, displayState, setDisplayState }: { mod_array: { [key: string]: Array<any> } , displayState: { [key: string]: boolean }, setDisplayState: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>}) => {
  const topics = Object.keys(mod_array);
  return (
    <div className="">
      {topics.map((topic, index) => (
        <div
          key={topic}
          id={topic}
          className="fade-in-section pt-8"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {mod_array[topic].length === 0 ? (
            <div id={topic} className='text-center w-full h-64 flex items-center justify-center text-gray-500 bg-white rounded-lg shadow-xl'>
              No projects in this category
            </div>
          ) : (
              <div className='bg-white rounded-lg shadow-xl overflow-hidden p-12' >
                <h2 className='w-full font-bold text-2xl p-6 cursor-pointer flex items-center ' onClick={() => setDisplayState({ ...displayState, [topic]: !displayState[topic] })}>
                  <span className='mr-4'>
                    {displayState[topic] ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg>

                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>

                    )}
                  </span>
                  {topic}
                </h2>
                {displayState[topic] && (
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
                    {mod_array[topic].map((project, projectIndex) => (
                      <div
                        key={project.name}
                        className="fade-in-section"
                        style={{ animationDelay: `${(index * 0.1) + (projectIndex * 0.05)}s` }}
                      >
                        <ProjectCard
                          name={project.name}
                          html_url={project.html_url}
                          description={project.description}
                          topics={project.topics}
                          created_at={project.created_at}
                          homepage={project.homepage}
                        />
                      </div>
                    ))}
                  </div>
                )}

              </div>
          )}
        </div>
      ))}
    </div>
  )
}

const MemoizedProjectsNav = memo(ProjectsNav);
const MemoizedProjectsMiniSection = memo(ProjectsMiniSection);

export default Projects;
