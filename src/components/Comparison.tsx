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
      className="section-padding border-b-2 border-black"
      style={{ backgroundColor: 'var(--color-mint)' }}
    >
      <div className="container-max px-0">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black uppercase tracking-tight font-sans mb-6">
              Stay self-hosted, upgrade when you choose
            </h2>
            <p className="text-xl text-black font-bold uppercase tracking-wide max-w-3xl mx-auto">
              Start on your infrastructure today, and step up to our hosted
              cluster when ops or compliance calls for it—without jumping to a
              heavyweight suite.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card bg-white border-2 border-black p-6">
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight mb-4">
                Self-hosted
              </h3>
              <p className="text-xs uppercase tracking-widest text-black/70 font-bold mb-4">
                Perfect for product teams shipping fast and owning their stack.
              </p>
              <ul className="space-y-3 text-black font-bold">
                {rows.map((row) => (
                  <li key={`self-${row.label}`}>
                    <span className="uppercase text-xs tracking-widest block text-black/60 mb-1">
                      {row.label}
                    </span>
                    {row.self}
                  </li>
                ))}
              </ul>
              <Link
                href="/#early-access"
                className="mt-6 inline-flex items-center justify-center px-4 py-3 text-sm font-extrabold uppercase brutalist-border bg-white hover:bg-yellow-100"
              >
                Download the self-host starter kit →
              </Link>
            </div>
            <div className="card bg-white border-2 border-black p-6">
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight mb-4">
                Hosted
              </h3>
              <p className="text-xs uppercase tracking-widest text-black/70 font-bold mb-4">
                Ideal for ops, compliance, and growth teams that need
                guarantees.
              </p>
              <ul className="space-y-3 text-black font-bold">
                {rows.map((row) => (
                  <li key={`hosted-${row.label}`}>
                    <span className="uppercase text-xs tracking-widest block text-black/60 mb-1">
                      {row.label}
                    </span>
                    {row.hosted}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@zeroanalytics.io"
                className="mt-6 inline-flex items-center justify-center px-4 py-3 text-sm font-extrabold uppercase brutalist-border bg-white hover:bg-yellow-100"
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
