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
      className="section-padding border-b-8 border-black"
      style={{ backgroundColor: 'var(--color-pink)' }}
    >
      <div className="container-max px-0">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black text-black mb-10 uppercase tracking-tighter font-sans">
              Join the first cohort of Zero Analytics operators
            </h2>
            <p className="text-2xl md:text-3xl text-black mb-12 font-bold leading-tight">
              Receive the same migration checklist we used to move beta teams
              off GA, hear from the two of us when ships go live, and get honest
              notes about what still needs work.
            </p>
            <div
              className="bg-white p-12 card max-w-xl mx-auto transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
              style={{ boxShadow: '14px 14px 0 0 #000' }}
            >
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
                    className="w-full px-6 py-5 border-4 border-black bg-white text-black font-bold text-xl rounded-none focus:outline-none focus:ring-4 focus:ring-black/20 focus:border-black placeholder:text-black/40"
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
                    className="w-full px-6 py-5 border-4 border-black bg-white text-black font-bold text-xl rounded-none focus:outline-none focus:ring-4 focus:ring-black/20 focus:border-black placeholder:text-black/40"
                    placeholder="Enter your email address"
                    disabled={status === 'loading'}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading' || !email}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-2xl py-6 transform hover:translate-x-1 hover:translate-y-1 transition-transform"
                  style={{ boxShadow: '6px 6px 0 0 #000' }}
                >
                  {status === 'loading' ? 'Joining...' : 'Join Waitlist →'}
                </button>
              </form>
              {message && (
                <div
                  className={`mt-8 p-6 brutalist-border text-xl font-bold ${status === 'success' ? 'bg-yellow-50 text-black' : 'bg-red-50 text-black'}`}
                >
                  {message}
                </div>
              )}
              <p className="text-sm text-black/60 mt-8 font-bold uppercase tracking-[0.35em]">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
              <div
                className="card p-8 bg-white transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
                style={{ boxShadow: '8px 8px 0 0 #000' }}
              >
                <h3 className="font-black text-2xl mb-3 uppercase tracking-tight">
                  Open Source
                </h3>
                <p className="text-lg md:text-xl font-bold">
                  Full source code available on GitHub
                </p>
              </div>
              <div
                className="card p-8 bg-white transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
                style={{ boxShadow: '8px 8px 0 0 #000' }}
              >
                <h3 className="font-black text-2xl mb-3 uppercase tracking-tight">
                  Self-Hosted
                </h3>
                <p className="text-lg md:text-xl font-bold">
                  Deploy on your own infrastructure
                </p>
              </div>
              <div
                className="card p-8 bg-white transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform"
                style={{ boxShadow: '8px 8px 0 0 #000' }}
              >
                <h3 className="font-black text-2xl mb-3 uppercase tracking-tight">
                  Managed Service
                </h3>
                <p className="text-lg md:text-xl font-bold">
                  Or use our hosted solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
