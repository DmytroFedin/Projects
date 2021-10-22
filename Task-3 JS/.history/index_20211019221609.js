

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
      
      for (let i = 0; number >= i; i++) {
        factorial *=  1
      }
      console.log(factorial);
      
    },
    task3: () => {
      let checkNumber  = +prompt(' number?','');

      for (let i = 0; i <= checkNumber; i++) {
        if (checkNumber % i === 0) {
          console.log(i);
        }
      }
    },
    task4: () => {
      let checkNumber  = prompt(' number?','');
      console.log(checkNumber.length);
    },
    task5: () => {
      let checkNumber  = prompt(' number?','');
      let checkInput = checkNumber.split(',');
      let zeroCount = 0,
      posCount = 0,
      oddCount = 0,
      evenCount = 0,
      negativeCount = 0;
     
     checkInput.forEach((i) => {
       if (i == 0) {
       zeroCount++
       } else if (i < 0) {
       negativeCount++
         if (i % 2) {
         evenCount++
         } else {
         oddCount++
         }
       } else if (i > 0) {
       posCount++
       if (i % 2) {
         evenCount++
         } else {
         oddCount++
         }
       }  
     })
     alert("Нолей" + ' ' + zeroCount + ' ' + "Позитивные" + ' ' + posCount + ' ' + "Негативные" + ' ' + negativeCount + ' ' +  "Четные" + ' ' + evenCount + ' ' + "Нечетные" + ' ' + oddCount);
    },
    task6: () => {
      while (true) {
        let a = +prompt('Введите первое число');
        let b = +prompt('Введите второе число');
        let op = prompt('Выберете знак - + / *');
        const action = {
          '+': () => a + b,
          '-': () => a - b,
          '/': () => a / b,
          '*': () => a * b
        }[op];
        if (action) {
          alert(action());
          confirm('Хотите ли вы решить еще один пример?');
        } 
        else if (!alert('CYA')) break;
      }
    },
    task7: () => {
      let number = prompt('Число');
      let moveNumber = prompt('Насколько сдвинуть');
      let arr = number.split('');
      
      for (let i = 0; moveNumber > i; i++) {
        arr.push(arr.shift());
      }
      console.log(arr);
    },
    task8: function repeat() {
      let day = ['Monday','Tuesday','Thirsday','Wendesday', 'Friday', 'Saturday', 'Sunday',];
      let currDay = 0
      
      for (let key in day) {
      if (confirm(`${day[currDay]} Prodolzhit?`)) {
        currDay = (currDay+1) % day.length;
        console.log(currDay);
        if (currDay == 0) {
          repeat()
        }
      }
      else break
      }
    },
    task9: () => {
let number = 1;
let i = 10;

for (; number <= i;number++)
  for (let k = 0; k <= 10; k++) {
    let sum = number * k;
    console.log(sum)
}
    },
    task10: () => {
      const arr = Array(100).fill(1).map((v,i) => v + i);
      function binaryGuess(arr) {
        if (arr.length === 1) {
          return alert('Загаданое число было ' + arr[0]);
        };
        if (arr.length < 1) {
          return alert('Где то меня обманули');
        };
        let nextIdx = Math.floor(arr.length / 2); 
        
        if (confirm('Ответ ' + arr[nextIdx] + ' ?')) {
          return alert('Я это итак знал');
        } else {
          if (confirm('Больше ?')) {
            binaryGuess(arr.slice(nextIdx));
          } else {
            binaryGuess(arr.slice(0, nextIdx - 1));
          };	
        };
      };
      
      function startGuessing(r) {
        binaryGuess(arr);
        if (confirm('Повторим ?')) {
          startGuessing();
        };	
      };
      
      startGuessing();
      
    },
  }
console.log(func.length)
const execute = (e) => {
  const quantity = 10
  for (let i = 1; i <= quantity; i++) {
    const item = document.getElementById('js-task' + i);
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
  
  
  