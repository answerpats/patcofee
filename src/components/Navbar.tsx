import { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (section: string) => void;
}

export default function Navbar({ cartCount, onCartClick, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', id: 'menu' },
    { name: 'Reservations', id: 'reservations' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-coffee-50/80 backdrop-blur-md border-b border-coffee-200 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-coffee-800 rounded-full flex items-center justify-center text-coffee-50 group-hover:bg-coffee-700 transition-colors">
            <Coffee size={20} />
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-coffee-900">
            Brew & Bean
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="text-sm font-medium text-coffee-700 hover:text-coffee-900 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-600 transition-all group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={onCartClick}
            className="relative p-2 text-coffee-800 hover:bg-coffee-100 rounded-full transition-colors"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-olive-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-coffee-50">
                {cartCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onCartClick}
            className="relative p-2 text-coffee-800"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-olive-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-coffee-50">
                {cartCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-coffee-800"
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-coffee-50 border-b border-coffee-200 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-lg font-serif font-medium text-coffee-800 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
