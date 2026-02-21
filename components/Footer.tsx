'use client'

import { Camera, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'Baby Shower', href: '#services' },
      { label: 'Cradle Ceremony', href: '#services' },
      { label: 'Birthday Shoot', href: '#services' },
      { label: 'Half Saree Function', href: '#services' },
      { label: 'Wedding Photography', href: '#services' },
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
            <Link href="/" className="flex items-center space-x-2 mb-6 group">
              <div className="p-2 bg-amber-100/50 rounded-xl">
                <Camera className="w-6 h-6 text-amber-600" />
              </div>
              <span className="text-2xl font-display font-bold text-slate-900">Santhosh <span className="text-amber-600">Photography</span></span>
            </Link>
            <p className="text-slate-500 mb-6 leading-relaxed text-sm font-light">
              Capturing moments, creating memories. Professional photography services for all your special occasions, crafted with passion and precision.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-slate-500 hover:text-amber-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 hover:text-amber-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@santhoshphotography.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 hover:text-amber-600 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Hyderabad, Telangana</span>
              </div>
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
            © {currentYear} Santhosh Photography. All rights reserved.
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