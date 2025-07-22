'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">
                Zero Analytics
              </h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="https://github.com/zeroanalytics" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="#early-access" className="btn-primary">
                Get Early Access
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <a href="#features" className="block text-gray-600 hover:text-primary-600 px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#pricing" className="block text-gray-600 hover:text-primary-600 px-3 py-2 text-base font-medium">
                Pricing
              </a>
              <a href="https://github.com/zeroanalytics" className="block text-gray-600 hover:text-primary-600 px-3 py-2 text-base font-medium" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="#early-access" className="block btn-primary mt-2">
                Get Early Access
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}