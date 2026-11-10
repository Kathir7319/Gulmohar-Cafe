import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  PhoneCall, 
  Clock, 
  Utensils, 
  Flame, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Car,
  CalendarDays,
  Plus
} from 'lucide-react';
import WeekendBanner from '../components/WeekendBanner';
import DietaryBadge from '../components/DietaryBadge';
import { menuItems } from '../data/menuData';
import { testimonials } from '../data/testimonialsData';

export default function Home({ onAddToCart }) {
  // Grab 6 featured signature dishes
  const featuredDishes = menuItems.filter(item => item.popular).slice(0, 6);

  return (
    <div className="space-y-16 md:space-y-24 pb-16">
      {/* Hero Section */}
      <section className="relative pt-8 md:pt-16 overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-gradient-to-b from-gulmohar-100/60 via-saffron-50/40 to-transparent -z-10 rounded-[3rem] blur-xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Location Tag */}
              <div className="inline-flex items-center gap-2 bg-white border border-gulmohar-200/80 px-4 py-1.5 rounded-full shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-gulmohar-500 animate-ping"></span>
                <span className="text-xs font-bold text-chai-800 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gulmohar-600" />
                  Located Inside NetSports • Davis Dr, Morrisville
                </span>
              </div>

              {/* Exact Blueprint Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-chai-950 tracking-tight leading-[1.15]">
                Authentic Indian <span className="text-transparent bg-clip-text bg-gradient-to-r from-gulmohar-600 to-saffron-600">Street Food</span> & Fresh Cafe Favorites in Morrisville.
              </h1>

              {/* Exact Blueprint Subheadline */}
              <p className="text-base sm:text-lg text-chai-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Bold flavors, freshly prepared chaat, and quick lunch options right inside NetSports on Davis Drive.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/menu"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gulmohar-600 to-gulmohar-500 hover:from-gulmohar-700 hover:to-gulmohar-600 text-white px-8 py-4 rounded-2xl font-bold text-base shadow-warm-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Utensils className="w-5 h-5" />
                  <span>View Full Menu</span>
                </Link>

                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-chai-50 text-chai-900 border-2 border-chai-200 hover:border-gulmohar-300 px-7 py-4 rounded-2xl font-bold text-base shadow-card transition-all duration-300"
                >
                  <CalendarDays className="w-5 h-5 text-gulmohar-600" />
                  <span>Order Corporate Catering</span>
                </Link>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 border-t border-chai-200/60 grid grid-cols-3 gap-2 text-center lg:text-left text-xs text-chai-600">
                <div className="space-y-0.5">
                  <span className="font-bold text-chai-900 block text-sm sm:text-base">Fresh & Made-To-Order</span>
                  <span>Pure spices, zero preservatives</span>
                </div>
                <div className="space-y-0.5 border-x border-chai-200 px-2">
                  <span className="font-bold text-chai-900 block text-sm sm:text-base">RTP Tech Delivery</span>
                  <span>Hot office drop-off boxes</span>
                </div>
                <div className="space-y-0.5">
                  <span className="font-bold text-chai-900 block text-sm sm:text-base">Free NetSports Parking</span>
                  <span>Easy pickup right in the lobby</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visuals (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Food Showcase Card */}
                <div className="relative z-10 bg-white p-3 rounded-3xl shadow-2xl border border-chai-100 overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="relative h-72 sm:h-84 rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80"
                      alt="Gulmohar Cafe Signature Chaat"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                    
                    {/* Floating badge on hero image */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gulmohar-700 flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-saffron-500" />
                      <span>Signature Mumbai & Delhi Chaats</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs uppercase tracking-widest text-saffron-300 font-bold">Featured Dish</p>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl">Crispy Pani Puri & Samosa Chaat</h3>
                      <p className="text-xs text-chai-100 mt-1 line-clamp-1">Spiced mint-coriander water, sweet tamarind, tender chickpeas & whipped yogurt.</p>
                    </div>
                  </div>

                  {/* Under card info strip */}
                  <div className="p-3 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-saffron-100 text-saffron-800 flex items-center justify-center font-bold">
                        ★
                      </div>
                      <div>
                        <p className="font-bold text-chai-900">4.9 / 5.0 Star Rated</p>
                        <p className="text-[11px] text-chai-500">Morrisville & RTP Tech Community</p>
                      </div>
                    </div>
                    <a
                      href="tel:2163949743"
                      className="text-gulmohar-600 font-bold hover:underline flex items-center gap-1"
                    >
                      <PhoneCall className="w-3.5 h-3.5" /> (216) 394-9743
                    </a>
                  </div>
                </div>

                {/* Floating pill badge: Family Chaat Platter */}
                <div className="absolute -bottom-6 -left-6 z-20 bg-white p-3.5 rounded-2xl shadow-xl border border-saffron-200 hidden sm:flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gulmohar-500 to-saffron-500 text-white flex items-center justify-center font-black">
                    4-6
                  </div>
                  <div>
                    <p className="text-xs font-bold text-chai-950">Family Chaat Platter</p>
                    <p className="text-[10px] text-chai-500">Weekend Special • Serves 4 to 6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekend Specials & Chaat Announcements Banner (Exact Blueprint Component) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WeekendBanner />
      </section>

      {/* Blueprint Feature: 3 Core Menu Pillars Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-gulmohar-600 bg-gulmohar-50 px-3.5 py-1 rounded-full border border-gulmohar-200">
            Freshly Prepared Daily Inside NetSports
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-chai-950">
            Explore Our Digital Menu Categories
          </h2>
          <p className="text-chai-600 text-sm sm:text-base">
            From crispy puris tossed on the spot to grab-and-go tandoori wraps engineered for your RTP workday.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Signature Chaats */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-chai-200/70 hover:shadow-warm transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=700&q=80"
                  alt="Signature Chaat & Street Snacks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-chai-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  Category 1
                </span>
              </div>
              <h3 className="font-serif font-bold text-xl text-chai-900 mb-2">
                Signature Chaat & Street Snacks
              </h3>
              <p className="text-xs sm:text-sm text-chai-600 leading-relaxed mb-4">
                Pani Puri (6 pcs), Samosa Chaat with spiced chickpeas & cool curd, crunchy Bhel Puri, and Mumbai’s iconic Vada Pav with dry garlic chutney.
              </p>
            </div>
            <Link
              to="/menu?cat=chaat"
              className="inline-flex items-center gap-2 text-gulmohar-600 font-bold text-sm hover:text-gulmohar-700 pt-3 border-t border-chai-100"
            >
              <span>Explore All Chaats</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Quick Lunch Boxes & Wraps */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-chai-200/70 hover:shadow-warm transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1626777553632-482a6136fb52?auto=format&fit=crop&w=700&q=80"
                  alt="Quick Lunch Boxes & Wraps (RTP Express)"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-chai-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  Category 2
                </span>
              </div>
              <h3 className="font-serif font-bold text-xl text-chai-900 mb-2">
                Quick Lunch Boxes & Wraps (RTP Express)
              </h3>
              <p className="text-xs sm:text-sm text-chai-600 leading-relaxed mb-4">
                Paneer Tikka Kathi Roll, Chicken Tikka Kathi Roll in warm flaky paratha, and Daily Curry & Rice Bowls with naan and salad.
              </p>
            </div>
            <Link
              to="/menu?cat=lunch-boxes"
              className="inline-flex items-center gap-2 text-gulmohar-600 font-bold text-sm hover:text-gulmohar-700 pt-3 border-t border-chai-100"
            >
              <span>Explore Lunch Combos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3: Cafe Beverages & Sweets */}
          <div className="bg-white rounded-3xl p-6 shadow-card border border-chai-200/70 hover:shadow-warm transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="relative h-48 rounded-2xl overflow-hidden mb-5">
                <img
                  src="https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=700&q=80"
                  alt="Cafe Beverages & Sweets"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-chai-900/80 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  Category 3
                </span>
              </div>
              <h3 className="font-serif font-bold text-xl text-chai-900 mb-2">
                Cafe Beverages & Sweets
              </h3>
              <p className="text-xs sm:text-sm text-chai-600 leading-relaxed mb-4">
                Freshly brewed Masala Chai with crushed ginger and green cardamom, creamy Alphonso Mango Lassi, and soft warm Gulab Jamuns.
              </p>
            </div>
            <Link
              to="/menu?cat=drinks-sweets"
              className="inline-flex items-center gap-2 text-gulmohar-600 font-bold text-sm hover:text-gulmohar-700 pt-3 border-t border-chai-100"
            >
              <span>Explore Drinks & Desserts</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Menu Dishes with Quick Add to Tray */}
      <section className="bg-chai-100/60 py-16 border-y border-chai-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-gulmohar-600">
                Crowd Favorites & Specials
              </span>
              <h2 className="text-3xl font-serif font-bold text-chai-950 mt-1">
                Popular Street Food & Cafe Picks
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 text-gulmohar-600 hover:text-gulmohar-700 font-bold text-sm"
            >
              <span>See Full Digital Menu (15+ Items)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDishes.map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl p-4 shadow-card hover:shadow-warm border border-chai-200/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 rounded-xl overflow-hidden mb-3">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                      {item.dietary.slice(0, 2).map(tag => (
                        <DietaryBadge key={tag} type={tag} />
                      ))}
                    </div>
                    <div className="absolute bottom-2.5 right-2.5 bg-chai-950/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-bold">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif font-bold text-base text-chai-950">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-gulmohar-600 font-medium">
                        {item.hindiName}
                      </p>
                    </div>
                    <DietaryBadge spiceLevel={item.spiceLevel} />
                  </div>

                  <p className="text-xs text-chai-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-chai-100 flex items-center justify-between">
                  <span className="text-[11px] text-chai-400 font-medium">
                    {item.calories}
                  </span>
                  {onAddToCart && (
                    <button
                      onClick={() => onAddToCart(item)}
                      className="inline-flex items-center gap-1.5 bg-gulmohar-50 hover:bg-gulmohar-600 text-gulmohar-700 hover:text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add to Tray</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Catering Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-chai-950 via-chai-900 to-gulmohar-950 rounded-3xl text-white p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="bg-saffron-400 text-chai-950 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
              For Morrisville & RTP Businesses
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
              Effortless Office Lunches & Event Catering for RTP Teams
            </h2>
            <p className="text-sm md:text-base text-chai-200 leading-relaxed">
              Treat your team to fresh, vibrant Indian street food. Ideal for office lunches, client meetings, and tech campus events across Morrisville and Research Triangle Park.
            </p>
            <div className="text-xs text-saffron-300 font-semibold">
              Catering Packages from $300 – $1,000+ | 24-Hour Advance Notice Recommended
            </div>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="bg-gulmohar-500 hover:bg-gulmohar-600 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-warm transition-all inline-flex items-center gap-2"
              >
                <span>View 3 Catering Packages & Calculate Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:2163949743"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all inline-flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-saffron-300" />
                <span>Call Catering Lead: (216) 394-9743</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location & NetSports Parking Guide Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-chai-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Details (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 bg-chutney-50 text-chutney-800 border border-chutney-200 px-3 py-1 rounded-full text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-chutney-600" />
                <span>Inside NetSports Facility on Davis Dr</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-chai-950">
                Finding Us at NetSports Morrisville
              </h2>

              <p className="text-sm text-chai-700 leading-relaxed">
                Gulmohar Cafe is conveniently located right inside the <strong>NetSports</strong> facility at <strong>3717 Davis Dr, Morrisville, NC 27560</strong>. Whether you’re stopping by for lunch during the workday or grabbing hot chaat after badminton or volleyball, we are right inside the front lobby.
              </p>

              <div className="bg-chai-50 rounded-2xl p-4 border border-chai-200 space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-gulmohar-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-chai-900 font-bold">Parking Instructions:</strong>
                    <span>Free customer parking is available in the main NetSports lot directly in front of the building.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-saffron-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-chai-900 font-bold">How to Enter:</strong>
                    <span>Enter through the main glass entrance doors, and you will find our cafe counter just inside the lobby area.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-chutney-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-chai-900 font-bold">Hours of Operation:</strong>
                    <span>Monday – Friday: 11:30 AM – 8:00 PM | Saturday – Sunday: 11:00 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=3717+Davis+Dr,+Morrisville,+NC+27560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gulmohar-600 hover:bg-gulmohar-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all inline-flex items-center gap-2 shadow-warm"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Driving Directions</span>
                </a>
                <Link
                  to="/contact"
                  className="bg-chai-100 hover:bg-chai-200 text-chai-900 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all inline-flex items-center gap-1.5"
                >
                  <span>Full Contact & Hours</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Map Preview / Photo (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-chai-200 aspect-video lg:aspect-square">
                <iframe
                  title="Gulmohar Cafe at NetSports Morrisville"
                  src="https://maps.google.com/maps?q=3717%20Davis%20Dr,%20Morrisville,%20NC%2027560&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Snapshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-gulmohar-600">
            Loved by Morrisville & RTP
          </span>
          <h2 className="text-3xl font-serif font-bold text-chai-950">
            What Our Guests & Teams Say
          </h2>
          <p className="text-xs sm:text-sm text-chai-600">
            From tech hackathon lunches at Cisco to weekend family pani puri runs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-3xl p-6 shadow-card border border-chai-200/70 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-saffron-700 bg-saffron-50 px-2.5 py-1 rounded-md border border-saffron-200">
                    {item.tag}
                  </span>
                  <div className="flex text-amber-400 text-sm">
                    {'★'.repeat(item.rating)}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-chai-700 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-chai-100">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover border border-chai-200"
                />
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-chai-900 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-chai-500">
                    {item.role} • {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gulmohar-600 hover:text-gulmohar-700 underline"
          >
            Read all customer stories & leave a review →
          </Link>
        </div>
      </section>
    </div>
  );
}
