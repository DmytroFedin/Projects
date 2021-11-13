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
bagFolder.addEventListener('click', () => {
  checkInfo.classList.toggle('bucket-active');
})
const textResult = document.createElement("span");
const checkInfo = document.createElement("ul");
checkInfo.classList.add('e-bucket__items')
checkInfo.setAttribute('id', 'js-bucket-select');
const itemLi = document.createElement('li');

bagFolder.append(check);
check.append(textResult);
check.append(checkInfo);
let bucketValue = 0;

let localBucket = JSON.parse(localStorage.getItem('product'));
textResult.innerHTML = bucketValue + ' грн';
const productItem = document.createElement("div");
productItem.classList.add('e-photo');

// const createProduct = () => {
//   for (let i = 0; i < productNumber; i++) {
//     const newDiv = document.createElement("div");
//     newDiv.classList.add('e-photo__item');
//     newDiv.setAttribute('id', 'js-item' + i);

//     const showName = document.createElement("span");
//     showName.innerHTML = names[i];

//     const imgFront = document.createElement("img");
//     imgFront.src = url[i];
//     imgFront.classList.add("e-photo__item__front");

//     const containerRear = document.createElement("div");
//     containerRear.classList.add("e-photo__item__rear");

//     const textContent = document.createElement("div");
//     textContent.classList.add("e-photo__item__calc");

//     const calcDescription = document.createElement("span");
//     calcDescription.innerHTML = 'Описание: ' + description[i];

//     const input = document.createElement("input");
//     input.setAttribute('type', 'text');
//     input.placeholder = piece[i]; 
//     input.setAttribute('id', 'js-quantity' + i);

//     const calcBtn = document.createElement("button");
//     calcBtn.insertAdjacentHTML('afterbegin', '<span>Рассчитать</span>');
//     calcBtn.addEventListener('click', () => {
//       const bucketName = names[i];
//       const bucketPrice = prices[i];
//       const valueInput = +input.value;
//       const sum = bucketPrice * valueInput;
//       let newbuyingCount = new bucketItem (bucketName, +bucketPrice, valueInput, sum);

//       if (localStorage.length > 0) {
//         let localBucket = JSON.parse(localStorage.getItem('product'));
//         prod = localBucket.find(prod => prod.name === bucketName);
//         idexOf = localBucket.indexOf(prod);
//         if (!prod) { 
//           let localBucket = JSON.parse(localStorage.getItem('product'));
//           localBucket.push(newbuyingCount); 
//           localStorage.setItem('product', JSON.stringify(localBucket));
//           checkInfo.innerHTML = '';
//           localBucket = JSON.parse(localStorage.getItem('product'));
//           bucketValue = 0;
//           createBucket(localBucket);
//         }
//         else {
//           prod.quantity += valueInput;
//           prod.sum += sum;
//           checkInfo.innerHTML = '';
//           localStorage.setItem('product', JSON.stringify(localBucket));
//           localBucket = JSON.parse(localStorage.getItem('product'));
//           bucketValue = 0;
//           createBucket(localBucket);
//         }
//         }
//       else if (localStorage.length === 0 && bucket.length === 0) {
//         bucket.push(newbuyingCount);
//         localStorage.setItem('product', JSON.stringify(bucket));
//         let localBucket = JSON.parse(localStorage.getItem('product'));
//         localStorage.setItem('product', JSON.stringify(localBucket));
//         checkInfo.innerHTML = '';
//         localBucket = JSON.parse(localStorage.getItem('product'));
//         bucketValue = 0;
//         createBucket(localBucket);
//     }
//     });
  
//     const showPrice = document.createElement("span");
//     showPrice.insertAdjacentText('afterbegin', 'Цена: ' + prices[i] + ' грн/' + piece[i]);

//     document.body.append(productItem);
//     productItem.append(newDiv);
//     newDiv.append(showName);
//     newDiv.append(imgFront);
//     newDiv.append(containerRear);
//     newDiv.append(textContent);
//     textContent.append(showPrice);
//     textContent.append(calcDescription);
//     textContent.append(input);
//     textContent.append(calcBtn);
//   }
// };

// createProduct()


// const createBucket = (localBucket) => {
//   localBucket.forEach(element => {
//     const itemLi = document.createElement('li');
//     checkInfo.append(itemLi);
//     bucketValue += element.sum;
//     textResult.innerHTML = bucketValue + ' грн';
//     itemLi.innerHTML = 'Продукт: ' + element.name + ', Цена: ' + element.price + ', Количество: ' + element.quantity + ', Сумма: ' + element.sum;
//     const bucketDel = document.createElement('button');
//     itemLi.append(bucketDel);
//     bucketDel.setAttribute('id', 'js-bucket-del');
//     bucketDel.innerHTML = 'Удалить';

//     bucketDel.addEventListener('click', () => {
//       localBucket = JSON.parse(localStorage.getItem('product'));
//       index = localBucket.indexOf(localBucket.find(prod => prod.name === element.name));
//       localBucket.splice(index, 1);
//       localStorage.setItem('product', JSON.stringify(localBucket));
//       checkInfo.innerHTML = '';
//       localBucket = JSON.parse(localStorage.getItem('product'));
//       bucketValue = 0;
//       textResult.innerHTML = bucketValue + ' грн';
//       createBucket(localBucket);
//     })
//     });
// }
// if (localStorage.length > 0) {
//   createBucket(localBucket);
// }