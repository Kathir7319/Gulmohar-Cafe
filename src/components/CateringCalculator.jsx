import React, { useState } from 'react';
import { Calculator, Users, PlusCircle, Check, ArrowRight } from 'lucide-react';
import { cateringPackages, cateringAddons } from '../data/cateringData';

export default function CateringCalculator({ onSelectPackage }) {
  const [headcount, setHeadcount] = useState(30);
  const [selectedPkgId, setSelectedPkgId] = useState('package-a');
  const [selectedAddons, setSelectedAddons] = useState(['chai-dispenser']);

  const pkg = cateringPackages.find(p => p.id === selectedPkgId) || cateringPackages[0];

  // Calculate base price
  let basePrice = 0;
  if (selectedPkgId === 'package-a') {
    basePrice = headcount * 16.50;
  } else if (selectedPkgId === 'package-b') {
    // Flat 420 for up to 30, then 14/person above
    basePrice = headcount <= 30 ? 420 : 420 + ((headcount - 30) * 14);
  } else {
    // Option C: 22/person
    basePrice = headcount * 22.00;
  }

  // Addons price
  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = cateringAddons.find(a => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const estimatedTotal = basePrice + addonsTotal;
  const perPersonCost = estimatedTotal / headcount;

  const toggleAddon = (addonId) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) ? prev.filter(id => id !== addonId) : [...prev, addonId]
    );
  };

  return (
    <div className="bg-gradient-to-br from-chai-900 to-chai-950 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-saffron-500/20 text-saffron-300 flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-xl text-white">
              Instant Catering Budget Estimator
            </h3>
            <p className="text-xs text-chai-300">
              Calculate Morrisville & RTP team catering in real-time
            </p>
          </div>
        </div>
        <span className="bg-saffron-400 text-chai-950 text-xs font-black uppercase px-3 py-1 rounded-full hidden sm:inline-block">
          Live Pricing
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Headcount Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-saffron-200 flex items-center gap-1.5">
                <Users className="w-4 h-4" /> Number of Guests / Team Members:
              </label>
              <span className="text-lg font-black text-white bg-white/10 px-3 py-0.5 rounded-lg">
                {headcount} Guests
              </span>
            </div>
            <input 
              type="range" 
              min="15" 
              max="150" 
              step="5"
              value={headcount} 
              onChange={(e) => setHeadcount(Number(e.target.value))}
              className="w-full accent-gulmohar-500 cursor-pointer h-2 bg-chai-800 rounded-lg"
            />
            <div className="flex justify-between text-[11px] text-chai-400 mt-1">
              <span>Min. 15 Guests</span>
              <span>50 Guests</span>
              <span>100 Guests</span>
              <span>150+ Guests</span>
            </div>
          </div>

          {/* Package Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-saffron-200 mb-2">
              Select Catering Package:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {cateringPackages.map((p) => {
                const isSelected = selectedPkgId === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPkgId(p.id)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      isSelected
                        ? 'bg-gulmohar-600/30 border-gulmohar-500 ring-2 ring-gulmohar-500/30 text-white'
                        : 'bg-white/5 border-white/10 text-chai-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-[10px] uppercase font-bold text-saffron-300">
                      {p.code}
                    </div>
                    <div className="text-xs font-bold text-white truncate">
                      {p.title}
                    </div>
                    <div className="text-xs font-semibold text-chai-200 mt-1">
                      {p.priceRange}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Optional Add-Ons */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-saffron-200 mb-2">
              Popular RTP Office Add-Ons:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {cateringAddons.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-2.5 rounded-xl text-left text-xs flex items-center justify-between border transition-all ${
                      isChecked 
                        ? 'bg-saffron-500/20 border-saffron-400 text-white' 
                        : 'bg-white/5 border-white/10 text-chai-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 pr-2">
                      <div className={`w-4 h-4 rounded-md flex items-center justify-center flex-shrink-0 ${
                        isChecked ? 'bg-saffron-400 text-chai-950' : 'border border-white/30'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="leading-tight text-[11px]">{addon.name}</span>
                    </div>
                    <span className="font-bold text-saffron-200 flex-shrink-0">+${addon.price}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Output Card (5 cols) */}
        <div className="lg:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-saffron-300">
              Estimated Total Quote
            </span>
            <div className="text-4xl font-serif font-black text-white mt-1 mb-2">
              ${estimatedTotal.toFixed(2)}
            </div>
            <p className="text-xs text-chai-300">
              Approx. <strong className="text-white">${perPersonCost.toFixed(2)} / guest</strong> for {headcount} attendees.
            </p>

            <div className="border-t border-white/10 my-4 pt-3 space-y-2 text-xs text-chai-300">
              <div className="flex justify-between">
                <span>Base Package ({pkg.code}):</span>
                <span className="text-white font-medium">${basePrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Selected Add-Ons ({selectedAddons.length}):</span>
                <span className="text-white font-medium">${addonsTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-saffron-300 text-[11px]">
                <span>Morrisville Delivery:</span>
                <span>Included on orders $300+</span>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <button
              onClick={() => {
                if (onSelectPackage) onSelectPackage(selectedPkgId);
                const el = document.getElementById('catering-inquiry-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-gradient-to-r from-gulmohar-600 to-saffron-500 hover:from-gulmohar-500 hover:to-saffron-400 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm shadow-warm transition-all flex items-center justify-center gap-2"
            >
              <span>Lock This Quote & Request Date</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-chai-400 text-center">
              Official written invoice will be emailed to your company address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
