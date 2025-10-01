'use client'

import { useState } from 'react'

const faqs = [
  {
    question:
      'How is this different from Google Analytics or product suites like Rybbit?',
    answer:
      "Zero deploys in 30 seconds as a single binary. You get privacy-native metrics without adopting funnels, replays, or managed dashboards you don't need.",
  },
  {
    question: 'Is this really GDPR compliant?',
    answer:
      'Yes. DNT and GPC headers pause collection automatically, IPs are anonymised, and visitor salts stay on your hardware. No consent banners required.',
  },
  {
    question: 'What happens when I get a lot of traffic?',
    answer:
      'Flip on ClickHouse dual-write—either self-managed or on our hosted tier—without touching your integration. The data model stays identical.',
  },
  {
    question: 'Can I self-host this?',
    answer:
      'Absolutely! Zero Analytics is open source and deploys as a single binary. Run it on any server, VPS, or even a Raspberry Pi.',
  },
  {
    question: 'How accurate is the data compared to Google Analytics?',
    answer:
      'More accurate for real users. We filter bots, respect do-not-track, and never trust proxy headers unless you explicitly enable them.',
  },
  {
    question: 'What if I need more advanced features?',
    answer:
      'Zero focuses on self-serve metrics, consent-friendly data, and resilience. If you later need heavy product analytics, you can still export the same ClickHouse tables elsewhere.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-padding border-b-8 border-black bg-brand-teal">
      <div className="container-max px-0">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-black mb-8 uppercase tracking-tighter font-sans">
              Questions? We Have Answers.
            </h2>
            <p className="text-2xl md:text-3xl text-black max-w-3xl mx-auto font-bold tracking-wide leading-tight">
              Everything you need to know about Zero Analytics.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`brutalist-border bg-white border-4 transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all ${openIndex === index ? 'brutal-shadow-faq-open' : 'brutal-shadow-faq'}`}
              >
                <button
                  className="w-full p-8 text-left flex justify-between items-start hover:bg-gray-50 transition-colors group"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="text-xl md:text-2xl font-black text-black uppercase tracking-tight font-sans pr-6 group-hover:translate-x-1 transition-transform">
                    {faq.question}
                  </h3>
                  <span className="text-4xl font-black text-black flex-shrink-0 leading-none">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-8 border-t-4 border-black bg-yellow-50">
                    <p className="text-lg md:text-xl text-black font-bold mt-6 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="brutalist-border border-4 bg-white p-12 max-w-2xl mx-auto transform hover:translate-x-[-2px] hover:translate-y-[-2px] transition-transform brutal-shadow-md">
              <h3 className="text-3xl md:text-4xl font-black text-black mb-6 uppercase tracking-tight">
                Still Have Questions?
              </h3>
              <a
                href="mailto:hello@zeroanalytics.io"
                className="btn-primary text-xl inline-flex items-center px-8 py-4 transform hover:translate-x-1 hover:translate-y-1 transition-transform brutal-shadow-sm"
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
