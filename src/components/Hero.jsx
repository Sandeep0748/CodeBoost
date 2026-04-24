import { useEffect, useRef } from 'react'

export default function Hero() {
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' })

    const fadeElements = document.querySelectorAll('.fade-in-section')
    fadeElements.forEach((el, index) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
      el.style.transitionDelay = `${index * 0.1}s`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto text-center fade-in-section relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
          Learn Web Development the <span className="text-gradient">Right Way</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto fade-in-section" style={{ animationDelay: '0.1s' }}>
          Master HTML, Tailwind CSS, JavaScript, and React through real-world projects. Build your portfolio while learning.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 fade-in-section" style={{ animationDelay: '0.2s' }}>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 btn-primary">
            Start Learning Free
          </button>
          <button className="px-8 py-4 bg-white dark:bg-slate-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-slate-700 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Watch Demo
          </button>
        </div>
        <div ref={statsRef} className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center">
          <div className="fade-in-section p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-blue-600">50K+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Students</div>
          </div>
          <div className="fade-in-section p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm" style={{ animationDelay: '0.4s' }}>
            <div className="text-4xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Projects</div>
          </div>
          <div className="fade-in-section p-6 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm" style={{ animationDelay: '0.5s' }}>
            <div className="text-4xl font-bold text-blue-600">98%</div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
