
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.body.className = themeName;
}

function loadTheme(){
    toggle = document.getElementById("themeToggle");
    if(localStorage.getItem('theme') === 'secondTHEME'){
        setTheme('secondTHEME');
        toggle.value = 2;

    }else if(localStorage.getItem('theme') === 'thirdTHEME'){
        setTheme('thirdTHEME');
        toggle.value = 3;
    }else {
        setTheme('firstTHEME');
        toggle.value = 1;

    }
    // console.log("loaded", toggle.value, "theme")
}

function selectTheme(){
    toggle = document.getElementById("themeToggle");
    // console.log(toggle.value)

    if (toggle.value == 1){
        setTheme('firstTHEME');
   }else if(toggle.value == 2){
        setTheme('secondTHEME');
   }else if(toggle.value == 3){
        setTheme('thirdTHEME');
   }
}



var lastSign = '';
var afterEqual = false;

function calc(sign){
    const mainNum = document.getElementById("main-number");
    const secnNum = document.getElementById("secondary-number");
    const action = document.getElementById("sign");

    if (afterEqual){
        afterEqual = false;
    }
    if((mainNum.innerHTML.length == 0 && secnNum.innerHTML.length == 0)){
        // pass
    }else if(!secnNum.innerHTML.length==0 && !lastSign.length==0 && mainNum.innerHTML.length==0){
        lastSign= sign;
        action.innerHTML = sign;
    }else if(!mainNum.innerHTML.length == 0 && !secnNum.innerHTML.length == 0 ){
        calculate(sign, parseFloat(secnNum.innerHTML), parseFloat(mainNum.innerHTML));
    }else{
        secnNum.innerHTML = mainNum.innerHTML;
        mainNum.innerHTML = '';
        lastSign = sign;
        action.innerHTML = sign;
    }
}
function calculate(sign, num1, num2){
    const mainNum = document.getElementById("main-number");
    const secnNum = document.getElementById("secondary-number");
    const action = document.getElementById("sign");
    var result = 0;
    
    if(lastSign=='+'){
        result = num1 + num2;

    }else if(lastSign=='-'){
        result = num1 - num2;

    }else if(lastSign=='x'){
        result = num1 * num2;

    }else if(lastSign=='/'){
        result = num1 / num2;
    }

    action.innerHTML = sign;
    lastSign = sign;
    mainNum.innerHTML = '';
    secnNum.innerHTML = result;
}
function showResult(){
    afterEqual = true;

    const mainNum = document.getElementById("main-number");
    const secnNum = document.getElementById("secondary-number");
    const action = document.getElementById("sign");
    
    if(secnNum.innerHTML.length==0){
        if(mainNum.innerHTML.length==0){
            secnNum.innerHTML = '0';
        }else{
            secnNum.innerHTML = mainNum.innerHTML;
        }
        mainNum.innerHTML = '';
        action.innerHTML = '=';
    }else if(!secnNum.innerHTML.length==0 && action.innerHTML=='='){
        // pass 
    }else{
        var num1 = parseFloat(secnNum.innerHTML);
        var num2 = parseFloat(mainNum.innerHTML);
        var result = 0;

        if(lastSign=='+'){
            result = num1 + num2;
    
        }else if(lastSign=='-'){
            result = num1 - num2;
    
        }else if(lastSign=='x'){
            result = num1 * num2;
    
        }else if(lastSign=='/'){
            result = num1 / num2;
        }
        secnNum.innerHTML = result;
        mainNum.innerHTML = '';
        action.innerHTML = '=';
    }
}

function delLast(){
    const output = document.getElementById("main-number");
    output.innerHTML = output.innerHTML.slice(0, -1);
}
function showNum(value){
    const output = document.getElementById("main-number");

    if (afterEqual){
        reset();
        afterEqual = false;
    }

    if (value == '.' && (output.innerHTML.length == 0 || output.innerHTML.includes('.'))){
        // pass
    }else if(value == '.' && output.innerHTML.slice(-1) == '0' && output.innerHTML.length == 1){
        output.innerHTML += value;
    }else if(!value == 0  && output.innerHTML.length == 1 && output.innerHTML.slice(-1) == '0'){
        output.innerHTML = value;
    }else if (value == 0 && output.innerHTML[0] == '0' && output.innerHTML.length < 2){
        // pass
    }else{
        output.innerHTML += value;
    }
}
function reset(){
    const output = document.getElementById("main-number");
    const secnNum = document.getElementById("secondary-number");
    const action = document.getElementById("sign");
    output.innerHTML = "";
    secnNum.innerHTML = "";
    action.innerHTML = "";
}