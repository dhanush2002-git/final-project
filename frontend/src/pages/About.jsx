import React from 'react'

const strengths = ['Python development', 'React frontend', 'FastAPI APIs', 'Database integration']

export default function About() {
  return (
    <section className="container section">
      <h2 className="section-title">About me</h2>
      <p className="section-copy">
        I’m a Python Full Stack Developer focused on building clean, efficient, and practical web applications with strong backend and frontend integration.
      </p>

      <div className="detail-layout">
        <div className="detail-card card">
          <h3>My approach</h3>
          <p className="muted">
            I work on end-to-end application development, from backend logic and API design to responsive user interfaces that are easy to use and maintain.
          </p>
          <div className="skill-list">
            {strengths.map((item) => (
              <span key={item} className="skill">{item}</span>
            ))}
          </div>
        </div>

        <div className="sidebar-card card">
          <h3>Quick facts</h3>
          <ul className="inline-list">
            <li><strong>Current role:</strong> Python Full Stack Developer</li>
            <li><strong>Company:</strong> Stackly</li>
            <li><strong>Since:</strong> May 2026</li>
            <li><strong>Tools:</strong> Python, React, FastAPI, PostgreSQL, Git</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
