import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Heart, 
  MapPin, 
  ShieldCheck, 
  Utensils, 
  Coffee, 
  Users, 
  ArrowRight,
  Flame,
  Award
} from 'lucide-react';
import Logo from '../components/Logo';

export default function About() {
  return (
    <div className="pb-24 space-y-16 md:space-y-24">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-gulmohar-100/50 via-saffron-50/20 to-transparent pt-12 pb-14 border-b border-chai-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-gulmohar-100 text-gulmohar-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gulmohar-600" />
            <span>Our Story & Culinary Roots</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-chai-950 max-w-3xl mx-auto tracking-tight leading-[1.15]">
            Where Authentic Street Flavors Meet Warm Morrisville Hospitality.
          </h1>

          <p className="text-base sm:text-lg text-chai-700 max-w-2xl mx-auto leading-relaxed">
            Inspired by the vibrant fiery blossoms of the Gulmohar tree, we set out to craft an authentic culinary oasis inside NetSports on Davis Drive.
          </p>
        </div>
      </section>

      {/* Origin Story Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-gulmohar-600 font-bold text-xs uppercase tracking-widest">
              <span>Why the name "Gulmohar"?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-black text-chai-950 leading-tight">
              A Symbol of Warmth, Nostalgia, and Celebration
            </h2>

            <p className="text-sm sm:text-base text-chai-700 leading-relaxed">
              In India, the <strong>Gulmohar tree</strong> (*Delonix regia*) blooms with intense scarlet and vermilion flowers every spring. For millions, the shade of a flowering Gulmohar tree is where memories are born—sitting on stone benches, sipping hot clay-pot chai, and sharing plates of crispy chaat with friends after a hard game of cricket or work.
            </p>

            <p className="text-sm sm:text-base text-chai-700 leading-relaxed">
              When we founded <strong>Gulmohar Cafe inside NetSports Morrisville</strong>, we wanted to recreate that very warmth for the bustling Research Triangle Park community. Whether you are an engineer stepping away from a stressful deployment, an athlete resting after a badminton match, or a family looking for genuine Mumbai-style pani puri on a Sunday afternoon, Gulmohar Cafe is your vibrant culinary haven.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-chai-200/80 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gulmohar-100 text-gulmohar-600 flex items-center justify-center flex-shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-chai-900">Zero Shortcuts</h4>
                  <p className="text-xs text-chai-500 mt-0.5">Spices dry-roasted and ground weekly. Fresh chutneys made every morning.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-chai-200/80 shadow-sm flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-chai-900">100% Honest Taste</h4>
                  <p className="text-xs text-chai-500 mt-0.5">Real Bombay vada pav with garlic powder, Delhi pindi chole & royal kesari sweets.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="bg-white p-3 rounded-3xl shadow-xl border border-chai-100 overflow-hidden transform lg:-rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                  alt="Gulmohar Cafe NetSports Interior"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="p-4 bg-chai-50/50 rounded-xl mt-3 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-chai-950">NetSports Morrisville Lobby</p>
                    <p className="text-chai-500">3717 Davis Dr • Walk in anytime!</p>
                  </div>
                  <span className="bg-chutney-100 text-chutney-800 font-bold px-2.5 py-1 rounded-full text-[11px]">
                    Open 7 Days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Guarantees & Philosophy */}
      <section className="bg-chai-100/60 py-16 border-y border-chai-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-gulmohar-600">
              Culinary Standards
            </span>
            <h2 className="text-3xl font-serif font-black text-chai-950">
              The 4 Pillars Behind Every Dish We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Utensils,
                title: 'Scratch-Made Chutneys',
                desc: 'Tangy tamarind boiled with seedless dates and ginger, plus fiery mint-coriander water crushed fresh every morning.'
              },
              {
                icon: ShieldCheck,
                title: 'Commercial Cleanliness',
                desc: 'Our NetSports counter operates under strict health standards with commercial food-grade stainless prep stations.'
              },
              {
                icon: Coffee,
                title: 'Real Spiced Chai Brews',
                desc: 'No instant powders or syrups. Our chai is steeped with freshly pounded whole green cardamom, ginger root, and Assam tea.'
              },
              {
                icon: Users,
                title: 'RTP Speed & Care',
                desc: 'Engineered for busy tech schedules: quick 15-minute turnaround lunch combos and individually labeled corporate drop-offs.'
              }
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-card border border-chai-200/80 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-gulmohar-50 text-gulmohar-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-chai-950">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-chai-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Spotlight: Inside NetSports */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-chai-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-gulmohar-600">
                Community Partner
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-chai-950">
                Proudly Located Inside NetSports Morrisville
              </h2>
              <p className="text-xs sm:text-sm text-chai-700 leading-relaxed">
                NetSports is the Triangle's premier indoor sports facility, hosting badminton leagues, volleyball tournaments, and youth sports. We are proud to operate the official cafe counter right inside the facility, creating a family-friendly space where athletes and visitors can relax and refuel.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-chai-800">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-gulmohar-600" /> 3717 Davis Dr, Morrisville, NC 27560
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-chutney-600" /> Free Parking in Main Front Lot
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/menu"
                className="w-full text-center bg-gulmohar-600 hover:bg-gulmohar-700 text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-warm transition-all"
              >
                View Our Street Food Menu
              </Link>
              <Link
                to="/contact"
                className="w-full text-center bg-chai-100 hover:bg-chai-200 text-chai-900 font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm transition-all"
              >
                Get Parking & Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
