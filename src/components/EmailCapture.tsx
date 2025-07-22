'use client'

import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    
    // TODO: Replace with actual email capture service (Mailchimp, ConvertKit, etc.)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For now, just show success
      setStatus('success')
      setMessage('Thanks for your interest! We\'ll notify you when Zero Analytics is ready.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="early-access" className="section-padding bg-primary-900">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Early Access
          </h2>
          <p className="text-lg text-primary-100 mb-8">
            Be the first to know when Zero Analytics launches. 
            Join our waiting list for exclusive early access.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter your email address"
                  disabled={status === 'loading'}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waiting List'}
              </button>
            </form>
            
            {message && (
              <div className={`mt-4 p-3 rounded-lg text-sm ${
                status === 'success' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {message}
              </div>
            )}
            
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-100">
            <div>
              <h3 className="font-semibold mb-2">Open Source</h3>
              <p className="text-sm">Full source code available on GitHub</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Self-Hosted</h3>
              <p className="text-sm">Deploy on your own infrastructure</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Managed Service</h3>
              <p className="text-sm">Or use our hosted solution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}