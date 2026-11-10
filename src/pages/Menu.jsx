import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  UtensilsCrossed, 
  Sparkles, 
  Plus, 
  PhoneCall, 
  Filter, 
  Check, 
  Info,
  Clock,
  Car
} from 'lucide-react';
import DietaryBadge from '../components/DietaryBadge';
import WeekendBanner from '../components/WeekendBanner';
import { menuCategories, menuItems } from '../data/menuData';

export default function Menu({ onAddToCart, onShowToast }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDietary, setSelectedDietary] = useState('all'); // all, veg, vegan, halal, gf

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;

      // Search filter
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.hindiName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Dietary filter
      let matchesDietary = true;
      if (selectedDietary === 'veg') {
        matchesDietary = item.dietary.some(d => d.includes('Vegetarian'));
      } else if (selectedDietary === 'vegan') {
        matchesDietary = item.dietary.includes('Vegan');
      } else if (selectedDietary === 'halal') {
        matchesDietary = item.dietary.some(d => d.includes('Halal'));
      } else if (selectedDietary === 'gf') {
        matchesDietary = item.dietary.includes('Gluten-Free');
      }

      return matchesCategory && matchesSearch && matchesDietary;
    });
  }, [activeCategory, searchQuery, selectedDietary]);

  const handleCategoryClick = (catId) => {
    setActiveCategory(catId);
    setSearchParams(catId === 'all' ? {} : { cat: catId });
  };

  return (
    <div className="pb-20">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-gulmohar-50/80 to-transparent pt-10 pb-12 border-b border-chai-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-gulmohar-100/70 text-gulmohar-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Prepared Fresh to Order • NetSports Lobby Morrisville</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-serif font-black text-chai-950">
            Digital Street Food & Cafe Menu
          </h1>
          
          <p className="text-sm sm:text-base text-chai-600 max-w-2xl mx-auto leading-relaxed">
            Authentic Indian street snacks, crispy chaats, and speedy lunch combos crafted with pure, unadulterated spices. Dine in at NetSports or order ahead for takeaway.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-chai-700">
            <a 
              href="tel:2163949743" 
              className="inline-flex items-center gap-1.5 text-gulmohar-600 hover:text-gulmohar-700 font-bold bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-chai-200"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Call (216) 394-9743 to Order
            </a>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-saffron-500" /> Mon–Fri: 11:30 AM – 8 PM | Sat–Sun: 11 AM – 9 PM
            </span>
            <span className="flex items-center gap-1">
              <Car className="w-3.5 h-3.5 text-chutney-600" /> Free Customer Parking
            </span>
          </div>
        </div>
      </section>

      {/* Main Menu Controls & Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Search and Filters Strip */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-card border border-chai-200/80 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Box */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-chai-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dishes (e.g. Pani Puri, Kathi Roll, Chai)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-chai-50 border border-chai-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-chai-900 placeholder-chai-400 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-chai-400 hover:text-chai-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs font-semibold">
              <span className="text-chai-500 text-[11px] uppercase tracking-wider mr-1 hidden lg:inline">
                Dietary:
              </span>
              {[
                { id: 'all', label: 'All' },
                { id: 'veg', label: 'Vegetarian' },
                { id: 'vegan', label: 'Vegan' },
                { id: 'halal', label: 'Halal' },
                { id: 'gf', label: 'Gluten-Free' },
              ].map((tag) => (
                <button
                  key={tag.id}
                  onClick={() => setSelectedDietary(tag.id)}
                  className={`px-3 py-1.5 rounded-lg border text-xs whitespace-nowrap transition-all ${
                    selectedDietary === tag.id
                      ? 'bg-chai-900 text-white border-chai-900 shadow-sm'
                      : 'bg-chai-50 text-chai-700 border-chai-200 hover:bg-chai-100'
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-chai-100 pb-1 scrollbar-none">
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-gulmohar-600 text-white shadow-warm'
                      : 'bg-chai-100/70 hover:bg-chai-200 text-chai-800'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Weekend Banner highlight on menu */}
        {(activeCategory === 'all' || activeCategory === 'specials') && (
          <div className="mb-8">
            <WeekendBanner compact={true} />
          </div>
        )}

        {/* Dishes Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-dashed border-chai-300 p-8">
            <UtensilsCrossed className="w-12 h-12 text-chai-400 mx-auto mb-3" />
            <h3 className="font-serif font-bold text-lg text-chai-900 mb-1">
              No dishes found matching your criteria
            </h3>
            <p className="text-xs text-chai-500 mb-4">
              Try adjusting your search terms or dietary filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setSelectedDietary('all');
              }}
              className="bg-gulmohar-600 text-white px-4 py-2 rounded-xl text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-4 sm:p-5 shadow-card hover:shadow-warm border border-chai-200/80 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-3.5 bg-chai-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Price Tag */}
                    <div className="absolute bottom-3 right-3 bg-chai-950/90 backdrop-blur-md text-white px-3 py-1 rounded-xl text-sm font-black shadow-md">
                      ${item.price.toFixed(2)}
                    </div>

                    {/* Dietary Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1 max-w-[80%]">
                      {item.dietary.map(d => (
                        <DietaryBadge key={d} type={d} />
                      ))}
                    </div>
                  </div>

                  {/* Title & Hindi Script */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-serif font-bold text-base sm:text-lg text-chai-950 group-hover:text-gulmohar-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-gulmohar-600">
                        {item.hindiName}
                      </p>
                    </div>
                    <DietaryBadge spiceLevel={item.spiceLevel} />
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-chai-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Culinary highlight */}
                  {item.highlights && (
                    <p className="text-[11px] text-chai-500 mt-2 bg-chai-50 p-2 rounded-lg border border-chai-200/50">
                      💡 {item.highlights}
                    </p>
                  )}
                </div>

                {/* Footer of Card: Calorie count and Add to Tray button */}
                <div className="pt-4 mt-3 border-t border-chai-100 flex items-center justify-between">
                  <span className="text-[11px] text-chai-400 font-medium">
                    {item.calories}
                  </span>

                  <button
                    onClick={() => {
                      if (onAddToCart) onAddToCart(item);
                      if (onShowToast) onShowToast(`Added "${item.name}" to your Order Tray!`);
                    }}
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-gulmohar-600 to-gulmohar-500 hover:from-gulmohar-700 hover:to-gulmohar-600 text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-warm transition-all hover:scale-105 active:scale-95"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add to Tray</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Corporate Catering Note at bottom of menu */}
        <div className="mt-16 bg-gradient-to-r from-chai-900 to-chai-950 rounded-3xl p-6 md:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-saffron-300">
              Need Lunch for 15+ Guests?
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
              Order Corporate Catering for Your Morrisville Team
            </h3>
            <p className="text-xs sm:text-sm text-chai-300 mt-1 max-w-xl">
              Option A Executive Lunch Boxes, Option B Chaat Party Platters, and Full Campus Feasts. Packages from $300 – $1,000+.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="/services"
              className="bg-saffron-500 hover:bg-saffron-400 text-chai-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all inline-block"
            >
              Explore Catering Packages
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
