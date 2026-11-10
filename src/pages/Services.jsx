import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  CheckCircle, 
  Clock, 
  PhoneCall, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  UtensilsCrossed, 
  CalendarDays,
  FileText,
  BadgeCheck
} from 'lucide-react';
import CateringQuoteForm from '../components/CateringQuoteForm';
import CateringCalculator from '../components/CateringCalculator';
import { cateringPackages, cateringAddons } from '../data/cateringData';

export default function Services({ onShowToast }) {
  const [selectedPackageId, setSelectedPackageId] = useState('package-a');

  const handleSelectPackageForForm = (packageId) => {
    setSelectedPackageId(packageId);
    const formEl = document.getElementById('catering-inquiry-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pb-24 space-y-16 md:space-y-24">
      {/* Page Header (Exact Blueprint Copy) */}
      <section className="bg-gradient-to-b from-gulmohar-100/50 via-saffron-50/30 to-transparent pt-12 pb-14 border-b border-chai-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-gulmohar-100 text-gulmohar-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Building2 className="w-4 h-4 text-gulmohar-600" />
            <span>Corporate Catering & Campus Events</span>
          </div>

          {/* Exact Blueprint Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-chai-950 max-w-4xl mx-auto tracking-tight leading-[1.15]">
            Effortless Office Lunches & Event Catering for RTP Teams.
          </h1>

          {/* Exact Blueprint Subheadline */}
          <p className="text-base sm:text-lg text-chai-700 max-w-3xl mx-auto leading-relaxed">
            Treat your team to fresh, vibrant Indian street food. Ideal for office lunches, client meetings, and tech campus events across Morrisville and Research Triangle Park.
          </p>

          {/* Exact Blueprint Highlight Callout */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 bg-chai-900 text-white px-6 py-3 rounded-2xl shadow-xl text-xs sm:text-sm font-semibold">
            <span className="text-saffron-300 font-bold">✨ Highlight Callout:</span>
            <span>Catering Packages from $300 – $1,000+</span>
            <span className="hidden sm:inline text-chai-500">|</span>
            <span className="text-chai-200">24-Hour Advance Notice Recommended</span>
          </div>

          <div className="pt-2 flex justify-center gap-4 text-xs font-bold">
            <a
              href="#catering-inquiry-form"
              className="bg-gulmohar-600 hover:bg-gulmohar-700 text-white px-6 py-3 rounded-xl shadow-warm transition-all flex items-center gap-2"
            >
              <span>Jump to Quote Form</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:2163949743"
              className="bg-white hover:bg-chai-50 text-chai-900 border border-chai-200 px-5 py-3 rounded-xl transition-all flex items-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4 text-gulmohar-600" />
              <span>Call (216) 394-9743</span>
            </a>
          </div>
        </div>
      </section>

      {/* Corporate Catering Packages Cards (Exact Blueprint Specifications) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-gulmohar-600">
            Tailored For Every Event Scale
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-chai-950">
            Our 3 Core Corporate Catering Packages
          </h2>
          <p className="text-xs sm:text-sm text-chai-600">
            All packages include eco-friendly biodegradable utensils, wet wipes, and dedicated temperature-controlled delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cateringPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 shadow-card border transition-all duration-300 flex flex-col justify-between relative ${
                pkg.popular
                  ? 'border-2 border-gulmohar-500 shadow-warm ring-4 ring-gulmohar-500/10'
                  : 'border-chai-200/80 hover:border-gulmohar-300'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-gulmohar-600 to-saffron-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-chai-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-chai-950/80 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold">
                    {pkg.code}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-serif font-black text-xl text-chai-950">
                    {pkg.title}
                  </h3>
                  <div className="text-2xl font-serif font-black text-gulmohar-600 mt-1 mb-2">
                    {pkg.priceRange}
                  </div>
                  <p className="text-xs sm:text-sm text-chai-600 leading-relaxed italic">
                    "{pkg.tagline}"
                  </p>
                </div>

                <div className="bg-chai-50 p-3 rounded-xl border border-chai-200 text-xs text-chai-700 mb-5 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-semibold text-chai-900">Recommended For:</span>
                    <span className="font-bold text-gulmohar-700">{pkg.servesGuests || `Min. ${pkg.minGuests} Guests`}</span>
                  </div>
                  <p className="text-[11px] text-chai-500">
                    {pkg.idealFor}
                  </p>
                </div>

                {/* Package Inclusions */}
                <div className="space-y-2.5 mb-6 text-xs text-chai-800">
                  <span className="font-bold uppercase tracking-wider text-[11px] text-chai-900 block">
                    What's Included:
                  </span>
                  {pkg.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-chutney-600 flex-shrink-0 mt-0.5" />
                      <span className="leading-tight">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-chai-100">
                <button
                  onClick={() => handleSelectPackageForForm(pkg.id)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-gulmohar-600 hover:bg-gulmohar-700 text-white shadow-warm'
                      : 'bg-chai-100 hover:bg-chai-200 text-chai-900'
                  }`}
                >
                  <span>Select {pkg.code} for Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Budget Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CateringCalculator onSelectPackage={setSelectedPackageId} />
      </section>

      {/* Pre-Order Inquiry Form (Exact Blueprint Specifications) */}
      <section id="catering-inquiry-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <CateringQuoteForm 
          onShowToast={onShowToast} 
          selectedPackageId={selectedPackageId} 
        />
      </section>

      {/* NetSports Facility & Tournament Catering Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-chai-100/70 rounded-3xl p-8 sm:p-12 border border-chai-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-gulmohar-600">
                On-Site Sports & Private Events
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-chai-950">
                Hosting an Event Inside NetSports?
              </h2>
              <p className="text-xs sm:text-sm text-chai-700 leading-relaxed">
                Organizing a badminton tournament, volleyball league night, birthday party, or community meetup inside the NetSports facility? You don't need external catering delivery—our kitchen is already right here in the lobby!
              </p>
              <ul className="space-y-2 text-xs text-chai-800">
                <li className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-gulmohar-600" />
                  <span>Freshly plated Family Chaat Platters served directly to court benches</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-gulmohar-600" />
                  <span>Insulated dispensers of hot Masala Chai & Mango Lassi for players</span>
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-gulmohar-600" />
                  <span>Dedicated reserved seating and tables in the lobby</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="tel:2163949743"
                  className="inline-flex items-center gap-2 bg-chai-900 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-chai-950 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-saffron-400" />
                  <span>Call to Reserve NetSports Event Catering</span>
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=900&q=80"
                alt="NetSports Sports Event Catering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-bold text-saffron-300">NetSports Morrisville</p>
                <h4 className="font-serif font-bold text-lg">Fuel Your Tournament & Community Meetups</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Catering FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-chai-950">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-chai-500 mt-1">
            Everything RTP corporate coordinators ask before booking.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: 'How much notice is needed for corporate orders?',
              a: 'We recommend at least 24 hours advance notice for executive lunch boxes and party platters. For Full Campus Feasts (50+ guests) with hot chafing dish setup, 48 hours is ideal to guarantee our chef team schedule.'
            },
            {
              q: 'Do you deliver to Research Triangle Park tech campuses?',
              a: 'Yes! We deliver hot, insulated meals directly to office parks across Morrisville, Cary, RTP, Raleigh, and Durham. Free delivery is included for orders meeting minimum spend.'
            },
            {
              q: 'Can you accommodate strict Jain, Vegan, or Gluten-Free diets?',
              a: 'Absolutely. We label every single lunch box individually with recipient names and dietary tags (Vegetarian, Vegan, No Onion/Garlic Jain, Halal Chicken, Nut-Free, Gluten-Free) so there is zero confusion in the breakroom.'
            },
            {
              q: 'What payment methods do you accept for corporate accounts?',
              a: 'We accept all major corporate credit cards, ACH transfers, Square corporate invoicing, and Net-15/Net-30 terms for approved RTP enterprise vendors.'
            }
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-chai-200/80 shadow-sm">
              <h3 className="font-serif font-bold text-sm sm:text-base text-chai-900 mb-1.5">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-chai-600 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
