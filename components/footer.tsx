'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-gray-800">
            <div className="container mx-auto px-4 py-8">
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-25"></div>
                    <div className="relative bg-black border border-gray-800 rounded-lg p-6">
                        <div className="flex flex-col items-center justify-center">
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <div className="ml-2 text-xs text-gray-400">
                                    user@portfolio ~{' '}
                                </div>
                            </div>
                            <div className="font-mono text-sm text-gray-400">
                                <span className="text-cyan-400">$</span> echo{' '}
                                <span className="text-green-400">
                                    "© {currentYear} All rights reserved"
                                </span>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
                                <p>
                                    Designed and built with ❤️ using Next.js,
                                    Tailwind CSS, and Framer Motion
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
