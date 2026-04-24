export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Gradient background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="fade-in-section">
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-code text-blue-400 text-2xl icon-float"></i>
              <span className="font-bold text-xl">CodeBoost</span>
            </div>
            <p className="text-gray-400 leading-relaxed">Empowering the next generation of web developers with real-world skills.</p>
          </div>
          
          {/* Quick Links */}
          <div className="fade-in-section" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hero" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">Home</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">Features</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">Reviews</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="fade-in-section" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">Community</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-all duration-300 hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="fade-in-section" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-400/50">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-gray-500/50">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-600/50">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="border-gray-800 mb-8" />
        
        {/* Copyright and Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400">
          <p>&copy; 2024 CodeBoost. All rights reserved. | <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a> | <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a></p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Back to Top</span>
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  )
}
