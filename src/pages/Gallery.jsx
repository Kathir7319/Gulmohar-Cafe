import React, { useState } from 'react';
import { 
  Camera, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Utensils, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { Link } from 'react-router-dom';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredPhotos = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev + 1) % filteredPhotos.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setActiveLightboxIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const currentPhoto = activeLightboxIndex !== null ? filteredPhotos[activeLightboxIndex] : null;

  return (
    <div className="pb-24 space-y-12">
      {/* Header */}
      <section className="bg-gradient-to-b from-gulmohar-100/50 via-saffron-50/20 to-transparent pt-12 pb-14 border-b border-chai-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-gulmohar-100 text-gulmohar-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Camera className="w-4 h-4 text-gulmohar-600" />
            <span>Visual Showcase</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-chai-950 max-w-3xl mx-auto tracking-tight leading-[1.15]">
            A Feast for the Eyes & Senses.
          </h1>

          <p className="text-base sm:text-lg text-chai-700 max-w-2xl mx-auto leading-relaxed">
            Take a visual tour through our crisp street chaats, sizzling kathi rolls, corporate hot buffet spreads, and welcoming NetSports cafe vibes.
          </p>
        </div>
      </section>

      {/* Gallery Controls & Photos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gulmohar-600 text-white shadow-warm scale-105'
                  : 'bg-white hover:bg-chai-100 text-chai-800 border border-chai-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group bg-white rounded-3xl overflow-hidden shadow-card border border-chai-200/80 cursor-pointer hover:shadow-warm transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden bg-chai-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-chai-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg">
                  {item.tag}
                </span>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-serif font-bold text-base sm:text-lg leading-snug group-hover:text-saffron-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-chai-200 line-clamp-1 mt-0.5">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Catering & Menu Quick Banner */}
        <div className="mt-16 text-center bg-chai-100 rounded-3xl p-8 border border-chai-200">
          <h3 className="font-serif font-bold text-2xl text-chai-900 mb-2">
            Hungry Yet? Stop by Inside NetSports or Order Ahead
          </h3>
          <p className="text-xs sm:text-sm text-chai-600 max-w-xl mx-auto mb-6">
            We are located at 3717 Davis Dr, Morrisville, NC with free customer parking right in front of the building.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/menu"
              className="bg-gulmohar-600 hover:bg-gulmohar-700 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-warm transition-all"
            >
              Order from Street Food Menu
            </Link>
            <Link
              to="/services"
              className="bg-white hover:bg-chai-50 text-chai-900 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm border border-chai-200 transition-all"
            >
              Request Corporate Catering
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 hidden sm:block"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50 hidden sm:block"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="max-w-4xl w-full bg-chai-950 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={currentPhoto.image}
                alt={currentPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>
            <div className="p-5 sm:p-6 bg-chai-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-saffron-400">
                  {currentPhoto.tag}
                </span>
                <h4 className="font-serif font-bold text-xl text-white mt-0.5">
                  {currentPhoto.title}
                </h4>
                <p className="text-xs sm:text-sm text-chai-300 mt-1">
                  {currentPhoto.caption}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-1.5 bg-gulmohar-600 hover:bg-gulmohar-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors"
                >
                  <span>Order on Menu</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
