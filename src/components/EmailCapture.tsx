'use client'

import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name }),
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      setStatus('success')
      setMessage(
        "Thanks for your interest! We'll notify you when Zero Analytics is ready."
      )
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section
      id="early-access"
      className="section-padding border-b-2 border-black"
      style={{ backgroundColor: 'var(--color-pink)' }}
    >
      <div className="container-max px-0">
        <div className="max-w-screen-md mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8 uppercase tracking-tight font-sans">
              Join the first cohort of Zero Analytics operators
            </h2>
            <p className="text-xl text-black mb-10 font-bold">
              Receive the same migration checklist we used to move beta teams
              off GA, hear from the two of us when ships go live, and get honest
              notes about what still needs work.
            </p>
            <div className="bg-gray-100 p-10 card max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name (optional)
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-black bg-white text-black font-extrabold text-lg rounded-none focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-black"
                    placeholder="Your name (optional)"
                    disabled={status === 'loading'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 border-2 border-black bg-white text-black font-extrabold text-lg rounded-none focus:outline-none focus:ring-4 focus:ring-gray-300 focus:border-black"
                    placeholder="Enter your email address"
                    disabled={status === 'loading'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading' || !email}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-2xl"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Waitlist →'}
                </button>
              </form>
              {message && (
                <div
                  className={`mt-6 p-4 card text-lg font-bold ${status === 'success' ? 'bg-gray-200 text-black' : 'bg-gray-300 text-black'}`}
                >
                  {message}
                </div>
              )}
              <p className="text-xs text-black mt-6 font-bold">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
              <div className="card p-6 bg-gray-100">
                <h3 className="font-extrabold mb-2 uppercase">Open Source</h3>
                <p className="text-lg font-bold">
                  Full source code available on GitHub
                </p>
              </div>
              <div className="card p-6 bg-gray-100">
                <h3 className="font-extrabold mb-2 uppercase">Self-Hosted</h3>
                <p className="text-lg font-bold">
                  Deploy on your own infrastructure
                </p>
              </div>
              <div className="card p-6 bg-gray-100">
                <h3 className="font-extrabold mb-2 uppercase">
                  Managed Service
                </h3>
                <p className="text-lg font-bold">Or use our hosted solution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
