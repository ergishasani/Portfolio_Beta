import React from 'react'
import '../assets/styles/components/_Footer.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Left: copyright */}
        <span className="footer__copyright">
          © {year} Your Name. All rights reserved.
        </span>

        {/* Center: social links */}
        <ul className="footer__socials">
          <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          {/* …add more as needed */}
        </ul>

        {/* Right: back to top */}
        <a href="#top" className="footer__back-to-top" aria-label="Back to top">
          ↑ Back to top
        </a>
      </div>
    </footer>
  )
}
