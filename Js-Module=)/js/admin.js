class product {
  constructor(name, url, description, price, quantity, piece) {
    this.name = name;
    this.url = url;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.piece = piece;
  }
};
const products = [
  {
    name: 'Men\'s Trail Runner SBT',
    url: './assets/images/sneaker1.jpg',
    description: 'Classic Color, Natural Black',
    price: '250',
    quantity: '1',
    piece: 'quantity',
  },
  {
    name: 'Women\'s Trail Runner',
    url: './assets/images/sneaker2.jpg',
    description: 'Classic Color, Natural White',
    price: '450', 
    quantity: '1',
    piece: 'quantity',
  },
  {
    name: 'Men\'s Trail Runner SWT',
    url: './assets/images/sneaker3.jpg',
    description: 'Limited Edition Color, Diablo',
    price: '500', 
    quantity: '1',
    piece: 'quantity',
  },
  {
    name: 'Mined Flip-Flop',
    url: 'https://i.ytimg.com/vi/xqMrqpvGQTM/maxresdefault.jpg',
    description: 'Меня заминировали, епта',
    price: '69', 
    quantity: '1',
    piece: 'quantity',
  },
  {
    name: 'Red Moccasins',
    url: 'https://mylitta.ru/uploads/posts/2013-09/1380354256_red-moccasins-12.jpg',
    description: 'Армяни - это первые христиане',
    price: '666', 
    quantity: '1',
    piece: 'quantity',
  },
  {
    name: 'Pedalyatoru 3000',
    url: 'https://cloudstatic.eva.ru/eva/520000-530000/526792/channel/21985247_1870060459676340_6687751258012385280_n_40268413454260057.jpg',
    description: 'Вжух ---- и ты петух',
    price: '1', 
    quantity: '1',
    piece: 'quantity',
  }
];

let names = products.map(x => x.name);
const select = document.getElementById('js-select');
let productNumber = products.length;
let description = products.map(x => x.description);
let piece = products.map(x => x.piece);
let prices = products.map(x => x.price);
let url = products.map(x => x.url);
