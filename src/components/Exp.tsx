const Exp = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Experience</h2>
      <div className="md:flex md:space-between">
        
        {expData.map((data, index) =>  (
          <div className="p-8 bg-white shadow-lg rounded-lg overflow-hidden m-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {data.role}
          </h2>
          <div className="flex items-center mb-4">
            <a 
              href="https://wearemiq.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              {data.client}
            </a>
            <span className="mx-2 text-gray-400">·</span>
            {/* <span className="text-lg text-gray-600">Internship</span> */}
          </div>
          <div className="text-sm text-gray-500 mb-6">
            <p>{data.timeLine}</p>
            <p></p>
          </div>
          <ul className="space-y-4 text-gray-700">
            {data.experiencePoints.map((point, index) => (
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
        ))}
          
      </div>
    </div>
  )
}

const expData = [
  {
    role: "Full Stack Software Developer",
    client: "Molina Healthcare",
    timeLine: "Sep 2023 - Present · ~ 1 yr",
    location:"USA · Remote",
    experiencePoints: [
      "Spearheaded the development of a novice patient management system, resulting in a 60% reduction in data retrieval time, and a 35% increase in user satisfaction scores",
      "Orchestrated microservices using Spring Boot and Docker, resulting in a 30% increase in application scalability and a 25% reduction in deployment time",
      "Engineered RESTful APIs, processing over 1 million requests per day with 99.9% uptime",
      "Optimized database queries and implemented caching mechanisms, leading to a 40% reduction in application response time",
      "Built responsive and intuitive user interfaces using Angular, improving the application's accessibility score from 75% to 95%",
      "Collaborated with the QA team to implement automated testing using JUnit and Selenium, increasing test coverage by 40% and reducing bug detection time by 50%",
      "Guided a team of 5 developers in adopting best practices for code reviews and documentation, resulting in a 30% decrease in post-release defects",
      "Established CI/CD pipelines using Jenkins and AWS, reducing deployment time from 2 hours to 15 minutes",
      "Conducted knowledge-sharing sessions on advanced Java concepts and design patterns, improving team productivity by 25%",
      "Integrated third-party APIs for insurance claim processing, streamlining the workflow and reducing manual data entry by 70%"
    ]

  },
  {
    role: "Full Stack Software Developer",
    client: "C-Edge Technologies",
    timeLine: "Jul 2020 - Jun 2022 · 1 yr 11 mos",
    location:"Bangalore Urban, Karnataka, India · On-site",
    experiencePoints: [
      "Developed and maintained Java-based web applications for banking clients, serving over 500,000 daily active users",
      "Crafted responsive front-end designs using HTML5, CSS3, and JavaScript, improving mobile user experience by 40%",
      "Collaborated with a team of 8 developers to redesign the core banking module, resulting in a 25% increase in transaction processing speed",
      "Enhanced database performance through advanced SQL query refinement and strategic indexing, accelerating high-volume transactions by 35% and handling 10,000+ daily patient records efficiently",
      "Contributed to the development of a real-time fraud detection system using Java and machine learning algorithms, preventing an estimated $2 million in fraudulent transactions annually",
      "Implemented unit testing practices using JUnit, increasing code coverage from 60% to 85% and reducing post-release bugs by 30%",
      "Mentored 2 junior developers, improved team code quality and reduced technical debt by 20%",
      "Integrated payment gateway APIs, enabling secure transactions for over 1 million customers",
      "Authored comprehensive technical documentation, reducing onboarding time for new team members by 50%",
      "Participated in Agile ceremonies, contributing to sprint planning and retrospectives, which led to a 15% increase in team velocity"
    ]
    
  }
]


export default Exp;