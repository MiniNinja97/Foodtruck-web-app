
import { läggTillIKundkorgen } from './kundkorg.js';

export function updateMenu(items) {
    const matvalContainer = document.querySelector('.matval');
    const dippvalContainer = document.querySelector('.dippval');
    const drickvalContainer = document.querySelector('.drickval');

    items.forEach(item => {
        const { type, name, price } = item;

        if (type === 'wonton') {
            const menyvalButton = document.createElement('button');
            menyvalButton.classList.add('menyval-button');
            menyvalButton.textContent = `${name} - ${price} SEK`;

            menyvalButton.addEventListener('click', () => {
                läggTillIKundkorgen(name, price);
            });

            matvalContainer.appendChild(menyvalButton);
        } else if (type === 'dip') {
            const dippButton = document.createElement('button');
            dippButton.classList.add('dippsås');
            dippButton.textContent = `${name} - ${price} SEK`;

            dippButton.addEventListener('click', () => {
                läggTillIKundkorgen(name, price);
            });

            dippvalContainer.appendChild(dippButton);
        } else if (type === 'drink') {
            const drinkButton = document.createElement('button');
            drinkButton.classList.add('drickor');
            drinkButton.textContent = `${name} - ${price} SEK`;

            drinkButton.addEventListener('click', () => {
                läggTillIKundkorgen(name, price);
            });

            drickvalContainer.appendChild(drinkButton);
        }
    });
}




