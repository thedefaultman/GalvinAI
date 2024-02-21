import React from 'react'
import { GiBiplane } from "react-icons/gi";
import ThemeToggle from './ThemeToggle';
const SidebarHeader = () => {
  return (
    <div className='flex items-center mb-4 gap-4 px-4'>
      <GiBiplane className='w-10 h-10 text-primary' />
      <h2 className='text-xl font-extrabold text-primary mr-auto'>Galvin AI</h2>
      <ThemeToggle />
    </div>
  )
}

export default SidebarHeader
