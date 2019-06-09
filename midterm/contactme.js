var frmvalidator = new Validator("myform");
frmvalidator.addValidation("Name","req","Please enter your Name");
frmvalidator.addValidation("Name","maxlen=70",
       "Max length for Name is 70");

 frmvalidator.addValidation("Email","req", "Please enter your email");
 frmvalidator.addValidation("Email","maxlen=50",
      "Max lenght for Email is 50 characters");


 var frmvalidator = new Validator("myform");
 frmvalidator.addValidation("Comment","req","Please enter your comment here");

//Validate the name
 function validateForm(){
   var LETTERS = /^[A-Za-z]+$/;
   var NUMBERS = /[0-9]/g;
   var errorMessages= "";
   //1) Create variable
   var validname=false;
   //2) read value from HTML
   var name = document.getElementById("Name").value;
   //3) Do validation
   if (name==="null" || name==="" || name.length > 20  )
       errorMessages += "<p>The name is required and can only accept alphabetical values and maximum 20 characters</p>";
   else
   {
   //  if(firstname.match(^[a-zA-Z\\s]*$))
   if (name.match(NUMBERS) == null)
        {
          validname = true;
        }
      else
        {

          errorMessages += "<p>The name can only accept alphabetical values</p>";
           validname = false;
        }
    }

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
//document.getElementById("errorMessages").innerHTML = errorMessages.toString();
    //return validEmail; //Or assign the value to a variable. For example validEmail = true;
    //return (validFirstname && validLastname && validEmail);


document.getElementById("errorMessages").innerHTML = errorMessages.toString();

  return (validname && validEmail);
}
