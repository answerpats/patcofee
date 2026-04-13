import { motion } from 'motion/react';
import { ArrowRight, Coffee, Clock, MapPin } from 'lucide-react';

interface HeroProps {
  onOrderClick: () => void;
  onReserveClick: () => void;
}

export default function Hero({ onOrderClick, onReserveClick }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-coffee-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-[-10%] w-[400px] h-[400px] bg-olive-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-olive-100 text-olive-800 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Coffee size={14} />
            <span>Award Winning Roastery</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] text-coffee-950 mb-8">
            Crafting the <br />
            <span className="italic text-coffee-600">Perfect Moment</span>
          </h1>
          
          <p className="text-lg text-coffee-700 max-w-lg mb-10 leading-relaxed">
            Experience the art of specialty coffee in a space designed for connection, 
            creativity, and calm. From bean to cup, we prioritize quality and sustainability.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={onOrderClick}
              className="px-8 py-4 bg-coffee-800 text-coffee-50 rounded-full font-medium flex items-center gap-2 hover:bg-coffee-900 transition-all transform hover:scale-105 shadow-lg"
            >
              Order Online <ArrowRight size={18} />
            </button>
            <button
              onClick={onReserveClick}
              className="px-8 py-4 border-2 border-coffee-800 text-coffee-800 rounded-full font-medium hover:bg-coffee-800 hover:text-coffee-50 transition-all"
            >
              Book a Table
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-coffee-600">
              <Clock size={20} className="text-olive-600" />
              <div className="text-sm">
                <p className="font-bold">Open Daily</p>
                <p>7:00 AM - 8:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-coffee-600">
              <MapPin size={20} className="text-olive-600" />
              <div className="text-sm">
                <p className="font-bold">Location</p>
                <p>123 Artisan Way, London</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200"
              alt="Cozy Coffee Shop Interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Element */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-coffee-100 max-w-[200px]"
          >
            <div className="flex gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            <p className="text-sm font-medium text-coffee-900 italic">
              "The best flat white in the city. A true hidden gem."
            </p>
            <p className="text-[10px] text-coffee-500 mt-2 uppercase tracking-widest">— Sarah J.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
