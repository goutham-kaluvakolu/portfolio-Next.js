// components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

type projectProos = {
  homepage: string;
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  svn_url: string;
  topics: string[]
}

const Projects = ({ projects, mod_array }: { projects: projectProos[], mod_array: { [key: string]: Array<any> } }) => {
  if (!projects.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Projects</h1>
      <ProjectsNav mod_array={mod_array} />
      <div className=''>
        <ProjectsMiniSection mod_array={mod_array} />

      </div>
    </div>
  );
};


export default Projects;

// https://github.com/goutham-kaluvakolu/bagging-boosting/blob/main/README.md
// https://api.github.com/repos/goutham-kaluvakolu/bagging-boosting/readme

const ProjectsNav = ({ mod_array }: { mod_array: { [key: string]: Array<any> } }) => {
  let x = Object.keys(mod_array)
  return (
    <div className='flex space-x-4 justify-center sticky top-16 mt-16 bg-white h-12 items-center' style={{
      backdropFilter: "blur(0px)",
      transition: "backdrop-filter 300ms",
    }}>
      {x.map((topic: string) => (
        <a key={topic} href={`#${topic}`} className='hover:underline'>
          {topic}
        </a>
      ))}
    </div>
  )
}


const ProjectsMiniSection = ({ mod_array }: { mod_array: { [key: string]: Array<any> } }) => {
  let x = Object.keys(mod_array)
  return (
    <div >
      {x.map((topic: string) => (

        mod_array[topic].length == 0 ? <div id={topic} key={topic}> <div className='text-center w-full h-64' key={topic}>
          nothing here
        </div></div> :
          <div  key={topic} className='flex flex-wrap md:m-10 border-b-2 pb-5'>
            <div id={topic} className='w-full font-bold text-2xl scroll-mt-48 m-2 mt-4'>
              {topic}
            </div>
            {mod_array[topic].map((project) => {
              return (
                
                  <ProjectCard key={project.name} name={project.name} html_url={project.html_url} description={project.description} topics={project.topics} created_at={project.created_at} homepage={project.homepage} />
                  
              )
            })}
          </div>

      ))}
    </div>
  )
}

