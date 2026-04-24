export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full -mr-48 -mt-48 opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 fade-in-section">Simple, Transparent Pricing</h2>
        <p className="text-center text-gray-600 mb-16 text-lg fade-in-section" style={{ animationDelay: '0.1s' }}>Choose the plan that works best for you</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <div className="fade-in-section p-8 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-600 card-hover transition-all duration-300" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Starter</h3>
            <p className="text-gray-600 mb-6">Perfect for beginners</p>
            <div className="mb-6">
              <span className="text-5xl font-bold text-gray-900">₹0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
            <ul className="space-y-4 mt-6">
              <li className="flex items-center text-gray-700">
                <i className="fas fa-check text-green-500 mr-3 text-lg"></i>
                <span>Access to 50+ beginner courses</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="fas fa-check text-green-500 mr-3 text-lg"></i>
                <span>10+ practice projects</span>
              </li>
              <li className="flex items-center text-gray-700">
                <i className="fas fa-check text-green-500 mr-3 text-lg"></i>
                <span>Community support</span>
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-times text-red-400 mr-3 text-lg"></i>
                <span>1-on-1 mentorship</span>
              </li>
            </ul>
          </div>
          
          {/* Premium Plan */}
          <div className="fade-in-section p-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl text-white transform md:scale-105 shadow-2xl hover:shadow-3xl transition-all duration-300 relative group" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition duration-300 -z-10"></div>
            <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-2 rounded-bl-lg font-bold text-sm">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Premium</h3>
            <p className="mb-6 opacity-90">For serious learners</p>
            <div className="mb-6">
              <span className="text-5xl font-bold">₹2,399</span>
              <span className="opacity-90">/month</span>
            </div>
            <button className="w-full py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-lg transform hover:scale-105 transition-all duration-300 btn-primary">
              Start Free Trial
            </button>
            <ul className="space-y-4 mt-6">
              <li className="flex items-center">
                <i className="fas fa-check mr-3 text-lg"></i>
                <span>500+ advanced courses</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check mr-3 text-lg"></i>
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check mr-3 text-lg"></i>
                <span>Expert mentorship</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-check mr-3 text-lg"></i>
                <span>Career guidance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
