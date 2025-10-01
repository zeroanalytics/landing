const features = [
  {
    title: 'Compliance on autopilot',
    description:
      'Respect DNT/GPC headers, anonymise IPs, and keep visitor hashing salts in your hands—no extra toggles or consent banners required.',
  },
  {
    title: 'Zero-to-ClickHouse path',
    description:
      'Start on the embedded SQLite store and flip on managed ClickHouse without refactoring when traffic or retention windows expand.',
  },
  {
    title: 'Resilient by design',
    description:
      'The SDK queues retryable events, the server handles graceful shutdown, and proxy trust stays off unless you enable it.',
  },
  {
    title: 'Different from product suites',
    description:
      'Rybbit and Pirsch chase funnels and replays; Zero doubles down on fast deployment and ownership for small engineering teams.',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="section-padding border-b-8 border-black bg-brand-mint"
    >
      <div className="container-max px-0">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-black mb-8 uppercase tracking-tighter font-sans">
              Built to give small teams bigger insights
            </h2>
            <p className="text-2xl md:text-3xl text-black max-w-3xl mx-auto font-bold tracking-wide leading-tight">
              Keep the script tiny, the data private, and the upgrade path in
              your control.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-stretch">
            <div className="card bg-white p-10 flex flex-col gap-8 xl:col-span-2 transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform brutal-shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {features.map((feature, index) => (
                  <div key={feature.title} className="relative">
                    <div className="absolute -top-2 -left-2 text-6xl font-black text-black/5">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight font-sans mb-4 relative z-10">
                      {feature.title}
                    </h3>
                    <p className="text-lg md:text-xl text-black font-bold leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card bg-white border-2 border-black p-10 flex flex-col justify-between transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform brutal-shadow-md">
              <div>
                <h3 className="text-3xl font-black text-black uppercase tracking-tight font-sans mb-6 pb-4 border-b-4 border-black">
                  Live preview
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b-4 border-black pb-3">
                    <span className="text-lg font-extrabold uppercase tracking-wide">
                      Pageviews (24h)
                    </span>
                    <span className="text-4xl font-black">12,430</span>
                  </div>
                  <div className="flex items-center justify-between border-b-4 border-black pb-3">
                    <span className="text-lg font-extrabold uppercase tracking-wide">
                      Conversion
                    </span>
                    <span className="text-4xl font-black text-green-600">
                      4.2%
                    </span>
                  </div>
                  <div className="space-y-3 pt-2">
                    {['/', '/pricing', '/docs/getting-started'].map(
                      (path, index) => (
                        <div
                          key={path}
                          className="flex items-center justify-between text-black font-extrabold text-lg bg-gray-50 p-3 border-2 border-black"
                        >
                          <span className="uppercase tracking-wide">
                            {index + 1}. {path}
                          </span>
                          <span className="text-xl">
                            {[5421, 3180, 1812][index].toLocaleString()}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <p className="text-sm text-black/60 font-bold uppercase tracking-[0.35em] mt-8 pt-6 border-t-2 border-black/20">
                Captured with the bundled dev server — no external services
                required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
