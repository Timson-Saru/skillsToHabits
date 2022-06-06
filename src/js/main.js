import { changeTitleColor } from './animation/animations.js';
import initObserver from './animation/navigationObserver.js';
import isMobileDevice from './helpers/checkMobile.js';
import AOS from 'aos/dist/aos.js'

if (isMobileDevice()) {
  document.querySelector('.spinnerBackground').remove();
  document.body.tabIndex = 0;
  AOS.init({ disable: 'mobile' });
}
else {
  const content = document.querySelector('.loadingContentWrapper');
  const animationBox = document.querySelector('.title-frame')
  const spinner = document.querySelector('.spinnerBackground');
  const body = document.querySelector('body');
  spinner.style.display = 'flex';
  body.style.overflowY = 'hidden';
  content.classList.add('hideContentWhileLoading');
  animationBox.classList.add('animationOnloadDelay');

  function contentReady() {

    spinner.style.display = 'none';
    body.style.overflowY = 'auto';
    content.classList.remove('hideContentWhileLoading');
    content.classList.add('showContentWhenLoaded');
    animationBox.classList.remove('animationOnloadDelay');

    initObserver();

    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'bottom-bottom',
      disable: 'mobile',
    });

    changeTitleColor();
  }
  window.onload = contentReady;
}
