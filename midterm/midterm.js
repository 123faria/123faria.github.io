var currentDate = new Date(),
     day = currentDate.getDate(),
     month = currentDate.getMonth() + 1,
     year = currentDate.getFullYear();
 //document.write(day + "/" + month + "/" + year)
 var currentTime = new Date(),
       hours = currentTime.getHours(),
       minutes = currentTime.getMinutes();

 	if (minutes < 10) {
 	 minutes = "0" + minutes;
   }

 	//document.write(hours + ":" + minutes)



var showdate = document.getElementById("demo").innerHTML;
//showdate.style.color= "red";
//showdate.textContent= day + "/" + month + "/" + year;
 document.getElementById("demo").innerHTML= day + "/" + month + "/" + year + "  " + hours + ":" + minutes;
