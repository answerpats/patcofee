import { Coffee, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-coffee-950 text-coffee-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-coffee-800 rounded-full flex items-center justify-center text-coffee-50">
                <Coffee size={20} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-white">
                Brew & Bean
              </span>
            </div>
            <p className="text-coffee-400 leading-relaxed">
              Dedicated to the craft of exceptional coffee and the community that 
              surrounds it. Join us for your daily ritual.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-coffee-800 flex items-center justify-center hover:bg-coffee-800 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-coffee-800 flex items-center justify-center hover:bg-coffee-800 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-coffee-800 flex items-center justify-center hover:bg-coffee-800 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#reservations" className="hover:text-white transition-colors">Book a Table</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-coffee-600 shrink-0 mt-1" />
                <span>123 Artisan Way, Creative Quarter, London, E1 6QL</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-coffee-600 shrink-0" />
                <span>+44 (0) 20 7123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-coffee-600 shrink-0" />
                <span>hello@brewandbean.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-coffee-400 mb-6 text-sm">
              Subscribe for brewing tips, new roast alerts, and exclusive events.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-coffee-900 border border-coffee-800 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-coffee-600"
              />
              <button className="bg-coffee-800 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-coffee-700 transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-coffee-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-coffee-600">
          <p>© 2024 Brew & Bean Roastery. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
