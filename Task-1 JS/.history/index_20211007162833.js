
// let age
// age = prompt('Сколько вам лет?','');

// if (age <= 2 && age >= 0){
//   alert('You are molokosos')
// }
// else if (age < 12 && age > 2){
//   alert('You are pupsik')
// }
// else if(age <= 18 && age >= 12){
//   alert('You are krovosos')
// }
// else if(age < 60 && age > 18){
//   alert('You are Rab')
// }
// else if(age <= 110 && age >= 60){
//   alert('You are baba-yagodka opyat')
// }
// else if(age < 0){
//   alert('Shutnik')
// }
// else{
//   alert('Vaiiii Gorniy Arol')
// };


// let number = prompt('Выберите число от 1-9','')

// switch(number){
// case '1':
//   alert('!');
//   break;

// case '2':
//   alert('@');
//   break;

// case '3':
//   alert('#');
//   break;

// case '4':
//   alert('$');
//   break;

// case '5':
//   alert('%');
//   break;

// case '6':
//   alert('^');
//   break;

// case '7':
//   alert('&');
//   break;

// case '8':
//   alert('*');
//   break;

// case '9':
//   alert('(');
//   break;

// default:
//   alert('Сделай \'Это\' со мной')
// }


// let checkNumber = prompt ('Введите трёхзначное число');
// let checkText = 'Повторяющихся цифр в числе нет';
// for (let m = 0; m < checkNumber.length; m++)
//    {
//    if (checkNumber.split (checkNumber [m]).length > 2) {
//     checkText = 'В числе имеются повторяющиеся цифры';
//     break;}
//    }
// alert (checkText);

let year = prompt('Када радитса Бох?','')

if (year % 400 === 0 || year % 4 === 0 && year % 100 != 0 ){
  alert('Высакоста года')
}
else if (year % 400 == 0 || year % 4 == 0 && year % 100 == 0) {
  alert('Не угадал')
}
else if (year === '' || year === null){
  alert('Павтарити')
}
else{
  alert('Bomzh')
}





// let company = prompt('fgfgf', '');
// company=+company

// if (company > 0) {
//   alert ('1');
// }
//   else if (company < 0) { alert ('-1');
// }
//   else if (company == 0) {
//     alert ('0')
//   }
// let message
// login=''

// message=(login == 'Сотрудник')?  'Привет':
//  (login == 'Директор') ?  'Здравствуйте':
//  (login == '') ?  'Нет логина':
//    '';

//   console.log(message)
// alert( alert(1) && alert(2) );
// let age = prompt("your age?",'')

// if (age > 90 || age < 14){
//   alert('Ты пидор')
// }
// else{
//   alert('tikay z sela')
// }


// let login = prompt('insert your login', ''), pass;


// if (login =='Admin'){
//   pass=prompt('Password', '');

//   if (pass =='Im head'){
//     alert('Hello')
//   }
//   else if (pass==''){
//     alert('hi')
//   }
//   else if(pass==null){
//     alert('denied')
//   }
//   else{
//     alert('hi')
//   }
// }
// else if (login == null || login == ''){
//   alert('denied');
// }
// else {
//   alert('I dont know u')
// }
// outer: for (let i = 0; i < 3; i++) {

//   for (let m = 0; m < 3; m++) {

//     let input = prompt(`Значение на координатах (${i},${m})`, '');

//     // если пустая строка или Отмена, то выйти из обоих циклов
//     if (!input) break outer; // (*)

//     // сделать что-нибудь со значениями...
//   }
// }

// alert('Готово!');
// for (let i = 2; i < 10; i++){
//   if (i % 2 == 0){
// alert( i );
// } }

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     alert( i );
//   }
// }
// let i = 0;
// while(i < 3) {
//   alert( `number ${i}!` );
//   i++
// }
// let i
// do{
// i = prompt('dfdfdf?',0)}
// while ( i < 100 && i);
// let n = prompt("fgff?",'')
// nextPrime:
// for ( let i = 2; i <= n; i++){
//   for (let m = 2; m < i; m++) { // проверить, делится ли число..
//     if (i % m == 0) continue nextPrime; // не подходит, берём следующее
//   }
//    alert(i);

// }
// let browser = prompt('pizdez?','')

// if (browser == 'Edge') {
//     alert( "You've got the Edge!" );

//   }
//     else if (browser == 'Chrome' || browser=='Firefox' || browser=='Safari' || browser=='Opera'){
//     alert( 'Okay we support these browsers too' );

//   }
//   else{
//     alert( 'We hope that this page looks ok!' );}

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

let a = null

console.log(typeof a)