
export function changeTitleColor() {
	const firstSpan = document.querySelector('.first-title-span');
	const secondSpan = document.querySelector('.second-title-span');
	const thirdSpan = document.querySelector('.third-title-span');
	setTimeout(function () {
		firstSpan.style.color = 'rgb(0, 153, 255)';
    secondSpan.style.color = 'rgb(233, 54, 137)';
    thirdSpan.style.color = 'rgb(252, 148, 13)';
	}, 5800);
}

export function logoJiggle() {
  let fontIndex = 0;
  const logoLetters = document.querySelectorAll('.nav-logo-latter');
  const fontColors = ['rgb(0, 153, 255)','rgb(233, 54, 137)','rgb(252, 148, 13)']

  logoLetters.forEach(function(e, i) {
    e.classList.remove('nav-logo-latter-scrolled');
    e.classList.remove('preventLogoJiggle');
    const a = fontIndex; // для замыкания индекса во вложенном setTimeout
    setTimeout(function() {
      e.style.transform = "translateY(-3px)";
    }, 100 + i * 50)
    setTimeout(function() {
      e.style.transform = "translateY(0)";
      setTimeout(function() {
        e.style.color = 'black'
      }, 100)
      e.style.color = fontColors[a]
    }, 200  + i * 50)
    fontIndex++;
    if (fontIndex >= fontColors.length) fontIndex = 0;
  })
}

export function stopLogoJiggle() {
  const logoLetters = document.querySelectorAll('.nav-logo-latter');
  logoLetters.forEach(function(e) {
    e.classList.add('preventLogoJiggle');
    e.classList.add('nav-logo-latter-scrolled');
  })
}
