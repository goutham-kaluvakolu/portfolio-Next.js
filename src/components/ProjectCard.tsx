import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';

type ProjectCardProps = {
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  homepage: string;
  topics: string[];
};

const ProjectCard = ({ name, html_url, description, created_at, homepage, topics }: ProjectCardProps) => {
  return (
    <div className="animate__animated animate__fadeIn">
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-200">
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 truncate hover:text-indigo-600 transition-colors duration-200">
          <Link href={html_url} target="_blank" rel="noopener noreferrer">
            {name}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 p-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4 p-2">
          {topics.map((topic) => (
            <span 
              key={topic} 
              className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
        <span className="text-sm text-gray-500">
          {format(new Date(created_at), 'MMM d, yyyy')}
        </span>
        <div className="flex space-x-3">
          {homepage && (
            <Link
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
              aria-label={`Visit ${name} website`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </Link>
          )}
          <Link
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
            aria-label={`View ${name} on GitHub`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
