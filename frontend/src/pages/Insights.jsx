import React from 'react'

const articleList = [
  {
    title: 'Designing interfaces that guide attention',
    category: 'UX Strategy',
    text: 'The best interfaces do not compete for attention; they guide the eye toward the next action with clarity and calm.',
  },
  {
    title: 'Why React patterns matter in larger products',
    category: 'Frontend',
    text: 'Strong component boundaries and clear state ownership make products easier to maintain as they scale over time.',
  },
  {
    title: 'Small performance wins that affect user trust',
    category: 'Performance',
    text: 'Responsive interactions, meaningful loading states, and stable data flows create the feeling of a product that truly works.',
  },
]

export default function Insights() {
  return (
    <section className="container section">
      <h2 className="section-title">Insights</h2>
      <p className="section-copy">
        Notes on product thinking, design systems, and the craft of making digital experiences feel intuitive and dependable.
      </p>

      <div className="grid">
        {articleList.map((article) => (
          <article key={article.title} className="insight-card card">
            <span className="eyebrow">{article.category}</span>
            <h3>{article.title}</h3>
            <p className="muted">{article.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
