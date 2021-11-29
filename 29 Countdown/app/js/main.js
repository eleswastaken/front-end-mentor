
var lastDay = 0;
var lastHour = 0;
var lastMinute = 0;
var lastSecond = 0;

var totalTime = 1209600;
setInterval(displayTime, 1000);
function displayTime(){  

    const daysCont = document.getElementById("daysCont");
    const hoursCont = document.getElementById("hoursCont");
    const minutesCont = document.getElementById("minutesCont");
    const secondsCont = document.getElementById("secondsCont");

    const daysUpperFront = document.getElementById("daysUpperFront");
    const hoursUpperFront = document.getElementById("hoursUpperFront");
    const minutesUpperFront = document.getElementById("minutesUpperFront");
    const secondsUpperFront = document.getElementById("secondsUpperFront");

    const daysBottom = document.getElementById("daysBottom");
    const hoursBottom = document.getElementById("hoursBottom");
    const minutesBottom = document.getElementById("minutesBottom");
    const secondsBottom = document.getElementById("secondsBottom");

    daysUpperFront.innerHTML = ("0" + Math.floor(totalTime/86400)).slice(-2);
    hoursUpperFront.innerHTML = ("0" + Math.floor(totalTime%86400/3600)).slice(-2);
    minutesUpperFront.innerHTML = ("0" + Math.floor(totalTime%86400%3600/60)).slice(-2);
    secondsUpperFront.innerHTML = ("0" + totalTime%86400%3600%60).slice(-2);

    daysBottom.innerHTML =("0" + Math.floor(totalTime/86400)).slice(-2);
    hoursBottom.innerHTML =("0" + Math.floor(totalTime%86400/3600)).slice(-2);
    minutesBottom.innerHTML =("0" + Math.floor(totalTime%86400%3600/60)).slice(-2);
    secondsBottom.innerHTML =("0" + totalTime%86400%3600%60).slice(-2);

    daysCont.innerHTML =("0" + Math.floor(totalTime/86400)).slice(-2);
    hoursCont.innerHTML =("0" + Math.floor(totalTime%86400/3600)).slice(-2);
    minutesCont.innerHTML =("0" + Math.floor(totalTime%86400%3600/60)).slice(-2);
    secondsCont.innerHTML =("0" + totalTime%86400%3600%60).slice(-2);

    if(!(Math.floor(totalTime%86400%3600/60) == lastMinute)){
        lastMinute = Math.floor(totalTime%86400%3600/60);
        flipCard(3);
    }
    totalTime -=1
    flipCard(4)
}
var angle = 360
function flipCard(card){
    // const upperContList = document.getElementsByClassName("upper-cont");


    // upperContList[card-1].style.transform = "rotateX("+angle+"deg)";
    // angle +=360
    // console.log(card, "flipped")
    // console.log(upperContList[card-1])
}