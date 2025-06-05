// starbucksDrinks.js

const starbucksDrinks = {
  espresso: {
    hot: [
      {
        name: "Espresso",
        description: "Rich and intense shot of coffee",
        price: 2.45,
        image: "https://example.com/images/espresso.jpg"
      },
      {
        name: "Caffè Americano",
        description: "Espresso shots topped with hot water",
        price: 3.25,
        image: "https://example.com/images/caffe_americano.jpg"
      }
    ],
    cold: [
      {
        name: "Iced Espresso",
        description: "Chilled bold espresso over ice",
        price: 3.15,
        image: "https://example.com/images/iced_espresso.jpg"
      }
    ],
    milkshake: [],
    black: [
      {
        name: "Ristretto",
        description: "Short shot of a more concentrated espresso",
        price: 2.95,
        image: "https://example.com/images/ristretto.jpg"
      }
    ],
    caffineFree: []
  },

  frappuccinoBlendedBeverages: {
    blended: [
      {
        name: "Caramel Frappuccino",
        description: "Coffee blended with caramel syrup, milk and ice",
        price: 4.95,
        image: "https://example.com/images/caramel_frappuccino.jpg"
      },
      {
        name: "Mocha Frappuccino",
        description: "Coffee, milk, and mocha flavor blended with ice",
        price: 5.25,
        image: "https://example.com/images/mocha_frappuccino.jpg"
      }
    ],
    cream: [
      {
        name: "Vanilla Bean Crème Frappuccino",
        description: "Vanilla bean blended with milk and ice",
        price: 4.95,
        image: "https://example.com/images/vanilla_bean_frappuccino.jpg"
      }
    ],
    caffineFree: [
      {
        name: "Strawberries & Crème Frappuccino",
        description: "Blended strawberries with milk and ice",
        price: 4.85,
        image: "https://example.com/images/strawberries_creme_frappuccino.jpg"
      }
    ]
  },

  otherBeverages: {
    juice: [
      {
        name: "Orange Juice",
        description: "100% pure orange juice",
        price: 3.25,
        image: "https://example.com/images/orange_juice.jpg"
      }
    ],
    milkshake: [
      {
        name: "Chocolate Milkshake",
        description: "Creamy blend of milk, chocolate and ice",
        price: 4.55,
        image: "https://example.com/images/chocolate_milkshake.jpg"
      }
    ],
    cream: [],
    caffineFree: []
  },

  brewedCoffee: {
    hot: [
      {
        name: "Pike Place Roast",
        description: "Smooth, well-rounded blend of Latin American coffees",
        price: 2.95,
        image: "https://example.com/images/pike_place_roast.jpg"
      }
    ],
    cold: [
      {
        name: "Iced Coffee",
        description: "Freshly brewed Starbucks coffee served chilled",
        price: 3.45,
        image: "https://example.com/images/iced_coffee.jpg"
      }
    ],
    black: [],
    cream: [],
    caffineFree: []
  },

  tea: {
    hot: [
      {
        name: "Chai Tea",
        description: "Black tea infused with cinnamon, clove and other warming spices",
        price: 2.85,
        image: "https://example.com/images/chai_tea.jpg"
      }
    ],
    cold: [
      {
        name: "Iced Green Tea",
        description: "Refreshing iced green tea with a hint of mint",
        price: 3.45,
        image: "https://example.com/images/iced_green_tea.jpg"
      }
    ],
    milkshake: [],
    black: [
      {
        name: "Earl Grey Tea",
        description: "Classic black tea with notes of bergamot",
        price: 2.65,
        image: "https://example.com/images/earl_grey_tea.jpg"
      }
    ],
    caffineFree: [
      {
        name: "Mint Herbal Tea",
        description: "A caffeine-free blend of peppermint and spearmint",
        price: 2.55,
        image: "https://example.com/images/mint_herbal_tea.jpg"
      }
    ]
  },

  coldBrew: {
    cold: [
      {
        name: "Cold Brew Coffee",
        description: "Slow-steeped custom blend for a super-smooth taste",
        price: 4.25,
        image: "https://example.com/images/cold_brew_coffee.jpg"
      }
    ],
    nitro: [
      {
        name: "Nitro Cold Brew",
        description: "Infused with nitrogen for a naturally sweet flavor and velvety cream",
        price: 4.95,
        image: "https://example.com/images/nitro_cold_brew.jpg"
      }
    ],
    onTap: [
      {
        name: "Nitro Cold Brew on Tap",
        description: "Smooth and creamy nitrogen-infused cold brew",
        price: 5.15,
        image: "https://example.com/images/nitro_cold_brew_on_tap.jpg"
      }
    ],
    inCream: [],
    caffineFree: []
  }
};

// Export for use in other files
export default starbucksDrinks;
