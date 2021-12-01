

const thumbnails = document.querySelectorAll(".thumbnail");
const heroImg = document.querySelector("#hero-image");
let lastlightboxTh;
let lastHeroTh = thumbnails[0];

const lightboxThumbnails = document.querySelectorAll(".lightbox-thumbnail");
const lightboxHero = document.querySelector("#lightbox-hero");
const closeLightbox = document.querySelector("#close-lightbox")
const lightbox = document.querySelector("#gallery-lightbox");
lightbox.style.display = "none"

const swipeLeft = document.querySelector("#swipe-left");
const swipeRight = document.querySelector("#swipe-right");

swipeLeft.addEventListener('click', function(event) {
    let n = Array.from(thumbnails).indexOf(lastHeroTh)
    if ( n === 0 ) { n = thumbnails.length-1}
    else {n--}
    let thumb = thumbnails[n]
    switchHeroImg(thumb.dataset.url)
    thumbnails.forEach(t => {t.dataset.selected = ""})
    thumb.dataset.selected = 1;
    lastHeroTh = thumb;
})
//  NEXT THUMBNAIL
swipeRight.addEventListener('click', function(event) {
    let n = Array.from(thumbnails).indexOf(lastHeroTh)
    if ( n === thumbnails.length-1 ) { n = 0 }
    else {n++}
    let thumb = thumbnails[n]
    switchHeroImg(thumb.dataset.url)
    thumbnails.forEach(t => {t.dataset.selected = ""})
    thumb.dataset.selected = 1;
    lastHeroTh = thumb;
})

function switchHeroImg(src) {
    heroImg.firstElementChild.src = src
    heroImg.firstElementChild.dataset.url = src
}
//  THUMBNAIL SELECTOR
thumbnails.forEach(thumb => {
    thumb.addEventListener("click", function(event) {
        switchHeroImg(thumb.dataset.url)
        thumbnails.forEach(t => {t.dataset.selected = ""})
        // for styling selected one
        thumb.dataset.selected = 1;
        // if (!thumb.dataset.selected) {
        // }
    })
})

//  OPEN LIGHTBOX
if (window.innerWidth > 900) {
    heroImg.addEventListener('click', function(event) {
        if (lightbox.style.display === "none") {
            lightbox.style.display = "flex";
        } else {
            lightbox.style.display = "none";
        }
        setLightboxHero(heroImg.firstElementChild.dataset.url)
    })

}

function switchLightboxHero(src) {
    lightboxHero.firstElementChild.src = src;
}
function switchLightboxThumbnail(thumb) {
    lightboxThumbnails.forEach(t => {t.dataset.selected = ""})
    thumb.dataset.selected = 1;
    lastlightboxTh = thumb;
}
// set lightbox image to the clicked one
function setLightboxHero(url) {
    let thumb = Array.from(lightboxThumbnails).find(t => t.dataset.url === url)
    switchLightboxThumbnail(thumb)
    switchLightboxHero(url)
}

//  OPEN LIGHTBOX THUMBNAIL
lightboxThumbnails.forEach(thumb => {
    thumb.addEventListener("click", function(event) {
        switchLightboxHero(thumb.dataset.url)
        switchLightboxThumbnail(thumb)
        if (!thumb.dataset.selected) {
        }
    })
})
// PREVIOUS THUMBNAIL
lightboxHero.querySelector(".left").addEventListener('click', function(event) {
    let n = Array.from(lightboxThumbnails).indexOf(lastlightboxTh)
    if ( n === 0 ) { n = lightboxThumbnails.length-1}
    else {n--}
    let thumb = lightboxThumbnails[n]
    switchLightboxHero(thumb.dataset.url)
    switchLightboxThumbnail(thumb)
})
//  NEXT THUMBNAIL
lightboxHero.querySelector(".right").addEventListener('click', function(event) {
    let n = Array.from(lightboxThumbnails).indexOf(lastlightboxTh)
    if ( n === lightboxThumbnails.length-1 ) { n = 0 }
    else {n++}
    let thumb = lightboxThumbnails[n]
    switchLightboxHero(thumb.dataset.url)
    switchLightboxThumbnail(thumb)
})
closeLightbox.addEventListener('click', function (event) {
    lightbox.style.display = "none";
})
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox || event.target === closeLightbox) {
        lightbox.style.display = "none";
    }
})


let mobileMenu = document.querySelector("#mobile-menu");
function openNav(event) {
    linksCont.parentElement.style.display = "block";
    mobileMenu.removeEventListener('click', openNav)
    mobileMenu.addEventListener('click', closeNav)
    mobileMenu.firstElementChild.style.display = "none";
    mobileMenu.lastElementChild.style.display = "block";
    mobileMenu.setAttribute("aria-expanded", "true");

    linksCont.parentElement.addEventListener('click', function(event) {
        if (event.target === this) {
            closeNav()
        }
    })
    document.body.style.paddingRight = window.innerWidth - document.body.offsetWidth + "px"
    document.body.style.overflowY = "hidden";
}
function closeNav(event) {
    linksCont.parentElement.style.display = "none";
    mobileMenu.removeEventListener('click', closeNav)
    mobileMenu.addEventListener('click', openNav)
    mobileMenu.firstElementChild.style.display = "block";
    mobileMenu.lastElementChild.style.display = "none";
    mobileMenu.setAttribute("aria-expanded", "false");


    document.body.style.overflowY = "unset";
    document.body.style.paddingRight = "0";
}
mobileMenu.addEventListener('click', openNav)