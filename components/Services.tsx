"use client";

import { useRouter } from "next/navigation";
import {
  Baby,
  Cake,
  Mountain,
  Heart,
  Star,
  Camera,
  ShoppingCart,
} from "lucide-react";
import { services, Service } from "@/lib/services";
import { useCart } from "@/context/CartContext";

import Image from "next/image";

// Premium Gold & Slate Palette
const serviceIcons: { [key: string]: any } = {
  "baby-shower": Baby,
  "cradle-ceremony": Baby,
  birthday: Cake,
  "half-saree": Mountain,
  wedding: Heart,
};

// Image mapping for services
const serviceImages: { [key: string]: string } = {
  "baby-shower": "https://res.cloudinary.com/deeejohfw/image/upload/v1771297759/photo-1519689680058-324335c77eba_lzybhp.avif",
  "cradle-ceremony": "https://res.cloudinary.com/deeejohfw/image/upload/v1771297722/service_cradle_ceremony_1771296977840_annia8.jpg",
  birthday: "https://res.cloudinary.com/deeejohfw/image/upload/v1771297721/service_birthday_party_1771296996314_zz8oo1.jpg",
  "half-saree": "https://res.cloudinary.com/deeejohfw/image/upload/v1771299945/Gemini_Generated_Image_h447yah447yah447_e0mqqg.png",
  wedding: "https://res.cloudinary.com/deeejohfw/image/upload/v1771297722/service_wedding_1771297036682_i3ayhy.jpg",
};

export default function Services() {
  const router = useRouter();
  const { cart, toggleCart } = useCart();

  const handleServiceClick = (service: Service) => {
    router.push(`/services/${service.slug}`);
  };

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-slate-50"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(248,250,252,1)_100%)]">
        {/* Subtle Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

        {/* Golden Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[100px] opacity-60"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-amber-100 rounded-full mb-6 shadow-sm">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-xs font-bold text-slate-600 tracking-widest uppercase">
              World Class Photography
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900">
            Curated Services for
            <span className="block text-amber-500 font-serif italic mt-2">
              Timeless Memories
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            Experiencing life's most beautiful moments through our lens. Choose a service to begin your journey.
          </p>
        </div>

        {/* Process Section */}
        <div className="mb-20 max-w-4xl mx-auto text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block p-1 rounded-full border border-amber-200 bg-amber-50/50 backdrop-blur-sm mb-8">
            <div className="px-6 py-2 rounded-full bg-white shadow-sm">
              <span className="text-sm font-semibold text-amber-600">Simple Booking Process</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>

            {[
              { title: "Select Service", desc: "Choose your perfect package" },
              { title: "Customize", desc: "Add events and media preferences" },
              { title: "Get Quote", desc: "Receive a personalized estimate via WhatsApp" }
            ].map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-amber-50 shadow-lg flex items-center justify-center mb-6 text-xl font-bold text-amber-600 font-display">
                  {i + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.slug] || Camera;
            const imageUrl = serviceImages[service.slug] || serviceImages['wedding'];

            return (
              <div
                key={service.slug}
                className="group relative bg-white rounded-2xl overflow-hidden border border-amber-100 hover:border-amber-300 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(251,191,36,0.15)] cursor-pointer animate-slide-up flex flex-col pt-0"
                style={{ animationDelay: `${0.1 * index}s` }}
                onClick={() => handleServiceClick(service)}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                  <Image
                    src={imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:bg-amber-500 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 pt-6 flex-grow flex flex-col">
                  {/* Title & Description */}
                  <h3 className="text-2xl font-display font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-6 line-clamp-3 text-sm">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    {/* Divider */}
                    <div className="w-full h-px bg-slate-100 mb-6 group-hover:bg-amber-100 transition-colors duration-300"></div>

                    {/* Features Preview */}
                    <div className="flex flex-col gap-2.5">
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                        <span>{service.events?.length || 0} Special Events</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                        <span>{service.mediaTypes.length} Media Options</span>
                      </div>
                      {service.religions && (
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                          <span>Traditional & Modern</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Action */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-300 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button
          onClick={toggleCart}
          className="fixed bottom-8 right-8 bg-slate-900 text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl hover:shadow-slate-900/40 hover:-translate-y-1 transition-all duration-300 z-50 group border border-slate-700"
        >
          <ShoppingCart className="w-5 h-5 group-hover:rotate-12 transition-transform text-amber-400" />
          <span className="font-bold text-lg">{cart.length}</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse border-2 border-slate-900"></div>
        </button>
      )}
    </section>
  );
}