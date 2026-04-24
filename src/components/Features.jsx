export default function Features() {
  const features = [
    {
      icon: 'fa-project-diagram',
      title: 'Real Projects',
      description: 'Build genuine portfolio projects, not toy examples. Learn industry best practices.'
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Expert Mentorship',
      description: 'Get guidance from experienced developers. Learn from industry experts.'
    },
    {
      icon: 'fa-clock',
      title: 'Learn at Your Pace',
      description: 'Access lifetime content. Study when it works for you, no deadlines.'
    },
    {
      icon: 'fa-certificate',
      title: 'Certifications',
      description: 'Earn recognized certificates to showcase your skills to employers.'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 fade-in-section">Why Choose CodeBoost?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="fade-in-section feature-card p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-blue-500 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl text-blue-600 mb-4 feature-icon transition-all duration-300">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
