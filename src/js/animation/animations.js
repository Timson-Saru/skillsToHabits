
export default function changeTitleColor() {
	const firstSpan = document.querySelector('.first-title-span');
	const secondSpan = document.querySelector('.second-title-span');
	const thirdSpan = document.querySelector('.third-title-span');
	setTimeout(function () {
		firstSpan.style.color = 'rgb(0, 153, 255)';
    secondSpan.style.color = 'rgb(233, 54, 137)';
    thirdSpan.style.color = 'rgb(252, 148, 13)';
	}, 5800);
}
