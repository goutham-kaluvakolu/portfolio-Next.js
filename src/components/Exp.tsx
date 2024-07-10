const Exp = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Full Stack Software Developer
          </h2>
          <div className="flex items-center mb-4">
            <a 
              href="https://wearemiq.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              MiQ
            </a>
            <span className="mx-2 text-gray-400">·</span>
            <span className="text-lg text-gray-600">Internship</span>
          </div>
          <div className="text-sm text-gray-500 mb-6">
            <p>Nov 2020 - Sep 2021 · 11 mos</p>
            <p>Bangalore Urban, Karnataka, India · On-site</p>
          </div>
          <ul className="space-y-4 text-gray-700">
            {experiencePoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const experiencePoints = [
  "Developed and launched a white-label version of the core application for two major clients, expanding market reach and driving a 20% increase in annual revenue.",
  "Spearheaded a major codebase modernization initiative, converting 100+ React class components to functional components with hooks, resulting in a 20% improvement in application performance and 15% reduction in bundle size",
  "Engineered a high-performance RESTful API using React, Java Spring Boot, and AWS S3, enabling secure PDF downloads of campaign details, resulting in a 40% faster data retrieval for campaigns as PDF and demonstrating expertise in microservices architecture",
  "Developed a custom reusable component library, adopted by 4 internal teams, collaborating with UX/UI designersto improve visual consistency and streamline new feature development across multiple projects.",
  "Architected complex interdependent forms for a new dashboard feature using React and Redux, resulting in a 45% increase in campaign creation efficiency",
  "Implemented an automated testing suite using Selenium and JUnit, achieving 80% test coverage for critical paths and reducing production bugs by 60%.",
  "Managed bug tracking and resolution across 10+ application instances, utilizing Jenkins for CI/CD in an Agile Scrum environment, resulting in a 35% decrease in reported issues.",
  "Designed and implemented new RESTful endpoints using Java Spring Boot, expanding application functionalityand data analysis capabilities for improved decision-making.",
  "Engineered efficient data retrieval and UI enhancements using Angular, implementing search functionality andpagination for complex data tables, improving user experience and application performance.",
  "Authored comprehensive technical documentation for onboarding and APIs, reducing new developer ramp-up time by 30% and decreasing integration errors by 25% across Windows, React, and Java Spring Boot environments."
];

export default Exp;