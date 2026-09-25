const app = document.querySelector('#app');
const savedCounterValue = localStorage.getItem('counterValue');
let counterValue = savedCounterValue === null ? 0 : parseInt(savedCounterValue, 10);

const createElement = (tag, className, text = '') => {
	const element = document.createElement(tag);
	element.className = className;
	element.textContent = text;
	return element;
};

const header = createElement('header', 'counter-header');
const title = createElement('h1', 'title', 'Counter');
header.append(title);

const card = createElement('section', 'counter-card');
const cardLabel = createElement('p', 'card-label', 'Current value');
const value = createElement('output', 'counter-value', counterValue);
value.setAttribute('aria-label', 'Counter value');

const controls = createElement('div', 'controls');
const decreaseButton = createElement('button', 'control-button', '−');
const increaseButton = createElement('button', 'control-button control-button-primary', '+');

decreaseButton.type = 'button';
increaseButton.type = 'button';
decreaseButton.setAttribute('aria-label', 'Decrease counter');
increaseButton.setAttribute('aria-label', 'Increase counter');
controls.append(decreaseButton, increaseButton);
card.append(cardLabel, value, controls);

const footer = createElement('p', 'hint', 'Press + or − to change the value');
app.append(header, card, footer);
card.classList.toggle('is-negative', counterValue < 0);

const updateCounter = (change) => {
	counterValue += change;
	localStorage.setItem('counterValue', counterValue);
	value.textContent = counterValue;
	value.classList.remove('value-pop');
	void value.offsetWidth;
	value.classList.add('value-pop');
	card.classList.toggle('is-negative', counterValue < 0);
};

decreaseButton.addEventListener('click', () => updateCounter(-1));
increaseButton.addEventListener('click', () => updateCounter(1));

document.addEventListener('keydown', (event) => {
	if (event.key === '+') updateCounter(1);
	if (event.key === '-') updateCounter(-1);
});