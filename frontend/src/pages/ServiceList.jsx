import React from 'react'
import ServiceCard from '../components/ServiceCard'

const experience = [
  {
    id: 'strategy',
    title: 'Product Strategy',
    summary: 'Align product direction with audience needs and measurable business goals.',
    details: 'I define clear roadmaps, prioritize the next steps, and structure product thinking that balances usability with growth goals.',
  },
  {
    id: 'design',
    title: 'Interface Design',
    summary: 'Build polished product experiences that feel intuitive, modern, and conversion-ready.',
    details: 'I shape visual systems and user flows that improve clarity, trust, and action across core journeys.',
  },
  {
    id: 'engineering',
    title: 'Frontend Engineering',
    summary: 'Translate design into performant, responsive interfaces using React and modern tooling.',
    details: 'I build scalable frontend systems focused on maintainability, accessibility, and user experience quality.',
  },
]

export default function ServiceList() {
  return (
    <div className="grid">
      {experience.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}
