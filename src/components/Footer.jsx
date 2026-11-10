import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  Mail, 
  ArrowRight, 
  Heart, 
  Sparkles, 
  CheckCircle, 
  Car, 
  ShieldCheck 
} from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onShowToast }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    if (onShowToast) {
      onShowToast('Subscribed! You’ll receive our weekend chef specials and catering promo codes.');
    }
  };

  return (
    <footer className="bg-chai-950 text-chai-200 border-t border-gulmohar-900/40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gulmohar-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner inside Footer: Location & Parking Highlight */}
      <div className="border-b border-white/10 bg-black/20 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm">
          <div className="flex items-center gap-2 text-chai-300">
            <Car className="w-4 h-4 text-saffron-400 flex-shrink-0" />
            <span>
              <strong className="text-white">NetSports Parking:</strong> Free customer parking in the main lot directly in front of 3717 Davis Dr. Enter through main glass doors into the lobby!
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-chutney-500"></span>
            <span className="text-chai-200">Morrisville & RTP Corporate Catering Hot Drop-Off Available</span>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-chai-300 text-sm leading-relaxed pr-4">
              Authentic Indian street food, signature chaats, and quick lunch options right inside NetSports on Davis Drive. Handcrafted recipes, fresh spices, and effortless corporate catering for Research Triangle Park teams.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-sm">
              <a 
                href="tel:2163949743" 
                className="inline-flex items-center gap-2 text-saffron-300 hover:text-white font-bold transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-gulmohar-400" />
                <span>(216) 394-9743</span>
              </a>
              <span className="text-xs text-chai-400">
                Call for quick takeaway orders, weekend platter reservations & catering inquiries.
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-serif font-bold text-base tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gulmohar-500"></span>
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-chai-300">
              <li>
                <Link to="/" className="hover:text-saffron-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-saffron-300 transition-colors">Street Food Menu</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-saffron-300 transition-colors">Corporate Catering</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-saffron-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-saffron-300 transition-colors">Food & Cafe Gallery</Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-saffron-300 transition-colors">Guest Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-saffron-300 transition-colors">Contact & Directions</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & NetSports Location (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-serif font-bold text-base tracking-wide mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-saffron-400"></span>
              Hours & Location
            </h3>
            <div className="space-y-3 text-sm text-chai-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gulmohar-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Inside NetSports Facility</p>
                  <p className="text-xs text-chai-300">3717 Davis Dr</p>
                  <p className="text-xs text-chai-300">Morrisville, NC 27560</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <Clock className="w-4 h-4 text-saffron-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="flex justify-between gap-4">
                    <span className="text-chai-300">Monday – Friday:</span>
                    <span className="text-white font-semibold">11:30 AM – 8:00 PM</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span className="text-chai-300">Saturday – Sunday:</span>
                    <span className="text-white font-semibold">11:00 AM – 9:00 PM</span>
                  </p>
                  <p className="text-[11px] text-saffron-300/90 pt-1 font-medium">
                    *Synced with Google Business Profile
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Weekend VIP Club / Catering Perks (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-white font-serif font-bold text-base tracking-wide mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-saffron-300" />
              Weekend Specials Club
            </h3>
            <p className="text-xs text-chai-300 leading-relaxed">
              Get notified every Friday morning about our Chef's weekend specials, dum biryani pots, and seasonal chaat additions.
            </p>

            {subscribed ? (
              <div className="bg-chutney-900/60 border border-chutney-600/50 rounded-xl p-3 text-xs text-chutney-200 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-chutney-400 flex-shrink-0" />
                <span>You're on the list! Welcome to the Gulmohar family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-chai-900/80 border border-chai-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-chai-500 focus:outline-none focus:border-gulmohar-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bg-gulmohar-600 hover:bg-gulmohar-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
                  >
                    Join <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <p className="text-[10px] text-chai-400">
                  No spam ever. Unsubscribe at any time.
                </p>
              </form>
            )}

            <div className="pt-2">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-xs">
                <p className="text-saffron-300 font-bold mb-1">Catering RTP Teams?</p>
                <p className="text-chai-300 text-[11px] mb-2">
                  Packages from $300 – $1,000+. 24-hr notice recommended.
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center gap-1 text-xs font-bold text-white underline hover:text-saffron-200"
                >
                  View Corporate Packages →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-chai-400">
          <p>© {new Date().getFullYear()} Gulmohar Cafe. All rights reserved. Located inside NetSports, Morrisville, NC.</p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <span className="flex items-center gap-1 text-chai-400">
              Made with <Heart className="w-3.5 h-3.5 text-gulmohar-500 fill-gulmohar-500" /> for the RTP Community
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
