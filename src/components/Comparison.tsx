import Link from 'next/link'

const rows = [
  {
    label: 'Setup time',
    self: 'Run the single binary, copy the script tag, respect DNT by default.',
    hosted:
      'Provisioned for you with managed ClickHouse and privacy defaults intact.',
  },
  {
    label: 'Scaling',
    self: 'SQLite out of the box with optional ClickHouse dual-write.',
    hosted:
      'We run ClickHouse for you with indie-friendly defaults and retention tuning.',
  },
  {
    label: 'Auth & teams',
    self: 'API keys per site; plug into your own auth.',
    hosted:
      'Organizations, seats, and billing support landing as part of the hosted roadmap.',
  },
  {
    label: 'Ops',
    self: 'You control backups, updates, and data residency.',
    hosted:
      'We handle backups, updates, and uptime so you can stay focused on shipping.',
  },
  {
    label: 'Budget',
    self: 'Zero monthly invoice -- run it on your own SQLite instance for free.',
    hosted: 'Flat early-access pricing while we polish metered billing.',
  },
  {
    label: 'Versus product suites',
    self: 'Drop in Zero when Rybbit or Pirsch feels like overkill and you still want to own the stack.',
    hosted:
      'Keep the same privacy-first data model while we run the infrastructure—no funnel or replay bloat required.',
  },
]

export default function Comparison() {
  return (
    <section
      className="section-padding border-b-8 border-black"
      style={{ backgroundColor: 'var(--color-mint)' }}
    >
      <div className="container-max px-0">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter font-sans mb-8">
              Stay self-hosted, upgrade when you choose
            </h2>
            <p className="text-2xl md:text-3xl text-black font-bold tracking-wide max-w-4xl mx-auto leading-tight">
              Start on your infrastructure today, and step up to our hosted
              cluster when ops or compliance calls for it—without jumping to a
              heavyweight suite.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div
              className="card bg-white border-4 border-black p-10 transform hover:translate-x-[-3px] hover:translate-y-[-3px] transition-transform"
              style={{ boxShadow: '16px 16px 0 0 #000' }}
            >
              <div className="mb-8 pb-6 border-b-4 border-black">
                <h3 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight mb-3">
                  Self-hosted
                </h3>
                <p className="text-sm uppercase tracking-[0.35em] text-black/60 font-extrabold">
                  Perfect for product teams shipping fast and owning their
                  stack.
                </p>
              </div>
              <ul className="space-y-6 text-black font-bold mb-8">
                {rows.map((row) => (
                  <li
                    key={`self-${row.label}`}
                    className="border-l-4 border-black pl-4"
                  >
                    <span className="uppercase text-xs tracking-[0.4em] block text-black/50 font-extrabold mb-2">
                      {row.label}
                    </span>
                    <p className="text-lg md:text-xl leading-relaxed">
                      {row.self}
                    </p>
                  </li>
                ))}
              </ul>
              <Link
                href="/#early-access"
                className="w-full inline-flex items-center justify-center px-6 py-4 text-base md:text-lg font-black uppercase brutalist-border bg-white hover:bg-yellow-100 transform hover:translate-x-1 hover:translate-y-1 transition-transform"
                style={{ boxShadow: '6px 6px 0 0 #000' }}
              >
                Download the self-host starter kit →
              </Link>
            </div>
            <div
              className="card bg-black border-4 border-black p-10 text-white transform hover:translate-x-[-3px] hover:translate-y-[-3px] transition-transform"
              style={{ boxShadow: '16px 16px 0 0 var(--color-button)' }}
            >
              <div className="mb-8 pb-6 border-b-4 border-white">
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3">
                  Hosted
                </h3>
                <p className="text-sm uppercase tracking-[0.35em] text-white/60 font-extrabold">
                  Ideal for ops, compliance, and growth teams that need
                  guarantees.
                </p>
              </div>
              <ul className="space-y-6 font-bold mb-8">
                {rows.map((row) => (
                  <li
                    key={`hosted-${row.label}`}
                    className="border-l-4 border-white pl-4"
                  >
                    <span className="uppercase text-xs tracking-[0.4em] block text-white/50 font-extrabold mb-2">
                      {row.label}
                    </span>
                    <p className="text-lg md:text-xl leading-relaxed text-white">
                      {row.hosted}
                    </p>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@zeroanalytics.io"
                className="w-full inline-flex items-center justify-center px-6 py-4 text-base md:text-lg font-black uppercase brutalist-border border-white bg-white text-black hover:bg-yellow-100 transform hover:translate-x-1 hover:translate-y-1 transition-transform"
                style={{ boxShadow: '6px 6px 0 0 var(--color-button)' }}
              >
                Chat with the builders →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
