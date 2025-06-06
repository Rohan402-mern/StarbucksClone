const all_product={
   Bestseller:[
  {
    id: 1,
    type: 'veg-item',
    typeUrl: 'https://www.starbucks.in/assets/icon/veg.svg',
    imgUrl: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/105468.webp',
    fullimgUrl: 'https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/105468.webp',
    title: 'Cold coffee',
    content:[
        {img1:'https://starbucksstatic.cognizantorderserv.com/Icon/Dark/Milk.png',name:'MILK'}
    ],
    info: 'TALL(354 ml) .354 kcal',
    fullSummary: 'Everybody’s favourite indulgence. Crafted expertly with premium espresso, blended with milk, and perfected with a hint of vanilla in every sip.',
    summary: 'Everybody’s favourite indulgence. Crafted expertly with prem..',
    price: '₹ 336.00',
    iteminfo:'VEGETARIAN - 354 KCAL',
  },
  {
    id: 2,
    type: 'veg-item',
    typeUrl: 'https://www.starbucks.in/assets/icon/veg.svg',
    imgUrl: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100501.webp',
    fullimgUrl: 'https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/100501.webp',
    title: 'Java Chip Frappuccino',
    content:[
        {img1:'https://starbucksstatic.cognizantorderserv.com/Icon/Dark/Soy.png',name:'SOY'},
        {img1:'https://starbucksstatic.cognizantorderserv.com/Icon/Dark/Milk.png',name:'MILK'},
        {img1:'https://starbucksstatic.cognizantorderserv.com/Icon/Dark/Wheat.png',name:'WHEAT'},
    ],
    info: 'TALL(354 ml) .392 kcal',
    fullSummary: 'Mocha sauce and Frappuccino® chips blended with with Frappuccino® roast coffee and milk and ice, then topped with whipped vanilla topping and mocha drizzle to bring you endless java joy.',
    summary: 'Mocha sauce and Frappuccino® chips blended with with Frappu..',
    price: '₹ 409.50'
  },
  {
    id:3,
    type: 'veg-item',
    typeUrl:'https://www.starbucks.in/assets/icon/veg.svg',
    fullimgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Large/webP/100433.webp',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100433.webp',
    title: 'Caffe Americano',
    content:[
        {img1:'https://starbucksstatic.cognizantorderserv.com/Icon/Dark/Milk.png',name:'MILK'},
    ],
    info: 'SHORT(237 mL) .0 kcal',
    fullSummary: 'Rich in flavour, full-bodied espresso with hot water in true European style.',
    summary: 'Rich in flavour, full-bodied espresso with hot water in true..',
    price: '₹ 283.50'
  },
  { 
    id:4,
    type: 'veg-item',
    typeUrl:'https://www.starbucks.in/assets/icon/veg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100419.webp',
    title: 'Cappuccino',
    info: 'SHORT(237 ml) .104 kcal',
    summary: 'Dark, Rich in flavour espresso lies in wait under a smoothed..',
    price: '₹ 299.25'
  },
  { 
    id:5,
    type: 'non-veg',
    typeUrl:'https://www.starbucks.in/assets/icon/nonveg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/109270.webp',
    title: 'Butter Croissant',
    info: 'Per Serve (75 g) - 255 kcal',
    summary: '"A flaky and buttery French style pastry served with butter.',
    price: '₹ 288.75'
  },
  { 
    id:6,
    type: 'non-veg',
    typeUrl:'https://www.starbucks.in/assets/icon/nonveg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/101728_1.webp',
    title: 'Chicken Salad Sandwich',
    info: 'Per Serve (185 g )  - 574 kcal',
    summary: 'Tender chicken mixed with julienned colored bell peppers, gr..',
    price: '₹ 294.00'
  },
  { 
    id:7,
    type: 'veg-item',
    typeUrl:'https://www.starbucks.in/assets/icon/veg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/103515.webp',
    title: 'Double Chocolate Chip Frappuccino',
    info: 'TALL(354 ml) .415 kcal',
    summary: 'Rich mocha-flavored sauce meets up with chocolaty chips, mil..',
    price: '₹ 430.50'
  },
  { 
    id:8,
    type: 'non-veg',
    typeUrl:'https://www.starbucks.in/assets/icon/nonveg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/104362.webp',
    title: 'Egg White and Chicken In Multigrain Croiss',
    info: 'Per Serve (200 g)  - 541 kcal',
    summary: 'Fluffy egg white omlette and chicken ham sandwiched in multi..',
    price: '₹ 388.50'
  },
  { 
    id:9,
    type: 'veg-item',
    typeUrl:'https://www.starbucks.in/assets/icon/veg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100100_1.webp',
    title: 'Paneer Tikka Sandwich',
    info: 'Per Serve (185 g )  - 537 kcal',
    summary: 'Marinated tandoori paneer filling, sliced cheese, and whole ..',
    price: '₹ 294.00'
  },
  { 
    id:10,
    type: 'non-veg',
    typeUrl:'https://www.starbucks.in/assets/icon/nonveg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/107704.webp',
    title: 'New York Cheesecake',
    info: 'Per Serve (150 g)  - 485 kcal',
    summary: '"The Classic New York Cheese cake with a rich, creamy satiny..',
    price: '₹ 435.75'
  },
  { 
    id:11,
    type: 'non-veg',
    typeUrl:'https://www.starbucks.in/assets/icon/nonveg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/103689.webp',
    title: 'Banana Chocolate Loaf Cake',
    info: 'Per Serve (125 g) - 385 Kcal',
    summary: 'English tea cake with rich taste of banana and chocolate.',
    price: '₹ 346.50'
  },
  { 
    id:12,
    type: 'non-veg',
    typeUrl:'https://www.starbucks.in/assets/icon/nonveg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100075.webp',
    title: 'Blueberry Muffin',
    info: 'Per Serve (120 g)  - 375.5 kcal',
    summary: 'Buttery vanilla cake with berries dusted with granulated sug..',
    price: '₹ 330.75'
  }

   ],
Drinks:[
{
    id: 1,
    type: 'veg-item',
    typeUrl: 'https://www.starbucks.in/assets/icon/veg.svg',
    imgUrl: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/105468.webp',
    title: 'Cold coffee',
    info: 'TALL(354 ml) .354 kcal',
    summary: 'Everybody’s favourite indulgence. Crafted expertly with prem..',
    price: '₹ 336.00'
  },
  {
    id: 2,
    type: 'veg-item',
    typeUrl: 'https://www.starbucks.in/assets/icon/veg.svg',
    imgUrl: 'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100501.webp',
    title: 'Java Chip Frappuccino',
    info: 'TALL(354 ml) .392 kcal',
    summary: 'Mocha sauce and Frappuccino® chips blended with with Frappu..',
    price: '₹ 409.50'
  },
  { 
    id:7,
    type: 'veg-item',
    typeUrl:'https://www.starbucks.in/assets/icon/veg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/103515.webp',
    title: 'Double Chocolate Chip Frappuccino',
    info: 'TALL(354 ml) .415 kcal',
    summary: 'Rich mocha-flavored sauce meets up with chocolaty chips, mil..',
    price: '₹ 430.50'
  },
  { 
    id:8,
    type: 'non-veg',
    typeUrl:'https://www.starbucks.in/assets/icon/nonveg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/104362.webp',
    title: 'Egg White and Chicken In Multigrain Croiss',
    info: 'Per Serve (200 g)  - 541 kcal',
    summary: 'Fluffy egg white omlette and chicken ham sandwiched in multi..',
    price: '₹ 388.50'
  },
  { 
    id:9,
    type: 'veg-item',
    typeUrl:'https://www.starbucks.in/assets/icon/veg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100100_1.webp',
    title: 'Paneer Tikka Sandwich',
    info: 'Per Serve (185 g )  - 537 kcal',
    summary: 'Marinated tandoori paneer filling, sliced cheese, and whole ..',
    price: '₹ 294.00'
  },
  { 
    id:10,
    type: 'non-veg',
    typeUrl:'https://www.starbucks.in/assets/icon/nonveg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/107704.webp',
    title: 'New York Cheesecake',
    info: 'Per Serve (150 g)  - 485 kcal',
    summary: '"The Classic New York Cheese cake with a rich, creamy satiny..',
    price: '₹ 435.75'
  },
  { 
    id:11,
    type: 'non-veg',
    typeUrl:'https://www.starbucks.in/assets/icon/nonveg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/103689.webp',
    title: 'Banana Chocolate Loaf Cake',
    info: 'Per Serve (125 g) - 385 Kcal',
    summary: 'English tea cake with rich taste of banana and chocolate.',
    price: '₹ 346.50'
  },
  { 
    id:12,
    type: 'non-veg',
    typeUrl:'https://www.starbucks.in/assets/icon/nonveg.svg',
    imgUrl:'https://starbucksstatic.cognizantorderserv.com/Items/Small/webP/100075.webp',
    title: 'Blueberry Muffin',
    info: 'Per Serve (120 g)  - 375.5 kcal',
    summary: 'Buttery vanilla cake with berries dusted with granulated sug..',
    price: '₹ 330.75'
  }
]


}

export default all_product;
