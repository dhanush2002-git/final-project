import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const portfolioProjects = [
  {
    id: '1',
    name: 'Portfolio Website',
    category: 'Personal',
    summary: 'A responsive portfolio website built with React to present my work and profile professionally.',
    description: 'This portfolio is designed to highlight my profile as a Python Full Stack Developer, featuring my experience, technical strengths, and contact section in a clean, modern layout.',
    stack: ['React', 'JavaScript', 'Responsive UI'],
    outcome: 'Professional portfolio presence',
  },
]

export default function ProductDetails() {
  const { projectId } = useParams()
  const navigate = useNavigate()
  const project = portfolioProjects.find((item) => item.id === projectId)

  if (!project) {
    return <div className="container empty-state">Project not found.</div>
  }

  return (
    <section className="container section">
      <button className="btn btn-secondary" type="button" onClick={() => navigate(-1)}>
        ← Back to projects
      </button>

      <div className="detail-layout" style={{ marginTop: '1.5rem' }}>
        <article className="detail-card card">
          <span className="eyebrow">{project.category}</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>{project.name}</h2>
          <p className="muted">{project.summary}</p>
          <p>{project.description}</p>

          <div className="tag-list">
            {project.stack.map((item) => (
              <span className="tag" key={item}>{item}</span>
            ))}
          </div>
        </article>

        <aside className="sidebar-card card">
          <h3>Impact</h3>
          <p className="notice">{project.outcome}</p>
          <ul className="inline-list">
            <li>Shows my profile and technical focus in a polished way.</li>
            <li>Built with a clean, responsive interface for easy browsing.</li>
            <li>Includes a direct path for project inquiries and contact.</li>
          </ul>
        </aside>
      </div>
    </section>
  )
}
