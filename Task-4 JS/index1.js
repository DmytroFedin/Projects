let numeratorOne, numeratorTwo,
    denominatorOne, denominatorTwo,
    multNumeratorOne, multNumeratorTwo,
    multDenominatorOne, multDenominatorTwo,
    denominatorsMult, numeratorsMult,
    sumNumeratorOne, sumNumeratorTwo,
    sumDenominatorOne, sumDenominatorTwo,
    minusNumeratorOne, minusNumeratorTwo,
    minusDenominatorOne, minusDenominatorTwo,
    dividerNumeratorOne, dividerNumeratorTwo,
    dividerDenominatorOne, dividerDenominatorTwo,
    hours, minutes, seconds;

const numb = {
  task1: () =>{ return mult (+multNumeratorOne, +multDenominatorOne, +multNumeratorTwo, +multDenominatorTwo)},
  task2: () =>{ return divide (+dividerNumeratorOne, +dividerDenominatorOne, +dividerNumeratorTwo, +dividerDenominatorTwo)},
  task3: () =>{ return sum (+sumNumeratorOne, +sumDenominatorOne, +sumNumeratorTwo, +sumDenominatorTwo)},
  task4: () =>{ return minus (+minusNumeratorOne, +minusDenominatorOne, +minusNumeratorTwo, +minusDenominatorTwo)},
  task5: () =>{ return showTime (+hours, +minutes, +seconds)},
}

const execute = (e) => {
  const quantity = 5
  for (let i = 1; i <= quantity; i++) {
    const item = document.getElementById('js-task' + i);
    const funcResult = document.getElementById('js-result' + i);
    item.addEventListener('click', () => {
      multNumeratorOne = document.getElementById('js-input1-0').value;
      multNumeratorTwo = document.getElementById('js-input1-1').value;
      multDenominatorOne = document.getElementById('js-input1-2').value;
      multDenominatorTwo = document.getElementById('js-input1-3').value;
      dividerNumeratorOne = document.getElementById('js-input2-0').value;
      dividerNumeratorTwo = document.getElementById('js-input2-1').value;
      dividerDenominatorOne  = document.getElementById('js-input2-2').value;
      dividerDenominatorTwo = document.getElementById('js-input2-3').value;
      sumNumeratorOne = document.getElementById('js-input3-0').value;
      sumNumeratorTwo  = document.getElementById('js-input3-1').value;
      sumDenominatorOne = document.getElementById('js-input3-2').value;
      sumDenominatorTwo = document.getElementById('js-input3-3').value;
      minusNumeratorOne = document.getElementById('js-input4-0').value;
      minusNumeratorTwo = document.getElementById('js-input4-1').value;
      minusDenominatorOne  = document.getElementById('js-input4-2').value;
      minusDenominatorTwo = document.getElementById('js-input4-3').value;
      hours = document.getElementById('js-input5-0').value;
      minutes = document.getElementById('js-input5-1').value;
      seconds = document.getElementById('js-input5-2').value;
      funcResult.innerHTML = 'Result: ' + `${numb['task' + i]()}`
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

const isNumber = (numeratorsMult, denominatorsMult) => {
    if (isFinite(numeratorsMult) && isFinite(denominatorsMult)) {
      const {numerator, denominator} = upgr(numeratorsMult, denominatorsMult);
      return numerator + '/' + denominator; 
    }
    else return 'Thats not a number';
}

const upgr = (numerator, denominator) => {
  let i;
  if (numerator >= denominator) {
    i = numerator;
  }
  else if (numerator <= denominator) {
    i = denominator;
  }
  for (; i >= 0; i--) {
    let upgrDenominator, upgrNumerator;
    if (numerator % i ===0 && denominator % i ===0) {
      upgrDenominator = denominator / i;
      upgrNumerator = numerator / i;
      return {
        numerator: upgrNumerator, 
        denominator: upgrDenominator, };
    }  
  } 
   return {numerator: numerator ,denominator: denominator,};
}

const greatestCommonDivisor = (checkNumberOne, checkNumberTwo) => {
  if (isFinite(checkNumberOne) && isFinite(checkNumberTwo)) {
    for (;checkNumberOne != 0 && checkNumberTwo != 0;) {

        if (checkNumberOne > checkNumberTwo) {
          checkNumberOne %= checkNumberTwo;
          }
        else {
            checkNumberTwo %= checkNumberOne;
          }
    }
    let divisor = checkNumberOne + checkNumberTwo;
    return divisor;
}
  else return 'Thats not a number';
}

const leastCommonMultiple = (checkNumberOne, checkNumberTwo) => {
  if (isFinite(checkNumberOne) && isFinite(checkNumberTwo)) {
    return checkNumberTwo * checkNumberOne / greatestCommonDivisor(checkNumberOne, checkNumberTwo)
  }
    else return 'Thats not a number';
}

const mult = (numeratorOne, denominatorOne, numeratorTwo, denominatorTwo) => {
  if (numeratorOne === 0 || denominatorOne === 0 || numeratorTwo === 0 || denominatorTwo === 0 ) {
    return 0
  }
  else {
  numeratorsMult = numeratorOne * numeratorTwo;
  denominatorsMult = denominatorOne * denominatorTwo;
  return isNumber(numeratorsMult,denominatorsMult);
}
}

const sum = (numeratorOne, denominatorOne, numeratorTwo, denominatorTwo) => {
  if (!(isFinite(numeratorOne) && isFinite(denominatorOne) && isFinite(numeratorTwo) && isFinite(denominatorTwo))) {
    return 'Thats not a number';
  }
  if (denominatorOne !== denominatorTwo) {
    let lcm;
    lcm = leastCommonMultiple(denominatorOne, denominatorTwo);
    numeratorOne = (lcm/denominatorOne) * numeratorOne;
    numeratorTwo = (lcm/denominatorTwo) * numeratorTwo;
    numeratorsMult = numeratorOne + numeratorTwo;
    denominatorsMult = lcm;
  }
  else if (denominatorOne === denominatorTwo) {
    numeratorsMult = numeratorOne + numeratorTwo;
    denominatorsMult = denominatorOne;
  }
  return isNumber(numeratorsMult,denominatorsMult);
}

const minus = (numeratorOne, denominatorOne, numeratorTwo, denominatorTwo) => {
  if (numeratorOne === 0 || denominatorOne === 0 || numeratorTwo === 0 || denominatorTwo === 0 ) {
    return 0
  }
  if (!(isFinite(numeratorOne) && isFinite(denominatorOne) && isFinite(numeratorTwo) && isFinite(denominatorTwo))) {
    return 'Thats not a number';
  }
  if (denominatorOne !== denominatorTwo) {
    let lcm;
    lcm = leastCommonMultiple(denominatorOne, denominatorTwo);
    numeratorOne = (lcm/denominatorOne) * numeratorOne;
    numeratorTwo = (lcm/denominatorTwo) * numeratorTwo;
    numeratorsMult = numeratorOne - numeratorTwo;
    denominatorsMult = lcm;
  }
  else if (denominatorOne === denominatorTwo) {
    numeratorsMult = numeratorOne - numeratorTwo;
    denominatorsMult = denominatorOne;
  }
  return isNumber(numeratorsMult,denominatorsMult); 
}

const divide = (numeratorOne, denominatorOne, numeratorTwo, denominatorTwo) => {
  if (numeratorOne === 0 || denominatorOne === 0 || numeratorTwo === 0 || denominatorTwo === 0 ) {
    return 0
  }
  else {
  numeratorsMult = numeratorOne * denominatorTwo;
  denominatorsMult = denominatorOne * numeratorTwo;
  return isNumber(numeratorsMult,denominatorsMult);
}
}

const showTime = (hours, minutes, seconds) => {
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
    return '+' + Math.trunc(years) + ' ' + 'years' + ' ' + Math.trunc(days) + ' ' + 'days'  + ': ' + hours + ':' + minutes + ':' + seconds;
  }
  else return 'Thats not a date';
}

