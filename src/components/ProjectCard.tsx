import React from 'react'

type projectCardProps = { name: string, html_url: string, description: string, created_at: string, homepage: string, topics: string[] }

const ProjectCard = ({ name, html_url, description, created_at, homepage, topics }: projectCardProps) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-6 m-2 bg-white border border-gray-200 rounded-lg shadow" style={{minWidth: '300px', maxWidth: '500px', minHeight: '300px'}}>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">{name}</h5>
            <p className="mb-3 font-normal text-gray-500 overflow-hidden ">{description}</p>
            <div className='flex flex-wrap'>
                {
                    topics.length > 0 && topics.map((i) => {
                        return <span key={i} className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded m-3">{i}</span>
                    })
                }
            </div>
            <div className='flex justify-between mt-2'>
                {homepage && 
                <a href={homepage} target="blank" className="inline-flex font-medium items-center text-blue-600 hover:underline ">
                    WEBSITE
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                </a>}

                <a href={html_url} target="blank" className="inline-flex font-medium items-center text-blue-600 hover:underline ">
                    github
                    <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                </a>
            </div>
        </div>

    )
}

export default ProjectCard