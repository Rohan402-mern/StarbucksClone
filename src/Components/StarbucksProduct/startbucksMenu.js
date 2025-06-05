const starbucksMenu = {
  beverages: {
    hot: {
      espresso: [
        { name: 'Espresso', price: 100 },
        { name: 'Espresso Macchiato', price: 100 },
        { name: 'Espresso Con Panna', price: 100 },
      ],
      americano: [
        { size: 'Solo', price: 110 },
        { size: 'Doppio', price: 110 },
      ],
      cappuccino: [
        { size: 'Solo', price: 125 },
        { size: 'Doppio', price: 125 },
      ],
      latte: [
        { size: 'Solo', price: 125 },
        { size: 'Doppio', price: 125 },
      ],
      flavoredLattes: [
        { name: 'Vanilla Latte', price: 160 },
        { name: 'Hazelnut Latte', price: 160 },
        { name: 'Caramel Macchiato', price: 140 },
      ],
      mocha: [
        { name: 'Caffe Mocha', price: 145 },
        { name: 'White Chocolate Mocha', price: 150 },
      ],
      chai: [
        { name: 'Chai Tea Latte', price: 110 },
        { name: 'Masala Chai', price: 185 },
        { name: 'Elaichi Chai', price: 185 },
      ],
      filterCoffee: [
        { name: 'Filter Coffee', price: 185 },
      ],
      hotChocolate: [
        { name: 'Signature Hot Chocolate', price: 115 },
      ],
    },
    cold: {
      icedAmericano: [
        { size: 'Solo', price: 130 },
        { size: 'Doppio', price: 130 },
      ],
      icedLattes: [
        { name: 'Iced Latte', price: 130 },
        { name: 'Iced Vanilla Latte', price: 160 },
      ],
      icedMocha: [
        { name: 'Iced Mocha', price: 165 },
        { name: 'Iced White Chocolate Mocha', price: 170 },
      ],
      icedChai: [
        { name: 'Iced Chai Tea Latte', price: 130 },
        { name: 'Iced Masala Chai', price: 185 },
        { name: 'Iced Elaichi Chai', price: 185 },
      ],
      icedFilterCoffee: [
        { name: 'Iced Filter Coffee', price: 185 },
      ],
      icedTea: [
        { name: 'Iced Black Tea', price: 130 },
        { name: 'Iced Green Tea', price: 130 },
        { name: 'Iced Hibiscus Tea', price: 130 },
      ],
      icedLemonade: [
        { name: 'Iced Lemonade', price: 130 },
      ],
    },
    frappuccino: {
      coffee: [
        { name: 'Coffee Frappuccino', price: 145 },
        { name: 'Caramel Frappuccino', price: 185 },
        { name: 'Mocha Frappuccino', price: 165 },
        { name: 'Java Chip Frappuccino', price: 170 },
      ],
      cream: [
        { name: 'Vanilla Cream Frappuccino', price: 170 },
        { name: 'Green Tea Cream Frappuccino', price: 170 },
      ],
      special: [
        { name: 'White Chocolate Mocha Frappuccino', price: 170 },
        { name: 'Strawberries & Creme Frappuccino', price: 170 },
      ],
    },
    seasonal: {
      pumpkinSpice: [
        { name: 'Pumpkin Spice Latte', price: 185 },
        { name: 'Pumpkin Spice Frappuccino', price: 185 },
      ],
      duoCocoaMocha: [
        { name: 'Duo Cocoa Mocha', price: 185 },
        { name: 'Duo Cocoa Mocha Frappuccino', price: 185 },
      ],
      coconutBarfi: [
        { name: 'White Mocha Coconut Barfi Latte', price: 185 },
        { name: 'White Mocha Coconut Barfi Frappuccino', price: 185 },
      ],
    },
  },
  food: {
    bakery: [
      { name: 'Butter Croissant', price: 125 },
      { name: 'Chocolate Croissant', price: 125 },
      { name: 'Almond Butterscotch Cookie', price: 125 },
      { name: 'Double Chocolate Chip Cookie', price: 125 },
      { name: 'Chilli Cheese Toast', price: 125 },
      { name: 'Creamy Spinach & Corn Pocket', price: 125 },
      { name: 'Chicken Seekh Pocket', price: 125 },
      { name: 'Blueberry Muffin', price: 125 },
      { name: 'Lemon Loaf Cake', price: 125 },
      { name: 'Banana Chocolate Loaf Cake', price: 125 },
    ],
    sandwiches: [
      { name: 'Tandoori Chicken Panini', price: 185 },
      { name: 'Spiced Cottage Cheese Focaccia', price: 185 },
      { name: 'Herbed Chicken Focaccia', price: 185 },
    ],
    snacks: [
      { name: 'Hazelnut Triangle', price: 160 },
      { name: 'Chicken Puffin', price: 160 },
      { name: 'Chocolate Éclair', price: 160 },
    ],
    beverages: [
      { name: 'Picco Filter Coffee', price: 185 },
      { name: 'Picco Cappuccino', price: 185 },
      { name: 'Picco Latte', price: 185 },
      { name: 'Picco Signature Hot Chocolate', price: 185 },
      { name: 'Picco Cardamom Chai', price: 185 },
    ],
  },
  merchandise: [
    { name: 'Starbucks Espresso Roast (Ground)', sizes: ['250g', '500g'], price: [500, 950] },
    { name: 'Starbucks Pike Place Roast (Ground)', sizes: ['250g', '500g'], price: [450, 850] },
    { name: 'Starbucks Blonde Roast (Ground)', sizes: ['250g', '500g'], price: [480, 900] },
    { name: 'Starbucks Veranda Blend (Ground)', sizes: ['250g', '500g'], price: [490, 920] },
    { name: 'Starbucks Caramel Syrup', sizes: ['250ml', '500ml'], price: [400, 750] },
    { name: 'Starbucks Vanilla Syrup', sizes: ['250ml', '500ml'], price: [400,750]}
  ]
}
 
