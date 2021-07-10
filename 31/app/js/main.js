
var slideIndex = 1;

setSlide(slideIndex)

function changeSlide(n){
    setSlide(slideIndex +=n)
}

function setSlide(n){
    const slides = document.getElementsByClassName('slide');

     
    if(n>3){n=1};
    if(n<1){n=3};
    for(var i=0;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slideIndex = n;
    slides[n-1].style.display = "flex";
}