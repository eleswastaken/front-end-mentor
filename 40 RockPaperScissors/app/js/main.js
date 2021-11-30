
if(localStorage.getItem("score")==null || localStorage.getItem("score").trim()==''){
    document.querySelector("#scoreNum").innerHTML = '00';
} else {
    document.querySelector("#scoreNum").innerHTML = localStorage.getItem("score");
}

const gameIcons = document.querySelectorAll(".gameIcon");
function moveIcon(element){
    if (window.innerWidth > 500){
        document.querySelector(".action-cont").style.width = "400px";
        document.querySelector(".action-cont").style.margin = "170px auto 0";
    }
    document.querySelector(".action-cont").style.transition = "150ms ease";
    document.querySelector(".action-cont").style.background = "none";
    element.classList.add(`${element.classList[1]}-move`);
    document.querySelector(".picked").style.display = "flex";
    document.querySelector(".picked").style.transition = "150ms ease";
    element.removeAttribute("onclick");
    for(child of gameIcons){
        if(child.classList[1] !== element.classList[1]){
            child.style.display = "none";
        }
    }
    setTimeout(compMove, 1000, element.classList[1]);
}

function compMove(player){
    var a = gameIcons[Math.floor(Math.random()*gameIcons.length)].classList[1];
    document.querySelector(".action-cont").innerHTML +=
        `<div class="computer-choice ${a} ${a}-comp">
            <div class="inner-cont">
                <img src="images/icon-${a}.svg" alt="">
            </div>
        </div>`;
    
    setTimeout(chooseWinner, 2000, player,a)
}

function chooseWinner(player, computer){
    if(window.innerWidth > 900){
        document.querySelector(".action-cont").style.width = "600px";
        document.querySelector(".picked").style.width = "758px";
        document.querySelector(".picked").style.marginLeft = "-363px";
    }
    if(beats(player, computer)){
        document.querySelector("#scoreNum").innerHTML = parseInt(document.querySelector("#scoreNum").innerHTML)+1;
        localStorage.setItem("score", document.querySelector("#scoreNum").innerHTML)
    }
    document.querySelector(".results-cont").style.display = "block";

}

const winSt = ['rock', 'paper', 'scissors']
function beats(player, computer){
    if(winSt.slice(winSt.indexOf(player)-1) == computer){
        console.log('you win')
        document.querySelector(".results-cont p").innerHTML = 'you win';
        return true
    } else if(winSt[winSt.indexOf(player)-1] == computer){
        console.log('you win')
        document.querySelector(".results-cont p").innerHTML = 'you win';
        return true
    } else if(winSt[winSt.indexOf(player)] == computer){
        document.querySelector(".results-cont p").innerHTML = 'draw!';
        console.log("draw!")
    } else if(winSt.indexOf(player)+1 > 2){
        if(winSt[0] == computer){
            console.log("you loose")
            return false
        }
    }
}
 



// Get the modal
var rulesCont = document.getElementById("rulesCont");

// Get the button that opens the modal
var btn = document.getElementById("rulesButton");

// Get the <span> element that closes the modal
var closeRules = document.getElementsByClassName("close-rules")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  rulesCont.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeRules.onclick = function() {
  rulesCont.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == rulesCont) {
    rulesCont.style.display = "none";
  }
}