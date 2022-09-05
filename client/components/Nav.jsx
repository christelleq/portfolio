import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Nav() {
  const { pathname } = useLocation()
  const textStyle = (section) => {
    return pathname === section
      ? 'font-extrabold'
      : pathname === '/'
      ? ''
      : 'text-gray-700'
  }

  return (
    <nav className="grid grid-rows-1 md:grid-cols-3 pt-4 md:pt-7 lg:max-w-[60%] gap-y-2 lg:gap-x-40 md:gap-x-20">
      <NavLink to="/education" className={textStyle('/education')}>
        Education
      </NavLink>
      <NavLink to="/projects" className={textStyle('/projects')}>
        Projects
      </NavLink>
      <NavLink to="/about" className={textStyle('/about')}>
        About Me
      </NavLink>
    </nav>
  )
}
