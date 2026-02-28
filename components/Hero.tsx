"use client";

import { ArrowRight, Sparkles, Star, Award, Camera } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 pt-20 lg:pt-0"
    >
      {/* Premium Light Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(241,245,249,1)_100%)]">
        {/* Subtle Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>

        {/* Golden Glows - Soft & Luxurious */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-100/40 rounded-full blur-[120px] opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/60 rounded-full blur-[100px] opacity-60"></div>
      </div>

      {/* Abstract Geometric Accents */}
      <div className="absolute top-1/4 left-10 w-24 h-24 border border-amber-200/40 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-slate-200 rounded-full opacity-40"></div>

      <div className="container-custom relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <div className="text-center lg:text-left animate-fade-in flex flex-col items-center lg:items-start">

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-amber-100/80 rounded-full shadow-sm mb-8 shadow-amber-100/50">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-xs font-bold text-slate-600 tracking-widest uppercase">
                Premium Photography
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-slate-900 leading-[1.1] tracking-tight">
              Capturing Life's <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent italic font-serif pr-2">
                  Golden Moments
                </span>
                {/* Underline decoration */}
                <span className="absolute bottom-2 left-0 w-full h-3 bg-amber-100/50 -z-0 -rotate-1 rounded-full"></span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-light">
              We specialize in turning fleeting seconds into timeless masterpieces.
              Premium photography for weddings, portraits, and special events.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Link
                href="#contact"
                className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-full shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Book a Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#portfolio"
                className="px-8 py-4 bg-white text-slate-800 font-semibold rounded-full border border-slate-200 hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-300 w-full sm:w-auto flex justify-center shadow-sm hover:shadow-md"
              >
                View Portfolio
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 mt-16 border-t border-slate-200 pt-8 w-full max-w-md lg:max-w-none">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "150+", label: "Weddings" },
                { value: "5⭐", label: "Rating" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1 font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full flex justify-center lg:justify-end perspective-1000">
            {/* Soft Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-amber-100/30 rounded-full blur-[100px] -z-10"></div>

            <div className="relative w-full max-w-[620px] aspect-[4/3] animate-float-3d z-10">
              {/* Professional Camera Frame Container */}
              <div className="absolute inset-0 bg-white p-3 md:p-5 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden group">
                {/* Inner Content Case (Viewfinder) */}
                <div className="relative w-full h-full bg-slate-950 rounded-[1.8rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center">
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-10 pointer-events-none"></div>

                  {/* Viewfinder Corners (L-Shapes) */}
                  <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/40 z-20 pointer-events-none rounded-tl-sm"></div>
                  <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-white/40 z-20 pointer-events-none rounded-tr-sm"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-white/40 z-20 pointer-events-none rounded-bl-sm"></div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/40 z-20 pointer-events-none rounded-br-sm"></div>

                  {/* Focus Marker (Center Crosshair) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 z-20 pointer-events-none opacity-30">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white"></div>
                    <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white"></div>
                  </div>

                  {/* Logo GIF */}
                  <Image
                    src="https://res.cloudinary.com/deeejohfw/image/upload/v1772251631/santoshphotographylogo-ezgif.com-video-to-gif-converter_fitrhw.gif"
                    alt="Santosh Photography Logo"
                    fill
                    priority
                    className="object-contain p-6 md:p-12 transition-all duration-700 md:group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 620px"
                  />

                  {/* Camera UI Elements */}
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/60 to-transparent flex items-start justify-between px-8 pt-6 z-20">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">REC</span>
                    </div>
                    <div className="flex items-center gap-4 text-white/60 text-[9px] font-mono">
                      <span>4K 60FPS</span>
                      <span>ISO 200</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-between px-8 pb-6 z-20">
                    <div className="text-white/60 text-[9px] font-mono flex items-center gap-3">
                      <span>128GB</span>
                      <div className="w-6 h-3 border border-white/40 rounded-[2px] p-[1px]">
                        <div className="h-full w-3/4 bg-white/60"></div>
                      </div>
                    </div>
                    <span className="text-white font-mono text-[9px]">00:24:15:08</span>
                  </div>
                </div>
              </div>

              {/* Decorative "Premium" Badge */}
              <div className="absolute -top-3 -right-3 md:-top-5 md:-right-5 bg-amber-500 text-white px-4 py-2 md:px-7 md:py-3.5 rounded-2xl shadow-xl shadow-amber-500/30 font-display font-black text-xs md:text-sm -rotate-6 z-30 animate-fade-in hover:rotate-0 transition-all duration-300 cursor-default">
                CINEMATIC
              </div>

              {/* Floating Icons */}
              <div className="absolute -bottom-10 -left-10 p-5 bg-white rounded-3xl shadow-xl border border-slate-50 animate-bounce transition-transform hover:scale-110" style={{ animationDuration: '3s' }}>
                <Camera className="w-8 h-8 text-amber-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
        <a href="#services" className="flex flex-col items-center gap-2 group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
          <span className="text-xs font-medium text-slate-400 tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-8 bg-slate-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-amber-400 animate-scroll-line"></div>
          </div>
        </a>
      </div>

      <style jsx>{`
        @keyframes float-3d {
          0%, 100% {
            transform: translateY(0px) rotateY(-5deg) rotateX(2deg);
          }
          50% {
            transform: translateY(-20px) rotateY(5deg) rotateX(-2deg);
          }
        }
        
        @keyframes scroll-line {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }

        .animate-float-3d {
          animation: float-3d 8s ease-in-out infinite;
        }

        .animate-scroll-line {
            animation: scroll-line 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}