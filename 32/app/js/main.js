
const billInput = document.getElementById("billInput"),
      peopleNumber = document.getElementById("peopleNumber"),
      customTip = document.getElementById("customTip"),

      tipAmount = document.getElementById("tipAmount"),
      totalAmount = document.getElementById("total"),
      resetButton = document.getElementById("resetButton"),
      allTipButtons = document.getElementsByClassName("tip"),

      errorPeople = document.getElementById("errorPeople"),
      errorBill = document.getElementById("errorBill");
var bill = 0,
    tip = 0, //in perscent
    people = 1;

function setButton(button){
    for(child of allTipButtons){
        child.style.color = "hsl(0, 0%, 100%)";
        child.style.backgroundColor = "hsl(183, 100%, 15%)";
    }
    customTip.style.backgroundColor = "hsl(189, 41%, 97%)";
    customTip.value = '';
    button.style.color = "hsl(183, 100%, 15%)";
    button.style.backgroundColor = "hsl(172, 67%, 45%)";
}
function checkZero(num){
    return !num == 0;
};

billInput.addEventListener("keydown", function (e) {    
    if (e.code === "Enter") {
        if(checkZero(parseFloat(billInput.value))){
            bill = parseFloat(billInput.value);
            billInput.style.outline = "2px solid hsl(172, 67%, 45%)";
            errorBill.style.display = "none";
        }else{
            billInput.style.outline = "2px solid red";
            errorBill.style.display = "block";
        }
        calculate()
    }
});

customTip.addEventListener("keydown", function(e){
    if (e.code === "Enter") {
        if(!customTip.value.trim() == ''){
            tip = parseFloat(customTip.value)
            for(child of allTipButtons){
                child.style.color = "hsl(0, 0%, 100%)";
                child.style.backgroundColor = "hsl(183, 100%, 15%)";
            };
            customTip.style.backgroundColor = "hsla(172, 67%, 45%, 40%)";
        }
        calculate()
    }
});
peopleNumber.addEventListener("keydown", function(e){
    if (e.code === "Enter") {
        if(checkZero(parseFloat(peopleNumber.value))){
            people = parseFloat(peopleNumber.value);
            peopleNumber.style.outline = "2px solid hsl(172, 67%, 45%)";
            errorPeople.style.display = "none";
        }else{
            peopleNumber.style.outline = "2px solid red";
            errorPeople.style.display = "block";
        }
        calculate()
    }
});

function setTip(button, buttonTip){
    tip = buttonTip;
    setButton(button)
    calculate()
};

function calculate(){
    totalAmount.innerHTML = Math.round(bill/people*100)/100 + Math.round(bill/people/100*tip*100)/100;;
    tipAmount.innerHTML = Math.round(bill/people/100*tip*100)/100;
    resetButton.style.opacity = '1';
}

function setReset(){
}
function reset(){
    bill = 0;
    tip = 0;
    value = 0;
    console.log(bill, tip, people);

    for(child of document.getElementsByTagName("input")){
        child.value = '';
    };
    customTip.style.backgroundColor = "hsla(172, 67%, 45%, 40%)";
    calculate();
    setButton(null);
}