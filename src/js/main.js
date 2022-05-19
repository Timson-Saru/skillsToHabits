import changeTitleColor from './animation/animations.js';
import initObserver from './navigation/navigationObserver.js';

const content = document.querySelector('.hideContentWhileLoading');
const animationBox = document.querySelector('.title-frame')
const spinner = document.querySelector('.spinnerBackground');
const body = document.querySelector('body');
body.style.overflowY = 'hidden';
animationBox.classList.add('animationOnloadDelay')

window.onload = function() {
  spinner.remove();
  body.style.overflowY = 'auto';
  content.classList.remove('hideContentWhileLoading');
  animationBox.classList.remove('animationOnloadDelay');
  if (document.documentElement.clientWidth > 770) {
    initObserver();
  }

  changeTitleColor();

  AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    anchorPlacement: 'bottom-bottom', // defines which position of the element regarding to window should trigge
    disable: 'mobile',
  });
}


