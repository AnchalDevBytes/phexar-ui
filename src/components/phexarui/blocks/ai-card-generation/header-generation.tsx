import React from "react";

export const HeaderGeneration = () => {
    return (
        <div className="p-4 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3">
                <div>
                    <h3 className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                        AI Portrait Generation
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        Create stunning portraits with AI
                    </p>
                </div>
            </div>
        </div>
    );
};
