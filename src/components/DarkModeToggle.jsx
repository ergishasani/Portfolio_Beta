import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import '../assets/styles/components/_DarkModeToggle.scss'

export default function DarkModeToggle() {
  const [darkMode, toggle] = useDarkMode()

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="dark-mode-toggle"
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  )
}
