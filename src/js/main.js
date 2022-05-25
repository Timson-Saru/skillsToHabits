import changeTitleColor from './animation/animations.js';
import initObserver from './animation/navigationObserver.js';
import isMobileDevice from './helpers/checkMobile.js';
import AOS from 'aos/dist/aos.js'

const content = document.querySelector('.loadingContentWrapper');
const animationBox = document.querySelector('.title-frame')
const spinner = document.querySelector('.spinnerBackground');
const body = document.querySelector('body');
body.style.overflowY = 'hidden';
content.classList.add('hideContentWhileLoading');
animationBox.classList.add('animationOnloadDelay');

function contentReady() {

  spinner.remove();
  body.style.overflowY = 'auto';
  content.classList.remove('hideContentWhileLoading');
  content.classList.add('showContentWhenLoaded');
  animationBox.classList.remove('animationOnloadDelay');

  if (!isMobileDevice()) initObserver();
  else body.tabIndex = 0; // чтобы работал кривой IOS c button: hover эфектами при табе.

  AOS.init({
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    anchorPlacement: 'bottom-bottom', // defines which position of the element regarding to window should trigge
    disable: 'mobile',
  });

  changeTitleColor();

}

window.onload = contentReady;
