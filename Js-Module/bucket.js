class bucketItem {
  constructor(name, price, quantity, sum) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.sum = sum;
  }
};

const bucket = [];
const navIcons = document.getElementsByClassName('c-navigation__list--always-on-display')[0];
const bagFolder = navIcons.children[2];
const bagIcon = bagFolder.children[0];
const check = document.createElement("div");
check.classList.add('e-bucket');
const slideBuyBtn = document.getElementsByClassName('c-slider__slide__btn');
const slideBtnText = document.getElementsByClassName('c-slider__btn__text');

const toggleMenu = function() {
  checkInfo.classList.toggle('bucket-active');
}

bagIcon.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleMenu();
});

const checkForBtn = (e) => {
  const target = e.target;
  for (let i = 0; i < product.length; i++) {
    const its_buyBtn = target == slideBuyBtn[i] || target == slideBtnText[i];
    if (its_buyBtn === true) {
      return its_buyBtn
    }
  }}

document.addEventListener('click', function(e) {
  const target = e.target;
  const its_checkInfo = target == checkInfo || checkInfo.contains(target);
  const its_bagFolder = target == bagFolder;
  const checkInfo_is_active = checkInfo.classList.contains('bucket-active');
  if (!its_checkInfo && !its_bagFolder && checkInfo_is_active && !checkForBtn(e)) {
    toggleMenu();
  }
});

const textResult = document.createElement("span");
textResult.classList.add('e-bucket__sum')
const checkInfo = document.createElement("ul");
checkInfo.classList.add('e-bucket__items');
checkInfo.setAttribute('id', 'js-bucket-select');
const itemLi = document.createElement('li');
const textLi = document.createElement('span');
const createOrder = document.createElement('div');
createOrder.classList.add('e-bucket__order');
const showPrice = document.createElement('span');
showPrice.classList.add('e-bucket__order__overall');
const bucketBuyBtn = document.createElement('a');
bucketBuyBtn.classList.add('e-bucket__order__buy-btn');
const BuyBtnText = document.createElement('span');
BuyBtnText.classList.add('e-bucket__buy-btn__text');
BuyBtnText.innerHTML = ('Оформить заказ')

bagFolder.append(check);
bagIcon.append(textResult);
check.append(checkInfo);
checkInfo.insertAdjacentElement('beforeend', createOrder);
createOrder.append(showPrice);
createOrder.append(bucketBuyBtn);
bucketBuyBtn.append(BuyBtnText);

let bucketValue = 0;
let bucketQuantity = 0;

let localBucket = JSON.parse(localStorage.getItem('product'));
textResult.innerHTML = bucketQuantity;
showPrice.innerHTML = '';
showPrice.innerHTML = 'Цена: ' + bucketValue + ' грн';

if (localBucket.length === 0) {
  createOrder.innerHTML = 'Корзина пуста'
}