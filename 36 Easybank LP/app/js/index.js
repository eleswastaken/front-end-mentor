
console.log('hello app')

let isHidden = false;
const header = document.querySelector('header');

function clickAway(event) {
  // need to redo everything, including the styling and the html
  console.log(event.target)
}

mobileMenu.addEventListener('click', function(event) {

  if (isHidden) {
    isHidden = false;
    document.body.style.overflow = '';
    document.body.removeEventListener('click', clickAway);
  } else {
    isHidden = true;
    document.body.style.overflow = 'hidden';
    document.body.addEventListener('click', clickAway);
  }
})
