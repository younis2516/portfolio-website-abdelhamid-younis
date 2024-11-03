import { links } from '@/lib/data'
import React, { useContext, useState } from 'react'
type MyContextProps = {
    children:React.ReactNode
}
type sectionName = typeof links[number]["name"]
type activeSessionContextProps = {
    activeSection: sectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>
}
export const ActiveSessionContext = React.createContext<activeSessionContextProps|null>(null)
const MyContext = ({children}:MyContextProps) => {
const [activeSection,setActiveSection]= useState<sectionName>('Home')

  return (
      <ActiveSessionContext.Provider value={{activeSection,setActiveSection}}>{children}</ActiveSessionContext.Provider>
  )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSessionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
export default MyContext