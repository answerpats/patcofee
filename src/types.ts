export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Coffee' | 'Tea' | 'Pastry' | 'Brunch';
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Signature Espresso',
    description: 'Rich, full-bodied with notes of dark chocolate and caramel.',
    price: 3.50,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Velvet Flat White',
    description: 'Micro-foamed milk poured over a double shot of our house blend.',
    price: 4.20,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1577968897866-be5025bb1167?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Artisan Croissant',
    description: 'Flaky, buttery layers baked fresh every morning.',
    price: 3.80,
    category: 'Pastry',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Matcha Ceremonial Latte',
    description: 'Premium grade matcha whisked with your choice of milk.',
    price: 4.80,
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1515823662273-ad9525e58846?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    name: 'Avocado & Dukkah Toast',
    description: 'Sourdough topped with smashed avocado, poached egg, and Egyptian spice blend.',
    price: 12.50,
    category: 'Brunch',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    name: 'Cold Brew Reserve',
    description: 'Steeped for 18 hours for a smooth, low-acid finish.',
    price: 4.50,
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
  },
];
