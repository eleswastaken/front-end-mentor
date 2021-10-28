


document.querySelector("#prev-testimonial").addEventListener('click', function(event) {
    switchTestimonial(-1)
})
document.querySelector("#next-testimonial").addEventListener('click', function(event) {
    switchTestimonial(1)
})

let testimonials = document.querySelectorAll(".testimonial")
let currentT = 0;

function switchTestimonial (n) {
    currentT += n
    console.log(currentT)
    if (currentT >= testimonials.length) currentT = 0;
    if (currentT < 0) currentT = testimonials.length-1;
    showTestimonial()
}
function showTestimonial() {
    // console.time("hello")
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }
    testimonials[currentT].style.display = "block";
}