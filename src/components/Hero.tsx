import Link from 'next/link'

export default function Hero() {
  return (
    <section className="section-padding pt-32 pb-24 border-b-8 border-black min-h-[70vh] flex items-center bg-brand-yellow">
      <div className="container-max px-0 w-full">
        <div className="max-w-6xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white brutalist-border uppercase text-sm tracking-[0.4em] font-extrabold mb-10 transform hover:translate-y-[-2px] transition-transform brutal-shadow-md">
            <span className="text-black">Privacy-native. SRE approved.</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl text-black leading-tight tracking-tight">
            Deploy analytics with zero infrastructure friction
          </h1>
          <p className="mt-6 text-lg sm:text-2xl text-black font-bold max-w-4xl mx-auto leading-relaxed">
            Ship the single Go binary, honour DNT/GPC out of the box, and rely
            on the built-in queue so traffic keeps flowing even when your
            network doesn&apos;t. Start self-hosted today and flip to managed
            ClickHouse when you actually need it.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="https://github.com/zeroanalytics/analytics/releases/latest"
              className="btn btn-accent btn-lg w-full sm:w-auto text-xl px-10 py-5 transform hover:translate-x-1 hover:translate-y-1 transition-transform brutal-shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download the Zero binary
            </Link>
            <Link
              href="https://zeroanalytics.io/docs"
              className="btn btn-ghost btn-lg w-full sm:w-auto text-xl px-10 py-5 bg-white hover:bg-yellow-400 transform hover:translate-x-1 hover:translate-y-1 transition-transform brutal-shadow-sm"
            >
              Browse the Docs
            </Link>
          </div>
          <p className="mt-8 text-sm uppercase tracking-[0.35em] text-black/60 font-bold">
            Works with static sites, SPAs, and server frameworks — no cookies,
            no vendor SDK lock-in, no proxy trust unless you ask for it.
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2 px-4">
          <div className="bg-white brutalist-border p-8 sm:p-10 text-left transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform brutal-shadow-lg">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-black/60 font-extrabold mb-6">
              <span>Request</span>
              <span className="bg-black text-white px-3 py-1">POST</span>
            </div>
            <pre className="text-sm sm:text-base font-mono leading-relaxed text-left text-black whitespace-pre-wrap bg-gray-50 p-6 brutalist-border">
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
            <button className="mt-8 w-full btn btn-accent btn-lg text-lg transform hover:translate-x-1 hover:translate-y-1 transition-transform brutal-shadow-sm">
              Try it locally
            </button>
            <p className="mt-3 text-xs text-black/70 font-bold uppercase tracking-[0.35em]">
              Demo preview — fire up{' '}
              <code className="bg-yellow-200 px-2 py-1 border-2 border-black font-mono">
                ./analytics serve --dev
              </code>{' '}
              to stream requests locally.
            </p>
          </div>

          <div className="bg-white brutalist-border p-8 sm:p-10 flex flex-col transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform brutal-shadow-lg">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-black/60 font-extrabold mb-6">
              <span>Live Response</span>
              <span className="bg-black text-white px-3 py-1">JSON</span>
            </div>
            <div className="flex-1 brutalist-border bg-yellow-100 p-8 text-left">
              <p className="text-black font-mono text-base leading-relaxed">
                {`{
  "status": "queued",
  "accepted": true,
  "ingested_at": "2024-06-12T14:21:04Z"
}`}
                <span className="text-black/60 block mt-8 text-xs uppercase tracking-[0.35em] font-bold">
                  Click &#34;Try it locally&#34; to stream the full payload.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
