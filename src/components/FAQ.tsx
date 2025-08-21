'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How is this different from Google Analytics?',
    answer:
      "Zero Analytics deploys in 30 seconds with zero infrastructure. No complex setup, no privacy concerns, no massive JavaScript bundle slowing your site. Just copy one script tag and you're done.",
  },
  {
    question: 'Is this really GDPR compliant?',
    answer:
      "Yes, 100%. We don't use cookies, don't track personal data, and anonymize all visitor information by design. No privacy banners or consent forms needed.",
  },
  {
    question: 'What happens when I get a lot of traffic?',
    answer:
      "Zero Analytics automatically scales from SQLite to ClickHouse when needed. You'll never hit performance walls or need to migrate manually.",
  },
  {
    question: 'Can I self-host this?',
    answer:
      'Absolutely! Zero Analytics is open source and deploys as a single binary. Run it on any server, VPS, or even a Raspberry Pi.',
  },
  {
    question: 'How accurate is the data compared to Google Analytics?',
    answer:
      'More accurate for real users. We filter out bots and scrapers automatically, so you see genuine human traffic without the noise.',
  },
  {
    question: 'What if I need more advanced features?',
    answer:
      'Zero Analytics includes custom events, goal tracking, and performance monitoring out of the box. For enterprise features, we offer paid tiers.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className="section-padding border-b-8 border-black"
      style={{ backgroundColor: 'var(--color-teal)' }}
    >
      <div className="container-max px-0">
        <div className="max-w-screen-md mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 uppercase tracking-tight font-sans">
              Questions? We Have Answers.
            </h2>
            <p className="text-xl text-black max-w-2xl mx-auto font-bold uppercase tracking-wide">
              Everything you need to know about Zero Analytics
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="brutalist-border bg-white">
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="text-xl font-extrabold text-black uppercase tracking-tight font-sans pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-2xl font-extrabold text-black flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 border-t-2 border-black">
                    <p className="text-lg text-black font-bold mt-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="brutalist-border bg-gray-100 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-extrabold text-black mb-4 uppercase tracking-widest">
                Still Have Questions?
              </h3>
              <a
                href="mailto:hello@zeroanalytics.io"
                className="btn-primary text-lg inline-block"
              >
                Contact Us →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
