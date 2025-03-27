'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';
import { navItems } from '@/constants';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const isMobile = useMobile();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20'
                    : 'bg-transparent',
            )}
        >
            <link rel="icon" href="/favicon.ico" />
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            &lt;/&gt;
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                className="relative text-gray-300 hover:text-cyan-400 transition-colors group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                            </motion.a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        onClick={toggleMenu}
                        className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobile && (
                <motion.nav
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isOpen ? 'auto' : 0,
                        opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className={cn(
                        'overflow-hidden bg-black/90 backdrop-blur-md border-b border-cyan-500/20',
                        !isOpen && 'pointer-events-none',
                    )}
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: isOpen ? 1 : 0,
                                    x: isOpen ? 0 : -20,
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.1,
                                }}
                                onClick={() => setIsOpen(false)}
                                className="text-gray-300 hover:text-cyan-400 transition-colors py-2 border-b border-gray-800"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.nav>
            )}
        </header>
    );
}
