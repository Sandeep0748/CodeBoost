export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-section">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">About CodeBoost</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              CodeBoost was founded by experienced developers frustrated with traditional coding education. We believe learning should be practical, engaging, and focused on real-world skills.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our platform combines interactive tutorials, hands-on projects, and community support to help beginners become confident developers.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="fade-in-section text-center p-4 rounded-lg bg-white dark:bg-slate-900 shadow-md hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Active Students</div>
              </div>
              <div className="fade-in-section text-center p-4 rounded-lg bg-white dark:bg-slate-900 shadow-md hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects</div>
              </div>
              <div className="fade-in-section text-center p-4 rounded-lg bg-white dark:bg-slate-900 shadow-md hover:shadow-lg transition-all duration-300" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Expert Instructors</div>
              </div>
            </div>
          </div>
          <div className="fade-in-section" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 rounded-xl p-8 text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative z-10">
                <i className="fas fa-code text-7xl opacity-20 mb-4 block"></i>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed">
                  To democratize web development education and empower the next generation of developers with practical skills and real-world project experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
