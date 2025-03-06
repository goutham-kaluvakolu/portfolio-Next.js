'use client';

import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Me from "@/components/Me";
import Edu from "@/components/Edu";
import Exp from "@/components/Exp";
import Skills from "@/components/Skills";
import LoadingSkeleton from "@/components/LoadingSkeleton";

interface ClientHomeProps {
  image: string;
  name: string;
  projects: any[];
  mod_array: { [key: string]: Array<any> };
}

export default function ClientHome({ image, name, projects, mod_array }: ClientHomeProps) {
  const hasGitHubData = projects.length > 0;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      if (isOpen) {
        mainContent.classList.remove('sidebar-open');
      } else {
        mainContent.classList.add('sidebar-open');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <div className="md:pl-64 transition-all duration-300">
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900"
        >
          <div className="main-content px-4 py-4 max-w-6xl mx-auto">
            <Suspense fallback={<LoadingSkeleton type="me" />}>
              <section id="Contact" className="scroll-mt-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Me 
                    image={image || '/default-avatar.png'} 
                    name={name || 'Goutham Kaluvakolu'} 
                  />
                </motion.div>
              </section>
            </Suspense>
            
            <Suspense fallback={<LoadingSkeleton type="education" />}>
              <motion.section 
                id="Education"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-12 py-4"
              >
                <Edu />
              </motion.section>
            </Suspense>

            <Suspense fallback={<LoadingSkeleton type="experience" />}>
              <motion.section 
                id="Experience"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-12 py-4"
              >
                <Exp />
              </motion.section>
            </Suspense>

            <Suspense fallback={<LoadingSkeleton type="projects" />}>
              <motion.section 
                id="Projects"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-12 py-4"
              >
                {projects && projects.length > 0 ? (
                  <Projects projects={projects} mod_array={mod_array || {}} />
                ) : (
                  <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        GitHub Projects
                      </h2>
                      <p className="mt-4 text-lg text-gray-400">
                        Unable to load GitHub projects at this time. Please check back later.
                      </p>
                    </div>
                  </div>
                )}
              </motion.section>
            </Suspense>

            <Suspense fallback={<LoadingSkeleton type="skills" />}>
              <motion.section 
                id="Skills" 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="scroll-mt-12 py-4 pb-8"
              >
                <Skills />
              </motion.section>
            </Suspense>
          </div>
        </motion.main>
      </div>
    </div>
  );
} 