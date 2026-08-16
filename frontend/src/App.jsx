import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceList from './pages/ServiceList'
import ServiceDetails from './pages/ServiceDetails'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="projects" element={<Products />} />
        <Route path="projects/:projectId" element={<ProductDetails />} />

        <Route path="experience" element={<Services />}>
          <Route index element={<ServiceList />} />
          <Route path=":serviceId" element={<ServiceDetails />} />
        </Route>

        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
