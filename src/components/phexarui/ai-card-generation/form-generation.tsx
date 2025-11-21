import { MessageCircle, Sparkles } from "lucide-react";
import { SettingsGeneration } from "./settings-generation";
import { Input } from "@/components/ui/input";

interface VideoSettings {
    style: string;
    backgroundColor: string;
    lighting: string;
    pose: string;
    aspectRatio: string;
}

interface FormProps {
    onSubmit: (e: React.FormEvent) => void;
    settings: VideoSettings;
    onSettingsChange: (settings: VideoSettings) => void;
}

export const FormGeneration = ({
    onSubmit,
    settings,
    onSettingsChange,
}: FormProps) => {
    return (
        <form
            onSubmit={onSubmit}
            className="flex flex-col gap-2 flex-1 p-4 justify-between"
        >
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-neutral-500" />
                    <span className="text-sm text-neutral-500">Prompt</span>
                </div>
                <Input
                    type="text"
                    size={16}
                    defaultValue="Picture of a women with orange background"
                    placeholder="Describe the portrait you want to create..."
                    className="w-full bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 rounded-xl focus:outline-hidden focus-visible:ring-offset-0 focus-visible:ring-0 focus-visible:border-neutral-900 dark:focus-visible:border-neutral-100"
                />
            </div>

            <SettingsGeneration
                settings={settings}
                onSettingsChange={onSettingsChange}
            />

            <button
                type="submit"
                className="w-full h-9 flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 dark:text-neutral-900 text-white text-sm font-medium rounded-xl transition-colors self-end"
            >
                <Sparkles className="w-4 h-4" />
                Generate Portrait
            </button>
        </form>
    );
};
