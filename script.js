const app = document.querySelector('#app');
let counterValue = 0;

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
value.setAttribute('aria-label', 'Valore del counter');

const controls = createElement('div', 'controls');
const decreaseButton = createElement('button', 'control-button', '−');
const increaseButton = createElement('button', 'control-button control-button-primary', '+');

decreaseButton.type = 'button';
increaseButton.type = 'button';
decreaseButton.setAttribute('aria-label', 'Diminuisci il counter');
increaseButton.setAttribute('aria-label', 'Aumenta il counter');
controls.append(decreaseButton, increaseButton);
card.append(cardLabel, value, controls);

const footer = createElement('p', 'hint', 'Premi + o − per modificare il valore');
app.append(header, card, footer);

const updateCounter = (change) => {
	counterValue += change;
	value.textContent = counterValue;
	value.classList.remove('value-pop');
	void value.offsetWidth;
	value.classList.add('value-pop');
	card.classList.toggle('is-negative', counterValue < 0);
};

decreaseButton.addEventListener('click', () => updateCounter(-1));
increaseButton.addEventListener('click', () => updateCounter(1));

document.addEventListener('keydown', (event) => {
	if (event.key === '+' || event.key === '=') updateCounter(1);
	if (event.key === '-' || event.key === '_') updateCounter(-1);
});
