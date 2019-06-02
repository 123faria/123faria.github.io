 var frmvalidator = new Validator("myform");
 frmvalidator.addValidation("FirstName","req","Please enter your First Name");
 frmvalidator.addValidation("FirstName","maxlen=20",
        "Max length for FirstName is 20");

 frmvalidator.addValidation("LastName","req", "Please enter your Last Name");
 frmvalidator.addValidation("LastName","maxlen=50",
  "Max lenght for LastName is 50");

 frmvalidator.addValidation("Email","req", "Please enter your email");
 frmvalidator.addValidation("Email","maxlen=50",
  "Max lenght for Email is 50 characters");

 frmvalidator.addValidation("Phone","req", "please enter your phone");
 frmvalidator.addValidation("Phone","maxlen=15");

 frmvalidator.addValidation("Username","req", "please enter your username");
 frmvalidator.addValidation("Username","maxlen=50");

 frmvalidator.addValidation("Password","maxlen=50", "please enter your password");
 frmvalidator.addValidation("Password","maxlen=7");

 frmvalidator.addValidation("Address","req", "please enter your address");

 frmvalidator.addValidation("City","req", "please enter your city");

 frmvalidator.addValidation("State","req", "please select your state");

 frmvalidator.addValidation("Country","req", " please select your country");
 frmvalidator.addValidation("Country","dontselect=000");


//view sourceprint?


function validateForm(){
  var LETTERS = /^[A-Za-z]+$/;
  var NUMBERS = /[0-9]/g;
  var errorMessages= "";
  //1) Create variable
  var validFirstname=false;
  //2) read value from HTML
  var firstname = document.getElementById("FirstName").value;
  //3) Do validation
  if (firstname==="null" || firstname==="" || firstname.length > 20  )
      errorMessages += "<p>The firstname is required and can only accept alphabetical values and maximum 20 characters</p>";
  else
  {
  //  if(firstname.match(^[a-zA-Z\\s]*$))
  if (firstname.match(NUMBERS) == null)
       {
         validFirstname = true;
       }
     else
       {

         errorMessages += "<p>The firstname can only accept alphabetical values</p>";
          validFirstname = false;
       }
   }

  //4) Send error message to HTML
  //document.getElementById("errorMessages").innerHTML = errorMessages.toString();
  //5) return status of each field
  //return (validFirstname);


  //***to validate LastName
  //1) Create variable
  var letters = /^[A-Za-z]+$/;
  var validLastname=false;
  //2) read value from HTML
  var lastname = document.getElementById("LastName").value;
  //3) Do validation
  if (lastname ==="null" || lastname ==="" || lastname.length > 50  )
      errorMessages += "<p>The lastname is required and can only accept alphabetical values and maximum 50 characters</p>";
  else
  {
  if(lastname.match(NUMBERS) == null)
   {
     validLastname = true;
   }
  else
   {

     errorMessages += "<p>The lastname is required and can only accept alphabetical values and maximum 50 characters</p>";
      validLastName = false;
   }
 }


{
//errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
   validLastname = true;
 }
//4) Send error message to HMTL
//document.getElementById("errorMessages").innerHTML = errorMessages.toString();
//5) return status of each field
//return (validFirstname && validLastname);


//***to validate the email
var vaildeEmail=false;
var userEmail = document.getElementById("Email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length)
  errorMessages +="<p>Invalid email</p>";
else
 validEmail = true;
    // send error message. For example:  errorMessages = "<p>Invalid email</p>";
document.getElementById("errorMessages").innerHTML = errorMessages.toString();
    //return validEmail; //Or assign the value to a variable. For example validEmail = true;
    //return (validFirstname && validLastname && validEmail);


///phone validation
    var validPhone = false;
    var phone = document.getElementById("Phone").value;
  //  if (isNaN(phone) || phone.lenght >15 || phone===null || phone==="")
   if (phone.lenght >15 || phone===null || phone==="")
    errorMessages +="<p> phone number is required</p>";
    //send error message. For example errorMessages = "<p>Invalid phone number </p>";
    else
      validPhone = true; //Or assign the value to a variable. For example validPhone = true;

    //You can also do pattern matching by using the match() method from the string object
    var numbers=/^[0-9]+$/;
    if (!phone.match(numbers))
    {
       errorMessages +="<p>Invalid phone number</p>";
       validPhone = false;
    }
    else
     validPhone = true;
     document.getElementById("errorMessages").innerHTML = errorMessages.toString();



       //return (validFirstname && validLastname && validEmail && validPhone);
    //...


///***to validate for Zipcode
var country = document.getElementById("Country").value;
var validcountry = false;
var validzip = false;
var zip = document.getElementById("zip").value;

if (country===null || Country==="")
errorMessages +="<p> country is required </p>";
else
  validcountry = true;


if (country === "USA")
{
  if (zip===null || zip==="")
  {
     errorMessages +="<p> zip is required in USA</p>";
     validzip = false;
  }
  else
  {
    if (zip.lenght >5 )
    {
       errorMessages +="<p> zip can only accept 5 digits</p>";
       validzip = false;
    }
    else
     validzip = true;
  }
}


//document.getElementById("errorMessages").innerHTML = errorMessages.toString();

document.getElementById("errorMessages").innerHTML = errorMessages.toString();

  return (validFirstname && validLastname && validEmail && validPhone && validcountry && validzip);

// validate Zipcode according to the rules

//Zipcode is OK. For example: validZipcode = true;*/
}
