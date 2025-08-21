export default function Features() {
  return (
    <section
      id="features"
      className="section-padding border-b-2 border-black"
      style={{ backgroundColor: 'var(--color-mint)' }}
    >
      <div className="container-max px-0">
        <div className="max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 uppercase tracking-tight font-sans">
              One tag • No cookies • Real‑time • Zero config
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto font-bold uppercase tracking-wide">
              Zero dependencies. Zero complexity. Zero compromises on privacy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="card bg-gray-100 p-8 flex flex-col gap-4">
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight font-sans mb-2">
                Zero config setup
              </h3>
              <p className="text-lg text-black font-bold">
                Copy one tag. Start in 60 seconds. Works anywhere.
              </p>
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight font-sans mb-2">
                Lightning Fast & Lightweight
              </h3>
              <p className="text-lg text-black font-bold">
                Ultra-fast loading with a tiny script. Optimized performance
                that won&apos;t slow down your site.
              </p>
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight font-sans mb-2">
                Enterprise Grade Quality
              </h3>
              <p className="text-lg text-black font-bold">
                Battle-tested reliability with comprehensive quality assurance.
                Built to scale from startup to enterprise.
              </p>
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight font-sans mb-2">
                Works Everywhere
              </h3>
              <p className="text-lg text-black font-bold">
                Drop into any website or app. Supports all modern frameworks and
                automatically adapts to your setup.
              </p>
            </div>
            <div className="card bg-gray-100 p-8 flex flex-col gap-4">
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight font-sans mb-2">
                Privacy‑first by default
              </h3>
              <p className="text-lg text-black font-bold">
                Cookie-free, GDPR compliant by design. Bot detection and path
                masking included automatically.
              </p>
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight font-sans mb-2">
                Smart Automation
              </h3>
              <p className="text-lg text-black font-bold">
                Intelligent setup that handles everything automatically. No
                manual configuration or tweaking required.
              </p>
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight font-sans mb-2">
                Grows with you
              </h3>
              <p className="text-lg text-black font-bold">
                Start small. Scale when you’re ready — same SDK, same API, no
                lock‑in.
              </p>
              <h3 className="text-2xl font-extrabold text-black uppercase tracking-tight font-sans mb-2">
                Rock Solid Reliability
              </h3>
              <p className="text-lg text-black font-bold">
                Built to never break your site. Handles errors gracefully and
                captures data even during page transitions.
              </p>
            </div>
          </div>

          <div className="mt-16 brutalist-border bg-black p-10 text-white">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight font-sans mb-8 text-center px-2">
              Production Ready - Copy, Paste, Deploy
            </h3>
            <div className="bg-gray-900 brutalist-border border-white p-4 sm:p-8 font-mono text-left max-w-full lg:max-w-6xl xl:max-w-7xl mx-auto overflow-x-auto">
              <div className="text-white text-xs sm:text-sm font-bold mb-4">
                Quickstart (3 steps)
              </div>
              <ol className="list-decimal ml-5 text-xs sm:text-sm text-gray-100 mb-4">
                <li className="mb-2">Build & run locally</li>
              </ol>
              <pre className="text-green-400 text-xs sm:text-sm mb-4 whitespace-pre-wrap">{`go build -o analytics ./cmd/analytics
./analytics serve --dev`}</pre>
              <ol
                className="list-decimal ml-5 text-xs sm:text-sm text-gray-100 mb-4"
                start={2}
              >
                <li className="mb-2">Include the tracker in your site</li>
              </ol>
              <pre className="text-green-400 text-xs sm:text-sm mb-4 whitespace-pre-wrap">{`<script src="https://unpkg.com/@zeroanalytics/zero-js-sdk"
  data-site="your-site.com"
  data-endpoint="https://your-analytics.com/api/collect"
  data-track-errors="true" data-web-vitals="true"
  defer></script>`}</pre>
              <ol
                className="list-decimal ml-5 text-xs sm:text-sm text-gray-100 mb-4"
                start={3}
              >
                <li className="mb-2">Send a test event (optional)</li>
              </ol>
              <pre className="text-green-400 text-xs sm:text-sm mb-4 whitespace-pre-wrap">{`curl -X POST "http://localhost:8080/api/collect" \
  -H "Content-Type: application/json" \
  -d '{"type":"pageview","site":"your-site.com","path":"/"}'`}</pre>
              <div className="text-gray-400 text-xs sm:text-sm mb-2">
                &lt;!-- Copy this into your &lt;head&gt; --&gt;
              </div>
              <div className="text-green-400 text-xs sm:text-sm mb-1 break-all sm:break-normal">
                &lt;script
              </div>
              <div className="text-green-400 text-xs sm:text-sm mb-1 break-all sm:break-normal">
                {' '}
                src=&quot;https://unpkg.com/@zeroanalytics/zero-js-sdk&quot;
              </div>
              <div className="text-green-400 text-xs sm:text-sm mb-1 break-all sm:break-normal">
                {' '}
                data-site=&quot;your-site.com&quot;
              </div>
              <div className="text-green-400 text-xs sm:text-sm mb-1 break-all sm:break-normal">
                {' '}
                data-endpoint=&quot;https://your-analytics.com/api/collect&quot;
              </div>
              <div className="text-green-400 text-xs sm:text-sm mb-1 break-all sm:break-normal">
                {' '}
                data-track-errors=&quot;true&quot;
                data-web-vitals=&quot;true&quot;
              </div>
              <div className="text-green-400 text-xs sm:text-sm mb-2 break-all sm:break-normal">
                {' '}
                defer&gt;&lt;/script&gt;
              </div>
            </div>
            <p className="text-white text-lg font-bold text-center mt-6 uppercase tracking-wide">
              No servers. No databases. No configuration. Just analytics.
            </p>
          </div>

          <div className="mt-8 card bg-white p-6">
            <h4 className="text-xl font-extrabold text-black uppercase tracking-widest mb-4 text-center">
              HTML‑First Custom Event Example
            </h4>
            <div className="bg-gray-100 brutalist-border p-4 font-mono text-sm overflow-x-auto">
              <div>
                &lt;button data-zero-event=&quot;signup_click&quot;
                data-zero-prop-plan=&quot;pro&quot;&gt;Sign up&lt;/button&gt;
              </div>
            </div>
            <p className="text-black text-sm mt-3 text-center">
              No JS needed. Use <code>data-zero-event</code> and{' '}
              <code>data-zero-prop-*</code> to send rich events.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-extrabold text-black mb-12 uppercase tracking-widest text-center">
              Zero Analytics vs The Competition
            </h3>
            <div className="card bg-white overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-black/95 text-white">
                  <tr>
                    <th className="p-4 font-extrabold uppercase tracking-wide">
                      Feature
                    </th>
                    <th className="p-4 font-extrabold uppercase tracking-wide text-center">
                      Zero Analytics
                    </th>
                    <th className="p-4 font-extrabold uppercase tracking-wide text-center">
                      Google Analytics
                    </th>
                    <th className="p-4 font-extrabold uppercase tracking-wide text-center">
                      Plausible
                    </th>
                  </tr>
                </thead>
                <tbody className="text-black font-bold">
                  <tr className="border-b border-black/80">
                    <td className="p-4">Setup Time</td>
                    <td className="p-4 text-center bg-green-100">30 seconds</td>
                    <td className="p-4 text-center bg-red-100">30+ minutes</td>
                    <td className="p-4 text-center bg-red-100">45+ minutes</td>
                  </tr>
                  <tr className="border-b border-black/80">
                    <td className="p-4">Infrastructure Required</td>
                    <td className="p-4 text-center bg-green-100">Zero</td>
                    <td className="p-4 text-center bg-red-100">
                      Google Account
                    </td>
                    <td className="p-4 text-center bg-red-100">
                      Docker/Server
                    </td>
                  </tr>
                  <tr className="border-b border-black/80">
                    <td className="p-4">Setup</td>
                    <td className="p-4 text-center bg-green-100">
                      1 tag, zero config
                    </td>
                    <td className="p-4 text-center bg-red-100">Complex</td>
                    <td className="p-4 text-center bg-yellow-100">
                      Some config
                    </td>
                  </tr>
                  <tr className="border-b border-black/80">
                    <td className="p-4">Privacy Compliant</td>
                    <td className="p-4 text-center bg-green-100">✓ Built-in</td>
                    <td className="p-4 text-center bg-red-100">✗ Complex</td>
                    <td className="p-4 text-center bg-yellow-100">
                      ✓ Extra cost
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4">Monthly Cost</td>
                    <td className="p-4 text-center bg-green-100">$0 - $19</td>
                    <td className="p-4 text-center bg-yellow-100">Free*</td>
                    <td className="p-4 text-center bg-red-100">$9 - $99</td>
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
