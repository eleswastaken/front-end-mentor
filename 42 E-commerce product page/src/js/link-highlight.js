
const highlighter = document.querySelector("#nav-link-highlight");
const links = document.querySelectorAll(".links li");
const linksCont = document.querySelector("nav .links");

function highlightLink(event) {
    highlighter.style.width = event.target.offsetWidth + 10 + "px";
    highlighter.style.transform = 
    `translate(${event.target.offsetLeft}px, ${0}px)`;
}
let lastLink;
linksCont.addEventListener("mousemove", function(event) {
    if (event.target.nodeName === "A") {
        if (lastLink !== event.target){
            highlightLink(event)

            lastLink = event.target;
        }
        highlighter.style.opacity = 1;
    } else {
        // highlighter.style.opacity = 0;
    }
})
linksCont.addEventListener("mouseleave", function(event) {
        highlighter.style.opacity = 0;
})