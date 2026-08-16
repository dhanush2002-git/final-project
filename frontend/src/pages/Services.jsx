import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <section className="container section">
      <h2 className="section-title">Experience</h2>
      <p className="section-copy">
        I help teams shape product strategy, improve interface quality, and turn ideas into measurable business results.
      </p>
      <Outlet />
    </section>
  )
}
