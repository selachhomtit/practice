export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  description: string;
  image: string;
  isPopular: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Bacon Onion Pizza Focaccia",
    price: 3.44,
    oldPrice: 4.3,
    description: "ភីហ្សាសម្រាប់មនុស្ស 1 នាក់",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    isPopular: false,
  },
  {
    id: 2,
    name: "Tuna Melt Sandwich",
    price: 3.92,
    oldPrice: 4.9,
    description: "Mix of tuna cream cheese onions. We Recommend adding: Jalapeno peppers",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400",
    isPopular: true,
  },
  {
    id: 3,
    name: "Cream Cheese Basil Tomatoes Sandwich",
    price: 3.68,
    oldPrice: 4.6,
    description: "Try Coppa as extra addon or any meat of your choice. No onions",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400",
    isPopular: true,
  },
  {
    id: 4,
    name: "Smoked Chicken Mix",
    price: 3.76,
    oldPrice: 4.7,
    description: "Chicken deli mixed with grainy mustard mayo and onions.",
    image: "https://images.unsplash.com/photo-1481070414801-51fd732d7184?w=400",
    isPopular: true,
  },
];
