'use client';

import { motion } from "framer-motion";
import { SiJavascript, SiNodedotjs, SiReact, SiNextdotjs, SiPostgresql, SiMongodb, SiMysql, SiPython, SiSpring, SiSpringboot, SiAmazonaws, SiDocker, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiGit } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: SiReact },
        { name: "Next.js", level: 85, icon: SiNextdotjs },
        { name: "TypeScript", level: 85, icon: SiTypescript },
        { name: "Tailwind CSS", level: 90, icon: SiTailwindcss },
        { name: "HTML/CSS", level: 95, icon: SiHtml5 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: SiNodedotjs },
        { name: "Python", level: 80, icon: SiPython },
        { name: "JavaScript", level: 90, icon: SiJavascript },
        { name: "Spring Boot", level: 80, icon: SiSpringboot },
        { name: "Spring", level: 85, icon: SiSpring }
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", level: 85, icon: SiMongodb },
        { name: "PostgreSQL", level: 80, icon: SiPostgresql },
        { name: "MySQL", level: 80, icon: SiMysql },
        { name: "Git", level: 90, icon: SiGit },
        { name: "Docker", level: 75, icon: SiDocker },
        { name: "AWS", level: 70, icon: SiAmazonaws }
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="Skills" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Skills & Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 pb-3 border-b border-gray-700 flex items-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">{category.title}</span>
                <div className="ml-auto bg-blue-500/10 rounded-full p-1">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                </div>
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * skillIndex }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && (
                          <div className="text-blue-400 p-1.5 bg-blue-500/10 rounded-md group-hover:bg-blue-500/20 transition-all duration-300">
                            <skill.icon className="w-5 h-5 group-hover:text-blue-300 transition-colors" />
                          </div>
                        )}
                        <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-blue-400 font-medium bg-blue-500/10 px-2 py-0.5 rounded-md text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800/70 rounded-full h-2.5 overflow-hidden shadow-inner">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 shadow-lg"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 * skillIndex }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
