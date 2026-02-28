'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Camera } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'translate-y-0 opacity-100 bg-white/80 backdrop-blur-md shadow-sm py-4 border-b border-indigo-50/50'
        : '-translate-y-full opacity-0 pointer-events-none py-6'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group animate-fade-in transition-all duration-300">
            <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src="https://res.cloudinary.com/deeejohfw/image/upload/v1772254269/Screenshot_2026-02-28_101840_auxcdi.png"
                alt="Santosh Photography Logo"
                width={200}
                height={50}
                className="h-8 md:h-10 w-auto object-contain block"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium text-sm tracking-wide transition-all duration-300 hover:scale-105 relative group ${isScrolled ? 'text-slate-600 hover:text-amber-600' : 'text-white hover:text-amber-200'
                  }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-amber-500' : 'bg-white'
                  }`}></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-slate-900 text-white font-semibold rounded-full shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled
              ? 'text-slate-800 hover:bg-slate-100'
              : 'text-white hover:bg-white/10'
              }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 animate-slide-down">
            <div className={`flex flex-col space-y-4 p-6 rounded-2xl ${isScrolled ? 'bg-white shadow-xl' : 'glass-effect'
              }`}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium transition-colors py-2 ${isScrolled
                    ? 'text-slate-700 hover:text-indigo-600'
                    : 'text-white hover:text-indigo-200'
                    }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-center mt-2"
              >
                Book Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}