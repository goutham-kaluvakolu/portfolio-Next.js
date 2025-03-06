"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Exp = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      period: "Sep 2023 – Current",
      role: "Full Stack Java Developer",
      company: "Molina Healthcare",
      location: "Texas, USA",
      description: [
        "Spearheaded the design and implementation of an AI-powered patient management system, incorporating machine learning algorithms for predictive analytics and automated decision support, reducing data retrieval time by 60% and improving diagnostic accuracy by 40%.",
        "Architected and deployed a microservices infrastructure using Spring Boot and Docker, implementing advanced service mesh patterns and automated scaling policies, improving application scalability by 30% and reducing deployment cycles by 75%.",
        "Developed a predictive analytics module using TensorFlow and Spring Boot, incorporating advanced machine learning models, achieving 85% accuracy in patient readmission risk assessment.",
        "Engineered automated load balancing and scaling solutions with robust health checking and failover mechanisms, maintaining 99.9% uptime for applications processing over 1 million daily requests.",
        "Designed and developed responsive user interfaces with Angular, integrating AI-driven user behavior analytics, resulting in a 45% improvement in user experience.",
        "Established comprehensive MLOps practices for continuous model training and deployment, reducing model update time from days to hours while ensuring consistent performance.",
        "Implemented an AI-powered claims processing system using NLP and automated validation rules, reducing manual review time by 70% through intelligent document processing.",
        "Developed real-time monitoring dashboards using React and D3.js, providing 360-degree visibility into system performance through interactive and intuitive interfaces."
      ]
    },
    {
      id: 2,
      period: "July 2020 – Jun 2022",
      role: "Java Developer",
      company: "C-Edge Technologies",
      location: "India",
      description: [
        "Architected and implemented an AI-based fraud detection system using Java and machine learning algorithms, preventing over $2M in fraudulent transactions annually with 95% accuracy.",
        "Engineered high-performance RESTful APIs serving 500,000+ daily users, implementing caching strategies and connection pooling, reducing response time by 45%.",
        "Developed an automated transaction classification system leveraging NLP and machine learning, achieving 90% accuracy and reducing manual categorization effort by 75%.",
        "Designed real-time anomaly detection using machine learning models, reducing false positive alerts by 60% through intelligent alert filtering.",
        "Created an intelligent chatbot system utilizing NLP and machine learning, successfully handling 40% of routine customer queries.",
        "Executed database performance optimization using intelligent indexing strategies, caching mechanisms, and connection pooling, reducing data retrieval time by 35%.",
        "Led implementation of automated testing frameworks, incorporating continuous integration practices, increasing code coverage to 85% and reducing post-release issues by 30%."
      ]
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div id="Experience" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Experience</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400">My professional journey and achievements</p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="cursor-pointer" onClick={() => toggleExpand(exp.id)}>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm font-medium text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">{exp.period}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{exp.role}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-300 font-medium">{exp.company}</span>
                      <span className="mx-2 text-gray-500">•</span>
                      <span className="text-gray-400">{exp.location}</span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-gray-700 rounded-full p-1.5 text-gray-300 hover:bg-gray-600 transition-all"
                  >
                    <motion.svg
                      animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={false}
                animate={{ height: expandedId === exp.id ? "auto" : 0, opacity: expandedId === exp.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="mt-6 space-y-3 bg-gray-800/40 rounded-lg p-4 border border-gray-700">
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      transition={{ delay: 0.1 * i }}
                      className="pl-6 relative text-gray-300 text-sm leading-relaxed"
                    >
                      <span className="absolute left-0 top-1.5 w-2 h-2 bg-blue-500 rounded-full"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Exp;
