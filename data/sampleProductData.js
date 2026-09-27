const products = [
  {
    name: 'Wireless Noise-Canceling Headphones',
    description: 'Over-ear Bluetooth headphones with active noise cancellation and 30-hour battery life.',
    price: 199.99,
    category: 'Electronics',
    inStock: true,
    tags: ['audio', 'bluetooth', 'wireless', 'headphones'],
    createdAt: new Date()
  },
  {
    name: 'Ergonomic Mesh Office Chair',
    description: 'High-back office chair with adjustable lumbar support and breathable mesh.',
    price: 249.5,
    category: 'Furniture',
    inStock: true,
    tags: ['office', 'furniture', 'ergonomic'],
    createdAt: new Date()
  },
  {
    name: 'Stainless Steel Water Bottle',
    description: 'Insulated 32oz water bottle that keeps drinks cold for up to 24 hours.',
    price: 29.99,
    category: 'Fitness & Outdoors',
    inStock: true,
    tags: ['fitness', 'water bottle', 'outdoors'],
    createdAt: new Date()
  },
  {
    name: 'Mechanical Gaming Keyboard',
    description: 'RGB backlit mechanical keyboard with tactile brown switches.',
    price: 89.95,
    category: 'Electronics',
    inStock: false,
    tags: ['gaming', 'keyboard', 'pc', 'rgb'],
    createdAt: new Date()
  },
  {
    name: 'Organic Whole Bean Coffee',
    description: 'Medium-roast 12oz bag of single-origin organic Arabica coffee beans.',
    price: 16.49,
    category: 'Groceries',
    inStock: true,
    tags: ['coffee', 'organic', 'beverage'],
    createdAt: new Date()
  },
  {
    name: 'Smart Fitness Watch',
    description: 'Water-resistant smartwatch with heart rate monitoring, GPS, and step tracking.',
    price: 149,
    category: 'Electronics',
    inStock: true,
    tags: ['smartwatch', 'fitness', 'wearables', 'tech'],
    createdAt: new Date()
  },
  {
    name: 'Non-Stick Ceramic Frying Pan',
    description: '10-inch eco-friendly ceramic frying pan, non-toxic and dishwasher safe.',
    price: 39.99,
    category: 'Kitchenware',
    inStock: false,
    tags: ['kitchen', 'cookware', 'pan'],
    createdAt: new Date()
  },
  {
    name: 'Waterproof Backpack',
    description: '25L durable waterproof travel backpack with dedicated 15-inch laptop sleeve.',
    price: 68,
    category: 'Travel',
    inStock: true,
    tags: ['backpack', 'travel', 'waterproof', 'bags'],
    createdAt: new Date()
  },
  {
    name: 'Aromatherapy Essential Oil Diffuser',
    description: '300ml ultrasonic mist diffuser with 7 ambient LED light modes.',
    price: 24.99,
    category: 'Home Decor',
    inStock: true,
    tags: ['home', 'wellness', 'diffuser'],
    createdAt: new Date()
  },
  {
    name: 'Resistance Bands Set',
    description: 'Set of 5 heavy-duty exercise resistance bands with door anchor and handles.',
    price: 19.95,
    category: 'Fitness & Outdoors',
    inStock: true,
    tags: ['fitness', 'workout', 'gym'],
    createdAt: new Date()
  }
];

module.exports = products;