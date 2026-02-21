'use client'

import { useState } from 'react'
import { Camera, ArrowRight } from 'lucide-react'

type Category = 'all' | 'weddings' | 'babies' | 'birthdays' | 'outdoor'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const categories = [
    { id: 'all' as Category, label: 'All' },
    { id: 'weddings' as Category, label: 'Weddings' },
    { id: 'babies' as Category, label: 'Babies' },
    { id: 'birthdays' as Category, label: 'Birthdays' },
    { id: 'outdoor' as Category, label: 'Outdoor' },
  ]

  // Gallery items with Unsplash images
  const galleryItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'Royal Wedding Ceremony',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      category: 'babies',
      title: 'Newborn Session',
      imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80'
    },
    {
      id: 3,
      category: 'birthdays',
      title: 'First Birthday Celebration',
      imageUrl: 'https://images.unsplash.com/photo-1530103862676-de3c9a59af57?auto=format&fit=crop&q=80'
    },
    {
      id: 4,
      category: 'outdoor',
      title: 'Sunset Couple Shoot',
      imageUrl: 'https://images.unsplash.com/photo-1470252649378-27ef86442da5?auto=format&fit=crop&q=80'
    },
    {
      id: 5,
      category: 'weddings',
      title: 'Grand Reception',
      imageUrl: 'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?auto=format&fit=crop&q=80'
    },
    {
      id: 6,
      category: 'babies',
      title: 'Toddler Portraits',
      imageUrl: 'https://images.unsplash.com/photo-1510156063462-878051778c1f?auto=format&fit=crop&q=80'
    },
    {
      id: 7,
      category: 'birthdays',
      title: 'Cake Smash Fun',
      imageUrl: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80'
    },
    {
      id: 8,
      category: 'outdoor',
      title: 'Traditional Half Saree',
      imageUrl: 'https://images.unsplash.com/photo-1605218427368-35b8095bc354?auto=format&fit=crop&q=80'
    },
    {
      id: 9,
      category: 'weddings',
      title: 'Bride & Groom Portrait',
      imageUrl: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80'
    },
  ]

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 bg-slate-50 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-fade-in">
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

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === category.id
                ? 'bg-slate-900 text-white border-slate-900 shadow-md transform scale-105'
                : 'bg-white text-slate-600 border-slate-200 hover:border-amber-300 hover:text-amber-600'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <Camera className="w-12 h-12 text-slate-300" />
              </div>

              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
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
        <div className="text-center mt-16">
          <a href="#contact" className="px-8 py-3 bg-white text-slate-800 font-semibold rounded-full border border-slate-200 hover:border-amber-400 hover:text-amber-600 transition-all duration-300 shadow-sm hover:shadow-md inline-block">
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}