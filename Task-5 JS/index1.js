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
    name: 'Помидор',
    url: './assets/image/Tomato.png',
    description: 'Свежий, укусный, спелый. ВАЙ ВАЙ ВАЙ',
    price: '25',
    quantity: '1',
    piece: 'кг',
  },
  {
    name: 'Огірок',
    url: './assets/image/Сucumber.png',
    description: 'Покупайте, а то дам под дых!',
    price: '15', 
    quantity: '1',
    piece: 'кг',
  },
  {
    name: 'Картопля',
    url: './assets/image/Potato.png',
    description: 'Бялорусский Наркотик',
    price: '50', 
    quantity: '1',
    piece: 'кг',
  },
  {
    name: 'Свекла',
    url: './assets/image/Beetroot.png',
    description: 'Як в СССР збирали',
    price: '12', 
    quantity: '1',
    piece: 'кг',
  },
  {
    name: 'Сасисачки',
    url: './assets/image/Sasiska.png',
    description: 'Хат Дог стайл',
    price: '25', 
    quantity: '1',
    piece: 'штук',
  },
  {
    name: 'Каклетка',
    url: './assets/image/Katleta.png',
    description: 'Пюрешка без каклетки не катит',
    price: '30', 
    quantity: '1',
    piece: 'штук',
  }
];

let names = products.map(x => x.name);
const select = document.getElementById('js-select');
let productNumber = products.length;
let description = products.map(x => x.description);
let piece = products.map(x => x.piece);
let prices = products.map(x => x.price);
let url = products.map(x => x.url);

const addOption = () => {  
  for (let i = 0; i < productNumber; i++) {
    let option = document.createElement('option');
    option.setAttribute('value', names[i])
    option.setAttribute('id', 'js-option' + i)
    option.innerHTML = names[i];
    select.append(option)
  }
};

addOption()

const adminShow = document.getElementById('js-sum');
adminShow.addEventListener('click', () => {
      const admin = document.getElementById('js-admin');
      admin.classList.toggle('e-task__delete-block--display-none');
    })

const addProduct = (e) => {  
  const addBtn = document.getElementById('js-add-btn');
  addBtn.addEventListener('click', () => {
    productNumber =(products.length - 1) + 1;

    const name = document.getElementById('js-input1-0');
    const url = document.getElementById('js-input1-1');
    const description = document.getElementById('js-input1-2');
    const price = document.getElementById('js-input1-3');
    const quantity = document.getElementById('js-input1-4');
    const piece = document.getElementById('js-input1-5');
    let newProduct = new product(name.value, url.value, description.value, price.value, quantity.value, piece.value);
    products.push(newProduct);
    let option = document.createElement('option');
    option.setAttribute('value', name.value);
    option.setAttribute('id', 'js-option' + productNumber);
    option.innerHTML = name.value;
    select.append(option);
    
    const showName = document.createElement("span");
    showName.innerHTML = name.value;

    const newDiv = document.createElement("div");
    newDiv.classList.add('e-photo__item');
    newDiv.setAttribute('id', 'js-item' + productNumber)

    const imgFront = document.createElement("img");
    imgFront.src = url.value || './assets/image/Placeholder.png';
    imgFront.classList.add("e-photo__item__front");

    const containerRear = document.createElement("div");
    containerRear.classList.add("e-photo__item__rear");

    const textContent = document.createElement("div");
    textContent.classList.add("e-photo__item__calc");

    const calcDescription = document.createElement("span");
    calcDescription.innerHTML = 'Описание: ' + description.value;

    const input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.placeholder = piece.value; 
    input.setAttribute('id', 'js-quantity' + productNumber)

    const calcBtn = document.createElement("button");
    calcBtn.insertAdjacentHTML('afterbegin', '<span>Рассчитать</span>');
    calcBtn.addEventListener('click', () => {
      const bucketName = products.map(x => x.name)[productNumber];
      const bucketPrice = products.map(x => x.price)[productNumber];
      const valueInput = +input.value;
      const sum = bucketPrice * valueInput;
      let newbuyingCount = new bucketItem (bucketName, +bucketPrice, valueInput, sum);

      if (localStorage.length > 0) {
        let localBucket = JSON.parse(localStorage.getItem('product'));
        prod = localBucket.find(prod => prod.name === bucketName);
        idexOf = localBucket.indexOf(prod);
        if (!prod) { 
          let localBucket = JSON.parse(localStorage.getItem('product'));
          localBucket.push(newbuyingCount); 
          localStorage.setItem('product', JSON.stringify(localBucket));
          checkInfo.innerHTML = '';
          localBucket = JSON.parse(localStorage.getItem('product'));
          bucketValue = 0;
          createBucket(localBucket);
        }
        else {
          prod.quantity += valueInput;
          prod.sum += sum;
          checkInfo.innerHTML = '';
          localStorage.setItem('product', JSON.stringify(localBucket));
          localBucket = JSON.parse(localStorage.getItem('product'));
          bucketValue = 0;
          createBucket(localBucket);
        }
        }
      else if (localStorage.length === 0 && bucket.length === 0) {
        bucket.push(newbuyingCount);
        localStorage.setItem('product', JSON.stringify(bucket));
        let localBucket = JSON.parse(localStorage.getItem('product'));
        localStorage.setItem('product', JSON.stringify(localBucket));
        checkInfo.innerHTML = '';
        localBucket = JSON.parse(localStorage.getItem('product'));
        bucketValue = 0;
        createBucket(localBucket);
    }
    });

    const showPrice = document.createElement("span");
    showPrice.insertAdjacentText('afterbegin', 'Цена: ' + price.value + ' грн/' + piece.value);
      
    document.body.append(productItem);
    productItem.append(newDiv);
    newDiv.append(showName);
    newDiv.append(imgFront);
    newDiv.append(containerRear);
    newDiv.append(textContent);
    textContent.append(showPrice);
    textContent.append(calcDescription);
    textContent.append(input);
    textContent.append(calcBtn);
    })
};

  addProduct();

const clearProduct = (e) => {
    const clearBtn = document.getElementById('js-clear-btn');
    clearBtn.addEventListener('click', () => {
    let selectElem = document.getElementById('js-select');

    selectElem.addEventListener('change', selectIndex = () => {
      let index = selectElem.selectedIndex;
      return index;
    })
      let delItem = document.getElementById('js-item' + selectIndex());
      delItem.parentElement.removeChild(delItem);

      products.splice(selectIndex(),1);
      let delSelect = document.getElementById('js-option' + selectIndex());
      delSelect.parentElement.removeChild(delSelect);
    })

};
  clearProduct();



