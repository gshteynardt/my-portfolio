import {
    CheckCircle,
    Code,
    Database,
    Globe,
    Layers,
    Server,
    Zap,
} from 'lucide-react';

export const skillCategories = [
    {
        title: 'Frontend Frameworks',
        icon: <Code className="w-6 h-6" />,
        skills: ['React', 'Svelte'],
        color: 'from-cyan-400 to-blue-500',
    },
    {
        title: 'State Management',
        icon: <Layers className="w-6 h-6" />,
        skills: [
            'Redux',
            'Redux Toolkit',
            'Zustand',
            'Context API',
            'Immer',
            'Memoization',
            'Reselect',
        ],
        color: 'from-cyan-400 to-blue-500',
    },
    {
        title: 'Testing & UI Kits',
        icon: <CheckCircle className="w-6 h-6" />,
        skills: [
            'Playwright',
            'Jest',
            'React Testing Library',
            'Storybook',
            'E2E Testing',
            'Unit Testing',
        ],
        color: 'from-cyan-400 to-blue-500',
    },
    {
        title: 'DevOps',
        icon: <Server className="w-6 h-6" />,
        skills: ['Docker', 'CI/CD', 'Vercel'],
        color: 'from-cyan-400 to-blue-500',
    },
    {
        title: 'Performance Optimization',
        icon: <Zap className="w-6 h-6" />,
        skills: [
            'Lazy Loading',
            'Code Splitting',
            'Tree Shaking',
            'Memoization',
            'Virtualization',
        ],
        color: 'from-cyan-400 to-blue-500',
    },
    {
        title: 'Backend (BFF Layer)',
        icon: <Database className="w-6 h-6" />,
        skills: ['Node.js'],
        color: 'from-cyan-400 to-blue-500',
    },
    {
        title: 'Other',
        icon: <Globe className="w-6 h-6" />,
        skills: ['Git', 'GraphQL', 'REST API', 'WebSockets'],
        color: 'from-cyan-400 to-blue-500',
    },
];
