export default function Hero() {
  return (
    <section className="gradient-bg section-padding pt-24 pb-20">
      <div className="container-max">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Analytics that deploys in
            <span className="block text-yellow-300">30 seconds</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Privacy-first analytics with zero dependencies. 
            Single binary deployment, GDPR compliant by design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#early-access" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Get Early Access
            </a>
            <a href="https://github.com/zeroanalytics/analytics" className="btn-secondary" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80 text-center max-w-4xl mx-auto">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-yellow-300">30s</div>
              <div className="text-sm">Deployment Time</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-yellow-300">&lt;3KB</div>
              <div className="text-sm">Client Bundle Size</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-yellow-300">100%</div>
              <div className="text-sm">Privacy Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}