// components/Projects.js
import React from 'react';

type projectProos = {
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  svn_url:string;
}

const Projects = ({ projects }: { projects: projectProos[] }) => {
  if (!projects.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.name} className="mb-4">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Projects;

// https://github.com/goutham-kaluvakolu/bagging-boosting/blob/main/README.md
// https://api.github.com/repos/goutham-kaluvakolu/bagging-boosting/readme



const ProjectCard = ({project}: {project: projectProos}) => {
  return (
    <div>
      <h1>{project.name}</h1>
      <div>{project.created_at}</div>
      <div>{ project.description}</div>
      <div>{project.html_url}</div>
      <div>{project.svn_url}</div>
    </div>
  )
}

