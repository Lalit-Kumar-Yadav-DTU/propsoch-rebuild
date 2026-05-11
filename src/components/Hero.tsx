"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCity, setActiveCity] = useState('Bangalore');

  return (
    <>
      <section className="relative pt-32 pb-20 px-6 lg:px-20 bg-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-orange-50/50 rounded-l-[100px]" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Content & City Selector */}
          <div className="z-10 text-center lg:text-left">
            <p className="text-orange-600 font-bold text-sm uppercase tracking-widest mb-4">
              Stop wasting weekends on irrelevant visits
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              Visit curated homes, <br />
              <span className="text-orange-500 underline decoration-orange-200">negotiate smarter</span> <br />
              & buy intelligently.
            </h1>
            <p className="text-gray-600 text-lg mb-10 max-w-lg mx-auto lg:mx-0">
              Get end-to-end guidance from property wizards who have helped 1000+ buyers save lakhs in the last year alone.
            </p>

            {/* Improved City Selector */}
            <div className="bg-gray-100 p-1.5 rounded-2xl inline-flex mb-8 shadow-inner">
              {['Bangalore', 'Mumbai'].map((city) => (
                <button
                  key={city}
                  onClick={() => setActiveCity(city)}
                  className={`px-8 py-3 rounded-xl font-bold transition-all ${
                    activeCity === city 
                    ? 'bg-white text-orange-600 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-10 py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-200">
                Book An Appointment
              </button>
              {/* <button 
                onClick={() => setIsOpen(true)}
                className="group flex items-center justify-center gap-2 text-gray-900 font-bold hover:text-orange-600 transition"
              >
                <span className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-orange-500 transition">
                   <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                </span>
                See How It Works
              </button> */}
            </div>
          </div>

          {/* Right Side: The CEO Video Card (Redesigned) */}
          <div className="relative group cursor-pointer" onClick={() => setIsOpen(true)}>
            {/* The "Blob" behind the video */}
            <div className="absolute -inset-4 bg-orange-100 rounded-[40px] rotate-3 -z-10 group-hover:rotate-0 transition-transform" />
            
            <div className="relative aspect-video lg:aspect-auto lg:h-[450px] w-full rounded-[32px] overflow-hidden shadow-2xl bg-gray-900">
              <Image 
                src="https://i.ibb.co/Cp54cz6c/image.png" 
                alt="Propsoch Founder Video" 
                fill
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl group-hover:scale-110 transition-transform">
                  <div className="w-16 h-16 bg-white text-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 ml-1"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>

              {/* Founder Label */}
              <div className="absolute bottom-8 left-8 bg-white p-4 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-xs font-bold text-orange-600 uppercase mb-1">Founder Message</p>
                <p className="text-sm font-bold text-gray-900 leading-tight">Learn why we started Propsoch in 2 minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10" onClick={() => setIsOpen(false)}>
          <button className="absolute top-8 right-8 text-white text-5xl hover:text-orange-500">&times;</button>
          <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10" onClick={(e) => e.stopPropagation()}>
            <iframe 
              src="https://www.youtube.com/embed/RqBYQJRqUXs?autoplay=1" 
              title="Founder Video"
              className="w-full h-full"
              allow="autoplay; encrypted-media" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}