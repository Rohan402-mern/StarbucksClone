
export const StarbucksProducts = [
  // --- Drinks ---
  {
    id: 1,
    name: "Caffè Latte",
    category: "Drink",
    type: "Espresso",
    description: "Espresso with steamed milk and a light layer of foam.",
    sizes: [
      { size: "Tall", price: 3.45 },
      { size: "Grande", price: 3.95 },
      { size: "Venti", price: 4.45 }
    ],
    isAvailable: true
  },
  {
    id: 2,
    name: "Cappuccino",
    category: "Drink",
    type: "Espresso",
    description: "Espresso with a thick layer of foam and steamed milk.",
    sizes: [
      { size: "Tall", price: 3.65 },
      { size: "Grande", price: 4.15 },
      { size: "Venti", price: 4.65 }
    ],
    isAvailable: true
  },
  {
    id: 3,
    name: "Caramel Macchiato",
    category: "Drink",
    type: "Espresso",
    description: "Steamed milk with vanilla syrup, espresso, and caramel drizzle.",
    sizes: [
      { size: "Tall", price: 4.25 },
      { size: "Grande", price: 4.75 },
      { size: "Venti", price: 5.25 }
    ],
    isAvailable: true
  },
  {
    id: 4,
    name: "Iced Shaken Espresso",
    category: "Drink",
    type: "Cold Coffee",
    description: "Espresso shaken with ice, a splash of milk, and sweetener.",
    sizes: [
      { size: "Tall", price: 3.75 },
      { size: "Grande", price: 4.25 },
      { size: "Venti", price: 4.75 }
    ],
    isAvailable: true
  },
  {
    id: 5,
    name: "Matcha Green Tea Latte",
    category: "Drink",
    type: "Tea",
    description: "Matcha green tea blended with steamed milk.",
    sizes: [
      { size: "Tall", price: 4.15 },
      { size: "Grande", price: 4.65 },
      { size: "Venti", price: 5.15 }
    ],
    isAvailable: true
  },

  // --- Food ---
  {
    id: 6,
    name: "Bacon, Gouda & Egg Sandwich",
    category: "Food",
    type: "Breakfast",
    description: "Smoky bacon, aged Gouda and egg on an artisan roll.",
    sizes: [{ size: "One Size", price: 4.75 }],
    isAvailable: true
  },
  {
    id: 7,
    name: "Turkey Bacon, Cheddar & Egg White Sandwich",
    category: "Food",
    type: "Breakfast",
    description: "Reduced-fat turkey bacon and egg whites with cheese.",
    sizes: [{ size: "One Size", price: 4.45 }],
    isAvailable: true
  },
  {
    id: 8,
    name: "Pumpkin Cream Cheese Muffin",
    category: "Food",
    type: "Bakery",
    description: "Pumpkin muffin with cream cheese and pepitas.",
    sizes: [{ size: "One Size", price: 2.95 }],
    isAvailable: false
  },
  {
    id: 9,
    name: "Banana Nut Bread",
    category: "Food",
    type: "Bakery",
    description: "Moist banana bread with walnuts.",
    sizes: [{ size: "One Size", price: 2.95 }],
    isAvailable: true
  },

  // --- Seasonal Specials ---
  {
    id: 10,
    name: "Pumpkin Spice Latte",
    category: "Seasonal",
    type: "Espresso",
    description: "Espresso with pumpkin, cinnamon, nutmeg, clove, and whipped cream.",
    sizes: [
      { size: "Tall", price: 4.75 },
      { size: "Grande", price: 5.25 },
      { size: "Venti", price: 5.75 }
    ],
    isAvailable: false
  },
  {
    id: 11,
    name: "Iced Sugar Cookie Almondmilk Latte",
    category: "Seasonal",
    type: "Cold Coffee",
    description: "Iced espresso with sugar cookie syrup and almondmilk.",
    sizes: [
      { size: "Tall", price: 4.75 },
      { size: "Grande", price: 5.25 },
      { size: "Venti", price: 5.75 }
    ],
    isAvailable: false
  }
];


