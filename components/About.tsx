'use client'

import { Award, Users, Camera, Heart } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Camera, value: '500+', label: 'Events Covered', color: 'bg-amber-100 text-amber-600' },
    { icon: Users, value: '1000+', label: 'Happy Clients', color: 'bg-slate-100 text-slate-600' },
    { icon: Award, value: '10+', label: 'Years Experience', color: 'bg-amber-100 text-amber-600' },
    { icon: Heart, value: '100%', label: 'Satisfaction', color: 'bg-slate-100 text-slate-600' },
  ]

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-slate-50 border border-slate-100 rounded-full mb-4">
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900">
            Passionate About <span className="text-amber-500 font-serif italic">Your Story</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
            Dedicated to preserving your precious moments with artistry, care, and a touch of elegance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Placeholder */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-slide-up border border-slate-100">
            <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-200 rounded-full blur-3xl opacity-20"></div>
                <Camera className="w-32 h-32 text-slate-300 relative z-10" />
              </div>
            </div>
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-display font-bold mb-6 text-slate-900">
              Crafting Visual Stories <span className="text-amber-500">Since 2014</span>
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg font-light">
              We are a team of passionate photographers who believe that every moment tells a story.
              With over a decade of experience, we specialize in capturing the essence of your special
              occasions with creativity, precision, and heart.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed text-lg font-light">
              From intimate baby shoots to grand wedding celebrations, we bring a cinematic approach
              to photography, ensuring every frame is a masterpiece. Our commitment is to not just
              take photos, but to create timeless memories you&apos;ll cherish forever.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: '✨', text: 'Professional Cinematic Coverage' },
                { icon: '🎯', text: 'High-Quality Equipment & Editing' },
                { icon: '💝', text: 'Personalized Service & Attention' },
                { icon: '⚡', text: 'Quick Delivery & Premium Albums' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="px-8 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors inline-block shadow-lg shadow-slate-900/10">
              Let&apos;s Work Together
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 animate-slide-up group"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl ${stat.color} flex items-center justify-center transition-transform duration-300 group-hover:rotate-6`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <div className="text-3xl font-display font-bold text-slate-900 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}