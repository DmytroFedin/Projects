
  let toSeconds;
  let compareNumb1;
  let compareNumb2;
  let checkFactorial;
  let addNumberOne;
  let addNumberTwo;
  let addNumberThree;
  let calcNumberOne;
  let calcNumberTwo;
  let checkNumber;
  let minNumber;
  let maxNumber;
  let hours;
  let minutes;
  let seconds;

  func = {
    task1: () => {
      compareNumb (+compareNumb1, +compareNumb2);
    },
    task2: () => {
      factor (+checkFactorial);
    },
    task3: () => {
      addToString (addNumberOne, addNumberTwo, addNumberThree);
    },
    task4: () => {
      sqrCalc (+calcNumberOne, +calcNumberTwo);
    },
    task5: () => {
      isPerfect(+checkNumber);
    },
    task6: () => {
      checkPerfect(minNumber, maxNumber);
    },
    task7: () => {
     showTime (hours, minutes, seconds);
    },
    task8: () => {
      let hours = +prompt('Сколько часов ');
      let minutes = +prompt('Сколько минут');
      let seconds = +prompt('Сколько секунд');
      let newSeconds = 0;

      return newSeconds = ((hours * 3600) + (minutes * 60) + seconds);
    },
    task9: () => {
      toSec(+toSeconds);
    },
    task10: () => {
      const arrDays = [func.task8(), func.task8()];
      let result = arrDays[0] - arrDays[1];
      return toSec((Math.abs(result)));
    },
  }

const execute = (e) => {
  const quantity = 10
  for (let i = 1; i <= quantity; i++) {
    const item = document.getElementById('js-task' + i);
    item.addEventListener('click', () => {
      toSeconds = document.getElementById('js-input9-1').value;
      compareNumb1 = document.getElementById('js-input1-1').value;
      compareNumb2 = document.getElementById('js-input1-2').value;
      checkFactorial = document.getElementById('js-input2-1').value;
      addNumberOne = document.getElementById('js-input3-1').value;
      addNumberTwo = document.getElementById('js-input3-2').value;
      addNumberThree = document.getElementById('js-input3-3').value;
      calcNumberOne = document.getElementById('js-input4-1').value;
      calcNumberTwo = document.getElementById('js-input4-2').value;
      checkNumber = document.getElementById('js-input5-1').value;
      minNumber = document.getElementById('js-input6-1').value;
      maxNumber = document.getElementById('js-input6-2').value;
      hours = document.getElementById('js-input7-1').value;
      minutes = document.getElementById('js-input7-2').value;
      seconds = document.getElementById('js-input7-3').value;
      func['task' + i]();
    })
  }
  }

  execute();

  (function() {
    const elements = document.getElementsByClassName('e-task__btn');

    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener('mouseenter', e => { 
        e.target.classList.remove('hover-teal');
        e.target.classList.add('hover-white');
      });
      elements[i].addEventListener('mouseleave', e => { 
        e.target.classList.remove('hover-white');
        e.target.classList.add('hover-teal');
      });
    }
   
  })();
  
function compareNumb (compareNumb1, compareNumb2) {
  if (compareNumb1 < compareNumb2) {
    return console.log('-1')
  }
  else if(compareNumb1 > compareNumb2) {
    return console.log('1') 
  }
  else if(compareNumb1 === compareNumb2) {
    return console.log('0') 
  }
}

function factor (checkFactorial) {
  let factorial = 1
  
  for (let i = 1; checkFactorial >= i; i++) {
    factorial *=  i
  }
  return console.log(factorial);
}

function addToString (addNumberOne, addNumberTwo, addNumberThree) {
  newNumb = addNumberOne + addNumberTwo + addNumberThree;
  return console.log(newNumb)
}

function sqrCalc (calcNumberOne, calcNumberTwo) {
  if (calcNumberOne === 0 || calcNumberOne === null) {
  sqr = calcNumberTwo*calcNumberTwo;
  }
  else if (calcNumberTwo === 0 || calcNumberTwo === null) {
    sqr = calcNumberOne*calcNumberOne;
  }
  else  sqr = calcNumberOne*calcNumberTwo;
  if (isFinite(calcNumberOne) && isFinite(calcNumberTwo)){
    return console.log(sqr);
  }
  else {
    alert('numbers dumbass o_0')
  }
}

function isPerfect(checkNumber) {
  let sum = 0;
  let answer

  if (isFinite(checkNumber)) {
    for (let i = 0; checkNumber >= i; i++) {
      if (checkNumber % i === 0 && checkNumber === (sum += i)) {
        answer = 'Yes';
        break;
     }
     else answer = 'No';
   } 
  }
    else answer = 'Nice try';
return console.log(answer)
}

function checkPerfect(minNumber, maxNumber) {
  let answer = [];

  if (isFinite(minNumber) && isFinite(maxNumber)) {
    for (let i = minNumber; maxNumber > i; i++) {
      let sum = 0;
      for (let j = 1; i > j; j++) {
        if (i % j === 0 && i === (sum += j)) {
          answer.push(j*2);
      }
    }}
  }
    else answer = 'Nice try';
  return console.log(answer);
}

function showTime () {
    let days = 0;
    let years = 0;

      for (let i = 0; i < 3; i++) {
          if (hours === null || hours === 0) {
            hours = '00';
          }
          else if (minutes === null || minutes === 0) {
            minutes = '00';
          }
          else if (seconds === null || seconds === 0) {
            seconds = '00';
          }
          else if (seconds >= 60) {
            addMinutes = seconds / 60;
            seconds %= 60;
            minutes += Math.trunc(addMinutes);
          }
          else if (minutes >= 60) {
            addHours = minutes / 60;
            minutes %= 60;
            hours += Math.trunc(addHours);
          }
          else if (hours >= 24) {
            addDays = hours / 24;
            hours %= 24;
            days += Math.trunc(addDays);
            }
          else if (days > 365) {
            years = days / 365;
            days %= 365;
          }
          }
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (isFinite(hours) && isFinite(minutes) && isFinite(seconds)) {
      console.log('+'+ Math.trunc(years) + ' ' + 'years' + ' ' + Math.trunc(days) + ' ' + 'days'  + ': ' + hours + ':' + minutes + ':' + seconds);
    }
    else return console.log('Thats not a date');
  }

function toSec(seconds) {
  let minutes = 0;
    let hours = 0;
    let days = 0;
    let years = 0;

    for (let i = 0; i < 3; i++) {
        if (seconds >= 60) {
        addMinutes = seconds / 60;
        seconds %= 60;
        minutes += Math.trunc(addMinutes);
      }
      else if (minutes >= 60) {
        addHours = minutes / 60;
        minutes %= 60;
        hours += Math.trunc(addHours);
      }
      else if (hours >= 24) {
          addDays = hours / 24;
          hours %= 24;
          days += Math.trunc(addDays);
        }
      else if (days > 365) {
        years = days / 365;
        days %= 365;
      }
      }
            
      return console.log('+'+ Math.trunc(years) + ' ' + 'years' + ' ' + Math.trunc(days) + ' ' + 'days'  + ': ' + hours + ':' + minutes + ':' + seconds);
  }
  
  