export default function initObserver() {
  const intersectionObserverPoint = document.querySelector('.intersectionObserverPoint');
	const navContent = document.querySelector('.nav-box');
  const navBackground = document.querySelector('.nav-frame');
	const menuLinkCollection = document.querySelectorAll('.nav-link');
	const navLogo = document.querySelector('.nav-logo');

	let options = {
		threshold: 0.9,
		rootMargin: '0px',
	};

	const observer = new IntersectionObserver(function (entries) {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) {
        navBackground.classList.add('nav-frame-scrolled');
				navContent.classList.add('nav-box-scrolled');
				navLogo.classList.add('nav-logo-scrolled');
				menuLinkCollection.forEach((element) => {
					element.classList.add('nav-link-scrolled');
				});
			} else {
        navBackground.classList.remove('nav-frame-scrolled');
				navContent.classList.remove('nav-box-scrolled');
				navLogo.classList.remove('nav-logo-scrolled');
				menuLinkCollection.forEach((element) => {
					element.classList.remove('nav-link-scrolled');
				});
			}
		});
	}, options);

	observer.observe(intersectionObserverPoint);
}
