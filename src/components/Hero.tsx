import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="section-padding pt-28 pb-16 border-b-2 border-black min-h-[60vh]"
      style={{ backgroundColor: 'var(--color-yellow)' }}
    >
      <div className="container-max px-0">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 bg-white brutalist-border uppercase text-xs sm:text-sm tracking-[0.35em] font-extrabold mb-8"
            style={{ boxShadow: '8px 8px 0 0 #000' }}
          >
            <span className="text-black">
              Ship analytics your team can actually run
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl text-black leading-tight tracking-tight">
            Launch lightweight analytics this afternoon
          </h1>
          <p className="mt-6 text-lg sm:text-2xl text-black font-semibold max-w-3xl mx-auto leading-relaxed">
            Install the Zero CLI, drop in a 3 KB script, and keep richer traffic
            data on your own hardware without paying enterprise bills.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#early-access"
              className="btn btn-accent btn-lg w-full sm:w-auto"
            >
              Launch the Zero CLI
            </Link>
            <Link
              href="https://zeroanalytics.io/docs"
              className="btn btn-ghost btn-lg w-full sm:w-auto bg-white hover:bg-yellow-200"
            >
              Browse the Docs
            </Link>
          </div>
          <p className="mt-6 text-xs sm:text-sm uppercase tracking-[0.3em] text-black/70 font-semibold">
            Works with static sites, SPAs, and server frameworks — no cookies,
            no vendor SDK lock-in.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 px-4">
          <div
            className="bg-white brutalist-border p-6 sm:p-8 text-left"
            style={{ boxShadow: '10px 10px 0 0 #000' }}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-black/70 mb-4">
              <span>Request</span>
              <span>POST</span>
            </div>
            <pre className="text-sm sm:text-base font-mono leading-relaxed text-left text-black whitespace-pre-wrap">
              {`fetch('https://localhost:3000/api/collect', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-ZA-Key': 'demo-site'
  },
  body: JSON.stringify({
    type: 'pageview',
    site: 'demo',
    path: '/pricing'
  })
})`}
            </pre>
            <button className="mt-6 w-full btn btn-accent btn-lg">
              Try it locally
            </button>
            <p className="mt-3 text-xs text-black/70 font-semibold uppercase tracking-widest">
              Demo preview — fire up{' '}
              <code className="bg-yellow-200 px-2 py-1">
                ./analytics serve --dev
              </code>{' '}
              to stream requests locally.
            </p>
          </div>

          <div
            className="bg-white brutalist-border p-6 sm:p-8 flex flex-col"
            style={{ boxShadow: '10px 10px 0 0 #000' }}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-black/70 mb-4">
              <span>Live Response</span>
              <span>JSON</span>
            </div>
            <div className="flex-1 brutalist-border bg-yellow-100 p-6 text-left">
              <p className="text-black font-mono text-sm leading-relaxed">
                {`{
  "status": "queued",
  "accepted": true,
  "ingested_at": "2024-06-12T14:21:04Z"
}`}
                <span className="text-black/60 block mt-6 text-xs uppercase tracking-[0.3em]">
                  Click “Try it locally” to stream the full payload.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
