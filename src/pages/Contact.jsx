import React, { useState } from 'react';
import { 
  MapPin, 
  PhoneCall, 
  Clock, 
  Mail, 
  Send, 
  Car, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles,
  ExternalLink,
  Navigation
} from 'lucide-react';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Question / Feedback',
    message: '',
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
        onShowToast('Message sent! Our team will respond to your inquiry shortly.');
      }
    }, 700);
  };

  return (
    <div className="pb-24 space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-gulmohar-100/50 via-saffron-50/20 to-transparent pt-12 pb-14 border-b border-chai-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-gulmohar-100 text-gulmohar-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <MapPin className="w-4 h-4 text-gulmohar-600" />
            <span>NetSports Lobby • Morrisville, NC</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-chai-950 max-w-3xl mx-auto tracking-tight leading-[1.15]">
            Visit Us, Call Ahead, or Send a Message.
          </h1>

          <p className="text-base sm:text-lg text-chai-700 max-w-2xl mx-auto leading-relaxed">
            Located inside NetSports on Davis Drive. Free parking right out front. We’re open 7 days a week for authentic chaats and express meals.
          </p>
        </div>
      </section>

      {/* Main Content: Info Cards & Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Parking Guide (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-chai-200/80 space-y-6">
              <h3 className="font-serif font-bold text-xl text-chai-950 border-b border-chai-100 pb-3">
                Quick Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gulmohar-100 text-gulmohar-600 flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-chai-500 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      href="tel:2163949743"
                      className="font-serif font-bold text-lg text-chai-950 hover:text-gulmohar-600 transition-colors"
                    >
                      (216) 394-9743
                    </a>
                    <p className="text-xs text-chai-500 mt-0.5">
                      Call for takeaway orders & weekend platter reservations
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-chai-500 uppercase tracking-wider block">
                      Address & Facility
                    </span>
                    <p className="font-bold text-chai-900">
                      3717 Davis Dr (Inside NetSports)
                    </p>
                    <p className="text-xs text-chai-600">
                      Morrisville, NC 27560
                    </p>
                  </div>
                </div>

                {/* Operating Hours (Synced with GBP) */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-chutney-100 text-chutney-700 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs font-bold text-chai-500 uppercase tracking-wider block">
                      Hours of Operation
                    </span>
                    <div className="mt-1 space-y-1 text-xs">
                      <div className="flex justify-between py-1 border-b border-chai-100">
                        <span className="text-chai-600 font-medium">Monday – Friday:</span>
                        <span className="font-bold text-chai-900">11:30 AM – 8:00 PM</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-chai-100">
                        <span className="text-chai-600 font-medium">Saturday – Sunday:</span>
                        <span className="font-bold text-chai-900">11:00 AM – 9:00 PM</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-chai-400 mt-1">
                      *Synced with Google Business Profile
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="tel:2163949743"
                  className="w-full bg-gulmohar-600 hover:bg-gulmohar-700 text-white font-bold py-3 rounded-xl text-xs sm:text-sm shadow-warm transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call (216) 394-9743</span>
                </a>

                <a
                  href="https://maps.google.com/?q=3717+Davis+Dr,+Morrisville,+NC+27560"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-chai-100 hover:bg-chai-200 text-chai-900 font-bold py-3 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-gulmohar-600" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Parking Instructions (Exact Blueprint Copy) */}
            <div className="bg-amber-50/80 rounded-3xl p-6 border border-amber-200 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <Car className="w-5 h-5 text-amber-700" />
                <span>How to Find Us & Parking Instructions</span>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong>How to Find Us:</strong> Gulmohar Cafe is located inside the NetSports facility on Davis Drive.
              </p>
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong>Parking Instructions:</strong> Free parking is available in the main NetSports lot directly in front of the building. Enter through the main glass entrance doors, and you will find our cafe counter just inside the lobby area.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Feedback Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-chai-200/80 relative">
              <div className="border-b border-chai-100 pb-4 mb-6">
                <span className="text-xs uppercase font-bold text-gulmohar-600 bg-gulmohar-50 px-2.5 py-1 rounded-md">
                  Get in Touch
                </span>
                <h3 className="font-serif font-bold text-2xl text-chai-950 mt-2">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-chai-500 mt-1">
                  Have a question regarding allergies, private event hosting inside NetSports, or feedback?
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 bg-chutney-100 text-chutney-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-chai-900">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-xs sm:text-sm text-chai-600 max-w-sm mx-auto">
                    We’ve received your message and will get back to you at <strong>{formData.email}</strong> within 24 hours. For immediate takeaway or weekend platters, call us directly at <strong>(216) 394-9743</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block mt-4 bg-chai-100 hover:bg-chai-200 text-chai-900 px-5 py-2.5 rounded-xl text-xs font-bold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amit Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-chai-50/70 border border-chai-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-chai-900 placeholder-chai-400 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="amit@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-chai-50/70 border border-chai-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-chai-900 placeholder-chai-400 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(216) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-chai-50/70 border border-chai-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-chai-900 placeholder-chai-400 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-chai-50/70 border border-chai-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-chai-900 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
                      >
                        <option value="General Question / Feedback">General Question / Feedback</option>
                        <option value="Corporate Catering Inquiry">Corporate Catering Inquiry</option>
                        <option value="NetSports Event Table Booking">NetSports Event Table Booking</option>
                        <option value="Weekend Platter Reservation">Weekend Platter Reservation</option>
                        <option value="Dietary & Allergen Question">Dietary & Allergen Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="How can we help you? Feel free to ask about our rotating weekend menu, chaat platters, or NetSports court events..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-chai-50/70 border border-chai-200 rounded-xl p-3.5 text-xs sm:text-sm text-chai-900 placeholder-chai-400 focus:outline-none focus:border-gulmohar-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-gulmohar-600 to-gulmohar-500 hover:from-gulmohar-700 hover:to-gulmohar-600 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-warm transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message to Gulmohar Cafe</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Full-width Embedded Map (Blueprint: "Interactive Map Embed: Google Maps Pin synced with Gulmohar Cafe Google Business Profile") */}
        <div className="mt-16 bg-white rounded-3xl p-4 sm:p-6 shadow-card border border-chai-200/80 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs uppercase font-bold text-gulmohar-600">
                Interactive Google Map
              </span>
              <h3 className="font-serif font-bold text-xl text-chai-950">
                Gulmohar Cafe Pin — 3717 Davis Dr, Morrisville, NC
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=3717+Davis+Dr,+Morrisville,+NC+27560"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gulmohar-600 hover:text-gulmohar-700 underline"
            >
              <span>Open in Full Google Maps App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="h-96 rounded-2xl overflow-hidden border border-chai-200 shadow-inner">
            <iframe
              title="Gulmohar Cafe Google Map Location"
              src="https://maps.google.com/maps?q=3717%20Davis%20Dr,%20Morrisville,%20NC%2027560&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
