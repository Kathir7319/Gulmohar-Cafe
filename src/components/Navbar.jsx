import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, 
  X, 
  PhoneCall, 
  Clock, 
  MapPin, 
  Sparkles, 
  UtensilsCrossed, 
  CalendarDays,
  ShoppingBag
} from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenOrderTray, orderItemCount = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Clean concise labels for desktop to prevent awkward wrapping; full descriptive labels for mobile
  const navLinks = [
    { to: '/', label: 'Home', mobileLabel: 'Home' },
    { to: '/menu', label: 'Menu', mobileLabel: 'Street Food Menu' },
    { to: '/services', label: 'Catering', mobileLabel: 'Corporate Catering' },
    { to: '/about', label: 'About', mobileLabel: 'About Us' },
    { to: '/gallery', label: 'Gallery', mobileLabel: 'Photo Gallery' },
    { to: '/testimonials', label: 'Testimonials', mobileLabel: 'Guest Reviews' },
    { to: '/contact', label: 'Contact', mobileLabel: 'Contact & Location' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Utility Announcement Bar */}
      <div className="bg-chai-950 text-chai-100 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Location & NetSports indicator */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-chai-200 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-gulmohar-500 flex-shrink-0" />
              <span>3717 Davis Dr (Inside NetSports), Morrisville, NC</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-chai-700"></span>
            <span className="flex items-center gap-1.5 text-chai-300 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-saffron-400 flex-shrink-0" />
              <span>Mon–Fri: 11:30 AM – 8 PM | Sat–Sun: 11 AM – 9 PM</span>
            </span>
          </div>

          {/* Quick Contact & Status */}
          <div className="flex items-center gap-4 whitespace-nowrap">
            <div className="inline-flex items-center gap-1.5 bg-chutney-100 text-chutney-800 px-2 py-0.5 rounded-full text-[11px] font-semibold whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-chutney-600 animate-ping"></span>
              <span>Open for Dine-In & Pickup</span>
            </div>
            <a 
              href="tel:2163949743" 
              className="flex items-center gap-1 font-bold text-saffron-300 hover:text-white transition-colors whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 flex-shrink-0" />
              <span>(216) 394-9743</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'glass-header shadow-md py-2.5 border-b border-gulmohar-100' 
          : 'bg-white/95 backdrop-blur-md py-3 border-b border-chai-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 lg:gap-4">
            {/* Brand Logo - Fixed without shrink */}
            <div className="flex-shrink-0">
              <Logo size="default" />
            </div>

            {/* Desktop Navigation Links - Single line, no wrapping */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-3 py-1.5 xl:px-3.5 xl:py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center ${
                      isActive
                        ? 'text-gulmohar-600 bg-gulmohar-50/90 font-bold shadow-sm ring-1 ring-gulmohar-200/50'
                        : 'text-chai-800 hover:text-gulmohar-600 hover:bg-chai-100/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Header Right Actions - Single line, no wrapping */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              {/* Order Tray Quick Trigger */}
              {onOpenOrderTray && (
                <button
                  onClick={onOpenOrderTray}
                  className="relative p-2 text-chai-800 hover:text-gulmohar-600 hover:bg-gulmohar-50 rounded-xl transition-colors flex-shrink-0"
                  title="View Selected Order Tray"
                  aria-label="View Order Tray"
                >
                  <ShoppingBag className="w-5 h-5" />
                  {orderItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gulmohar-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                      {orderItemCount}
                    </span>
                  )}
                </button>
              )}

              {/* Direct Call Button (Phone number guaranteed never to break) */}
              <a
                href="tel:2163949743"
                className="hidden xl:inline-flex items-center gap-1.5 whitespace-nowrap text-chai-900 bg-chai-100 hover:bg-chai-200 px-3 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5 text-gulmohar-600 flex-shrink-0" />
                <span>(216) 394-9743</span>
              </a>

              {/* Primary Action Button: Order Catering */}
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 xl:gap-2 whitespace-nowrap bg-gradient-to-r from-gulmohar-600 to-gulmohar-500 hover:from-gulmohar-700 hover:to-gulmohar-600 text-white px-3.5 xl:px-4 py-2 xl:py-2.5 rounded-xl text-xs xl:text-sm font-bold shadow-warm transition-all duration-300 hover:shadow-warm-lg hover:-translate-y-0.5 flex-shrink-0"
              >
                <CalendarDays className="w-4 h-4 text-saffron-200 flex-shrink-0" />
                <span>Order Catering</span>
              </Link>
            </div>

            {/* Mobile Actions: Order Tray icon + Hamburger Toggle */}
            <div className="flex items-center gap-1.5 lg:hidden flex-shrink-0">
              {onOpenOrderTray && (
                <button
                  onClick={onOpenOrderTray}
                  className="relative p-2 text-chai-800 hover:text-gulmohar-600 rounded-lg flex-shrink-0"
                  aria-label="Order Tray"
                >
                  <ShoppingBag className="w-6 h-6" />
                  {orderItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-gulmohar-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {orderItemCount}
                    </span>
                  )}
                </button>
              )}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-chai-900 hover:text-gulmohar-600 hover:bg-chai-100 rounded-xl transition-colors focus:outline-none flex-shrink-0"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-chai-100 shadow-xl px-4 pt-4 pb-6 mt-2 transition-all">
            {/* Quick Status banner on mobile */}
            <div className="bg-chai-50 p-3 rounded-xl mb-4 border border-chai-200/60 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-chutney-700 font-semibold whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-chutney-600 animate-ping"></span>
                <span>Open Inside NetSports</span>
              </div>
              <a 
                href="tel:2163949743" 
                className="font-bold text-gulmohar-600 flex items-center gap-1 whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5 flex-shrink-0" /> (216) 394-9743
              </a>
            </div>

            {/* Nav list with full descriptive titles and touch feedback */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-gulmohar-50 text-gulmohar-700 font-bold'
                        : 'text-chai-900 hover:bg-chai-50'
                    }`
                  }
                >
                  <span>{link.mobileLabel || link.label}</span>
                  <span className="text-chai-400 text-xs">→</span>
                </NavLink>
              ))}
            </div>

            {/* Action Buttons in Mobile Drawer */}
            <div className="pt-4 mt-3 border-t border-chai-100 flex flex-col gap-2.5">
              <Link
                to="/services"
                className="w-full text-center bg-gradient-to-r from-gulmohar-600 to-gulmohar-500 text-white py-3 rounded-xl font-bold text-sm shadow-warm flex items-center justify-center gap-2"
              >
                <CalendarDays className="w-4 h-4 text-saffron-200" />
                <span>Order Corporate Catering</span>
              </Link>
              
              <a
                href="tel:2163949743"
                className="w-full text-center bg-chai-100 text-chai-900 hover:bg-chai-200 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-gulmohar-600" />
                <span>Call (216) 394-9743</span>
              </a>

              <a
                href="https://maps.google.com/?q=3717+Davis+Dr,+Morrisville,+NC+27560"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs text-chai-500 hover:text-gulmohar-600 flex items-center justify-center gap-1 pt-1"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>3717 Davis Dr, Morrisville, NC 27560</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
