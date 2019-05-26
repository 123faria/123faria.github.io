 function ValidateFrom() {
   var validUsername = false;
   var validpassword = false;
   var validFirstName = false;
   var validphone = fales;

   var letters = /^[A-Za-z]+$/;
   var numbers = /^[0-9]+$/;
   
   var errorMessages = "";  //All the error Messages are going to stay in this variable
   /***********VALIDATES USERNAEM ******** */
   //Required filed
   //This syntax is using name-of-form.name-of-filed.value
   //you can also use document .getElementById("id-of-filed").value

   /***********VALIDATES USERNAEM ******** */
   //Required. Maximum 12 characters.
   if (mycontact.username.value.lenght > 12 || mycontact.username.value===null || mycontact.username.value==="")
   errorMessages += "<p>The username must be less than 12 characters and is required</P>";
   else
   validUsername =true;

   //console.log(validUsername);
      /***********VALIDATES PASSWORD ******** */
      if (mycontact.password.value==null || mycontact.password.value=== "" || mycontact.password.value.lenght >7)
      errorMessages += "<p>The password must be less than 7 characters and is required</P>";
      else
      validUserpassword =true;

      /***********VALIDATES FIRSTNAME ******** */
      if (mycontact.firstname.value==null || mycontact.firstname.value=== "" || mycontact.firstname.value.lenght >20 || !ycontact.firstname.value.match(letters))
      errorMessages += "<p>The firstname must be less than 20 characters and is required. only letters and numbers are accepted</P>";
      else
      validFirstName =true;

      /***********VALIDATES PHONENUMBER ******** */
      if (mycontact.Phone.value==null || mycontact.Phone.value=== "" || mycontact.Phone.value.lenght >20 || !ycontact.Phone.value.match(numbers))
      errorMessages += "<p>The phone number must be less than 15 characters and is required. only numbers are accepted</P>";
      else
      validphone =true;

      document.getElementById("errorMessages").innerHTML = errorMessages;
      //make sure you return all the boolean variable that are checking each filed
      return (validUsername && validpassword && validFirstName && validphone) ;
    }
