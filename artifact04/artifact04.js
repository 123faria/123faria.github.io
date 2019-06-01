function inputAlphabet(inputtext){
var alphaExp = /^[a-zA-Z]+$/;
if(inputtext.match(alphaExp)){
return true;
}else{
return false;
}
}
function textNumeric(inputtext){
var numericExpression = /^[0-9]+$/;
if(inputtext.match(numericExpression)){
return true;
}else{
return false;
}
}

function validateFirstName() {
    var x = document.getElementById('firstName').value;
    if (!inputAlphabet(x) || x.length>20) {
        alert("Not a valid first name");
        return false;
    }
  return true;
}
function validateLastName() {
    var x = document.getElementById('lastName').value;
    if (!inputAlphabet(x) || x.length>50) {
        alert("Not a valid last name");
        return false;
    }
  return true;
}

function validateEmail() {
    var x = document.getElementById('email').value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
  return true;
}
function validatePhone() {
    var x = document.getElementById('phone').value;
    if (!textNumeric(x) || x.length>15) {
        alert("Not a valid phone number");
        return false;
    }
  return true;
}

function validateUsername() {
    var x = document.getElementById('username').value;
    if (x.length>12 || x.length===0) {
        alert("Not a valid username");
        return false;
    }
  return true;
}

function validatePassword() {
    var x = document.getElementById('password').value;
    if (x.length>7 || x.length===0) {
        alert("Not a valid password");
        return false;
    }
  return true;
}
function validateAddress() {
    var x = document.getElementById('address').value;
    if (x.length===0) {
        alert("Not a valid address");
        return false;
    }
  return true;
}
function validateCity() {
    var x = document.getElementById('city').value;
    if (x.length===0) {
        alert("Not a valid city");
        return false;
    }
  return true;
}
function validateCountry() {
    var x = document.getElementById('country').value;
    if (x.length===0) {
        alert("Not a valid country");
        return false;
    }
  return true;
}

function validateZip() {
  var x = document.getElementById('zip').value;
  var y = document.getElementById('country').value;
    if (y.length==2){
      if(x.length>5 || x.length===0){
        alert("Not a valid Zip");
        return false;
      }else{
        return true;
      }
    }
  return true;
}
function validateForm() {
  if (!validateFirstName() || !validateLastName() || !validateEmail() || !validatePhone() || !validateUsername() || !validatePassword() || !validateAddress() || !validateCity() || !validateCountry() || !validateZip()) {
    alert('Please fix errors to submit.');
    return false;
  }
  else {
    alert('Thank you.');
    return true;
  }
}
