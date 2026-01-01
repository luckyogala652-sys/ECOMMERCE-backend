const products = [
  {
    id: 1,
    name: 'Milo',
    price: 5.99,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/milo.jpg',
    category: 'beverages',
    subcategory: 'cocoa and chocolate powder'
  },
  {
    id: 2,
    name: 'Nivea',
    price: 7.23,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/nivea.jpg',
    category: 'cream',
    subcategory: 'body-cream'
  },
  {
    id: 3,
    name: 'Ice Cream',
    price: 2.81,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/iceceam.jpg',
    category: 'desserts',
    subcategory: 'frozen desserts'
  },
  {
    id: 4,
    name: 'Eva Soap',
    price: 1.99,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/evasoap.jpg',
    category: 'toiletries',
    subcategory: 'soaps'
  },
  {
    id: 5,
    name: 'Cabin Biscuit',
    price: 3.50,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/cabinbiscuit.jpg',
    category: 'snacks',
    subcategory: 'biscuits'
  },
  {
    id: 6,
    name: 'Colgate Toothpaste',
    price: 4.25,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/colgatetootpaste.jpg',
    category: 'toiletries',
    subcategory: 'toothpaste'
  },
  {
    id: 7,
    name: 'Longrich Toothpaste',
    price: 4.50,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/longrich.jpg',
    category: 'toiletries',
    subcategory: 'toothpaste'
  },
  {
    id: 8,
    name: 'Crest Toothpaste',
    price: 3.75,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/crest.jpg',
    category: 'toiletries',
    subcategory: 'toothpaste'
  },
  {
    id: 9,
    name: 'CloseUp Toothpaste',
    price: 4.50,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/closeup.jpg',
    category: 'toiletries',
    subcategory: 'toothpaste'
  },
  {
    id: 10,
    name: 'Oral-B Toothpaste',
    price: 5.00,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/oralb.jpg',
    category: 'toiletries',
    subcategory: 'toothpaste'
  },
  {
    id: 11,
    name: 'Pepsodent Toothpaste',
    price: 6.00,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/pepsodent.jpg',
    category: 'toiletries',
    subcategory: 'toothpaste' 
  },
  {
    id: 12,
    name: 'MyMy Toothpaste',
    price: 4.75,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/mymy.jpg',
    category: 'toiletries',
    subcategory: 'toothpaste'
  },
  {
    id: 13,
    name: 'Signal Toothpaste',
    price: 5.00,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/signal.jpg',
    category: 'toiletries',
    subcategory: 'toothpaste'
  },
  {
    id: 14,
    name: 'Joy Soap',
    price: 1.99,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/joysoap.jpg',
    category: 'toiletries',
    subcategory: 'soaps'
  },
  {
    id: 15,
    name: 'Lux Soap',
    price: 2.49,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/luxsoap.jpg',
    category: 'toiletries',
    subcategory: 'soaps'
  },
  {
    id: 16,
    name: 'Premier Cool Soap',
    price: 1.99,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/premiercool.jpg',
    category: 'toiletries',
    subcategory: 'soaps'
  },
  {
    id: 17,
    name: 'Bournville',
    price: 6.99,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/bournville.jpg',
    category: 'beverages',
    subcategory: 'cocoa and chocolate powder'
  },
  {
    id: 18,
    name: 'Bournvita',
    price: 7.99,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/bournvita.jpg',
    category: 'beverages',
    subcategory: 'cocoa and chocolate powder'
  },
  {
    id: 19,
    name: 'Ovaltine',
    price: 8.99,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/ovaltine.jpg',
    category: 'beverages',
    subcategory: 'cocoa and chocolate powder'
  },
  {
    id: 20,
    name: 'Cadbury Chocolate',
    price: 5.99,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/cadbury.jpg',
    category: 'beverages',
    subcategory: 'cocoa and chocolate powder'
  },
  {
    id: 21,
    name: 'Nesquik',
    price: 6.49,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/nesquik.jpg',
    category: 'beverages',
    subcategory: 'cocoa and chocolate powder'
  },
  {
    id: 22,
    name: 'Cowbell Chocolate Powder',
    price: 6.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/cowbell-chocolate.jpg',
    category: 'beverages',
    subcategory: 'cocoa and chocolate powder'
  },
  {
    id: 23,
    name: 'Oreo Hot Cocoa',
    price: 6.12,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/oreo-hot-cocoa.jpg',
    category: 'beverages',
    subcategory: 'cocoa and chocolate powder'
  },
  {
    id: 24,
    name: 'Swiss Miss',
    price: 6.35,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/swiss-miss.jpg',
    category: 'beverages',
    subcategory: 'cocoa and chocolate powder'
  },
  {
    id: 25,
    name: 'Anchor Milk',
    price: 6.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/anchor-milk.jpg',
    category: 'beverages',
    subcategory: 'milk and diary powder'
  },
   {
    id: 26,
    name: 'Cowbell Milk',
    price: 6.17,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/cowbell-milk.jpg',
    category: 'beverages',
    subcategory: 'milk and diary powder'
  },
   {
    id: 27,
    name: 'Dano Milk',
    price: 6.15,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/dano-milk.jpg',
    category: 'beverages',
    subcategory: 'milk and diary powder'
  },
   {
    id: 28,
    name: 'Jago Milk',
    price: 6.15,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/jago-milk.jpg',
    category: 'beverages',
    subcategory: 'milk and diary powder'
  },
   {
    id: 29,
    name: 'Loyal Milk',
    price: 6.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/loyal-milk.jpg',
    category: 'beverages',
    subcategory: 'milk and diary powder'
  },
  {
    id: 30,
    name: 'Nido Milk',
    price: 6.18,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/nido-milk.jpg',
    category: 'beverages',
    subcategory: 'milk and diary powder'
  },
  {
    id: 31,
    name: 'Peak Milk',
    price: 6.27,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/peak-milk.jpg',
    category: 'beverages',
    subcategory: 'milk and diary powder'
  },
  {
    id: 32,
    name: 'Rainbow Milk',
    price: 6.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/rainbow-milk.jpg',
    category: 'beverages',
    subcategory: 'milk and diary powder'
  },
  {
    id: 33,
    name: 'Three Crowns Milk',
    price: 6.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/threecrownsmilk.jpg',
    category: 'beverages',
    subcategory: 'milk and diary powder'
  },
  {
    id: 34,
    name: 'SkinWhite Cream',
    price: 6.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/skinwhite.jpg',
    category: 'cream',
    subcategory: 'body-cream'
  },
  {
    id: 35,
    name: 'Vaseline Cream',
    price: 6.20,
    image: '/images/vasline.jpg',
    category: 'cream',
    subcategory: 'body-cream'
  },
  {
    id: 36,
    name: 'Olay Cream',
    price: 6.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/olay.jpg',
    category: 'cream',
    subcategory: 'body-cream'
  },
  {
    id: 37,
    name: 'Garnier Cream',
    price: 6.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/garnier.jpg',
    category: 'cream',
    subcategory: 'body-cream'
  },
  {
    id: 38,
    name: 'Carowhite Cream',
    price: 6.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/carowhite.jpg',
    category: 'cream',
    subcategory: 'body-cream'
  },
  {
    id: 39,
    name: 'Carotone Cream',
    price: 6.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/carotone.jpg',
    category: 'cream',
    subcategory: 'body-cream'
  },
  {
    id: 40,
    name: 'AmLactin Cream',
    price: 6.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/amlactin.jpg',
    category: 'cream',
    subcategory: 'body-cream'
  },
  {
    id: 41,
    name: 'Jimpo-Ori Shea Butter',
    price: 2.25,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/sheabutter.jpg',
    category: 'cream',
    subcategory: 'body-cream'
  },
  {
    id: 42,
    name: 'Blue Magic Hair Cream',
    price: 1.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/bluemagic.jpg',
    category: 'cream',
    subcategory: 'hair-cream'
  },
  {
    id: 43,
    name: 'Damatol Hair Cream',
    price: 1.45,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/damatol.jpg',
    category: 'cream',
    subcategory: 'hair-cream'
  },
  {
    id: 44,
    name: 'Doo Gro Hair Cream',
    price: 1.22,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/doo-gro.jpg',
    category: 'cream',
    subcategory: 'hair-cream'
  },
  {
    id: 45,
    name: 'Garnier Hair Cream',
    price: 1.18,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/garnier.jpg',
    category: 'cream',
    subcategory: 'hair-cream'
  },
  {
    id: 46,
    name: 'Omega-A Hair Cream',
    price: 1.20,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/omega-a.jpg',
    category: 'cream',
    subcategory: 'hair-cream'
  },
  {
    id: 47,
    name: 'Soulmate Hair Cream',
    price: 1.38,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/soulmate.jpg',
    category: 'cream',
    subcategory: 'hair-cream'
  },
  {
    id: 48,
    name: 'Sulfur8 Hair Cream',
    price: 1.26,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/sulfur8.jpg',
    category: 'cream',
    subcategory: 'hair-cream'
  },
  {
    id: 49,
    name: 'TCB Hair Cream',
    price: 1.45,
    image: 'https://ecommerce-backend-ejce.onrender.com/images/tcb.jpg',
    category: 'cream',
    subcategory: 'hair-cream'
  }
];

module.exports = products;