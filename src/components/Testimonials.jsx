export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "CodeBoost transformed my coding journey. The real projects helped me build a portfolio that landed me my first dev job!",
      initials: 'JD',
      name: 'John Doe',
      title: 'Junior Developer at TechCorp'
    },
    {
      rating: 5,
      text: "The instructors are incredibly supportive and the curriculum is constantly updated with modern technologies. Highly recommended!",
      initials: 'SM',
      name: 'Sarah Martinez',
      title: 'Freelance Web Developer'
    },
    {
      rating: 5,
      text: "I went from complete beginner to building full-stack projects in 6 months. CodeBoost's approach really works!",
      initials: 'AK',
      name: 'Alex Kim',
      title: 'Full Stack Developer at StartupX'
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 fade-in-section">What Our Students Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="fade-in-section p-8 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400 text-lg"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
