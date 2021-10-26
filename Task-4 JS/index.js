
const Rsq8 = {
  engineType: 'Тип двигуна: 8-циліндровий V-подібний бензиновий двигун, Mild Hybrid Electric Vehicle (MHEV)',
  engineCapacity: 'Робочий об\'єм: 3996',
  maxCapacity: 'Макс. потужність, кВт (к.с.): 373 (507)/5500',
  maxSpin: 'Макс. крутний момент, Нм/хв: 770/2000-4000',
  transmissionType: 'Тип приводу: Постійний повний привод quattro',
  gearBox: 'Коробка передач: 8-ступінчатий tiptronic',
  msxSpeed: 'Максимальна швидкість: 250',
  acceleration: 'Динаміка від 0-100 км/год, с.: 4,1',
  fuelType: 'Вид пального: Бензин',
  fuelConsumption: 'Витрата пального в змішаному циклі, л/100 км: 12',
  fuelCapacity: 'Ємність/ Об\'єм баку: 85',
};

let avrSpeed = '150';

const newDiv = document.createElement("div");
newDiv.classList.add('e-photo');

const imgFront = document.createElement("img");
imgFront.src = "./assets/image/maxresdefault.jpg";
imgFront.classList.add("e-photo__front");

const containerRear = document.createElement("div");
containerRear.classList.add("e-photo__rear");

const imgRear = document.createElement("img");
imgRear.src = "./assets/image/Rsq8-rear.jpg";
imgRear.classList.add("e-photo__rear__image");

const textRear = document.createElement("div"); 
textRear.classList.add("e-photo__rear__text");

const textContent = document.createElement("div");
textContent.classList.add("e-photo__calc");

const toggleBtn = document.createElement("button");
toggleBtn.classList.add("e-photo__toggle-btn");
toggleBtn.addEventListener('click', () => {
  textRear.classList.toggle( 'display');
  imgFront.classList.toggle('activeFront');
  imgRear.classList.toggle('activeRear');
  });

const calcDescription = document.createElement("span");
calcDescription.innerHTML = "Введите количество км (средняя скорость - " + avrSpeed + ' km/hour)';
calcDescription.style.color = 'black';

const input = document.createElement("input");
input.setAttribute('type', 'text');

const calcBtn = document.createElement("button");
calcBtn.insertAdjacentHTML('afterbegin', '<span>Рассчитать</span>');
calcBtn.addEventListener('click', () => {
calcTime();
});

const btnText = document.createElement("span");
btnText.insertAdjacentText('afterbegin', 'Показать характеристики');
  
const textResult = document.createElement("span");
textResult.style.color = 'black';


document.body.append(newDiv);
newDiv.append(imgFront);
newDiv.append(containerRear);
containerRear.append(imgRear);
containerRear.append(textRear);
newDiv.append(textContent);
textContent.append(toggleBtn);
toggleBtn.append(btnText);
textContent.append(calcDescription);
textContent.append(input);
textContent.append(calcBtn);
textContent.append(textResult)


Object.values(Rsq8).forEach(item => {
  textRear.append(item);
  textRear.innerHTML += '<br>'
})

function calcTime () {
  let travelTime;
  let restTime;
  travelTime = input.value / avrSpeed;
  restTime = travelTime / 4 ;
  if (restTime >= 1) {
    travelTime +=  Math.trunc(restTime);
  }
  if (isFinite(travelTime)) {
  textResult.innerHTML = 'Вы приедете через - ' + `${travelTime.toPrecision(2)}` + ' hours,' + 'в том числе потратите -' + `${Math.trunc(restTime)}` + ' hours на отдых';
}
  else textResult.innerHTML = 'Не верный формат километража'
}

    
    

  


  
