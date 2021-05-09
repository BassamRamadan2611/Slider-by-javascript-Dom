var images= Array.from(document.querySelectorAll(".item img"));
var lightboxContainer =document.querySelector(".lightbox-container");
var next=document.getElementById("next");
var prev=document.getElementById("prev");
var close =document.getElementById("close");

var currentImageIndex=0;



for (var i =0; i < images.length; i++){

    images[i].addEventListener("click", showLightBox)
}


function showLightBox(e){

 lightboxContainer.style.display="flex";

 var imgSrc =e.target.src;
 currentImageIndex = images.indexOf(e.target);

 lightboxContainer.firstElementChild.style.backgroundImage="url("+imgSrc+")";
}
 




function hideLightBox(){
    lightboxContainer.style.display="none";
}
close.addEventListener("click", hideLightBox)


next.addEventListener("click", goNext)
prev.addEventListener("click", goPrev)

function goNext(){
     currentImageIndex ++;
     if(currentImageIndex == images.length){
        currentImageIndex =0;

     }

    lightboxContainer.firstElementChild.style.backgroundImage="url("+images[currentImageIndex].src+")";

}

function goPrev(){
    currentImageIndex --;
    if(currentImageIndex < 0 ){
        currentImageIndex =images.length -1;

    }
    lightboxContainer.firstElementChild.style.backgroundImage="url("+images[currentImageIndex].src+")";

}