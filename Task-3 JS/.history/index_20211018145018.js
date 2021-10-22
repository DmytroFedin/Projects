


let btnHover = document.getElementsByClassName("e-task__btn");
btnHover.addEventListener("mouseover", function() {
this.target.style.backgroundColor = "purple";
});

/*------------- Task-1 ----------------*/
document.getElementById("js-task1").addEventListener("click", function() {
  let highNumber = +prompt('1 number','');
  let lowNumber = +prompt('2 number?','');
  let sumNumber = 0;
  
  if (lowNumber > highNumber) {
    let i = lowNumber;
    lowNumber = highNumber;
    highNumber = i;
  }
  for (; lowNumber <= highNumber; lowNumber++) {
    sumNumber += lowNumber;  
  }
  return console.log(sumNumber);
  });

/*------------- Task-2 ----------------*/
document.getElementById("js-task2").addEventListener("click", function() {
let checkNumberOne = +prompt('1 number','');
let checkNumberTwo = +prompt('2 number?','');

for (;checkNumberOne != 0 && checkNumberTwo != 0;) {
    if (checkNumberOne > checkNumberTwo) {
      checkNumberOne = checkNumberOne % checkNumberTwo;
      }
    else {
        checkNumberTwo = checkNumberTwo % checkNumberOne;
      }
}
console.log(checkNumberOne + checkNumberTwo);
})

/*------------- Task-3 ----------------*/
document.getElementById("js-task3").addEventListener("click", function() {
let checkNumber  = +prompt(' number?','');

for (let i = 0; i <= checkNumber; i++) {
  if (checkNumber % i === 0) {
      console.log(i)
    }
  }
})

/*------------- Task-4 ----------------*/
document.getElementById("js-task4").addEventListener("click", function() {
let checkNumber  = prompt(' number?','');
console.log(checkNumber.length);
})

 /*------------- Task-5 ----------------*/ 
 document.getElementById("js-task5").addEventListener("click", function() {
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
alert("Нолей" + ' ' + zeroCount + ' ' + "Позитивные" + ' ' + posCount + ' ' + "Негативные" + ' ' + negativeCount + ' ' +  "Четные" + ' ' + evenCount + ' ' + "Нечетные" + ' ' + oddCount)
 })

/*------------- Task-6 ----------------*/
document.getElementById("js-task6").addEventListener("click", function() {
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
})

/*------------- Task-7 ----------------*/
document.getElementById("js-task7").addEventListener("click", function() {
let number = prompt('Число');
let moveNumber = prompt('Насколько сдвинуть');
let arr = number.split('')

for (let i = 0; moveNumber > i; i++) {
  
  arr.push(arr.shift());
 
}
console.log(arr);
})

/*------------- Task-8 ----------------*/
document.getElementById("js-task8").addEventListener("click", function() {
let day = ['Monday','Tuesday','Thirsday','Wendesday', 'Friday', 'Saturday', 'Sunday'];
let currDay = 0

for (let key in day) {
if (confirm(`${day[currDay]} Prodolzhit?`)) {
  currDay = (currDay+1) % day.length;
  console.log(currDay)
}}
})

/*------------- Task-9 ----------------*/
document.getElementById("js-task9").addEventListener("click", function() {
let number = 1;
let i = 10;

for (; number <= i;number++)
  for (let k = 0; k <= 10; k++) {
    let sum = number * k;
    console.log(sum)
}
})

/*------------- Task-10 ----------------*/
document.getElementById("js-task10").addEventListener("click", function() {
})
// let number = 100
// confirm('загадайт число от 0 до 100');

// for (let i = 0; i < number; i++) {
  
// }

// let schedule = {
//   name: 'fgfg',
// };

// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return alert('2222');
//   }
//   return alert('11111');
// }

// isEmpty(schedule)

// let sum = 0;
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// for (let key in salaries) {
//   sum += salaries[key];
  
// }
// alert(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// let user = {
//   name: "Джон",
//   go: function() { alert(this.name) }
// };

// user.go()

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: this
//   };
// };

// let user = makeUser();

// alert( user.ref[key] ); 

// let calculator = {
//   read () {
//     this.a = +prompt('chislo')
//     this.b = +prompt('chislo');
//   },
//   sum () {
//     return this.a + this.b;
//   },
//   mul () {
//     return this.a * this.b;
//   } ,
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     alert( this.step );
//   }
// };

// let number

// function readNumber () {
//   number = prompt('gfgf')
//   if (isNaN(number)) {
//     readNumber();
//   }
  
//   else if (number === null || number === '') {
//     alert('null');
//   }
//   else {
//     alert(number);
//   }
// }

// readNumber();


// function random(min, max) {

// }

// var name = prompt('pizdez?')

// function ucFirst(name){
//   if (!name) return name
//   let newName = name[0].toUpperCase() + name.slice(1)
//   return alert(newName)
// }
// ucFirst(name)

// let check = prompt('fgfgf?')

// function checkSpam (check) {
// if (check.toUpperCase().includes('VIAGRA') || check.toUpperCase().includes('XXX')) {
//   return console.log('no')
// }
// return console.log('ok')
// }

// checkSpam(check);

// let words = prompt('hjfhgjf?')
// let maxLength = 8

// function truncate () {
//   if (words.length > maxLength) {
//     let truncateWords = words.slice(0, 8) + '...';
//     return alert(truncateWords)}
//   return alert(words);
// }
// truncate(words, maxLength)

// let number = prompt('fgfgfgz?');

// function plusNumber () {
//   number.reduce()
// }