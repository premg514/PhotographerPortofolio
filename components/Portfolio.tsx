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
      imageUrl: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772285001/50.jpg_zfntbm.jpg'
    },
    {
      id: 2,
      category: 'outdoor',
      title: 'Outdoor Session',
      imageUrl: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772285001/3.jpg_1_bfa3jy.jpg'
    },
    {
      id: 3,
      category: 'weddings',
      title: 'Event Photography',
      imageUrl: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772284794/0001.jpg_esajgg.jpg'
    },
    {
      id: 4,
      category: 'outdoor',
      title: 'Scenic Portrait',
      imageUrl: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772284793/sp25.jpg_myuiry.jpg'
    },
    {
      id: 5,
      category: 'weddings',
      title: 'Ceremony Bliss',
      imageUrl: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772284766/WhatsApp_Image_2026-02-28_at_6.31.42_PM_cd7lga.jpg'
    },
    {
      id: 6,
      category: 'outdoor',
      title: 'Nature Portrait',
      imageUrl: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772284766/2.jpg_zx7rgt.jpg'
    },
    {
      id: 7,
      category: 'weddings',
      title: 'Timeless Connection',
      imageUrl: 'https://res.cloudinary.com/deeejohfw/image/upload/v1772026172/2_2.jpg_1_ftxojo.jpg'
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

        {/* Gallery Grid - 3 columns for 7 items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[3/2] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Optimized Image */}
              <div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-700">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-white text-[10px] uppercase tracking-widest font-bold rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">{item.title}</h3>
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