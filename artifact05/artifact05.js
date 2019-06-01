var myImages = ["https://www.smartertravel.com/uploads/2017/08/Grand-Canyon-%E2%80%93-hero-1400x500.jpg",
               "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,g_north_west,h_339,q_75,w_610/v1/clients/roanoke/VBR_Sunset_68aa8771-78aa-4cab-a4e6-2035319710d1.jpg",
               "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/vibrant-chicago-skyline-sunset-jasmin-omerovic.jpg",
               "https://media.cntraveler.com/photos/5894b2d829a6a9db132b077c/master/pass/GettyImages-118998690.jpg",
               "https://www.exploregeorgia.org/sites/default/files/styles/slideshow_large/public/legacy_images/forsyth-park-fountain-1-1512424285.jpg?itok=6qo2dtMH"];
var captionImages =
["The Grand Canyon!","The Blue Ridge Parkway!", "Chicago’s Skyline!", "Haleakala National Park!","Savannah, Georgia!"];

 var index=0;
 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index];
}

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
}


function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;

 updateImage();
}

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false);
function autoSlide(){
if (document.getElementById("auto").checked)
 next();
}
setInterval(autoSlide,3000); // Next
