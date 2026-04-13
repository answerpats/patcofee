import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ShoppingBag } from 'lucide-react';
import { MENU_ITEMS, MenuItem } from '@/src/types';
import { cn } from '@/src/lib/utils';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function Menu({ onAddToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Coffee', 'Tea', 'Pastry', 'Brunch'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-coffee-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-950 mb-4">Our Seasonal Menu</h2>
          <p className="text-coffee-600 max-w-2xl mx-auto">
            Carefully curated selections featuring locally sourced ingredients and 
            our signature house-roasted beans.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-6 py-2 rounded-full text-sm font-medium transition-all border',
                activeCategory === cat
                  ? 'bg-coffee-800 text-coffee-50 border-coffee-800 shadow-md'
                  : 'bg-white text-coffee-700 border-coffee-200 hover:border-coffee-400'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group border border-coffee-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-coffee-900">
                    £{item.price.toFixed(2)}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-coffee-900">{item.name}</h3>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-olive-600 bg-olive-50 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-coffee-600 mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="w-full py-3 bg-coffee-50 text-coffee-800 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-coffee-800 hover:text-coffee-50 transition-all group/btn"
                  >
                    <Plus size={18} className="group-hover/btn:rotate-90 transition-transform" />
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
