import React from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '3 months', label: 'Experience in full-stack development' },
  { value: '5+', label: 'Core technologies' },
  { value: '100%', label: 'Focus on practical solutions' },
]

export default function Home() {
  return (
    <section className="container hero">
      <div className="hero-panel">
        <div>
          <span className="eyebrow">Available for select projects</span>
          <h1>
            I build <span className="highlight">full-stack digital experiences</span> that turn ideas into momentum.
          </h1>
          <p className="lead">
            I’m Dhanush, a Python Full Stack Developer building reliable, user-focused web applications and scalable backend systems.
          </p>

          <div className="cta-row">
            <Link className="btn btn-primary" to="/projects">View Projects</Link>
            <Link className="btn btn-secondary" to="/contact">Book a Call</Link>
          </div>

          <div className="stat-grid">
            {stats.map((item) => (
              <div key={item.label} className="stat-card">
                <strong>{item.value}</strong>
                <span className="muted">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="profile-card">
          <div className="profile-surface">
            <div className="profile-image-wrap">
              <div className="profile-image-placeholder">D</div>
            </div>
            <div className="profile-pills">
              <span className="pill">Python</span>
              <span className="pill">React</span>
              <span className="pill">FastAPI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
