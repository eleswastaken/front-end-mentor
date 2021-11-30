
const navWrapper = document.querySelector("#nav-wrapper");
const menuBtn = document.querySelector("#mobile-menu");
const swipeButtons = document.querySelectorAll("[data-value]");

const slides = [document.querySelectorAll("[data-slide='0']"),document.querySelectorAll("[data-slide='1']"),document.querySelectorAll("[data-slide='2']"),];
let currentSlide = 0;

setSlide(currentSlide)
// for buttons to be exactly between images in case there is a scrollbar
// if (window.innerWidth - document.body.offsetWidth == 17 && window.innerWidth > 1240) {
//     swipeButtons.forEach(btn => btn.style.width = 'calc(10vw / 2 - 1px)')
// }
if (window.innerWidth - document.body.offsetWidth == 17 && window.innerWidth > 1240) {
    swipeButtons.forEach(btn => btn.style.width = 'calc(5vw - 1px)')
}
window.addEventListener('resize', function(event) {
//     // everything below is solely for those who resize their browsers(for some reason :| )
//     setSlide(currentSlide)
    if (window.innerWidth - document.body.offsetWidth == 17 && window.innerWidth > 1280) {
        // swipeButtons.forEach(btn => btn.style.width = 'calc(5vw)')
    }
    else if (window.innerWidth < 1280) {
        swipeButtons.forEach(btn => btn.style.width = '')
    }

//     } else {
//         swipeButtons.forEach(btn => btn.style.width = '5vw')
//     }
})

function setSlide(n = currentSlide) {
    for (let slide of slides) {
        for (let el of slide) {
            el.style.display = 'none';
        } 
    }
    for (let el of slides[n]) {
            el.style.display = 'block';
        if (window.innerWidth < 540 && /desktop/.test(el.src)) {
            el.style.display = 'none';
        } else if (window.innerWidth > 540 && /mobile/.test(el.src)) {
            el.style.display = 'none';
        }
    }
}
swipeButtons.forEach(btn => btn.addEventListener('click', function() {
    currentSlide += +this.dataset.value
    if (currentSlide > 2) currentSlide = 0;
    else if (currentSlide < 0) currentSlide = 2;
    setSlide(currentSlide)
}))

function toggleMenu() {
    navWrapper.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
    menuBtn.firstElementChild.classList.toggle("hidden");
    menuBtn.lastElementChild.classList.toggle("hidden");
}
menuBtn.addEventListener("click", toggleMenu);
navWrapper.addEventListener("click", toggleMenu);
