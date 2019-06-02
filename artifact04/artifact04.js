 var frmvalidator = new Validator("myform");
 frmvalidator.addValidation("FirstName","req","Please enter your First Name");
 frmvalidator.addValidation("FirstName","maxlen=20",
        "Max length for FirstName is 20");


 frmvalidator.addValidation("LastName","req", "Please enter your Last Name");
 frmvalidator.addValidation("LastName","maxlen=50", "Max lenght for LastName is 50");

 frmvalidator.addValidation("Email","maxlen=50");
 frmvalidator.addValidation("Email","req");
 frmvalidator.addValidation("Email","email");

 frmvalidator.addValidation("Phone","maxlen=50");
 frmvalidator.addValidation("Phone","numeric");

 frmvalidator.addValidation("Address","maxlen=50");
 frmvalidator.addValidation("Country","dontselect=000");
//view sourceprint?

function validateForm(){
//1) create a variable to control status of each field.  Assume that they are not valid

//2) create variables to read the values from html

//3) do the validation

//4) send error messages

//5) return the status of each field

//***to validate first name

//1) Create variable
var validFirstname=false;
//2) read value from HTML
var firstname = document.getElementById("FirstName").value;
//3) Do validation
if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;
//4) Send error message to HTML
document.getElementById("errorMessages").innerHTML = errorMessages.toString();

//5) return status of each field
//return (validFirstname);



//***to validate LastName
//1) Create variable
var validLastname=false;
//2) read value from HTML
var lastname = document.getElementById("LastName").value;
//3) Do validation
if (lastname==="null" || lastname==="" || lastname.length > 50)
    errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
else
   validLastname = true;
//4) Send error message to HMTL

document.getElementById("errorMessages").innerHTML = errorMessages.toString();
//5) return status of each field
return (validFirstname && validLastname);

/*
//***to validate the email
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    // send error message. For example:  errorMessages = "<p>Invalid email</p>";
else
    return true; //Or assign the value to a variable. For example validEmail = true;
  }

  //***to validate for Phone
  var phone = document.getElementById("phone").value;
if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="")
//send error message. For example errorMessages = "<p>Invalid phone number </p>";
else
  return true; //Or assign the value to a variable. For example validPhone = true;

//You can also do pattern matching by using the match() method from the string object
var numbers=/^[0-9]+$/;
if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers))
//...
else
//...


///***to validate for Zipcode
var country = document.getElementById("country").value;
if (country === "USA)
// validate Zipcode according to the rules
else
//Zipcode is OK. For example: validZipcode = true;

*/
}
