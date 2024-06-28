// Elements
const myInput = document.getElementById("user_password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const confirmPassword = document.getElementById("confirm_password");
const first = document.getElementById("first_name");
const last = document.getElementById("last_name");
const email = document.getElementById("user_email");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.visibility = "visible";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.visibility = "hidden";
}

// When the user starts to type something inside the password field
// perform password validation checks
myInput.onkeyup = function() {
  let checkVali = 0;
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    checkVali++;
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    checkVali--;
}

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    checkVali++;
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    checkVali--;
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
    checkVali++;
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    checkVali--;
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    checkVali++;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    checkVali--;
  }

  // If all 4 requriments are meet, change input box styling and vice versa
  if(checkVali >= 4) {
    validStyle(myInput);
  }
  else {
    invalidStyle(myInput);
  }
}

// Checks if both the password and confirm password match each other
// and sets styling based on the result
confirmPassword.onkeyup = function() {
  if(confirmPassword.value.length === 0) {
    document.getElementById("password_message").style.visibility = "visible";
    invalidStyle(confirmPassword);
    confirmPassword.setCustomValidity("Please match password");
  }
  else if(confirmPassword.value === myInput.value) {
    document.getElementById("password_message").style.visibility = "hidden";
    validStyle(confirmPassword);
  }
  else {
    document.getElementById("password_message").style.visibility = "visible";
    invalidStyle(confirmPassword);
    confirmPassword.setCustomValidity("Passwords do not match");
  }
}

// First name input box requirement styling
first.onkeyup = function() {
  if(first.value.length === 0) {
    invalidStyle(first);
    first.setCustomValidity("Please enter your first name");
  }
  else {
    validStyle(first);
  }
}

// Last name input box requirement styling
last.onkeyup = function() {
  if(last.value.length === 0) {
    invalidStyle(last);
    last.setCustomValidity("Please enter your last name");
  }
  else {
    validStyle(last);
  }
}

// Email input box requirement styling
email.onkeyup = function() {
  if(email.value.length === 0) {
    invalidStyle(email);
    email.setCustomValidity("Please enter a valid email address");
  }
  // Email validation check
  else if(/^\S+@\S+\.\S+$/.test(email.value) == false) {
    invalidStyle(email);
    email.setCustomValidity("Please enter a valid email address");
  }
  else {
    validStyle(email);
  }
}

// Sets styling for invalid inputs
function invalidStyle(formInput) {
  console.log("Invalid");
  formInput.style.outline = 'none';
  formInput.style.border = '2px solid red';
  formInput.style.boxShadow = '3px 3px 4px black';
}

// Sets styling for valid inputs
function validStyle(formInput) {
  formInput.style.outline = 'none';
  formInput.style.border = '2px solid blue';
  formInput.style.boxShadow = '3px 3px 4px black';
  formInput.setCustomValidity("");
}