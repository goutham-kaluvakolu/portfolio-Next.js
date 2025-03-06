'use client';

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  html_url: string;
  description: string;
  topics: string[];
  created_at: string;
  homepage: string;
}

const ProjectCard = ({ name, html_url, description, topics, created_at, homepage }: ProjectCardProps) => {
  const formattedDate = new Date(created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4, borderColor: 'rgb(31 41 55 / 0.8)' }}
      transition={{ duration: 0.2 }}
      className="bg-black border border-gray-800 rounded-md overflow-hidden h-full flex flex-col w-full max-w-md mx-auto"
    >
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex flex-col mb-4">
          <h3 className="text-lg font-semibold group mb-1.5">
            <Link 
              href={html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-accent transition-colors inline-flex items-center gap-2 group"
            >
              {name}
              <svg 
                className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </h3>
          <span className="text-xs text-gray-400 font-medium px-2 py-1 bg-gray-900/80 rounded-full self-start">{formattedDate}</span>
        </div>
        <p className="text-gray-300 mb-6 line-clamp-2 text-sm leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto mb-2">
          {topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent/90 border border-accent/20 truncate max-w-[120px]"
            >
              {topic}
            </span>
          ))}
          {topics.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-900 text-gray-400 border border-gray-800">
              +{topics.length - 4} more
            </span>
          )}
        </div>
      </div>
      <div className="px-5 py-3 bg-gray-900/50 border-t border-gray-800">
        <div className="flex justify-between items-center gap-2">
          <Link
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md hover:bg-gray-800 text-sm"
          >
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>Code</span>
          </Link>
          {homepage && (
            <Link
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/90 transition-colors flex items-center space-x-1.5 px-2.5 py-1.5 rounded-md hover:bg-accent/10 text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>Demo</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
