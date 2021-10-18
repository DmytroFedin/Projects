
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
 let checkNumber  = prompt(' number?','');
 let checkInput = checkNumber.split(',');
 let zeroCount = 0,
 posCount = 0,
 negativeCount = 0;

checkInput.forEach((item) => {
 if (item == 0) {
   zeroCount++
 } else if (item < 0) {
   negativeCount++
 } else if (item > 0) {
   posCount++
 }
})

//  let neg = checkInput.filter(function(v) {
//   return v < 0;
// });
// // get positive values
// let pos = checkInput.filter(function(v) {
//   return v > 0;
// });
// // get zeros
// let zero = checkInput.filter(function(v) {
//   return v == 0;
// });

// // concat result arrays
// checkInput = neg.concat(zero, pos);

console.log("ZeroCount:: " + zeroCount);
console.log("PositiveCount :: " + posCount);
console.log("NegativeCount:: " + negativeCount);


 

// (isPalindrom === isPalindrom.split('').reverse().join('')) ? alert('Это мать его, Палиндром') : alert('Nice try(');


/*------------- Task-6 ----------------*/
// let converterSum = prompt('write down sum to exchange, $','');
// let currency = prompt('choose currency beetween UAH-1, AZN-2 and EUR-3','');

// if (currency === null || currency === ' ') {
//   alert('Идешь к местному барыге?');
// }
// else if (currency === '3' || currency.toUpperCase() === 'EUR') {
//   alert(converterSum * 0.87 + ' ' + 'Euro');
// }
// else if (currency === '1' || currency.toUpperCase() === 'UAH') {
//   alert(converterSum * 26.3 + ' ' + 'UAH');
// }
// else if (currency === '2' || currency.toUpperCase() === 'AZN') {
//   alert(converterSum * 1.70 + ' ' + 'AZN');
// }
// else {
//   alert('Lavochka zakrita');
// }

/*------------- Task-7 ----------------*/
// let purchaseSum = +prompt('What is your sum of purchase?','');
// let smallDiscount = 0.97;
// let mediumDiscount = 0.95;
// let bigDiscount = 0.93;

// if (purchaseSum >= 200 && purchaseSum < 300) {
//   alert('Your sum after discount is:' + ' ' + Math.round(purchaseSum*smallDiscount));
// }
// else if (purchaseSum >= 300 && purchaseSum < 500) {
//   alert('Your sum after discount is:' + ' ' + Math.round(purchaseSum*mediumDiscount));
// }
// else if (purchaseSum >= 500) {
//   alert('Your sum after discount is:' + ' ' + Math.round(purchaseSum*bigDiscount));
// }
// else if (purchaseSum < 0) {
//   alert('HA HA HA');
// }
// else if (purchaseSum == null || purchaseSum == '') {
//   alert('Приходьте ще');
// }
// else {
//   alert('Нищеброд');
// }

/*------------- Task-8 ----------------*/
// let perimeter = +prompt('write down your perimetr','');
// let circumference = prompt('write down your circumference','');
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


