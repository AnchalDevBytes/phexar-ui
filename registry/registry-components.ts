import type { Registry } from "./schema";

export const component: Registry = [
    {
        name: "ai-input-01",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "src/components/phexarui/ai-input/ai-input-01.tsx",
                type: "registry:component",
            },
            {
                path: "src/hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            }
        ]
    },
    {
        name: "ai-input-02",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "src/components/phexarui/ai-input/ai-input-02.tsx",
                type: "registry:component",
            },
            {
                path: "src/hooks/use-file-input.ts",
                type: "registry:hook",
            },
            {
                path: "src/hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "ai-input-03",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "src/components/phexarui/ai-input/ai-input-03.tsx",
                type: "registry:component",
            },
            {
                path: "src/hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "ai-input-04",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "src/components/phexarui/ai-input/ai-input-04.tsx",
                type: "registry:component",
            },
            {
                path: "src/hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "ai-input-05",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "src/components/phexarui/ai-input/ai-input-05.tsx",
                type: "registry:component",
            },
            {
                path: "src/hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "ai-input-06",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["textarea"],
        files: [
            {
                path: "src/components/phexarui/ai-input/ai-input-06.tsx",
                type: "registry:component",
            },
            {
                path: "src/hooks/use-auto-resize-textarea.ts",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "card-02",
        type: "registry:component",
        dependencies: ["lucide-react"],
        registryDependencies: ["button"],
        files: [
            {
                path: "src/components/phexarui/card/card-02.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "action-search-bar",
        type: "registry:component",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["input"],
        files: [
            {
                path: "src/components/phexarui/action-search-bar.tsx",
                type: "registry:component",
            },
            {
                path: "src/hooks/use-debounce.ts",
                type: "registry:hook",
            },
        ],
    },
]
