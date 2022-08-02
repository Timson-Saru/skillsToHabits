import { initNavObserver } from './animation/intersectionObservers.js';
import isMobileDevice from './helpers/checkMobile.js';
import AOS from 'aos/dist/aos.js';
// import Swiper from '/node_modules/swiper/swiper-bundle.js';

if (isMobileDevice()) {
  document.querySelector('.spinnerBackground').remove();
  document.querySelector('.miskBlockAnimationFrame').remove();
  document.body.tabIndex = 0; // fix for IOS hover effect on tap
  AOS.init({ disable: 'mobile' });
}
else {
  const content = document.querySelector('.loadingContentWrapper');
  const spinner = document.querySelector('.spinnerBackground');
  const body = document.querySelector('body');
  spinner.style.display = 'flex';
  body.style.overflowY = 'hidden';
  content.classList.add('hideContentWhileLoading');

  function contentReady() {

    spinner.style.display = 'none';
    body.style.overflowY = 'auto';
    content.classList.remove('hideContentWhileLoading');
    content.classList.add('showContentWhenLoaded');

    initNavObserver();

    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
      anchorPlacement: 'bottom-bottom',
      disable: 'mobile',
    });

  }
  window.onload = contentReady;
}
