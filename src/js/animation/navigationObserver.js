import { logoJiggle, stopLogoJiggle } from './animations.js';

export default function initObserver() {
  const intersectionObserverPoint = document.querySelector('.intersectionObserverPoint');
	const navContent = document.querySelector('.nav-box');
  const navBackground = document.querySelector('.nav-frame');
	const menuLinkCollection = document.querySelectorAll('.nav-link');
  const logoFrame = document.querySelector('.jiggleLogoFrame');


  let animationTriggerFlag = false;
	const options = {
		threshold: 0.9,
		rootMargin: '0px',
	};

	const observer = new IntersectionObserver(function (entries) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
        stopLogoJiggle()
        logoFrame.style.transform = 'scale(0.8)'
        navBackground.classList.add('nav-frame-scrolled');
				navContent.classList.add('nav-box-scrolled');
				menuLinkCollection.forEach((element) => {
					element.classList.add('nav-link-scrolled');
				});
        animationTriggerFlag = true;
			} else {
        logoFrame.style.transform = 'scale(1)'
        if (animationTriggerFlag) {
          logoJiggle();
        }
        navBackground.classList.remove('nav-frame-scrolled');
				navContent.classList.remove('nav-box-scrolled');
				menuLinkCollection.forEach((element) => {
					element.classList.remove('nav-link-scrolled');
				});
			}
		});
	}, options);

	observer.observe(intersectionObserverPoint);
}
