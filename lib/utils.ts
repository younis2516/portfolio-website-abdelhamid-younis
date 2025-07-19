export const validateString = (value: String,maxLength:number) => {
        if (!value || typeof value !=="string" || value.length>maxLength) {
                console.error("Invalid value")
                return false
        }
        return true
}
export const getErrorMessage=(error: unknown):string=> {
        let message:string
                if (error instanceof Error) {
                        message=error.message
                        
                } else if (error && typeof error === "object" && 'message' in error ) {
                        message=String(error.message)
                } else if (typeof error === "string") {
                        message=error
                } else {
                        message="unknown error occured"
                }
        return message 
}

// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}