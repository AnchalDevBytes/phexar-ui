import type { Registry } from "./schema";

export const component: Registry = [
    {
        name: "ai-search-bar",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "src/components/phexarui/searchbars/ai-search-bar.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "elastic-search-bar",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["input"],
        files: [
            {
                path: "src/components/phexarui/searchbars/elastic-search-bar.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "dev-card",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/cards/dev-card.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "focus-blur-card",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/cards/focus-blur-card.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "ghost-stack-card",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/cards/ghost-stack-card.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "sensor-card",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/cards/sensor-card.tsx",
                type: "registry:component",
            }
        ],
    }
]
