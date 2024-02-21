'use client'

import React, { useState } from 'react'
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { TbBulbOff } from "react-icons/tb";

const themes = {
    fantasy: 'fantasy',
    dark: 'dark'
}

const ThemeToggle = () => {
    const [theme, setTheme] = useState(themes.fantasy)

    const toggleTheme = () =>{
        const newTheme = theme === themes.fantasy ? themes.dark : themes.fantasy
        document.documentElement.setAttribute('data-theme', newTheme)
        setTheme(newTheme)
    }
  return (
    <button onClick={toggleTheme} className='btn btn-sm btn-outline'> 
    {theme ==='fantasy'? (
            <PiLightbulbFilamentFill className='h-4 w-4'/>
        ):(
            <TbBulbOff className='h-4 w-4'/>
        )}
    </button>
  )
}

export default ThemeToggle
