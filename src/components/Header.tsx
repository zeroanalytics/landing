'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 border-b-4 border-black bg-brand-yellow">
      <div className="container-max">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tighter uppercase font-sans">
                Zero Analytics
              </h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="https://github.com/zeroanalytics"
                className="btn btn-sm text-black border-black transform hover:translate-x-1 hover:translate-y-1 transition-transform brutal-shadow-xs"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 border-4 border-black text-black bg-white focus:outline-none hover:bg-gray-100 transition-colors"
            >
              <svg
                className="h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="4"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white border-t-4 border-black">
              <a
                href="https://github.com/zeroanalytics"
                className="block btn btn-md w-full text-center text-black border-black brutal-shadow-xs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.1-1.466-1.1-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
