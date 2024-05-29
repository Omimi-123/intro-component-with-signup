const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const showPassword = document.querySelector('#show-password')
const errorCircle = document.querySelectorAll('.fa-exclamation-circle ')
const error_mesg = document.querySelectorAll('.error_mesg')
const email_error = document.querySelector('.email_error')
console.log(firstName);



form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);




  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorCircle[0].classList.remove('hide');
    error_mesg[0].classList.remove('hide');
    firstName.placeholder = ' ';


  } else {
    firstName.classList.remove('error');
    errorCircle[0].classList.add('hide');
    error_mesg[0].classList.add('hide')
  }

  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    errorCircle[1].classList.remove('hide');
    error_mesg[1].classList.remove('hide');
    lastName.placeholder = ' ';

  } else {
    lastName.classList.remove('error');
    errorCircle[1].classList.add('hide');
    error_mesg[1].classList.add('hide')

  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    errorCircle[2].classList.remove('hide');
    error_mesg[2].classList.remove('hide');
    email_error.classList.remove('hide');
    email.placeholder = ' ';
  } else {
    email.classList.remove('error');
    errorCircle[2].classList.add('hide');
    error_mesg[2].classList.add('hide')
    email_error.classList.add('hide')
  }


  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    errorCircle[3].classList.remove('hide');
    error_mesg[3].classList.remove('hide');
    showPassword.classList.add('hide');
    password.placeholder = ' ';

  } else {
    password.classList.remove('error');
    errorCircle[3].classList.add('hide');
    error_mesg[3].classList.add('hide');
    showPassword.classList.remove('hide');
  }
});
showPassword.addEventListener("click", function () {
  this.classList.toggle('fa-eye-slash');
  const type = password.getAttribute("type")
    === "password" ? "text" : "password";
  password.setAttribute("type", type);
})


//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}






















