"use client";

import { useState } from "react";
import { Preview } from "./preview-generation";
import { ErrorGeneration } from "./error-generation";
import { FormGeneration } from "./form-generation";
import { HeaderGeneration } from "./header-generation";

interface CardSettings {
    style: string;
    backgroundColor: string;
    lighting: string;
    pose: string;
    aspectRatio: string;
}

export default function AICardGeneration() {
    const [showForm, setShowForm] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [settings, setSettings] = useState<CardSettings>({
        style: "artistic",
        backgroundColor: "studio",
        lighting: "studio",
        pose: "profile",
        aspectRatio: "4:5",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setShowForm(false);
        setIsLoading(true);
        setError(null);

        try {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            setShowForm(false);
        } catch (err) {
            setError("Failed to generate video. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleBackToSettings = () => {
        setShowForm(true);
        setError(null);
    };

    return (
        <div className="group relative overflow-hidden w-full max-w-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] min-h-[500px] flex flex-col justify-between gap-2">
            <HeaderGeneration />
            <div className="flex-1 overflow-hidden flex flex-col">
                {error && <ErrorGeneration error={error} />}

                {showForm ? (
                    <FormGeneration
                        onSubmit={handleSubmit}
                        settings={settings}
                        onSettingsChange={setSettings}
                    />
                ) : (
                    <div className="p-4">
                        <Preview
                            isLoading={isLoading}
                            imageUrl="https://ferf1mheo22r9ira.public.blob.vercel-storage.com/profile-mjss82WnWBRO86MHHGxvJ2TVZuyrDv.jpeg"
                        />

                        {!isLoading && (
                            <div className="space-y-4">
                                <div className="p-3 space-y-2 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-neutral-500">
                                            Quality
                                        </span>
                                        <span className="text-neutral-900 dark:text-neutral-100">
                                            1080p
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-neutral-500">
                                            Duration
                                        </span>
                                        <span className="text-neutral-900 dark:text-neutral-100">
                                            00:07
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between gap-2">
                                    <button
                                        type="button"
                                        onClick={handleBackToSettings}
                                        className="w-full h-9 flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm font-medium rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                                    >
                                        Back to Settings
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full h-9 flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-900 text-white text-sm font-medium rounded-xl transition-colors"
                                    >
                                        Download
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
