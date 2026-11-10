import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-chai-900 text-white p-4 rounded-2xl shadow-2xl border border-gulmohar-500/40 flex items-start gap-3 animate-bounce-short transition-all">
      <CheckCircle2 className="w-5 h-5 text-chutney-400 flex-shrink-0 mt-0.5" />
      <div className="flex-1 text-sm font-medium leading-snug">
        {message}
      </div>
      <button 
        onClick={onClose}
        className="text-chai-400 hover:text-white p-1 rounded-lg transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
