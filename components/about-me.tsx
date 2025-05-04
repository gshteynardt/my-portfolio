'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { socialLinks } from '@/constants';

import TerminalText from './ui/terminal-text';
import ParticleBackground from './ui/particle-background';

export default function AboutMe() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            id="about"
            className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden"
        >
            <ParticleBackground />
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{
                            opacity: visible ? 1 : 0,
                            x: visible ? 0 : -50,
                        }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-25"></div>
                            <div className="relative bg-black/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 overflow-hidden">
                                <div className="flex items-center mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                    <div className="ml-2 text-xs text-gray-400">
                                        user@portfolio ~{' '}
                                    </div>
                                </div>
                                <div className="flex items-baseline space-x-4">
                                    <TerminalText
                                        text="Hello, I'm German Shteynardt"
                                        className="text-2xl font-bold mb-4"
                                        delay={1000}
                                        isLast={false}
                                        customStyle="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
                                    />
                                </div>
                                <TerminalText
                                    text="A Frontend engineer with 4+ years of experience"
                                    className="text-xl text-blue-400 mb-4"
                                    delay={2000}
                                    isLast={false}
                                />
                                <TerminalText
                                    text="I build modern web applications with cutting-edge technologies. Passionate about creating clean, efficient, and user-friendly solutions to complex problems."
                                    className="text-gray-300 mb-6"
                                    delay={3500}
                                    speed={10}
                                    isLast={true}
                                    cursor={true}
                                />
                                <div className="flex flex-wrap gap-4 mt-8">
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.2,
                                            }}
                                            className="group flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-md hover:border-cyan-500 transition-all duration-300"
                                        >
                                            <span className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                                                {link.icon}
                                            </span>
                                            <span className="text-gray-300 group-hover:text-white transition-colors">
                                                {link.label}
                                            </span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{
                            opacity: visible ? 1 : 0,
                            x: visible ? 0 : 50,
                        }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="order-1 lg:order-2"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Building Digital
                            </span>
                            <br />
                            <span className="relative">
                                Experiences
                                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">
                            Transforming ideas into elegant, functional, and
                            responsive web applications.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: visible ? 1 : 0,
                                    y: visible ? 0 : 20,
                                }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                                className="relative inline-flex items-center px-6 py-3 overflow-hidden text-lg font-medium text-white bg-black border border-cyan-500 rounded-md group"
                            >
                                <span className="absolute left-0 block w-full h-0 transition-all bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                                <span className="relative">Get in touch</span>
                                <span className="relative ml-2 transition-transform duration-300 transform translate-x-0 group-hover:translate-x-1">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        ></path>
                                    </svg>
                                </span>
                            </motion.a>
                            <motion.a
                                href="#projects"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: visible ? 1 : 0,
                                    y: visible ? 0 : 20,
                                }}
                                transition={{ duration: 0.5, delay: 1 }}
                                className="relative inline-flex items-center px-6 py-3 overflow-hidden text-lg font-medium text-white bg-black border border-gray-700 rounded-md hover:border-blue-500 transition-colors duration-300"
                            >
                                <span className="relative">View My Work</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
