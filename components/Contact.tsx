'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: '',
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
    { icon: Mail, label: 'Email', value: 'hello@santhoshphotography.com' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana, India' },
  ]

  const socialLinks = [
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Youtube, url: '#', label: 'Youtube' },
  ]

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">
            Let&apos;s Create <span className="text-amber-500 font-serif italic">Magic</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
            Ready to capture your special moments? Reach out to us and let&apos;s start planning your perfect shoot.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <div className="space-y-10 animate-slide-up">
            <div>
              <h3 className="text-2xl font-display font-bold mb-8 text-slate-900">Get in Touch</h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                      <info.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1 text-lg">{info.label}</h4>
                      <p className="text-slate-500 font-light">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-display font-bold mb-8 text-slate-900">Follow Our Journey</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center hover:bg-amber-500 transition-colors duration-300 shadow-lg shadow-slate-900/10 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

              <h4 className="font-display font-bold text-slate-900 mb-6 text-xl relative z-10">Working Hours</h4>
              <div className="space-y-4 text-slate-600 relative z-10">
                <p className="flex justify-between items-center border-b border-slate-50 pb-3">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="font-bold text-slate-800 bg-slate-50 px-3 py-1 rounded-full text-sm">9:00 AM - 7:00 PM</span>
                </p>
                <p className="flex justify-between items-center border-b border-slate-50 pb-3">
                  <span className="font-medium">Saturday</span>
                  <span className="font-bold text-slate-800 bg-slate-50 px-3 py-1 rounded-full text-sm">10:00 AM - 5:00 PM</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span className="font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-sm">By Appointment</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6 relative">

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Full Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-amber-400 focus:bg-white focus:outline-none transition-all duration-300 placeholder-slate-400 font-medium"
                    placeholder="John Doe"
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-amber-400 focus:bg-white focus:outline-none transition-all duration-300 placeholder-slate-400 font-medium"
                    placeholder="+91 98765 43210"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  Email Address <span className="text-amber-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-amber-400 focus:bg-white focus:outline-none transition-all duration-300 placeholder-slate-400 font-medium"
                  placeholder="john@example.com"
                  suppressHydrationWarning
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Service Required <span className="text-amber-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-amber-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-600 font-medium cursor-pointer"
                    suppressHydrationWarning
                  >
                    <option value="">Select Service</option>
                    <option value="baby-shower">Baby Shower</option>
                    <option value="cradle-ceremony">Cradle Ceremony</option>
                    <option value="birthday">Birthday Shoot</option>
                    <option value="half-saree">Half Saree Function</option>
                    <option value="wedding">Wedding</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-amber-400 focus:bg-white focus:outline-none transition-all duration-300 text-slate-600 font-medium custom-date-input"
                    suppressHydrationWarning
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl focus:border-amber-400 focus:bg-white focus:outline-none transition-all duration-300 placeholder-slate-400 font-medium resize-none"
                  placeholder="Tell us more about your requirements..."
                  suppressHydrationWarning
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:shadow-slate-900/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group text-lg"
                suppressHydrationWarning
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform text-amber-500" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}