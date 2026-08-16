import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

export default function NavBar() {
  const { dark, toggle } = useContext(ThemeContext)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="logo">Dhanush</div>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <button onClick={toggle} className="theme-toggle" type="button">
          {dark ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  )
}
