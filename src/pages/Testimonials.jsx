import React, { useState } from 'react';
import { 
  Star, 
  MessageSquarePlus, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Quote, 
  X,
  Send,
  ThumbsUp
} from 'lucide-react';
import { testimonials as initialReviews } from '../data/testimonialsData';

export default function Testimonials({ onShowToast }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    company: '',
    rating: 5,
    tag: 'Weekend Chaat Lover',
    comment: '',
  });

  const filteredReviews = activeFilter === 'All'
    ? reviews
    : reviews.filter(r => r.tag.toLowerCase().includes(activeFilter.toLowerCase()));

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    const reviewToAdd = {
      id: Date.now(),
      name: newReview.name,
      role: newReview.role || 'Guest',
      company: newReview.company || 'Morrisville, NC',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: newReview.rating,
      tag: newReview.tag,
      comment: newReview.comment,
      date: 'Just now',
    };

    setReviews([reviewToAdd, ...reviews]);
    setIsModalOpen(false);
    setNewReview({
      name: '',
      role: '',
      company: '',
      rating: 5,
      tag: 'Weekend Chaat Lover',
      comment: '',
    });

    if (onShowToast) {
      onShowToast('Thank you! Your review has been published.');
    }
  };

  return (
    <div className="pb-24 space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-gulmohar-100/50 via-saffron-50/20 to-transparent pt-12 pb-14 border-b border-chai-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-saffron-100 text-saffron-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Star className="w-4 h-4 fill-saffron-500 text-saffron-500" />
            <span>4.9 / 5.0 Star Rated • 180+ Local & Corporate Reviews</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-chai-950 max-w-3xl mx-auto tracking-tight leading-[1.15]">
            Loved by Morrisville Foodies & RTP Corporate Teams.
          </h1>

          <p className="text-base sm:text-lg text-chai-700 max-w-2xl mx-auto leading-relaxed">
            Read honest feedback from office managers, weekend sports players at NetSports, and local families who trust Gulmohar Cafe for authentic street flavors.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 bg-gulmohar-600 hover:bg-gulmohar-700 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-warm transition-all"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Share Your Gulmohar Experience</span>
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Badges & Trust Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-chai-200/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-gulmohar-600">
                Trusted In The Triangle
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-chai-900">
                Proudly Serving Teams Across Research Triangle Park
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-chai-700">
              <span className="bg-chai-100 px-3.5 py-2 rounded-xl">Cisco RTP</span>
              <span className="bg-chai-100 px-3.5 py-2 rounded-xl">Lenovo Morrisville</span>
              <span className="bg-chai-100 px-3.5 py-2 rounded-xl">NetSports Leagues</span>
              <span className="bg-chai-100 px-3.5 py-2 rounded-xl">Epic Games</span>
              <span className="bg-chai-100 px-3.5 py-2 rounded-xl">Biotech Campuses</span>
            </div>
          </div>
        </div>
      </section>

      {/* Review Filters & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {['All', 'Corporate', 'Weekend', 'NetSports', 'Street Food'].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeFilter === f
                  ? 'bg-gulmohar-600 text-white shadow-warm'
                  : 'bg-white hover:bg-chai-100 text-chai-800 border border-chai-200'
              }`}
            >
              {f === 'All' ? 'All Reviews' : f}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-chai-200/80 hover:shadow-warm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-saffron-800 bg-saffron-50 px-2.5 py-1 rounded-md border border-saffron-200">
                    {rev.tag}
                  </span>
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-gulmohar-200 absolute -top-3 -left-2 -z-0 opacity-40" />
                  <p className="text-xs sm:text-sm text-chai-800 leading-relaxed italic relative z-10">
                    "{rev.comment}"
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-chai-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-10 h-10 rounded-full object-cover border border-chai-200"
                  />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-chai-900 leading-tight">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] text-chai-500">
                      {rev.role} • {rev.company}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] text-chai-400">
                  {rev.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-chai-200 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-chai-400 hover:text-chai-900 p-1 rounded-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase font-bold text-gulmohar-600 bg-gulmohar-50 px-2.5 py-1 rounded-md">
                We Value Your Feedback
              </span>
              <h3 className="font-serif font-bold text-2xl text-chai-900 mt-2">
                Leave a Review for Gulmohar Cafe
              </h3>
            </div>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1">
                  Rating
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="p-1 text-amber-400 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-7 h-7 ${star <= newReview.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                      />
                    </button>
                  ))}
                  <span className="text-xs text-chai-500 font-bold ml-2">
                    {newReview.rating} out of 5 Stars
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Gupta"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full bg-chai-50 border border-chai-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-chai-900 focus:outline-none focus:border-gulmohar-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1">
                    Company / Neighborhood
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cisco / Morrisville"
                    value={newReview.company}
                    onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
                    className="w-full bg-chai-50 border border-chai-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-chai-900 focus:outline-none focus:border-gulmohar-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1">
                  Review Category
                </label>
                <select
                  value={newReview.tag}
                  onChange={(e) => setNewReview({ ...newReview, tag: e.target.value })}
                  className="w-full bg-chai-50 border border-chai-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-chai-900 focus:outline-none focus:border-gulmohar-500 focus:bg-white"
                >
                  <option value="Corporate Catering">Corporate Catering</option>
                  <option value="Weekend Chaat Lover">Weekend Chaat Lover</option>
                  <option value="NetSports Member">NetSports Member</option>
                  <option value="Office Lunch Boxes">Office Lunch Boxes</option>
                  <option value="Dine-In Guest">Dine-In Guest</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-chai-800 uppercase tracking-wider mb-1">
                  Your Review *
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Share details of your favorite dish (Pani Puri, Kathi Roll, Masala Chai) or how your catering delivery went..."
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full bg-chai-50 border border-chai-200 rounded-xl p-3 text-xs sm:text-sm text-chai-900 focus:outline-none focus:border-gulmohar-500 focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gulmohar-600 hover:bg-gulmohar-700 text-white font-bold py-3 rounded-xl text-xs sm:text-sm shadow-warm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit My Review</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
