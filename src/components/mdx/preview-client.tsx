"use client"; 
import { RefreshButton } from "@/components/mdx/refresh-button";
import { useState } from "react";
import Preview from "@/components/mdx/preview";


interface PreviewClientProps {
  children: React.ReactNode;
  className?: string;
  isPremium?: boolean;
  link: string;
  useIframe?: boolean;
  height?: string;
  compact?: boolean;
  comment?: string[];
}

const PreviewClient = (props : PreviewClientProps) => {
  const [key, setKey] = useState(0);

  const handleRefresh = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div className="relative">
      <RefreshButton onRefresh={handleRefresh}/>
      <div key={key}>
        <Preview {...props}/>
      </div>
    </div>
  )
}

export default PreviewClient;
