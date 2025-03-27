'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TerminalTextProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number;
    cursor?: boolean;
    isLast?: boolean;
    customStyle?: string;
}

export default function TerminalText({
    text,
    className,
    delay = 0,
    speed = 30,
    cursor = true,
    isLast = false,
    customStyle,
}: TerminalTextProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        timeout = setTimeout(() => {
            setIsTyping(true);
            let currentIndex = 0;

            const intervalId = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.substring(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(intervalId);
                    setIsTyping(false);
                }
            }, speed);

            return () => clearInterval(intervalId);
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, delay, speed]);

    return (
        <div className={cn('font-mono', className)}>
            <span className={customStyle}>{displayedText}</span>
            {isLast && (isTyping || cursor) && (
                <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-blink"></span>
            )}
        </div>
    );
}
