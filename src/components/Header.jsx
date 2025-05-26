import React from 'react'
import DarkModeToggle from './DarkModeToggle'
import '../assets/styles/components/_Header.scss'

export default function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="header__logo">
        <a href="/" className="header__logo-link">
          YourName
        </a>
      </div>

      {/* Navigation */}
      <nav className="header__nav">
        <a href="#about" className="header__nav-link">About</a>
        <a href="#skills" className="header__nav-link">Skills</a>
        <a href="#work" className="header__nav-link">Work</a>
        <a href="#testimonials" className="header__nav-link">Testimonials</a>
        <a href="#contact" className="header__nav-link">Contact</a>
      </nav>

      {/* Dark mode toggle */}
      <div className="header__toggle">
        <DarkModeToggle />
      </div>
    </header>
  )
}
