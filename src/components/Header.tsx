'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 brutalist-bg brutalist-border border-b-2 border-black/90">
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight uppercase font-mono">
                Zero Analytics
              </h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="https://github.com/zeroanalytics"
                className="btn btn-ghost btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href="#early-access" className="btn btn-accent btn-sm">
                Get Early Access
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 border-2 border-black text-black bg-white focus:outline-none hover:border-[var(--color-accent)]"
            >
              <svg
                className="h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t-2 border-black">
              <a
                href="https://github.com/zeroanalytics"
                className="block btn btn-ghost btn-md w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a href="#early-access" className="block btn btn-accent btn-md mt-2 w-full text-center">
                Get Early Access
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
