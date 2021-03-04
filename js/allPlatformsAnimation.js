const deviceIcons = ['smartphone', 'ipad', 'notebook-computer', 'monitor', 'speaker', 'gamepad', 'car'];
const iconContainer = document.querySelector('.all-platforms__icon-container');
const renderDelay = 7;
const animationPeriod = deviceIcons.length * renderDelay;

function renderIcon(iconName) {
	const markup = `
        <svg class="all-platforms__icon">
			<use href="/img/sprite.svg#icon-${iconName}"></use>
		</svg>
        `;

	iconContainer.innerHTML = '';
	iconContainer.insertAdjacentHTML('afterbegin', markup);
}

function wait(seconds) {
	return new Promise((resolve, _) => {
		setTimeout(resolve, seconds * 1000);
	});
}

async function showIcons() {
	for (let i = 0; i < deviceIcons.length; i++) {
		renderIcon(deviceIcons[i]);
		await wait(renderDelay);
	}
}

showIcons();

// to play the animation in loop
setInterval(showIcons, animationPeriod * 1000);
