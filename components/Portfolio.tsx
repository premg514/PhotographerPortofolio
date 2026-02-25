'use client'

import { useState } from 'react'
import Image from 'next/image'

type Category = 'all' | 'weddings' | 'babies' | 'birthdays' | 'outdoor'

export default function Portfolio() {
  // Gallery items with Cloudinary images
  const galleryItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'Wedding Moments',
      imageUrl: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772026172/2_2.jpg_1_ftxojo.jpg'
    },
    {
      id: 2,
      category: 'outdoor',
      title: 'Outdoor Session',
      imageUrl: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772026176/IMG_3013_ggvgga.jpg'
    },
    {
      id: 3,
      category: 'weddings',
      title: 'Event Photography',
      imageUrl: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772026601/3_1.jpg_1_nycmxj.jpg'
    },
    {
      id: 4,
      category: 'outdoor',
      title: 'Scenic Portrait',
      imageUrl: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772026659/1_2.jpg_1_ytl8xc.jpg'
    },
  ]

  return (
    <section id="portfolio" className="py-24 bg-slate-50 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-full mb-4 shadow-sm">
            <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-slate-900">
            Captured <span className="text-amber-500 font-serif italic">Masterpieces</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
            Browse through our collection of beautiful moments we&apos;ve captured with precision and love.
          </p>
        </div>

        {/* Gallery Grid - 2 columns for 4 items */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Optimized Image */}
              <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>

              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-white text-[10px] uppercase tracking-widest font-bold rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white mb-1">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-20">
          <a href="#contact" className="px-10 py-4 bg-white text-slate-800 font-semibold rounded-full border border-slate-200 hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm hover:shadow-md inline-block">
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}