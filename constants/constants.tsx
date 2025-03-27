import { Github, Linkedin, Code2, Mail, MapPin, Send } from 'lucide-react';

export const GIT_HUB = 'https://github.com/gshteynardt';
export const LEET_CODE = 'https://leetcode.com/u/gshteynardt/';
export const LINKED_IN = 'https://www.linkedin.com/in/gshteynardt/';
export const TELEGRAM = 'https://t.me/gshteynardt';

export const socialLinks = [
    {
        icon: <Github className="w-5 h-5" />,
        href: GIT_HUB,
        label: 'GitHub',
    },
    {
        icon: <Linkedin className="w-5 h-5" />,
        href: LINKED_IN,
        label: 'LinkedIn',
    },
    {
        icon: <Send className="w-5 h-5" />,
        href: TELEGRAM,
        label: 'Telegram',
    },
    {
        icon: <Code2 className="w-5 h-5" />,
        href: LEET_CODE,
        label: 'LeetCode',
    },
];

export const contactInfo = [
    {
        icon: <Mail className="w-5 h-5" />,
        title: 'Email',
        value: 'gvshteynardt@gmail.com',
        link: 'mailto:gvshteynardt@gmail.com',
    },
    {
        icon: <MapPin className="w-5 h-5" />,
        title: 'Location',
        value: 'Tel Aviv, Israel',
        link: 'https://maps.google.com/?q=Tel+Aviv,+Israel',
    },
];

export const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];
