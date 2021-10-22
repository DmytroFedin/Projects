

  func = {
    task1: () => {
      let highNumber = +prompt('1 number','');
      let lowNumber = +prompt('2 number?','');
      
      if (lowNumber > highNumber) {
        return console.log('-1')
      }
      else if(lowNumber < highNumber) {
        return console.log('1') 
      }
      else if(lowNumber === highNumber) {
        return console.log('0') 
      }
    },
    task2: function factor () {
      let number = +prompt(' number','');
      let factorial = 1
      
      for (let i = 1; number >= i; i++) {
        factorial *=  i
      }
      return console.log(factorial);
      
    },
    task3: () => {
      let numberOne = prompt(' number','');
      let numberTwo = prompt(' number','');
      let numberThree = prompt(' number','');
      newNumb = numberOne + numberOne + numberThree;
      return console.log(newNumb)
     
    },
    task4: () => {
      let calcNumberOne  = prompt(' number?','');
      let calcNumberTwo  = prompt(' number?','');

      if (isFinite(calcNumberOne, calcNumberTwo)){
       if (calcNumberOne === 0 || calcNumberOne === null) {
        sqr = calcNumberTwo*calcNumberTwo;
      }
      else if (calcNumberTwo === 0 || calcNumberTwo === null) {
        sqr = calcNumberOne*calcNumberOne;
      }
      else  sqr = calcNumberOne*calcNumberTwo;
    }
    else {
      alert('numbers dumbass o_0')
    }
      return console.log(sqr);
    },
    task5: function isPerfect() {
      let checkNumber  = +prompt(' number?','');
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
    },
    task6: () => {
      let min = +prompt('fgfgfg?');
      let max = +prompt('fgfgf?');
      let answer = [];

      if (isFinite(min, max)) {
        for (let i = min; max > i; i++) {
          let sum = 0;
          for (let j = 1; i > j; j++) {
            if (i % j === 0 && i === (sum += j)) {

              answer.push(j*2);
          }
        } 
        }
      }
        else answer = 'Nice try';
      
      return console.log(answer);
    },
    task7: () => {
      let hours = +prompt('Сколько часов ');
      let minutes = +prompt('Сколько минут');
      let seconds = +prompt('Сколько секунд');
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
    },
    task8: () => {
      let hours = +prompt('Сколько часов ');
      let minutes = +prompt('Сколько минут');
      let seconds = +prompt('Сколько секунд');
      let newSeconds = 0;

      return newSeconds = ((hours * 3600) + (minutes * 60) + seconds);
    },
    task9: () => {toSec(+toSeconds)},
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
    var toSeconds = document.getElementById('js-input9').value;
    item.addEventListener('click', () => {
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
  
  