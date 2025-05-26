// src/hooks/useDarkMode.js

import { useState, useEffect } from 'react';

export default function useDarkMode() {
  // Initialize darkMode state:
  // 1. Try localStorage
  // 2. Fallback to system preference
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      return stored === 'true';
    }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  });

  // Whenever darkMode changes, apply a class to document.documentElement
  // and persist the setting
  useEffect(() => {
    const className = 'dark-mode';
    const element = document.documentElement;

    if (darkMode) {
      element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Toggle function exposed to components
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return [darkMode, toggleDarkMode];
}
