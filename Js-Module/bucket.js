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
const check = document.createElement("div");
check.classList.add('e-bucket');

const toggleMenu = function() {
  checkInfo.classList.toggle('bucket-active');
}

bagFolder.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', function(e) {
  const target = e.target;
  const its_checkInfo = target == checkInfo || checkInfo.contains(target);
  const its_bagFolder = target == bagFolder;
  const checkInfo_is_active = checkInfo.classList.contains('bucket-active');
  
  if (!its_checkInfo && !its_bagFolder && checkInfo_is_active) {
    toggleMenu();
  }
});

const textResult = document.createElement("span");
const checkInfo = document.createElement("ul");
checkInfo.classList.add('e-bucket__items');
checkInfo.setAttribute('id', 'js-bucket-select');
const itemLi = document.createElement('li');
const showPrice = document.createElement('div');
showPrice.classList.add('e-bucket__overall');

bagFolder.append(check);
check.append(textResult);
check.append(checkInfo);
checkInfo.insertAdjacentElement('beforeend', showPrice);

let bucketValue = 0;
let bucketQuantity = 0;

let localBucket = JSON.parse(localStorage.getItem('product'));
textResult.innerHTML = bucketQuantity;
showPrice.innerHTML = '';
showPrice.innerHTML = 'Цена: ' + bucketValue + ' грн';
const productItem = document.createElement("div");
productItem.classList.add('e-photo');