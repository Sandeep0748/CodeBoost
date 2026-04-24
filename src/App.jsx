import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  const appRef = useRef(null)

  useEffect(() => {
    // Remove any dark mode class
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <div ref={appRef} className="bg-white text-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}
