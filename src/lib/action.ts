"use server";
import path from "path";
import { promises as fs } from "fs";
import { cache } from "react";

const readFileCache = cache(async (filePath : string) => {
    return await fs.readFile(filePath, "utf-8");
})

export const getComponent = async (filename : string, folder : string) => {
    const BASE_DIR = path.join(process.cwd(), "src", "components", "phexarui");
    if(!filename || filename === "undefined") {
        const fullpath = path.join(BASE_DIR, `${folder}.tsx`);
        return await readFileCache(fullpath);
    }

    console.log("here");
    const fullpath = path.join(BASE_DIR, folder, `${filename}.tsx`);
    return await readFileCache(fullpath);
    
}




export type CopyComponentState = {
    error : string;
    content : string;
    success : boolean;
}

export const copyComponent = async (prevState : CopyComponentState, formData : FormData) => {
    try {
        const folder = formData.get("folder") as string;
        const filename = formData.get("filename") as string;

        if(!folder || !filename) {
            return {
                error: "Invalid folder or filename",
                content: "",
                success: false
            }
        }

        const content = await getComponent(
            filename as string,
            folder as string
        )

        if(!content) {
            return {
                error: "Component not found",
                content: "",
                success: false
            }
        }

        return {
            error: "",
            content: content,
            success: true
        }

    } catch (error) {
        return {
            error: "Failed to copy component",
            content: "",
            success: false
        }
    }
}