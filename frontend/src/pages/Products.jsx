import React from 'react'
import ProductCard from '../components/ProductCard'

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

export default function Products() {
  return (
    <section className="container section">
      <h2 className="section-title">Selected projects</h2>
      <p className="section-copy">A focused portfolio project showcasing my development profile and front-end styling approach.</p>

      <div className="grid">
        {portfolioProjects.map((project) => (
          <ProductCard key={project.id} product={project} />
        ))}
      </div>
    </section>
  )
}
