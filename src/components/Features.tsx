export default function Features() {
  return (
    <section
      id="features"
      className="brutalist-bg section-padding border-b-8 border-black"
    >
      <div className="container-max px-0">
        <div className="max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 uppercase tracking-widest">
              Delivers On Every Marketing Promise
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto font-bold uppercase tracking-wide">
              Zero dependencies. Zero complexity. Zero compromises on privacy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="brutalist-border bg-gray-100 p-8 flex flex-col gap-4">
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-widest mb-2">
                Zero Config Deployment
              </h3>
              <p className="text-lg text-black font-bold">
                Single script tag setup in 30 seconds. No Docker, no database setup, no configuration files required.
              </p>
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-widest mb-2">
                Lightning Fast & Lightweight  
              </h3>
              <p className="text-lg text-black font-bold">
                Ultra-fast loading at just 2.3KB. Optimized performance that won&apos;t slow down your site.
              </p>
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-widest mb-2">
                Enterprise Grade Quality
              </h3>
              <p className="text-lg text-black font-bold">
                Battle-tested reliability with comprehensive quality assurance. Built to scale from startup to enterprise.
              </p>
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-widest mb-2">
                Works Everywhere
              </h3>
              <p className="text-lg text-black font-bold">
                Drop into any website or app. Supports all modern frameworks and automatically adapts to your setup.
              </p>
            </div>
            <div className="brutalist-border bg-gray-100 p-8 flex flex-col gap-4">
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-widest mb-2">
                Privacy-First (Compliance Ready)
              </h3>
              <p className="text-lg text-black font-bold">
                Cookie-free, GDPR compliant by design. Bot detection and path masking included automatically.
              </p>
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-widest mb-2">
                Smart Automation
              </h3>
              <p className="text-lg text-black font-bold">
                Intelligent setup that handles everything automatically. No manual configuration or tweaking required.
              </p>
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-widest mb-2">
                Powerful Analytics Built-In
              </h3>
              <p className="text-lg text-black font-bold">
                Advanced features like user tracking, custom events, and performance monitoring included out of the box.
              </p>
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-widest mb-2">
                Rock Solid Reliability
              </h3>
              <p className="text-lg text-black font-bold">
                Built to never break your site. Handles errors gracefully and captures data even during page transitions.
              </p>
            </div>
          </div>
          
          <div className="mt-16 brutalist-border bg-black p-10 text-white">
            <h3 className="text-3xl font-extrabold text-white uppercase tracking-widest mb-8 text-center">
              Production Ready - Copy, Paste, Deploy
            </h3>
            <div className="bg-gray-900 brutalist-border border-white p-8 font-mono text-left max-w-3xl mx-auto">
              <div className="text-gray-400 text-lg mb-2">&lt;!-- Copy this single line into your &lt;head&gt; --&gt;</div>
              <div className="text-green-400 text-lg mb-2">&lt;script src=&quot;https://unpkg.com/@zeroanalytics/zero-js&quot;</div>
              <div className="text-green-400 text-lg mb-2">        data-site=&quot;your-site.com&quot;</div>
              <div className="text-green-400 text-lg mb-4">        data-endpoint=&quot;https://your-analytics.com/collect&quot; defer&gt;&lt;/script&gt;</div>
              <div className="text-white text-xl font-bold mt-6 border-t-2 border-white pt-4">
                ANALYTICS RUNNING • GDPR COMPLIANT • 2.3KB LOADED
              </div>
            </div>
            <p className="text-white text-lg font-bold text-center mt-6 uppercase tracking-wide">
              No servers. No databases. No configuration. Just analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
