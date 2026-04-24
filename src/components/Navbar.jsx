import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (e, targetId) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      const headerOffset = 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer group">
          <i className="fas fa-code text-blue-600 text-2xl transform group-hover:rotate-12 transition-transform duration-300"></i>
          <span className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">CodeBoost</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-300">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-300">
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-300">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')} className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-300">
            Testimonials
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="relative group text-gray-700 hover:text-blue-600 transition-colors duration-300">
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden p-2 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 transition-all duration-300"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} transition-transform duration-300 text-gray-700`}></i>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-0 px-4 py-4">
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="py-3 px-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-300">Home</a>
            <a href="#features" onClick={(e) => scrollToSection(e, '#features')} className="py-3 px-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-300">Features</a>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="py-3 px-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-300">About</a>
            <a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')} className="py-3 px-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-300">Testimonials</a>
            <a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="py-3 px-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-all duration-300">Pricing</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
