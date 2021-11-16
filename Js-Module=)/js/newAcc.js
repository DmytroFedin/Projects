class user {
  constructor(role, firstName, lastName, email, username, password, language) {
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.username = username;
    this.password = password;
    this.language = language
  }
}
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
const role = '2';
const firstName = document.getElementById('js-first-name');
const lastName = document.getElementById('js-last-name');
const email = document.getElementById('js-email');
const username = document.getElementById('js-username');
const password = document.getElementById('js-password');
const checkPassword = document.getElementById('js-check-password');
const active = true;
const form = document.getElementById('js-form');
const addBtn = document.getElementById('js-sign-up');


const checkingPassword = () => {
if (password.value === checkPassword.value) {
  password.style.border = '1px solid green';
  checkPassword.style.border = '1px solid green';

  return true
}
else {
  password.value = '';
  checkPassword.value = '';
  password.style.border = '1px solid red';
  checkPassword.style.border = '1px solid red';
  return false
}
}

addBtn.addEventListener('click', () => {
for (let i = 0; i < 6; i++) {
  if (email.validity.valid !== true) {
    email.value = '';
    email.style.border = '1px solid red';
  }
  else {email.style.border = '1px solid green';}
  if (firstName.validity.valid !== true) {
    firstName.value = '';
    firstName.style.border = '1px solid red';
  }
  else {firstName.style.border = '1px solid green';}
   if (lastName.validity.valid !== true) {
    lastName.value = '';
    lastName.style.border = '1px solid red';
  }
  else {lastName.style.border = '1px solid green';}
   if (username.validity.valid !== true) {
    username.value = '';
    username.style.border = '1px solid red';
  }
  else {username.style.border = '1px solid green';}
   if (password.validity.valid !== true || password.value !== checkPassword.value) {
    password.value = '';
    password.style.border = '1px solid red';
    checkPassword.value = '';
    checkPassword.style.border = '1px solid red';
  }
  else {password.style.border = '1px solid green';
  checkPassword.style.border = '1px solid green';}
}
if (email.checkValidity() === true && firstName.checkValidity() === true && lastName.checkValidity() === true && email.checkValidity() === true && username.checkValidity() === true && password.checkValidity() === true){
  
  if (checkingPassword() === true) {
    const language = localStorage.getItem('language');
    const newUser = new user(+role,firstName.value, lastName.value, email.value, username.value, password.value, language)
    const userJSON = JSON.stringify(newUser);  

  fetch(BASE_URL, {
    method: "POST",
    headers: {
      'Content-type': 'application/json',
    },
    body: userJSON,
  }).then((response) => response.json())
  .then((response) => {
    console.log(response);
    alert('Cтворено користувача');
  })
  .catch(error => {
    const status = error.status;
    readError(status);
})
}


function readError(status) {
switch(status) {

default: {
  alert('Непердбачувані помилки на сервері');
}
}
}
}
})