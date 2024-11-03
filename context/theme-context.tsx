"use client"
import React, { useContext, useEffect, useState } from 'react'
type theme = "light" | "dark"
interface ThemeContextType {
    theme: theme
    toggleTheme:()=>void
}
type ThemeChildren= {
    children:React.ReactNode
}
const ThemeContext = React.createContext<ThemeContextType |null >(null);

export const ThemeProvider = ({ children }: ThemeChildren) => {
    const [theme, setTheme] = useState<theme>("light")
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light')
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove('dark')
        }
    }
    useEffect(() => {
        const localTheme = localStorage.getItem("theme") as theme | null
        if (localTheme) {
            setTheme(localTheme)
            if(localTheme==='dark'){document.documentElement.classList.add('dark')}
        }
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark")
            document.documentElement.classList.add('dark ')
        }
    },[])
  return (
      <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
  )
}
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

