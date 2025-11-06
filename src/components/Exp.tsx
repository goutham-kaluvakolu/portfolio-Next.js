"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Exp = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      period: "May 2025 - Sept 2025",
      role: "Full Stack Java Developer",
      company: "KGS Tech",
      location: "Texas, USA",
      description: [
        "Contributed to the design and implementation of microservices for a next-generation patient management system using Java, Spring Boot, and React, reducing average data retrieval time by 60% through optimized database queries and Redis caching mechanisms."
"Developed and optimized RESTful APIs with Spring Boot during migration from legacy systems, identifying performance bottlenecks in slow APIs and implementing solutions including query optimization, caching strategies, and asynchronous processing, supporting up to 10,000 daily requests with 99% uptime."
"Integrated third-party payment and insurance APIs with comprehensive Swagger/OpenAPI documentation, automating claim processing workflows and reducing manual data entry by 70%."
"Integrated Python-based AI microservices for predictive analytics and automated patient risk scoring, enhancing clinical decision support and demonstrating cross-language integration within a Java-based healthcare ecosystem."
"Engineered responsive, accessible user interfaces with React, Redux, and ES6+, improving accessibility scores from 75% to 95% and ensuring WCAG 2.1 compliance for healthcare regulatory standards."
"Implemented comprehensive test automation frameworks using JUnit, Selenium, and PyTest, increasing test coverage by 40% and accelerating defect detection by 50% across the patient management platform."
"Built and deployed containerized microservices on AWS (EC2, Lambda, S3) using Docker, improving system scalability by 30% and supporting seamless deployment of multiple services across development and production environments."
      ]
    },
    {
      id: 2,
      period: "Nov 2024 –  Present",
      role: "Founding Developer",
      company: "Third I AI",
      location: "Remote",
      description: 
      [
        "Safe Circle - Privacy-First Safety Monitoring Mobile Application (Android/iOS)",
        "Architected and developed a cross-platform location-based safety application using React Native and Expo, implementing a privacy-first Geofencing and SLD (Significant Location Change Detection) architecture. This ensures event-based safety monitoring instead of continuous tracking, reducing data collection volume.",
        "Engineered a power-optimized location service leveraging OS-native Geofencing APIs for accurate entry/exit detection of designated safe zones. This replacement of the custom velocity-based system improved detection reliability and reduced device battery consumption by over 60%.",
        "Re-designed the scalable backend infrastructure (JWT, OAuth 2.0) to process and display location status (e.g., 'Entered Home Zone') rather than continuous coordinates on the real-time circle status dashboard, aligning the feature set with a strong user privacy model.",
        "Developed a multi-user circle management system supporting unlimited members with role-based permissions, dynamic admin controls (add/remove, revoke), automatic admin handoff on departure, and optional solo tracking mode."
      ]
    },
    {
      id: 3,
      period: "Nov 2024 –  Present",
      role: "Founding Developer",
      company: "Third I AI",
      location: "Remote",
      description: 
     [
       "AURA - AI-Powered Enterprise Data Analysis Platform",
        "Co-founded and architected an enterprise-grade 'Analyst in a Box' platform providing universal database connectivity across 12+ data sources including PostgreSQL, MongoDB, Snowflake, BigQuery, and Databricks.",
        "Developed microservices architecture using FastAPI backend and React TypeScript frontend, integrating Google Gemini AI for natural language queries and achieving interactive data analysis with Chart.js visualizations.",
        "Engineered Docker-containerized deployment pipeline with automated health monitoring and one-command setup scripts, reducing deployment time by 90% and enabling seamless team collaboration.",
        "Designed four-mode system architecture (Chat, Database, Visualization, Strategy) supporting cross-platform data connectivity for retail POS, e-commerce, and advertising analytics, delivering real-time business intelligence capabilities."
    ]
    },
    {
      id: 4,
      period: "Nov 2020 – Sept 2021",
      role: "Software Development Engineer",
      company: "Miq Digital",
      location: "India, Remote",
      description: [
  "Expanded market reach and drove a 20% increase in Annual Recurring Revenue (ARR) by developing two white-label versions for major clients.",
  "Spearheaded codebase modernization, converting over 100 React class components to functional components with Hooks, resulting in a 20% improvement in application performance and a 15% reduction in bundle size.",
  "Engineered high-performance RESTful APIs using Java Spring Boot and AWS S3 to manage complex business logic, including secure, on-demand PDF generation and streaming.",
  "Developed a custom, reusable React component library adopted by four internal teams, collaborating with UX/UI to enhance consistency and streamline feature development.",
  "Architected complex, data-driven forms using React/Redux to manage interdependent state, implementing debouncing and chained API calls, which increased campaign creation efficiency by 45%.",
  "Implemented a robust automated testing suite (Selenium/JUnit), achieving 80% test coverage for critical paths and reducing production bugs by 60%.",
  "Introduced and implemented server-side and client-side pagination strategies for large table datasets in React, optimizing UI performance and enabling efficient handling of over 10,000 records with advanced search and filtering capabilities.",
  "Authored comprehensive technical documentation (APIs, onboarding, architecture) across React/Java Spring Boot environments, reducing new developer ramp-up time by 30%.",
  "Managed bug resolution using Jenkins for CI/CD in an Agile Scrum environment, contributing to a 35% decrease in reported issues across application instances."
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
