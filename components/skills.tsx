'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { skillCategories } from '@/constants';

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="skills" className="py-20 bg-black/50">
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
                            Skills & Technologies
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit of technologies I use to build
                        modern web applications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{
                                duration: 0.5,
                                delay: categoryIndex * 0.1,
                            }}
                            className="relative group"
                        >
                            <div
                                className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
                            ></div>
                            <div className="relative bg-black border border-gray-800 rounded-lg p-6 h-full">
                                <div className="flex items-center mb-4">
                                    <div
                                        className={`p-2 rounded-md bg-gradient-to-r ${category.color} bg-opacity-10 text-white mr-3`}
                                    >
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-4">
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <motion.span
                                                key={skill}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.9,
                                                }}
                                                animate={
                                                    isInView
                                                        ? {
                                                              opacity: 1,
                                                              scale: 1,
                                                          }
                                                        : {
                                                              opacity: 0,
                                                              scale: 0.9,
                                                          }
                                                }
                                                transition={{
                                                    duration: 0.3,
                                                    delay:
                                                        categoryIndex * 0.1 +
                                                        skillIndex * 0.05 +
                                                        0.3,
                                                }}
                                                className={`px-3 py-1 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-300 hover:border-${
                                                    category.color.split(' ')[1]
                                                } transition-colors duration-300`}
                                            >
                                                {skill}
                                            </motion.span>
                                        ),
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
