export const projects = [
    {
        id: 1,
        title: 'Yandex Tracker',
        type: 'work',
        description:
            'Yandex Tracker enables efficient task tracking, project management, resource allocation, and team collaboration. It’s a versatile tool for streamlining processes and increasing transparency by bringing all projects and workflows together in one place.',
        image: '/gant-chart.png',
        tags: [
            'React',
            'TypeScript',
            'SCSS',
            'Redux',
            'Playwright',
            'Storybook',
            'Jest',
            'Node.js',
        ],
        demo: 'https://yandex.cloud/en/services/tracker',
    },
    {
        id: 2,
        title: 'Unistore',
        type: 'work',
        description:
            'A full-featured e-commerce platform that allows individuals and businesses to create online stores to sell products. It provides tools for managing inventory, payments, shipping, and storefront design—all without needing advanced technical skills.',
        image: '/unistore.png',
        tags: [
            'React',
            'Svelte',
            'Vanila JS',
            'TypeScript',
            'SCSS',
            'Jest',
            'GraphQl',
        ],
        demo: 'https://my.unistore.com/#/sign-in',
    },
    {
        id: 3,
        title: 'Consistent Random Color Generation',
        type: 'pet',
        description:
            'I developed a function that generates unique and consistent colors for UI elements (avatars, folders, projects) using an ID as an entropy seed.',
        keyAspects: [
            'Colors remain consistent across sessions for the same ID',
            'Optimized for both light and dark themes',
            'Maintain visual harmony throughout the interface',
            'Generated in HSL with controlled saturation and lightness',
            'Automatically choose black or white text based on W3C contrast standards',
        ],
        image: '/generate-colors.png',
        tags: ['React', 'Zustand', 'TypeScript', 'Jest', 'Storybook', 'SCSS', 'UX', 'Accessibility'],
        github: 'https://github.com/gshteynardt/color-generator',
        demo: 'https://gshteynardt.github.io/color-generator/',
    },
    {
        id: 4,
        title: 'Vehicle Tracking and Monitoring System',
        type: 'work',
        description:
            'Information and Analytical System for Vehicle Fleet Monitoring. Used by the Moscow City Transport Department.',
        keyAspects: [
            'Real-time monitoring of vehicles',
            'Tracking the movement history of each vehicle',
            'Monitoring stop and idle times',
            'Detecting when and where vehicles deviate from assigned routes',
            'Generating analytical reports on fleet movement and operational efficiency',
        ],
        image: '/monitoring-system.png',
        tags: ['Vue', 'PostgreSQL', 'GLONASS', 'Telematics'],
    },
];
