import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ReservationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Reservation submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="reservations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-950 mb-6">
              Reserve Your <br />
              <span className="italic text-coffee-600">Perfect Spot</span>
            </h2>
            <p className="text-coffee-700 text-lg mb-8 leading-relaxed">
              Planning a meeting, a date, or just need a guaranteed quiet corner? 
              Book your table in advance. We hold reservations for up to 15 minutes.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coffee-100 rounded-2xl flex items-center justify-center text-coffee-800 shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-900">Group Bookings</h4>
                  <p className="text-sm text-coffee-600">For groups larger than 6, please contact us directly via phone.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-coffee-100 rounded-2xl flex items-center justify-center text-coffee-800 shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-coffee-900">Private Events</h4>
                  <p className="text-sm text-coffee-600">Our space is available for evening hire and private workshops.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-coffee-800 rounded-[40px] transform rotate-3 scale-[1.02] opacity-5" />
            <div className="relative bg-coffee-50 p-8 md:p-10 rounded-[40px] border border-coffee-200 shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-olive-100 text-olive-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-2">Reservation Confirmed!</h3>
                  <p className="text-coffee-600">We've sent a confirmation email to {formData.email}. See you soon!</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-coffee-800 font-bold underline underline-offset-4"
                  >
                    Make another booking
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-coffee-600 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white border border-coffee-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-400 transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-coffee-600 ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white border border-coffee-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-400 transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-coffee-600 ml-1">Date</label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-400" />
                        <input
                          required
                          type="date"
                          className="w-full pl-11 pr-4 py-3 bg-white border border-coffee-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-400 transition-all"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-coffee-600 ml-1">Time</label>
                      <div className="relative">
                        <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-400" />
                        <input
                          required
                          type="time"
                          className="w-full pl-11 pr-4 py-3 bg-white border border-coffee-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-400 transition-all"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-coffee-600 ml-1">Guests</label>
                      <div className="relative">
                        <Users size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-coffee-400" />
                        <select
                          className="w-full pl-11 pr-4 py-3 bg-white border border-coffee-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-400 transition-all appearance-none"
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        >
                          {[1, 2, 3, 4, 5, 6].map(n => (
                            <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-coffee-600 ml-1">Special Requests (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Any dietary requirements or seating preferences?"
                      className="w-full px-4 py-3 bg-white border border-coffee-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-400 transition-all resize-none"
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-coffee-800 text-coffee-50 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-coffee-900 transition-all shadow-lg"
                  >
                    Confirm Reservation <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
