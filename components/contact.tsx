'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import {
    contactInfo,
    GIT_HUB,
    LEET_CODE,
    LINKED_IN,
    TELEGRAM,
} from '@/constants';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <section id="contact" className="py-20">
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
                            Get in Touch
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or want to collaborate? Feel free
                        to reach out!
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={
                            isInView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 30 }
                        }
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-25"></div>
                            <div className="relative bg-black border border-gray-800 rounded-lg p-8 md:p-10">
                                <h3 className="text-2xl font-bold mb-8 text-center">
                                    Contact Information
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {contactInfo.map((item, index) => (
                                        <motion.a
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={
                                                isInView
                                                    ? { opacity: 1, y: 0 }
                                                    : { opacity: 0, y: 20 }
                                            }
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.3 + index * 0.1,
                                            }}
                                            className="flex flex-col items-center text-center group p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-colors"
                                        >
                                            <div className="p-3 rounded-md bg-gray-800 text-cyan-400 mb-4 group-hover:bg-cyan-400 group-hover:text-black transition-colors">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-gray-400 text-sm mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-white group-hover:text-cyan-400 transition-colors">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>

                                <div className="mt-12">
                                    <h4 className="text-lg font-semibold mb-4 text-center">
                                        Follow Me
                                    </h4>
                                    <div className="flex justify-center space-x-6">
                                        <a
                                            href={GIT_HUB}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-md bg-gray-800 text-white hover:bg-cyan-400 hover:text-black transition-colors"
                                            aria-label="GitHub"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        </a>
                                        <a
                                            href={LINKED_IN}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-md bg-gray-800 text-white hover:bg-cyan-400 hover:text-black transition-colors"
                                            aria-label="LinkedIn"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                            </svg>
                                        </a>
                                        <a
                                            href={TELEGRAM}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-md bg-gray-800 text-white hover:bg-cyan-400 hover:text-black transition-colors"
                                            aria-label="Telegram"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                                                <path d="m21.854 2.147-10.94 10.939" />
                                            </svg>
                                        </a>
                                        <a
                                            href={LEET_CODE}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-md bg-gray-800 text-white hover:bg-cyan-400 hover:text-black transition-colors"
                                            aria-label="LeetCode"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
