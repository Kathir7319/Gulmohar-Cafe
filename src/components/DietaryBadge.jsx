import React from 'react';
import { Leaf, Flame, Sparkles, ShieldCheck } from 'lucide-react';

export default function DietaryBadge({ type, spiceLevel }) {
  if (spiceLevel !== undefined) {
    const flames = Array.from({ length: 3 }, (_, i) => i < spiceLevel);
    const label = spiceLevel === 0 ? 'Mild' : spiceLevel === 1 ? 'Mild-Medium' : spiceLevel === 2 ? 'Medium Spicy' : 'Fiery';
    
    return (
      <div 
        className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-md text-[11px] font-semibold"
        title={`Spice Level: ${label}`}
      >
        <span className="flex items-center">
          {flames.map((active, idx) => (
            <Flame 
              key={idx} 
              className={`w-3 h-3 ${active ? 'text-gulmohar-600 fill-gulmohar-600' : 'text-amber-200'}`} 
            />
          ))}
        </span>
        <span className="text-[10px] text-amber-800 hidden sm:inline">{label}</span>
      </div>
    );
  }

  const badgeConfig = {
    'Vegetarian': {
      bg: 'bg-green-50 text-green-800 border-green-200',
      icon: Leaf,
      label: 'Veg',
    },
    'Vegetarian Option': {
      bg: 'bg-green-50 text-green-800 border-green-200',
      icon: Leaf,
      label: 'Veg Option',
    },
    'Vegan': {
      bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      icon: Leaf,
      label: 'Vegan',
    },
    'Chef Special': {
      bg: 'bg-gulmohar-50 text-gulmohar-800 border-gulmohar-200',
      icon: Sparkles,
      label: 'Chef Favorite',
    },
    'Halal': {
      bg: 'bg-blue-50 text-blue-800 border-blue-200',
      icon: ShieldCheck,
      label: '100% Halal',
    },
    'Halal Option': {
      bg: 'bg-blue-50 text-blue-800 border-blue-200',
      icon: ShieldCheck,
      label: 'Halal Option',
    },
    'Gluten-Free': {
      bg: 'bg-purple-50 text-purple-800 border-purple-200',
      icon: ShieldCheck,
      label: 'Gluten-Free',
    },
    'Halal Chicken or Veg Paneer': {
      bg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
      icon: ShieldCheck,
      label: 'Halal / Veg',
    }
  }[type] || {
    bg: 'bg-chai-100 text-chai-800 border-chai-200',
    icon: Sparkles,
    label: type,
  };

  const Icon = badgeConfig.icon;

  return (
    <span className={`inline-flex items-center gap-1 border px-2 py-0.5 rounded-md text-[11px] font-semibold ${badgeConfig.bg}`}>
      <Icon className="w-3 h-3 flex-shrink-0" />
      <span>{badgeConfig.label}</span>
    </span>
  );
}
