// Menu data for Maati Bistro - From PDF
const menuData = [
  // BREAKFAST
  {
    id: 1,
    name: "Poha",
    price: 39,
    category: "Breakfast",
  },

  // HOT BEVERAGES
  {
    id: 2,
    name: "Chai",
    price: 15,
    category: "Hot Beverages",
  },
  {
    id: 3,
    name: "Black Tea",
    price: 25,
    category: "Hot Beverages",
  },
  {
    id: 4,
    name: "Coffee",
    price: 29,
    category: "Hot Beverages",
  },
  {
    id: 5,
    name: "Lemon Tea",
    price: 29,
    category: "Hot Beverages",
  },
  {
    id: 6,
    name: "Ginger Honey Tea",
    price: 29,
    category: "Hot Beverages",
  },
  {
    id: 7,
    name: "Hot Chocolate",
    price: 59,
    category: "Hot Beverages",
  },

  // COLD BEVERAGES & SHAKES
  {
    id: 8,
    name: "Cold Coffee",
    price: 39,
    category: "Cold Beverages & Shakes",
  },
  {
    id: 9,
    name: "Lemon Iced Tea",
    price: 39,
    category: "Cold Beverages & Shakes",
  },
  {
    id: 10,
    name: "Peach Iced Tea",
    price: 39,
    category: "Cold Beverages & Shakes",
  },
  {
    id: 11,
    name: "Oreo Shake",
    price: 69,
    category: "Cold Beverages & Shakes",
  },
  {
    id: 12,
    name: "KitKat Shake",
    price: 79,
    category: "Cold Beverages & Shakes",
  },

  // MOJITO
  {
    id: 13,
    name: "Strawberry Mojito",
    price: 39,
    category: "Mojito",
  },
  {
    id: 14,
    name: "Mango Mojito",
    price: 39,
    category: "Mojito",
  },
  {
    id: 15,
    name: "Blackcurrant Mojito",
    price: 39,
    category: "Mojito",
  },
  {
    id: 16,
    name: "Kiwi Mojito",
    price: 39,
    category: "Mojito",
  },
  {
    id: 17,
    name: "Litchi Mojito",
    price: 39,
    category: "Mojito",
  },
  {
    id: 18,
    name: "Guava Mojito",
    price: 39,
    category: "Mojito",
  },
  {
    id: 19,
    name: "Pineapple Mojito",
    price: 39,
    category: "Mojito",
  },

  // SODAS
  {
    id: 20,
    name: "Pineapple Soda",
    price: 29,
    category: "Sodas",
  },
  {
    id: 21,
    name: "Kala Khatta Soda",
    price: 29,
    category: "Sodas",
  },
  {
    id: 22,
    name: "Jeera Masala Soda",
    price: 29,
    category: "Sodas",
  },
  {
    id: 23,
    name: "Plain / Limbu Soda",
    price: 29,
    category: "Sodas",
  },

  // SNACKS & STARTERS
  {
    id: 24,
    name: "French Fries",
    price: 79,
    category: "Snacks & Starters",
  },
  {
    id: 25,
    name: "Veggie Sticks",
    price: 79,
    category: "Snacks & Starters",
  },
  {
    id: 26,
    name: "Chilly Garlic Poppers",
    price: 89,
    category: "Snacks & Starters",
  },
  {
    id: 27,
    name: "Peri Peri Fries",
    price: 89,
    category: "Snacks & Starters",
  },
  {
    id: 28,
    name: "Cheese Fries",
    price: 89,
    category: "Snacks & Starters",
  },
  {
    id: 29,
    name: "Cheese Peri Peri",
    price: 99,
    category: "Snacks & Starters",
  },
  {
    id: 30,
    name: "Hash Brown",
    price: 99,
    category: "Snacks & Starters",
  },
  {
    id: 31,
    name: "Hara Bhara Kabab",
    price: 99,
    category: "Snacks & Starters",
  },

  // BURGERS
  {
    id: 32,
    name: "Veg Burger",
    price: 49,
    category: "Burgers",
  },
  {
    id: 33,
    name: "Veg Cheese Burger",
    price: 59,
    category: "Burgers",
  },
  {
    id: 34,
    name: "Veg Mayo Burger",
    price: 59,
    category: "Burgers",
  },
  {
    id: 35,
    name: "Tandoori Burger",
    price: 69,
    category: "Burgers",
  },
  {
    id: 36,
    name: "Tandoori Cheese",
    price: 79,
    category: "Burgers",
  },
  {
    id: 37,
    name: "Garlic Mint Burger",
    price: 99,
    category: "Burgers",
  },
  {
    id: 38,
    name: "Aioli Burger",
    price: 99,
    category: "Burgers",
  },

  // MOMOS
  {
    id: 39,
    name: "Momos Steam",
    price: 69,
    category: "Momos",
  },
  {
    id: 40,
    name: "Momos Fried",
    price: 89,
    category: "Momos",
  },
  {
    id: 41,
    name: "Momos Tandoori",
    price: 99,
    category: "Momos",
  },
  {
    id: 42,
    name: "Momos Gravy Steam",
    price: 119,
    category: "Momos",
  },
  {
    id: 43,
    name: "Momos Gravy Fried",
    price: 149,
    category: "Momos",
  },
  {
    id: 44,
    name: "Momos Gravy Tandoori",
    price: 149,
    category: "Momos",
  },

  // SANDWICHES
  {
    id: 45,
    name: "Veg Sandwich",
    price: 39,
    category: "Sandwiches",
  },
  {
    id: 46,
    name: "Cheese Sandwich",
    price: 49,
    category: "Sandwiches",
  },
  {
    id: 47,
    name: "Schezwan Sandwich",
    price: 49,
    category: "Sandwiches",
  },
  {
    id: 48,
    name: "Mint Sandwich",
    price: 49,
    category: "Sandwiches",
  },
  {
    id: 49,
    name: "Veg Grill Sandwich",
    price: 49,
    category: "Sandwiches",
  },
  {
    id: 50,
    name: "Cheese Grill Sandwich",
    price: 59,
    category: "Sandwiches",
  },
  {
    id: 51,
    name: "Schezwan Grill Sandwich",
    price: 59,
    category: "Sandwiches",
  },
  {
    id: 52,
    name: "Mint Grill Sandwich",
    price: 59,
    category: "Sandwiches",
  },

  // PIZZAS
  {
    id: 53,
    name: "Margherita Pizza",
    price: 109,
    category: "Pizzas",
  },
  {
    id: 54,
    name: "Tandoori Paneer Pizza",
    price: 129,
    category: "Pizzas",
  },

  // PASTA
  {
    id: 55,
    name: "Alfredo Pasta",
    price: 129,
    category: "Pasta",
  },
  {
    id: 56,
    name: "Penne Arrabbiata",
    price: 129,
    category: "Pasta",
  },

  // GARLIC BREAD
  {
    id: 57,
    name: "Garlic Bread",
    price: 79,
    category: "Garlic Bread",
  },
  {
    id: 58,
    name: "Cheese Garlic Bread",
    price: 99,
    category: "Garlic Bread",
  },

  // MAGGI
  {
    id: 59,
    name: "Maggi Classic",
    price: 29,
    category: "Maggi",
  },
  {
    id: 60,
    name: "Maggi Cheese",
    price: 39,
    category: "Maggi",
  },
  {
    id: 61,
    name: "Maggi Veg",
    price: 39,
    category: "Maggi",
  },
  {
    id: 62,
    name: "Maggi Peri Peri",
    price: 39,
    category: "Maggi",
  },
  {
    id: 63,
    name: "Maggi Peri Peri Cheese",
    price: 49,
    category: "Maggi",
  },
  {
    id: 64,
    name: "Maggi Peri Peri Veg",
    price: 49,
    category: "Maggi",
  },
  {
    id: 65,
    name: "Maggi Veg Peri Peri Cheese",
    price: 59,
    category: "Maggi",
  },
];

export default menuData;
