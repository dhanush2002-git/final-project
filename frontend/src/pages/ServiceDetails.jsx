import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const experience = [
  {
    id: 'strategy',
    title: 'Product Strategy',
    summary: 'Align product direction with audience needs and measurable business goals.',
    details: 'I define clear roadmaps, prioritize the next steps, and structure product thinking that balances usability with growth goals. This work helps teams focus on the highest-impact opportunities and keep execution disciplined.',
    deliverables: ['Discovery workshops', 'Roadmap planning', 'Growth-focused prioritization'],
  },
  {
    id: 'design',
    title: 'Interface Design',
    summary: 'Build polished product experiences that feel intuitive, modern, and conversion-ready.',
    details: 'I shape visual systems and user flows that improve clarity, trust, and action across core journeys. My design process blends business context with user behavior research to create stronger outcomes.',
    deliverables: ['Wireframes', 'Design systems', 'High-fidelity mockups'],
  },
  {
    id: 'engineering',
    title: 'Frontend Engineering',
    summary: 'Translate design into performant, responsive interfaces using React and modern tooling.',
    details: 'I build scalable frontend systems focused on maintainability, accessibility, and user experience quality. The result is faster iteration, smoother product delivery, and a better experience for users.',
    deliverables: ['Component libraries', 'Responsive interfaces', 'Performance tuning'],
  },
]

export default function ServiceDetails() {
  const { serviceId } = useParams()
  const navigate = useNavigate()

  const service = experience.find((item) => item.id === serviceId)

  if (!service) {
    return <div className="container empty-state">Service not found.</div>
  }

  return (
    <div className="detail-layout">
      <article className="detail-card card">
        <h3>{service.title}</h3>
        <p className="muted">{service.summary}</p>
        <p>{service.details}</p>

        <div className="tag-list">
          {service.deliverables.map((item) => (
            <span className="tag" key={item}>{item}</span>
          ))}
        </div>
      </article>

      <aside className="sidebar-card card">
        <h3>Next step</h3>
        <p className="muted">Need support with a product or interface challenge?</p>
        <button className="btn btn-primary" type="button" onClick={() => navigate('/contact')}>
          Start a project
        </button>
      </aside>
    </div>
  )
}
