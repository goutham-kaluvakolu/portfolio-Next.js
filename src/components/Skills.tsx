import React from 'react';
import { SiJavascript, SiNodedotjs, SiReact, SiNextdotjs, SiPostgresql, SiMongodb, SiMysql, SiScala, SiPytorch, SiTensorflow, SiRedux, SiTypescript, SiPython, SiRecoil, SiSpring, SiSpringboot, SiAmazonaws, SiDocker, SiLinux } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const skillsData = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'SQL', icon: FaDatabase },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Scala', icon: SiScala },
    { name: 'PyTorch', icon: SiPytorch },
    { name: 'TensorFlow', icon: SiTensorflow },
    { name: 'Redux', icon: SiRedux },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Python', icon: SiPython },
    { name: 'Recoil', icon: SiRecoil },
    { name: 'Spring', icon: SiSpring },
    { name: 'Spring Boot', icon: SiSpringboot },
    { name: 'AWS', icon: SiAmazonaws },
    { name: 'Docker', icon: SiDocker },
    { name: 'Agile/Scrum', icon: SiReact }, // Use a generic icon as placeholder
    { name: 'Linux', icon: SiLinux },
];

const Skills = () => {
    const half = Math.ceil(skillsData.length / 2);
    return (
        <div className="min-h-screen p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 ">
                    Skills
                </h1>
                <div className="overflow-x-hidden overflow-y-hidden">
                    <div className="flex m-4">
                        {skillsData.slice(0, half).map((skill, index) => (
                            <div
                                key={`${skill.name}-left`}
                                className={`group relative flex flex-col items-center px-6 animate-scroll-left`}
                            >
                                <skill.icon className="text-6xl text-gray-700 group-hover:text-indigo-600 transition-colors duration-300" />
                                <span className="absolute bottom-0 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-gray-700 bg-white shadow-md rounded-lg py-1 px-2 text-sm">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="flex m-4">
                        {skillsData.slice(half, skillsData.length).map((skill, index) => (
                            <div
                                key={`${skill.name}-right`}
                                className={`group relative flex flex-col items-center px-6 animate-scroll-right`}
                            >
                                <skill.icon className="text-6xl text-gray-700 group-hover:text-indigo-600 transition-colors duration-300" />
                                <span className="absolute bottom-0 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-gray-700 bg-white shadow-md rounded-lg py-1 px-2 text-sm">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Skills;
