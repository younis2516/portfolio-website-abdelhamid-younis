import { useInView } from "react-intersection-observer"
import { useActiveSectionContext } from "@/context/active_section_context"
import React, { useEffect } from "react"
import { links } from "./data"

export type SectionName = typeof links[number]["name"]

export function useScrollIntoView(sectionName:SectionName,threshold:number) {
    const { ref, inView } = useInView({ threshold: threshold })
    const {setActiveSection,timeOfLastClick}= useActiveSectionContext()
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName)
        }
    }, [timeOfLastClick, setActiveSection, inView,sectionName])
    return {ref}
}