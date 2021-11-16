
// Burger menu
const headerNav = document.getElementsByClassName('c-header__navigation')[0];
const burgerMenu = document.querySelector(".e-burger-menu");
const navMenuLeft = document.getElementsByClassName("c-navigation__list")[0];
const navMenuRight = document.getElementsByClassName("c-navigation__list")[1];
const navLink = document.querySelectorAll(".e-link");
const navBurger = document.createElement('div');
const leftMenuItems = navMenuLeft.cloneNode(true);
const rightMenuItems = navMenuRight.cloneNode(true);
const burgerMenuContent = document.createElement('ul');
burgerMenuContent.classList.add('c-navigation__list');
burgerMenuContent.classList.add('pos-left');
headerNav.append(burgerMenuContent);
burgerMenuContent.append(leftMenuItems.children[0]);
burgerMenuContent.append(leftMenuItems.children[0]);
burgerMenuContent.append(leftMenuItems.children[0]);
burgerMenuContent.append(rightMenuItems.children[0]);
burgerMenuContent.append(rightMenuItems.children[0]);
for (let i = 0; i < burgerMenuContent.children.length; i++) {
  burgerMenuContent.children[i].classList.add('burger-item')
}

function mobileMenu() {
  burgerMenu.classList.toggle("active");
  burgerMenuContent.classList.toggle("active");
}

function closeMenu() {
  burgerMenu.classList.remove("active");
  navBurger.classList.remove("active");
}

burgerMenu.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

  const tabOpenEveryday = document.getElementById('js-favorites-tab-everyday');
  tabOpenEveryday.addEventListener('click', () => {
      openTab('Everyday');
  })
  const tabOpenRunning = document.getElementById('js-favorites-tab-running');
  tabOpenRunning.addEventListener('click', () => {
      openTab('Running');
  })
  const tabOpenTravel = document.getElementById('js-favorites-tab-travel');
  tabOpenTravel.addEventListener('click', () => {
      openTab('Travel');
  })
  
function openTab(tabName) {
  let  i, tabContent;

  tabContent = document.getElementsByClassName("c-section-favorites__cards__wrapper");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  setTimeout(() => {
    document.getElementById(tabName).style.display = "flex";  
  });
} 

var tabs = document.getElementsByClassName('tab');

Array.prototype.forEach.call(tabs, function(tab) {
	tab.addEventListener('click', setActiveClass);
});

function setActiveClass(evt) {
	Array.prototype.forEach.call(tabs, function(tab) {
		tab.classList.remove('active');
	});
	evt.currentTarget.classList.add('active');
}
// initMap() - функция инициализации карты
function initMap() {

	directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});

	var centerLatLng = new google.maps.LatLng(42.71280220829883,-72.48053364687703);

	var point = new google.maps.LatLng(42.71280220829883, -72.48053364687703);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 15               // Зум по умолчанию. Возможные значения от 0 до 21
	};

	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	// Кастомный маркер
	const svgMarker = {
    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: "blue",
    fillOpacity: 0.6,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  new google.maps.Marker({
    position: map.getCenter(),
    icon: svgMarker,
    map: map,
  });
}

const swiperWrapper = document.getElementsByClassName('slider-2')[0];
swiperWrapper.innerHTML = '';

const createProduct = () => {
  for (let i = 0; i < productNumber; i++) {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');
    const swiperSlideImage = document.createElement('div');
    swiperSlideImage.classList.add('c-slider__slide__image');
    const slideImage = document.createElement('img');
    slideImage.setAttribute('alt', 'Sneakers');
    slideImage.src = url[i];
    const swiperSlideProfile = document.createElement('div');
    swiperSlideProfile.classList.add('c-slider__slide__profile');
    const swiperSlideInfo = document.createElement('div');
    swiperSlideInfo.classList.add('c-slider__slide__info');
    const slideHeader = document.createElement('span');
    slideHeader.classList.add('c-slider__slide__header');
    slideHeader.innerHTML = names[i];
    const SlideDescription = document.createElement('span');
    SlideDescription.classList.add('c-slider__slide__description');
    SlideDescription.innerHTML = description[i] + '<br/>' + prices[i] + 'грн';
    const swiperSlideBuy = document.createElement('div');
    swiperSlideBuy.classList.add('c-slider__slide__buy');
    const slideBuyBtn = document.createElement('button');
    slideBuyBtn.classList.add('c-slider__slide__btn');
    const slideBtnText = document.createElement('span');
    slideBtnText.classList.add('c-slider__btn__text');

    swiperWrapper.append(swiperSlide);
    swiperSlide.append(swiperSlideImage);
    swiperSlideImage.append(slideImage);
    swiperSlide.append(swiperSlideProfile);
    swiperSlideProfile.append(swiperSlideInfo);
    swiperSlideInfo.append(slideHeader);
    swiperSlideInfo.append(SlideDescription);
    swiperSlideProfile.append(swiperSlideBuy);
    swiperSlideBuy.append(slideBuyBtn);
    slideBuyBtn.append(slideBtnText);

    slideBtnText.insertAdjacentHTML('afterbegin', 'Buy');
    slideBuyBtn.addEventListener('click', () => {
      const bucketName = names[i];
      const bucketPrice = prices[i];
      const valueInput = 1;
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
          bucketQuantity = 0;
          createBucket(localBucket);
        }

        else {
          prod.quantity += valueInput;
          prod.sum += sum;
          checkInfo.innerHTML = '';
          localStorage.setItem('product', JSON.stringify(localBucket));
          localBucket = JSON.parse(localStorage.getItem('product'));
          bucketValue = 0;
          bucketQuantity = 0;
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
        bucketQuantity = 0;
        createBucket(localBucket);
    }
    });
  }
};


createProduct();

const createBucket = (localBucket) => {
  localBucket.forEach(element => {
    const itemLi = document.createElement('li');
    const textLi = document.createElement('span');
    textLi.style.width = '70%';
    checkInfo.append(itemLi);
    itemLi.append(textLi);
    bucketValue += element.sum;
    bucketQuantity +=element.quantity;
    textResult.innerHTML = bucketQuantity;
    textLi.innerHTML = 'Продукт: ' + element.name + ', Цена: ' + element.price + ', Количество: ' + element.quantity + ', Сумма: ' + element.sum;
    const bucketDel = document.createElement('button');
    itemLi.append(bucketDel);
    bucketDel.classList.add('e-bucket__del-btn');
    bucketDel.innerHTML = '<span>Удалить<span/>';
    if (localBucket.length === 0) {
      createOrder.innerHTML = 'Корзина пуста'
    }
    else {
      createOrder.innerHTML = ''
      createOrder.append(showPrice);
      createOrder.append(bucketBuyBtn);
      bucketBuyBtn.append(BuyBtnText);
      showPrice.innerHTML = '';
      showPrice.innerHTML = 'Цена: ' + bucketValue + ' грн';

    }
    

    bucketDel.addEventListener('click', () => {
      localBucket = JSON.parse(localStorage.getItem('product'));
      index = localBucket.indexOf(localBucket.find(prod => prod.name === element.name));
      localBucket.splice(index, 1);
      localStorage.setItem('product', JSON.stringify(localBucket));
      checkInfo.innerHTML = '';
      localBucket = JSON.parse(localStorage.getItem('product'));
      bucketValue = 0;
      bucketQuantity = 0;
      textResult.innerHTML = bucketQuantity;
      checkInfo.insertAdjacentElement('beforeend', createOrder);
      showPrice.innerHTML = '';
      showPrice.innerHTML = 'Цена: ' + bucketValue + ' грн';
      if (localBucket.length === 0) {
        createOrder.innerHTML = 'Корзина пуста'
      }
      createBucket(localBucket);
    })

    checkInfo.insertAdjacentElement('beforeend', createOrder);
    showPrice.innerHTML = '';
    showPrice.innerHTML = 'Цена: ' + bucketValue + ' грн';
    });
}

if (localStorage.length > 0) {
  createBucket(localBucket);
}

const slider = document.querySelectorAll('.swiper');

for(let i = 0; i < slider.length; i++){
  const prevBtn = document.getElementsByClassName('swiper-button-prev')[i];
  const nextBtn = document.getElementsByClassName('swiper-button-next')[i];
  slider[i].classList.add('c-swiper-' + i)
  const swiper = new Swiper('.c-swiper-'+ i, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 25,
    resizeObserver:false,
  
    // Navigation arrows
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },

    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    }
  })
};


const contactUs = document.getElementsByClassName('c-navigation__item')[10];
contactUs.setAttribute('data-hystmodal', "#js-contact");

const contactModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  fixedSelectors: '.c-header'
});

const sign = document.getElementsByClassName('c-navigation__item')[11];
sign.setAttribute('data-hystmodal', "#js-sign");

const signModal = new HystModal({
  linkAttributeName: "data-hystmodal",
});

bucketBuyBtn.setAttribute('data-hystmodal', "#js-order");

const orderModal = new HystModal({
  linkAttributeName: "data-hystmodal",
});