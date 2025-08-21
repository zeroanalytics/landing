const features = [
  {
    title: 'Tiny footprint',
    description:
      'Ship a 3 KB async module script that keeps Lighthouse scores happy and disappears when disabled.',
  },
  {
    title: 'Richer out-of-the-box data',
    description:
      'Capture paths, referrers, campaigns, and timing in the same stream so you skip custom plumbing.',
  },
  {
    title: 'Spend stays yours',
    description:
      'Run the bundled SQLite binary for free, then toggle ClickHouse dual-write only when you actually need scale.',
  },
  {
    title: 'Indie-paced roadmap',
    description:
      'We ship weekly. Feature requests land fast, not in a quarterly enterprise queue.',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="section-padding border-b-2 border-black"
      style={{ backgroundColor: 'var(--color-mint)' }}
    >
      <div className="container-max px-0">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 uppercase tracking-tight font-sans">
              Built to give small teams bigger insights
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto font-bold uppercase tracking-wide">
              Keep the script tiny, the data rich, and the bill predictable.
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch">
            <div className="card bg-gray-100 p-8 flex flex-col gap-6 xl:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div key={feature.title}>
                    <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight font-sans mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-black font-bold leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card bg-white border-2 border-black p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight font-sans mb-4">
                  Live preview
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b-2 border-black pb-2">
                    <span className="text-lg font-bold uppercase">
                      Pageviews (24h)
                    </span>
                    <span className="text-2xl font-extrabold">12,430</span>
                  </div>
                  <div className="flex items-center justify-between border-b-2 border-black pb-2">
                    <span className="text-lg font-bold uppercase">
                      Conversion
                    </span>
                    <span className="text-2xl font-extrabold text-green-600">
                      4.2%
                    </span>
                  </div>
                  <div className="space-y-2">
                    {['/', '/pricing', '/docs/getting-started'].map(
                      (path, index) => (
                        <div
                          key={path}
                          className="flex items-center justify-between text-black font-bold"
                        >
                          <span>
                            {index + 1}. {path}
                          </span>
                          <span>
                            {[5421, 3180, 1812][index].toLocaleString()}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <p className="text-sm text-black font-bold uppercase tracking-wide mt-6">
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
