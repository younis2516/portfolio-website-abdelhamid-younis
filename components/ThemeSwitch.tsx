"use client"
import { useTheme } from '@/context/theme-context'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type theme =  "light"| "dark"
function ThemeSwitch() { 
    const {toggleTheme,theme}= useTheme()
  return (
      <button
          className='fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-45 shadow-lg rounded-full flex items-center justify-center hover:scale-[1.15] focus:scale-105 transition-all dark:bg-gray-950 '
            onClick={toggleTheme}
      >
          {theme==='light'?<BsSun />:<BsMoon/>}
          
      </button>
  )
}

export default ThemeSwitch