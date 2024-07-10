
const Edu = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Education</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <ol className=" relative border-s border-gray-200 m-10">
        <li className="mb-10 ms-4">
          <div>
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <p className="mb-1 text-sm font-normal leading-none text-gray-500 ">AUG 2022 - May 2024</p>
          <h3 className="text-lg font-semibold text-gray-900"><a href="https://www.uta.edu/" target="_blank">University of Texas at Arlington</a></h3>
          <p className="mb-4 text-base font-normal text-gray-600">Masters in Computer Science</p>
          <a href="https://drive.google.com/file/d/1np-wNg8zr8rCqE_rjEXF0XLPlx8iJ6X5/view?usp=sharing" target ="_blank" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-gray-200 rounded-lg hover:bg-gray-700 hover: focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-white">
          View Degree
          <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg></a>
          </div>
        </li>

        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border border-white "></div>
          <p className="mb-1 text-sm font-normal leading-none text-gray-500 ">AUG 2017 - Aug 2021</p>
          <h3 className="text-lg font-semibold text-gray-900  "><a href="https://www.lpu.in/" target="_blank">Lovely Professional University</a></h3>
          <p className="mb-4 text-base font-normal text-gray-600 ">Bachelors in Computer Science and Engineering</p>
          <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-gray-200 rounded-lg hover:bg-gray-700 hover: focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-white">View Degree<svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg></a>
        </li>
      </ol>
      </div>
    </div>
  )
}

export default Edu