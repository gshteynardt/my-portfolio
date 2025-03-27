'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

import { experiences } from '@/constants';
import { cn } from '@/lib/utils';


export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="experience" className="py-20 bg-black/50">
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
                            Experience
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 transform md:-translate-x-1/2"></div>

                        {/* Timeline items */}
                        {experiences.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={
                                    isInView
                                        ? { opacity: 1, y: 0 }
                                        : { opacity: 0, y: 30 }
                                }
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className={cn(
                                    'relative flex flex-col md:flex-row gap-8 mb-12',
                                    index % 2 === 0
                                        ? 'md:flex-row-reverse'
                                        : '',
                                )}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-black border-2 border-cyan-400 transform -translate-x-1/2 z-10">
                                    <div className="absolute inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse"></div>
                                </div>

                                {/* Content */}
                                <div
                                    className={cn(
                                        'w-full md:w-1/2 pl-10 md:pl-0 md:pr-10',
                                        index % 2 === 0
                                            ? 'md:pl-10 md:pr-0'
                                            : '',
                                    )}
                                >
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                        <div className="relative bg-black border border-gray-800 rounded-lg p-6">
                                            <div className="flex items-center mb-2">
                                                <div className="p-2 rounded-md bg-gray-800 text-cyan-400 mr-3">
                                                    {item.type === 'work' ? (
                                                        <Briefcase className="w-5 h-5" />
                                                    ) : (
                                                        <GraduationCap className="w-5 h-5" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-cyan-400">
                                                        {item.company}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mb-3 inline-block px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">
                                                {item.period}
                                            </div>
                                            <p className="text-gray-400">
                                                {item.description}
                                            </p>
                                            <ul className="mt-3 space-y-1 text-gray-400">
                                                {item.achievements.map(
                                                    (achievement, i) => (
                                                        <li
                                                            key={i}
                                                            className="flex items-start text-sm text-white"
                                                        >
                                                            <span className="text-cyan-400 mr-2">
                                                                •
                                                            </span>
                                                            <span>
                                                                {achievement}
                                                            </span>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
