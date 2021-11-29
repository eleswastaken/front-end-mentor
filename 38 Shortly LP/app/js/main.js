var link = '';
var url = `https://api.shrtco.de/v2/shorten?url=`;
const linkInput = document.getElementById("linkInput");
const request = new XMLHttpRequest();
const linkButton = document.getElementById("linkButton");
const shortenedLinks = document.querySelector(".shortened-links");

linkInput.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
        starter()
    } 
});
function starter(){
    link = linkInput.value;
    url = `https://api.shrtco.de/v2/shorten?url=${link}`;
    console.log(url)
    request.open('GET', url);
    request.responseType = "json";
    request.send();
    linkButton.innerHTML = "Loading..."
    setTimeout(createShortLink, 20000 )
    
}

function createShortLink( ){
    linkButton.innerHTML = "Shorten It!";
    // console.log(request.response);

    var newShortenedLink = `
        <div class="shortened-link flex flex-ai-c flex-jc-sb">
            <p id="link${shortenedLinks.childElementCount+1}" class="link">${link}</p>
            <hr class="hide-for-desktop">
            <div class="flex flex-ai-c">
                <p id="shortenedLink${shortenedLinks.childElementCount+1}" class="shortenedLink">${request.response.result.full_short_link}</p>
                <button onclick="copyLink('${shortenedLinks.childElementCount+1}')" class="copyIt">Copy</button>
            </div>
        </div>`;
    shortenedLinks.innerHTML += newShortenedLink;
    saveAll();
}


function copyLink(num){
    var copyText = document.getElementById(`shortenedLink${num}`);
    var placeholder = linkInput.value;
    for(child of document.querySelectorAll(".copyIt")){
        child.innerHTML = "Copy";
        child.style.backgroundColor = "hsl(180, 66%, 49%)";
    }
    document.querySelectorAll(".copyIt")[num-1].innerHTML = "Copied!";
    document.querySelectorAll(".copyIt")[num-1].style.backgroundColor = "hsl(257, 27%, 26%)";
    linkInput.value = copyText.innerHTML;
    linkInput.select();
    linkInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    linkInput.value = placeholder;
}


function saveAll(){
    var allLinks = [];
    for(child of shortenedLinks.childNodes){
        if(child.nodeName == "DIV"){
            allLinks.push(child.outerHTML)
        }
    }
    console.log(JSON.stringify(allLinks))
    localStorage.setItem("allLinks", JSON.stringify(allLinks))
    placeShortenedLinks()
}

function placeShortenedLinks(){
    for(child of JSON.parse(localStorage.allLinks)){
        shortenedLinks.innerHTML += child;
    }
}
placeShortenedLinks()