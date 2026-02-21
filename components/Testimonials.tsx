'use client'

import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya & Rahul',
      service: 'Wedding Photography',
      rating: 5,
      text: 'The team captured our wedding beautifully! Every moment was perfect, from the candid shots to the cinematic videos. We couldn\'t be happier with the results.',
    },
    {
      name: 'Ananya Singh',
      service: 'Baby Shoot',
      rating: 5,
      text: 'Amazing experience with our baby\'s first photoshoot! They were so patient and professional. The photos turned out absolutely adorable!',
    },
    {
      name: 'Vikram & Sneha',
      service: 'Outdoor Shoot',
      rating: 5,
      text: 'Our half saree ceremony was captured beautifully. The creativity and attention to detail were outstanding. Highly recommend their services!',
    },
    {
      name: 'Ravi Kumar',
      service: 'Birthday Party',
      rating: 5,
      text: 'They made my daughter\'s birthday so special! The cake smash photos are absolutely precious. Professional and fun to work with.',
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/snow.png')] opacity-[0.05]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-60"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-slate-50 border border-slate-100 rounded-full mb-4">
            <span className="text-xs font-bold text-slate-500 tracking-widest uppercase">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900">
            Client <span className="text-amber-500 font-serif italic">Love</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
            Don&apos;t just take our word for it - hear from our happy clients who trusted us with their memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 relative hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 animate-slide-up border border-slate-100 group"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform">
                <Quote className="w-6 h-6 fill-white" />
              </div>

              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 mb-8 leading-relaxed font-light text-lg italic">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-amber-600 font-medium">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}