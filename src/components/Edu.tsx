'use client';

import { motion } from "framer-motion";

export default function Edu() {
  const education = [
    {
      period: "AUG 2022 - May 2024",
      school: "University of Texas at Arlington",
      degree: "Masters in Computer Science",
      url: "https://www.uta.edu/",
      certificateUrl: "https://drive.google.com/file/d/1np-wNg8zr8rCqE_rjEXF0XLPlx8iJ6X5/view?usp=sharing"
    },
    {
      period: "AUG 2017 - Aug 2021",
      school: "Lovely Professional University",
      degree: "Bachelors in Computer Science and Engineering",
      url: "https://www.lpu.in/",
      certificateUrl: "#"
    }
  ];

  return (
    <div id="Education" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Education</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            My academic journey and qualifications
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300"
        >
          <div className="p-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index }}
                className={`relative pl-8 ${
                  index !== education.length - 1 ? "pb-16" : ""
                }`}
              >
                {index !== education.length - 1 && (
                  <div className="absolute left-0 top-5 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
                )}
                <div className="absolute left-0 top-5 -ml-1.5">
                  <motion.div 
                    whileHover={{ scale: 1.2 }}
                    className="h-3 w-3 rounded-full bg-blue-500 shadow-glow-blue border-2 border-gray-900" 
                  />
                </div>

                <div className="space-y-4">
                  <span className="text-sm font-medium text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">{edu.period}</span>
                  <h3 className="text-xl font-bold text-white">
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-all duration-300"
                    >
                      {edu.school}
                    </a>
                  </h3>
                  <p className="text-gray-300 font-medium">{edu.degree}</p>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={edu.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 bg-blue-900/20 px-4 py-2 rounded-lg transition-all duration-300"
                  >
                    <span>View Degree</span>
                    <motion.svg
                      whileHover={{ x: 2 }}
                      className="w-4 h-4"
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
                    </motion.svg>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}