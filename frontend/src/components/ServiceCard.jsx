import React from 'react'
import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <article className="card">
      <h3>{service.title}</h3>
      <p className="muted">{service.summary}</p>
      <div className="card-actions">
        <Link to={`/experience/${service.id}`} className="btn btn-primary">Learn more</Link>
      </div>
    </article>
  )
}
