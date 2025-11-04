export interface NavItem {
    id : string | number;
    title : string;
    href : string;
    description?: string;
    count?: number;
    isComingSoon?: boolean;
    isNew?: boolean;
    isLab?: boolean;
}

export interface NavSection {
    title : string;
    items : NavItem[];
}

export const navigationSection : NavSection[] = [
    {
        title: "Getting started",
        items: [
            {
                id: "getting-started",
                title: "Getting started",
                href: "/docs",
                description: "Getting started with Phexar UI",
            },
        ],
    },
    {
        title: "Components",
        items: [
            {
                id: 1,
                title: "AIInput",
                href: "/docs/components/ai-input",
                description: "AIInput",
                count: 5,
            },
        ],
    },
    {
        title : "Blocks",
        items : [
            {
                id : 1,
                title : "AIInput",
                href : "/docs/blocks/ai-input",
                description : "AIInput",
                count : 5,
            },
        ]
    }
];