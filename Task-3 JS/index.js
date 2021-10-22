
  let fromSeconds;
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
  let showHours;
  let showMinutes;
  let showSeconds;
  let hoursToSec;
  let minutesToSec;
  let secondsToSec;
  let compareHour1;
  let compareMinute1;
  let compareSeconds1;
  let compareHour2;
  let compareMinute2;
  let compareSeconds2;

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
      checkPerfect(+minNumber, +maxNumber);
    },
    task7: () => {
     showTime (+showHours, +showMinutes, +showSeconds);
    },
    task8: () => {
      console.log(toSec (+hoursToSec, +minutesToSec, +secondsToSec));
    },
    task9: () => {
      fromSec(+fromSeconds);
    },
    task10: () => {
      calcDiffDate (+compareHour1, +compareMinute1, +compareSeconds1, +compareHour2, +compareMinute2, +compareSeconds2)
    },
  }

const execute = (e) => {
  const quantity = 10
  for (let i = 1; i <= quantity; i++) {
    const item = document.getElementById('js-task' + i);
    item.addEventListener('click', () => {
      compareNumb1 = document.getElementById('js-input1-0').value;
      compareNumb2 = document.getElementById('js-input1-1').value;
      checkFactorial = document.getElementById('js-input2-0').value;
      addNumberOne = document.getElementById('js-input3-0').value;
      addNumberTwo = document.getElementById('js-input3-1').value;
      addNumberThree = document.getElementById('js-input3-2').value;
      calcNumberOne = document.getElementById('js-input4-0').value;
      calcNumberTwo = document.getElementById('js-input4-1').value;
      checkNumber = document.getElementById('js-input5-0').value;
      minNumber = document.getElementById('js-input6-0').value;
      maxNumber = document.getElementById('js-input6-1').value;
      showHours = document.getElementById('js-input7-0').value;
      showMinutes = document.getElementById('js-input7-1').value;
      showSeconds = document.getElementById('js-input7-2').value;
      hoursToSec = document.getElementById('js-input8-0').value;
      minutesToSec = document.getElementById('js-input8-1').value;
      secondsToSec = document.getElementById('js-input8-2').value;
      fromSeconds = document.getElementById('js-input9-0').value;
      compareHour1 = document.getElementById('js-input10-0').value;
      compareMinute1 = document.getElementById('js-input10-1').value;
      compareSeconds1 = document.getElementById('js-input10-2').value;
      compareHour2 = document.getElementById('js-input10-3').value;
      compareMinute2 = document.getElementById('js-input10-4').value;
      compareSeconds2 = document.getElementById('js-input10-5').value;
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
  if (isFinite(compareNumb1) && isFinite(compareNumb2)) {
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
  else return console.log('Nice try');
}

function factor (checkFactorial) {
  let factorial = 1;
  
  for (let i = 1; checkFactorial >= i; i++) {
    factorial *=  i;
  }
  if (isFinite(checkFactorial)) {
  return console.log(factorial);
  }
  else return console.log('Nice try');
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
    alert('Nice Try')
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

function showTime (hours, minutes, seconds) {
  let days = 0;
  let years = 0;

  for (let i = 0; i < 4; i++) {
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
    console.log('+' + Math.trunc(years) + ' ' + 'years' + ' ' + Math.trunc(days) + ' ' + 'days'  + ': ' + hours + ':' + minutes + ':' + seconds);
  }
  else return console.log('Thats not a date');
}

function toSec (hours, minutes, seconds) {
  let newSeconds = 0;
  if (isFinite(hours) && isFinite(minutes) && isFinite(seconds)) {
  return newSeconds = ((hours * 3600) + (minutes * 60) + seconds);
  }
  else return console.log('Nice try');
}

function fromSec(seconds) {
  let minutes = 0;
  let hours = 0;
  let days = 0;
  let years = 0;

  for (let i = 0; i < 4; i++) {
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
    if (isFinite(hours) && isFinite(minutes) && isFinite(seconds)) {
      console.log('+' + Math.trunc(years) + ' ' + 'years' + ' ' + Math.trunc(days) + ' ' + 'days'  + ': ' + hours + ':' + minutes + ':' + seconds);
    }
    else return console.log('Thats not a date');
  }
  
function calcDiffDate (compareHour1,compareMinute1, compareSeconds1, compareHour2, compareMinute2, compareSeconds2) {
    const arrDays = [toSec (+compareHour1, +compareMinute1, +compareSeconds1), toSec (+compareHour2, +compareMinute2, +compareSeconds2)];
    let result = arrDays[0] - arrDays[1];
    return fromSec ((Math.abs(result)));
  }
  