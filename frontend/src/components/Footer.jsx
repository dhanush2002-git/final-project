import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <span>© {new Date().getFullYear()} Dhanush</span>
        <span>Python Full Stack Developer</span>
      </div>
    </footer>
  )
}
