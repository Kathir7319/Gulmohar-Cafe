import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle, 
  Calculator, 
  Calendar, 
  Clock, 
  Users, 
  Building2, 
  Mail, 
  Phone, 
  AlertCircle,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function CateringQuoteForm({ onShowToast, selectedPackageId }) {
  const [formData, setFormData] = useState({
    contactName: '',
    companyName: '',
    workEmail: '',
    phone: '',
    eventDate: '',
    preferredTime: '12:00 PM',
    orderType: 'Delivery', // Delivery or NetSports Pickup
    headcount: '25-50',
    packagePreference: selectedPackageId ? (
      selectedPackageId === 'package-a' ? 'Individual Lunch Boxes' :
      selectedPackageId === 'package-b' ? 'Chaat Platter' : 'Full Campus Feast'
    ) : 'Individual Lunch Boxes',
    dietaryNotes: {
      vegetarian: true,
      vegan: false,
      glutenFree: false,
      nutAllergies: false,
      halal: true,
      otherNotes: '',
    },
    specialInstructions: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onShowToast) {
        onShowToast(`Catering request received for ${formData.companyName}! Our Morrisville catering coordinator will email your quote within 2 hours.`);
      }
    }, 800);
  };

  const handleCheckboxChange = (key) => {
    setFormData(prev => ({
      ...prev,
      dietaryNotes: {
        ...prev.dietaryNotes,
        [key]: !prev.dietaryNotes[key]
      }
    }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-card border border-chai-200/80 p-6 md:p-10 relative overflow-hidden">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gulmohar-600 via-saffron-500 to-gulmohar-500" />

      {submitted ? (
        <div className="text-center py-12 px-4 space-y-5">
          <div className="w-16 h-16 bg-chutney-100 text-chutney-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle className="w-10 h-10" />
          </div>
          <div className="max-w-md mx-auto space-y-2">
            <h3 className="text-2xl font-serif font-bold text-chai-900">
              Catering Inquiry Received!
            </h3>
            <p className="text-sm text-chai-600 leading-relaxed">
              Thank you, <strong className="text-chai-900">{formData.contactName}</strong>! We have received your catering inquiry for <strong className="text-chai-900">{formData.companyName}</strong> on <strong className="text-chai-900">{formData.eventDate || 'your selected date'}</strong>.
            </p>
            <div className="bg-chai-50 p-4 rounded-2xl border border-chai-200 text-xs text-left space-y-1.5 my-4">
              <div className="flex justify-between">
                <span className="text-chai-500">Selected Package:</span>
                <span className="font-bold text-chai-900">{formData.packagePreference}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-chai-500">Estimated Headcount:</span>
                <span className="font-bold text-chai-900">{formData.headcount} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-chai-500">Order Method:</span>
                <span className="font-bold text-chai-900">{formData.orderType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-chai-500">Urgent Inquiries:</span>
                <a href="tel:2163949743" className="font-bold text-gulmohar-600 hover:underline">(216) 394-9743</a>
              </div>
            </div>
            <p className="text-xs text-chai-500">
              Our catering director will review kitchen availability and email your itemized proposal and invoice link within 2 business hours.
            </p>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-2 bg-chai-100 hover:bg-chai-200 text-chai-900 px-6 py-2.5 rounded-xl text-xs font-bold transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-chai-100 pb-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gulmohar-600 bg-gulmohar-50 px-3 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Corporate Pre-Order Inquiry Form
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-chai-900">
              Request Your Catering Quote & Lock Event Date
            </h3>
            <p className="text-xs md:text-sm text-chai-500 mt-1">
              Packages from $300 – $1,000+ | 24-Hour advance notice recommended for Morrisville & RTP campuses.
            </p>
          </div>

          {/* Section 1: Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
                Contact Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  className="w-full bg-chai-50/70 border border-chai-200 rounded-xl px-4 py-2.5 text-sm text-chai-900 placeholder-chai-400 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
                Company / Organization Name *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Cisco / Lenovo / NetSports Team"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full bg-chai-50/70 border border-chai-200 rounded-xl px-4 py-2.5 text-sm text-chai-900 placeholder-chai-400 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
                Work Email *
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="priya@company.com"
                  value={formData.workEmail}
                  onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  className="w-full bg-chai-50/70 border border-chai-200 rounded-xl px-4 py-2.5 text-sm text-chai-900 placeholder-chai-400 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  placeholder="(216) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-chai-50/70 border border-chai-200 rounded-xl px-4 py-2.5 text-sm text-chai-900 placeholder-chai-400 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Event Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
                Event Date *
              </label>
              <input
                type="date"
                required
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className="w-full bg-chai-50/70 border border-chai-200 rounded-xl px-4 py-2.5 text-sm text-chai-900 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
                Preferred Time *
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full bg-chai-50/70 border border-chai-200 rounded-xl px-4 py-2.5 text-sm text-chai-900 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
              >
                <option value="11:30 AM">11:30 AM (Lunch Drop)</option>
                <option value="12:00 PM">12:00 PM (Noon)</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="3:00 PM">3:00 PM (Afternoon Chaat Break)</option>
                <option value="5:00 PM">5:00 PM (Evening Event)</option>
                <option value="6:30 PM">6:30 PM (Dinner Buffet)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
                Fulfillment Type
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, orderType: 'Delivery' })}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                    formData.orderType === 'Delivery'
                      ? 'bg-gulmohar-600 text-white border-gulmohar-600 shadow-sm'
                      : 'bg-chai-50 text-chai-700 border-chai-200 hover:bg-chai-100'
                  }`}
                >
                  RTP Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, orderType: 'NetSports Pickup' })}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-bold border transition-all ${
                    formData.orderType === 'NetSports Pickup'
                      ? 'bg-gulmohar-600 text-white border-gulmohar-600 shadow-sm'
                      : 'bg-chai-50 text-chai-700 border-chai-200 hover:bg-chai-100'
                  }`}
                >
                  NetSports Pickup
                </button>
              </div>
            </div>
          </div>

          {/* Section 3: Headcount & Package Preference (Blueprint Specifications) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-2">
                Estimated Headcount *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['15-25', '25-50', '50+'].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setFormData({ ...formData, headcount: count })}
                    className={`py-3 px-2 rounded-xl text-xs font-bold border text-center transition-all ${
                      formData.headcount === count
                        ? 'bg-gulmohar-50 border-gulmohar-500 text-gulmohar-700 ring-2 ring-gulmohar-500/20'
                        : 'bg-chai-50 border-chai-200 text-chai-700 hover:bg-chai-100'
                    }`}
                  >
                    {count} Guests
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-2">
                Package Preference *
              </label>
              <select
                value={formData.packagePreference}
                onChange={(e) => setFormData({ ...formData, packagePreference: e.target.value })}
                className="w-full bg-chai-50/70 border border-chai-200 rounded-xl px-4 py-3 text-sm font-semibold text-chai-900 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
              >
                <option value="Individual Lunch Boxes">Option A: Executive Lunch Box Drop-Off ($15–$18/person)</option>
                <option value="Chaat Platter">Option B: Street Food & Chaat Party Platter ($300–$500)</option>
                <option value="Full Campus Feast">Option C: Full Campus Feast ($600–$1,000+)</option>
                <option value="Custom Combination">Custom Combination / Undecided</option>
              </select>
            </div>
          </div>

          {/* Section 4: Dietary Notes (Blueprint Required Fields) */}
          <div className="pt-2">
            <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-2">
              Dietary Requirements (Check all that apply)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-medium text-chai-800">
              <label className="flex items-center gap-2 bg-chai-50 p-2.5 rounded-xl border border-chai-200 cursor-pointer hover:bg-chai-100/70">
                <input
                  type="checkbox"
                  checked={formData.dietaryNotes.vegetarian}
                  onChange={() => handleCheckboxChange('vegetarian')}
                  className="rounded text-gulmohar-600 focus:ring-gulmohar-500"
                />
                <span>Vegetarian</span>
              </label>

              <label className="flex items-center gap-2 bg-chai-50 p-2.5 rounded-xl border border-chai-200 cursor-pointer hover:bg-chai-100/70">
                <input
                  type="checkbox"
                  checked={formData.dietaryNotes.vegan}
                  onChange={() => handleCheckboxChange('vegan')}
                  className="rounded text-gulmohar-600 focus:ring-gulmohar-500"
                />
                <span>Vegan</span>
              </label>

              <label className="flex items-center gap-2 bg-chai-50 p-2.5 rounded-xl border border-chai-200 cursor-pointer hover:bg-chai-100/70">
                <input
                  type="checkbox"
                  checked={formData.dietaryNotes.glutenFree}
                  onChange={() => handleCheckboxChange('glutenFree')}
                  className="rounded text-gulmohar-600 focus:ring-gulmohar-500"
                />
                <span>Gluten-Free</span>
              </label>

              <label className="flex items-center gap-2 bg-chai-50 p-2.5 rounded-xl border border-chai-200 cursor-pointer hover:bg-chai-100/70">
                <input
                  type="checkbox"
                  checked={formData.dietaryNotes.nutAllergies}
                  onChange={() => handleCheckboxChange('nutAllergies')}
                  className="rounded text-gulmohar-600 focus:ring-gulmohar-500"
                />
                <span>Nut Allergies</span>
              </label>
            </div>
          </div>

          {/* Special notes */}
          <div>
            <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
              Specific Delivery Address / Campus Building & Special Instructions
            </label>
            <textarea
              rows="3"
              placeholder="e.g. Cisco Building 7, 2nd floor pantry, or NetSports court 3 event area. Add-ons like Masala Chai dispenser or Mango Lassi."
              value={formData.specialInstructions}
              onChange={(e) => setFormData({ ...formData, specialInstructions: e.target.value })}
              className="w-full bg-chai-50/70 border border-chai-200 rounded-xl p-3 text-sm text-chai-900 placeholder-chai-400 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
            />
          </div>

          {/* Submit Button (As specified in Blueprint: "Submit Button: Request Catering Quote & Confirm Order") */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-gulmohar-600 via-gulmohar-500 to-saffron-500 hover:from-gulmohar-700 hover:to-saffron-600 text-white py-4 px-6 rounded-2xl font-bold text-base shadow-warm-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
            >
              {isSubmitting ? (
                <span>Generating Quote...</span>
              ) : (
                <>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <span>Request Catering Quote & Confirm Order</span>
                </>
              )}
            </button>
            <p className="text-center text-xs text-chai-400 mt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-chutney-600" />
              <span>No immediate payment required. We will review kitchen schedule and send an official invoice.</span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
