import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '@/src/types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-coffee-950/40 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-coffee-50 z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-coffee-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-coffee-800" size={24} />
                <h2 className="text-xl font-serif font-bold text-coffee-900">Your Order</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-coffee-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-coffee-100 rounded-full flex items-center justify-center text-coffee-300 mb-4">
                    <ShoppingBag size={40} />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-coffee-900 mb-2">Your cart is empty</h3>
                  <p className="text-coffee-500 text-sm mb-8">Looks like you haven't added any treats yet.</p>
                  <button
                    onClick={onClose}
                    className="px-8 py-3 bg-coffee-800 text-coffee-50 rounded-full font-bold"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-coffee-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-bold text-coffee-900">{item.name}</h4>
                        <p className="font-bold text-coffee-900">£{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-xs text-coffee-500 mb-3">{item.category}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 bg-white border border-coffee-200 rounded-lg p-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:bg-coffee-50 rounded text-coffee-600"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:bg-coffee-50 rounded text-coffee-600"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="text-coffee-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-coffee-200 space-y-4">
                <div className="flex justify-between items-center text-coffee-600">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-coffee-600">
                  <span>Service Fee</span>
                  <span>£1.50</span>
                </div>
                <div className="flex justify-between items-center text-xl font-serif font-bold text-coffee-900 pt-2 border-t border-coffee-100">
                  <span>Total</span>
                  <span>£{(subtotal + 1.50).toFixed(2)}</span>
                </div>
                <button className="w-full py-4 bg-coffee-800 text-coffee-50 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-coffee-900 transition-all shadow-lg mt-4">
                  Checkout Now <ArrowRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
