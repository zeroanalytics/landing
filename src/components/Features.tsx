export default function Features() {
  const features = [
    {
      title: 'Zero Infrastructure',
      description: 'Single binary deployment with embedded SQLite. No Docker, no containers, no complexity.',
      icon: '🚀'
    },
    {
      title: 'Privacy First',
      description: 'GDPR/CCPA compliant by design. No cookies, no tracking, no user profiling.',
      icon: '🔒'
    },
    {
      title: 'Auto-Scaling',
      description: 'Intelligent SQLite → ClickHouse migration when you need the performance.',
      icon: '📈'
    },
    {
      title: 'Lightning Fast',
      description: 'Sub-3KB JavaScript tracker. Minimal impact on your site performance.',
      icon: '⚡'
    },
    {
      title: 'Real-time',
      description: 'Live visitor tracking and dashboard updates. See what\'s happening now.',
      icon: '📊'
    },
    {
      title: 'Open Source',
      description: 'AGPL v3 licensed. Self-host or use our managed service.',
      icon: '🌟'
    }
  ]

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for Modern Privacy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zero Analytics is designed from the ground up for privacy-conscious developers 
            who need reliable analytics without the complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Competitive Advantage
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-2 px-4 font-medium">Platform</th>
                    <th className="py-2 px-4 font-medium">Deployment</th>
                    <th className="py-2 px-4 font-medium">Bundle Size</th>
                    <th className="py-2 px-4 font-medium">Privacy</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-4 font-medium text-primary-600">Zero Analytics</td>
                    <td className="py-2 px-4">30 seconds</td>
                    <td className="py-2 px-4">&lt;3KB</td>
                    <td className="py-2 px-4">Built-in</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-4">Plausible</td>
                    <td className="py-2 px-4">30+ minutes</td>
                    <td className="py-2 px-4">~5KB</td>
                    <td className="py-2 px-4">Good</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-4">Google Analytics</td>
                    <td className="py-2 px-4">5 minutes</td>
                    <td className="py-2 px-4">~15KB</td>
                    <td className="py-2 px-4">Poor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}