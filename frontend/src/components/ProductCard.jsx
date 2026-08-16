import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <span className="eyebrow">{product.category}</span>
      <h3>{product.name}</h3>
      <p className="muted">{product.summary}</p>
      <div className="tag-list">
        {product.stack.map((item) => (
          <span key={item} className="tag">{item}</span>
        ))}
      </div>
      <div className="card-actions">
        <Link to={`/projects/${product.id}`} className="btn btn-primary">View project</Link>
      </div>
    </article>
  )
}
