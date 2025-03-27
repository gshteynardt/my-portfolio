'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, Briefcase, Lightbulb } from 'lucide-react';
import Image from 'next/image';

import { projects } from '@/constants';

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [expandedProjects, setExpandedProjects] = useState<number[]>([]);

    const toggleProjectDetails = (projectId: number) => {
        setExpandedProjects((prev) =>
            prev.includes(projectId)
                ? prev.filter((id) => id !== projectId)
                : [...prev, projectId],
        );
    };

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            My Work
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A showcase of my recent projects and applications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group h-full"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-black border border-gray-800 rounded-lg overflow-hidden h-full flex flex-col">
                                <div className="h-48 overflow-hidden">
                                    <Image
                                        src={
                                            project.image || '/placeholder.svg'
                                        }
                                        alt={project.title}
                                        width={800}
                                        height={500}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-3 right-3">
                                        <div
                                            className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${
                                                project.type === 'work'
                                                    ? 'bg-blue-500/80 text-white'
                                                    : 'bg-cyan-500/80 text-white'
                                            }`}
                                        >
                                            {project.type === 'work' ? (
                                                <>
                                                    <Briefcase className="w-3 h-3" />
                                                    <span>Work</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Lightbulb className="w-3 h-3" />
                                                    <span>Pet Project</span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    {/* Removed the darkening overlay effect */}
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 flex-grow">
                                        {project.description}
                                    </p>
                                    {/* Key Aspects Section */}
                                    {project.keyAspects && (
                                        <div className="mb-4 flex-grow">
                                            <button
                                                onClick={() =>
                                                    toggleProjectDetails(
                                                        project.id,
                                                    )
                                                }
                                                className="flex items-center justify-between w-full text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors mb-2"
                                            >
                                                <span>Key Features</span>
                                                {expandedProjects.includes(
                                                    project.id,
                                                ) ? (
                                                    <ChevronUp className="w-4 h-4" />
                                                ) : (
                                                    <ChevronDown className="w-4 h-4" />
                                                )}
                                            </button>

                                            {expandedProjects.includes(
                                                project.id,
                                            ) && (
                                                <motion.ul
                                                    initial={{
                                                        opacity: 0,
                                                        height: 0,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        height: 'auto',
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        height: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                    }}
                                                    className="text-sm text-gray-400 space-y-1 pl-2 border-l-2 border-cyan-500/30 ml-1"
                                                >
                                                    {project.keyAspects.map(
                                                        (aspect, i) => (
                                                            <li
                                                                key={i}
                                                                className="py-1"
                                                            >
                                                                <span className="text-cyan-400 mr-2">
                                                                    •
                                                                </span>
                                                                {aspect}
                                                            </li>
                                                        ),
                                                    )}
                                                </motion.ul>
                                            )}
                                        </div>
                                    )}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {/* Show all tags instead of limiting to 3 */}
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors text-sm"
                                            >
                                                <Github className="w-4 h-4" />
                                                <span>GitHub</span>
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:from-cyan-600 hover:to-blue-600 transition-colors text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                <span>Live Demo</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
