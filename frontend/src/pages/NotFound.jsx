import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container section">
      <div className="empty-state">
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link className="btn btn-primary" to="/">Return home</Link>
      </div>
    </section>
  )
}
