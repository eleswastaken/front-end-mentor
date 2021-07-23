
var slides = document.querySelectorAll(".slide");

function nextTab(index){
    console.log(index)
    console.log(window.innerWidth)
    document.querySelector(".select-slider").style.left = "35%";
    if(window.innerWidth < 642){
        if(index == 1){
            document.querySelector(".select-slider").style.bottom = "56%";
        } else if(index == 2){
            document.querySelector(".select-slider").style.bottom = "29%";
        } else if(index == 3){
            document.querySelector(".select-slider").style.bottom = "0%";
        }
    } else {
        if(index == 1){
            document.querySelector(".select-slider").style.left = "0";
        } else if(index == 2){
            document.querySelector(".select-slider").style.left = "33%";
        } else if(index == 3){
            document.querySelector(".select-slider").style.left = "67%";
        }
    }
    // console.log(window.innerWidth)
    selectTab(index)
}
function selectTab(index){
    // console.log('Chosen index: ', index)
    // console.log(slides[index-1])
    slides.forEach(function(element){element.style.display = "none";})
    slides[index-1].style.display = "flex";
}

// let text = document.getElementById("p01").innerHTML;
// document.getElementById("demo").innerHTML = pattern.test(text);
const emailInput = document.querySelector("#emailInput"),
      emailError = document.querySelector("#emailError"),
      pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
function validateEmail(){
    if(pattern.test(emailInput.value)){
        emailError.style.display = "none";
        emailInput.style.borderRadius = "6px";
        emailInput.style.borderColor = "hsl(0, 0%, 100%)";
    } else {
        emailError.style.display = "block";
        emailInput.style.borderColor = "hsl(0, 94%, 66%)";
        emailInput.style.borderRadius = "6px 6px 0 0";
    }
}


emailInput.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        validateEmail()
    } 
});