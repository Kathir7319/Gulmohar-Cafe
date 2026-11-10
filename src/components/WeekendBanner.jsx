import React from 'react';
import { Sparkles, PhoneCall, ArrowRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WeekendBanner({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-gradient-to-r from-gulmohar-600 via-gulmohar-500 to-saffron-500 text-white py-2.5 px-4 text-xs md:text-sm font-medium shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-saffron-200" /> Weekend Special
            </span>
            <span>Rotating Chef’s Specials & Family Chaat Platters (Serves 4–6)!</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:2163949743" 
              className="inline-flex items-center gap-1.5 underline decoration-saffron-200 hover:text-saffron-100 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Call (216) 394-9743 to Reserve
            </a>
            <Link 
              to="/menu" 
              className="hidden sm:inline-flex items-center gap-1 bg-white text-gulmohar-700 px-2.5 py-0.5 rounded font-semibold text-xs hover:bg-saffron-50 transition-colors"
            >
              Menu <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gulmohar-700 via-gulmohar-600 to-saffron-600 text-white p-6 md:p-8 shadow-warm-lg my-8">
      {/* Decorative floral background circles */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-saffron-400/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gulmohar-900/40 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-saffron-200 mb-3 border border-white/20">
            <Flame className="w-4 h-4 text-saffron-300 animate-bounce" />
            Friday through Sunday at NetSports
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-white mb-3">
            This Weekend at Gulmohar Cafe
          </h2>
          
          <p className="text-chai-100 text-sm md:text-base leading-relaxed mb-4">
            Stop by Friday through Sunday for our rotating Chef’s Specials and Party Chaat Platters! Follow our live updates or call <a href="tel:2163949743" className="font-bold underline text-white hover:text-saffron-200">(216) 394-9743</a> to reserve your weekend favorites before they sell out.
          </p>

          <div className="inline-flex items-center gap-2 bg-saffron-400 text-chai-950 font-bold px-4 py-1.5 rounded-lg text-xs md:text-sm shadow-md">
            <span>✨ Highlight:</span>
            <span>Ask about our Family Chaat Platter—serves 4 to 6!</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[220px]">
          <a
            href="tel:2163949743"
            className="flex items-center justify-center gap-2.5 bg-white text-gulmohar-700 hover:bg-saffron-50 px-6 py-3.5 rounded-xl font-bold text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
          >
            <PhoneCall className="w-4 h-4 text-gulmohar-600" />
            <span>Call (216) 394-9743</span>
          </a>

          <Link
            to="/services"
            className="flex items-center justify-center gap-2 bg-gulmohar-900/60 hover:bg-gulmohar-950 text-white border border-white/25 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 text-center"
          >
            <span>Order Weekend Catering</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
