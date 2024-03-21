var myInput = document.getElementById("user_password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var confirmPassword = document.getElementById("confirm_password");
var first = document.getElementById("first_name");
var last = document.getElementById("last_name");
var email = document.getElementById("user_email");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.visibility = "visible";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.visibility = "hidden";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  var checkVali = 0;
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
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
  var upperCaseLetters = /[A-Z]/g;
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
  var numbers = /[0-9]/g;
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

  if(checkVali >= 4) {
    myInput.style.outline = 'none';
    myInput.style.border = '2px solid blue';
    myInput.style.boxShadow = '3px 3px 4px black';
  }
  else {
    myInput.style.outline = 'none';
    myInput.style.border = '2px solid red';
    myInput.style.boxShadow = '3px 3px 4px black';
  }
}

confirmPassword.onkeyup = function() {
  if(confirmPassword.value.length === 0) {
    document.getElementById("password_message").style.visibility = "visible";
    confirmPassword.style.outline = 'none';
    confirmPassword.style.border = '2px solid red';
    confirmPassword.style.boxShadow = '3px 3px 4px black';
    confirmPassword.setCustomValidity("Please match password");
  }
  else if(confirmPassword.value === myInput.value) {
    document.getElementById("password_message").style.visibility = "hidden";
    confirmPassword.style.outline = 'none';
    confirmPassword.style.border = '2px solid blue';
    confirmPassword.style.boxShadow = '3px 3px 4px black';
    confirmPassword.setCustomValidity("");
  }
  else {
    document.getElementById("password_message").style.visibility = "visible";
    confirmPassword.style.outline = 'none';
    confirmPassword.style.border = '2px solid red';
    confirmPassword.style.boxShadow = '3px 3px 4px black';
    confirmPassword.setCustomValidity("Passwords do not match");
  }
}

first.onkeyup = function() {
  if(first.value.length === 0) {
    first.style.outline = 'none';
    first.style.border = '2px solid red';
    first.style.boxShadow = '3px 3px 4px black';
    first.setCustomValidity("Please enter your first name");
  }
  else {
    first.style.outline = 'none';
    first.style.border = '2px solid blue';
    first.style.boxShadow = '3px 3px 4px black';
    first.setCustomValidity("");
  }
}

last.onkeyup = function() {
  if(last.value.length === 0) {
    last.style.outline = 'none';
    last.style.border = '2px solid red';
    last.style.boxShadow = '3px 3px 4px black';
    last.setCustomValidity("Please enter your last name");
  }
  else {
    last.style.outline = 'none';
    last.style.border = '2px solid blue';
    last.style.boxShadow = '3px 3px 4px black';
    last.setCustomValidity("");
  }
}

email.onkeyup = function() {
  if(email.value.length === 0) {
    email.style.outline = 'none';
    email.style.border = '2px solid red';
    email.style.boxShadow = '3px 3px 4px black';
    email.setCustomValidity("Please enter a valid email address");
  }
  else if(/^\S+@\S+\.\S+$/.test(email.value) == false) {
    email.style.outline = 'none';
    email.style.border = '2px solid red';
    email.style.boxShadow = '3px 3px 4px black';
    email.setCustomValidity("Please enter a valid email address");
  }
  else {
    email.style.outline = 'none';
    email.style.border = '2px solid blue';
    email.style.boxShadow = '3px 3px 4px black';
    email.setCustomValidity("");
  }
}