
import { läggTillIKundkorgen } from './kundkorg.js';  

export function updateMenu(items) {
    const matvalContainer = document.querySelector('.matval');
    const dippvalContainer = document.querySelector('.dippval');
    const drickvalContainer = document.querySelector('.drickval');
	

    items.forEach(item => {
        const { id, type, name, price } = item;  

		if (type === 'wonton') {
			const menyvalDiv = document.createElement('div'); //div för knappen, pris och ingredienser
			menyvalDiv.classList.add('menyval-container');
		
			const menyvalInfoDiv = document.createElement('div'); // div för matnamn, mellanstreck och matpris
			menyvalInfoDiv.classList.add('menyval-info'); // div för flex-layouten
		
			const matnamn = document.createElement('h3');
			matnamn.classList.add('matnamn');
			matnamn.textContent = item.name;
		
			const mellanstreck = document.createElement('div');
			mellanstreck.classList.add('mellanstreck');
		
			const matpris = document.createElement('h3');
			matpris.classList.add('matpris');
			matpris.textContent = `${item.price} SEK`;
		
			const menyvalButton = document.createElement('button');
			menyvalButton.classList.add('menyval-button');
		
			const innehallP = document.createElement('p'); 
			innehallP.classList.add('innehåll');
			innehallP.textContent = item.ingredients.join(', '); 
		
			menyvalButton.addEventListener('click', () => {
				läggTillIKundkorgen(id, item.name, item.price);
			});
		
			
			menyvalInfoDiv.appendChild(matnamn);
			menyvalInfoDiv.appendChild(mellanstreck);
			menyvalInfoDiv.appendChild(matpris);
		
			
			menyvalButton.appendChild(menyvalInfoDiv);
		
			
			menyvalDiv.appendChild(menyvalButton);
			menyvalDiv.appendChild(innehallP); 
		
			matvalContainer.appendChild(menyvalDiv); 
		} else if (type === 'dip') {
            const dippButton = document.createElement('button');
            dippButton.classList.add('dippsås');
            dippButton.textContent = `${name} - ${price} SEK`;

            dippButton.addEventListener('click', () => {
                läggTillIKundkorgen(id, name, price);  
            });

            dippvalContainer.appendChild(dippButton);
        } else if (type === 'drink') {
            const drinkButton = document.createElement('button');
            drinkButton.classList.add('drickor');
            drinkButton.textContent = `${name} - ${price} SEK`;

            drinkButton.addEventListener('click', () => {
                läggTillIKundkorgen(id, name, price);  
            });

            drickvalContainer.appendChild(drinkButton);
        }
    });
}





