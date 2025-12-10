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
    },
    {
        name: "magnetic-stack",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/avatars/magnetic-stack.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "detailed-popover-avatar",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/avatars/detailed-popover-avatar.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "glass-pill-breadcrumb",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/breadcrumbs/glass-pill-breadcrumb.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "spotlight-chevron-breadcrumb",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/breadcrumbs/spotlight-chevron-breadcrumb.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "spotlight-slash-breadcrumb",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/breadcrumbs/spotlight-slash-breadcrumb.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "accordion-carousel",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/carousel/accordion-carousel.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "hero-classic-carousel",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/carousel/hero-classic-carousel.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "multi-stream-carousel",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/carousel/multi-stream-carousel.tsx",
                type: "registry:component",
            }
        ]
    },
    {
        name: "simple-dialog",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/dialogs/simple-dialog.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "depth-stack-dialog",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/dialogs/depth-stack-dialog.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "simple-bento",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/bento-grids/simple-bento.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "feature-showcase-bento",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/bento-grids/feature-showcase-bento.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "shimmer-input",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/inputs/shimmer-input.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "floating-label-input",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/inputs/floating-label-input.tsx",
                type: "registry:component",
            }
        ],
    },
    {
        name: "smart-textarea",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        files: [
            {
                path: "src/components/phexarui/inputs/smart-textarea.tsx",
                type: "registry:component",
            }
        ],
    }
]
