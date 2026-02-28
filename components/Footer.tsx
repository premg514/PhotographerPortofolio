'use client'

import { Mail, Phone, MapPin, Instagram, Youtube } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'Baby Shower', href: '#services' },
      { label: 'Cradle Ceremony', href: '#services' },
      { label: 'Wedding Photography', href: '#services' },
      { label: 'House Warming', href: '#services' },
      { label: 'Fashion Shoot', href: '#services' },
    ],
    quickLinks: [
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Services', href: '#services' },
      { label: 'Contact', href: '#contact' },
      { label: 'Book Now', href: '#contact' },
    ],
  }

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-6 group">
              <div className="p-1 rounded-xl transition-all duration-300">
                <div className="relative h-10 w-32 overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/deeejohfw/image/upload/v1772271906/logo.jpg_duilqh.jpg"
                    alt="Santosh Photography Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </div>
            </Link>
            <p className="text-slate-500 mb-6 leading-relaxed text-sm font-light">
              Capturing moments, creating memories. Professional photography services for all your special occasions, BHIMAVARAM based, crafted with passion and precision.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-500 hover:text-amber-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 83673 57874</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 hover:text-amber-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span>santoshphotography.7874@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 hover:text-amber-600 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Bhimavaram, India</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://www.instagram.com/santosh_photography_offical?igsh=MTNjaXJqMWFlb2hyOQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-200 transition-all duration-300 shadow-sm"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@santosh_photography?si=MhGtwc-tXFbjE7UP"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-200 transition-all duration-300 shadow-sm"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-slate-900">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-amber-600 transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6 text-slate-900">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-amber-600 transition-colors text-sm hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Santosh Photography. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="https://www.digitalarc.space"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-600 transition-colors"
            >
              Developed by <span className="font-semibold text-slate-500 hover:text-amber-600">Digital Arc Technologies</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}