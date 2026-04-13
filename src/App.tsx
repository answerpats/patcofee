/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import ReservationForm from './components/ReservationForm';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { MenuItem, CartItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-coffee-50">
      <Navbar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={scrollToSection}
      />
      
      <main>
        <Hero 
          onOrderClick={() => scrollToSection('menu')}
          onReserveClick={() => scrollToSection('reservations')}
        />
        
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-olive-100 rounded-full blur-3xl opacity-50" />
                <div className="relative aspect-square rounded-[60px] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1000"
                    alt="Coffee beans roasting"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-coffee-200 rounded-full blur-3xl opacity-30" />
              </div>
              
              <div className="space-y-8">
                <div className="inline-block px-4 py-1 bg-coffee-100 text-coffee-800 rounded-full text-xs font-bold uppercase tracking-widest">
                  Our Philosophy
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-950 leading-tight">
                  Ethically Sourced, <br />
                  <span className="italic text-coffee-600">Artisanally Roasted</span>
                </h2>
                <p className="text-coffee-700 text-lg leading-relaxed">
                  At Brew & Bean, we believe coffee is more than just a caffeine kick. 
                  It's a journey from the high-altitude farms of Ethiopia to the 
                  meticulous roasting process in our London studio.
                </p>
                <p className="text-coffee-700 leading-relaxed">
                  We work directly with small-batch farmers to ensure fair wages and 
                  sustainable practices. Every cup we serve tells a story of passion, 
                  precision, and respect for the craft.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div>
                    <p className="text-3xl font-serif font-bold text-coffee-900">100%</p>
                    <p className="text-sm text-coffee-500 uppercase tracking-widest font-bold">Traceable Beans</p>
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-bold text-coffee-900">12+</p>
                    <p className="text-sm text-coffee-500 uppercase tracking-widest font-bold">Single Origins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Menu onAddToCart={handleAddToCart} />
        
        <ReservationForm />
      </main>

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
      />
    </div>
  );
}

