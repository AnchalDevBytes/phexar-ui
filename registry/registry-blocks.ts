import type { Registry } from "./schema";

export const block: Registry = [
    {
        name: "ai-card-generation",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: ["button", "input", "select", "textarea"],
        files: [
            {
                path: "src/components/phexarui/blocks/ai-card-generation/ai-card-generation.tsx",
                type: "registry:component",
            },
            {
                path: "src/components/phexarui/blocks/ai-card-generation/header-generation.tsx",
                type: "registry:component",
            },
            {
                path: "src/components/phexarui/blocks/ai-card-generation/form-generation.tsx",
                type: "registry:component",
            },
            {
                path: "src/components/phexarui/blocks/ai-card-generation/settings-generation.tsx",
                type: "registry:component",
            },
            {
                path: "src/components/phexarui/blocks/ai-card-generation/preview-generation.tsx",
                type: "registry:component",
            },
            {
                path: "src/components/phexarui/blocks/ai-card-generation/error-generation.tsx",
                type: "registry:component",
            },
        ],
    }
];
