
/*------------- Task-1 ----------------*/
// let highNumber = +prompt('1 number','');
// let lowNumber = +prompt('2 number?','');
// let sumNumber = 0;

// if (lowNumber > highNumber) {
//   let i = lowNumber;
//   lowNumber = highNumber;
//   highNumber = i;
// }
// for (; lowNumber <= highNumber; lowNumber++) {
//   sumNumber += lowNumber;  
// }
// console.log(sumNumber);


/*------------- Task-2 ----------------*/
// let checkNumberOne = +prompt('1 number','');
// let checkNumberTwo = +prompt('2 number?','');

// for (;checkNumberOne != 0 && checkNumberTwo != 0;) {
//     if (checkNumberOne > checkNumberTwo) {
//       checkNumberOne = checkNumberOne % checkNumberTwo;
//       }
//     else {
//         checkNumberTwo = checkNumberTwo % checkNumberOne;
//       }
// }
// console.log(checkNumberOne + checkNumberTwo);


/*------------- Task-3 ----------------*/
// let checkNumber  = +prompt(' number?','');

// for (let i = 0; i <= checkNumber; i++) {
//   if (checkNumber % i === 0) {
//       console.log(i)
//     }
//   }

/*------------- Task-4 ----------------*/
// let checkNumber  = prompt(' number?','');
// console.log(checkNumber.length);

 /*------------- Task-5 ----------------*/ 
//  let checkNumber  = prompt(' number?','');
//  let checkInput = checkNumber.split(',');
//  let zeroCount = 0,
//  posCount = 0,
//  oddCount = 0,
//  evenCount = 0,
//  negativeCount = 0;

// checkInput.forEach((i) => {
//   if (i == 0) {
//   zeroCount++
//   } else if (i < 0) {
//   negativeCount++
//     if (i % 2) {
//     evenCount++
//     } else {
//     oddCount++
//     }
//   } else if (i > 0) {
//   posCount++
//   if (i % 2) {
//     evenCount++
//     } else {
//     oddCount++
//     }
//   }  
// })
// alert("Нолей" + ' ' + zeroCount + ' ' + "Позитивные" + ' ' + posCount + ' ' + "Негативные" + ' ' + negativeCount + ' ' +  "Четные" + ' ' + evenCount + ' ' + "Нечетные" + ' ' + oddCount)

/*------------- Task-6 ----------------*/
// while (true) {
//   let a = +prompt('Введите первое число');
//   let b = +prompt('Введите второе число');
//   let op = prompt('Выберете знак - + / *');
//   const action = {
//     '+': () => a + b,
//     '-': () => a - b,
//     '/': () => a / b,
//     '*': () => a * b
//   }[op];
//   if (action) {
//     alert(action());
//     confirm('Хотите ли вы решить еще один пример?');
//   } 
//   else if (!alert('CYA')) break;
// }


/*------------- Task-7 ----------------*/
let number = +prompt('jkjkjk?');
let moveNumber = +prompt('jkj?');

const arr = number.split('')

function move () {
  arr.shift();
  arr.push();
  return arr
}

for (let i = 0; moveNumber > i; i++) {
  move()
}
alert(arr);


/*------------- Task-8 ----------------*/
// let perimeter = +prompt('wridown your perimetr','');
// let circumference = prompt('wridown your circumference','');
// let diagonal = perimeter/(2*(2**(1/2)))

// if (circumference === null || circumference === '') {
//   alert('Не хош как хош');
// }
// else if (circumference <= diagonal) {
//   alert('Voshel');
// }
// else{
//   alert ('Впихнуть не впихуемое');
// }

/*------------- Task-9 ----------------*/
// let firstQuestion = prompt('Arthur is a good tutor?(1-Yes/2-No/3-Who is Arthur?)','');
// let secondQuestion = prompt('How are u feeling about this course?(1-Good/2-Bad/3-Where am I?)','');
// let thirdQuestion = prompt('Are u ready to be Джаваскриптизер?(1-Yes/2-No/3-I am already)','');
// let questionPoints = [];

// switch (+firstQuestion) {
//   case 1:
//     questionPoints[0] = 3;
//     break;
//   case 3:
//     questionPoints[0] = -1;
//     break;
//   default:
//     questionPoints[0] = 0;
// }
// switch(+secondQuestion) {
//   case 1:
//     questionPoints[1] = 3;
//     break;
//   case 3:
//     questionPoints[1] = -1;
//     break;
//   default:
//     questionPoints[1] = 0;
//   }
// switch(+thirdQuestion) {
//   case 3:
//     questionPoints[2] = 3;
//     break;
//   case 2:
//     questionPoints[2] = -10;
//     break;
//   default:
//     questionPoints[2] = 0;
//     }
// let reducer = (previousValue, currentValue) => previousValue + currentValue;
// //  console.log(questionPoints)
// alert(questionPoints.reduce(reducer));
  
/*------------- Task-10 ----------------*/
// let date = prompt('Enter the date - day-month-year ');

// date = date.split('-');
// let oldDate = new Date(date[2], date[1]-1, date[0]); //месяцы начинаются с 0
//     oldDate.setDate(oldDate.getDate()+1);
//     alert(oldDate);


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