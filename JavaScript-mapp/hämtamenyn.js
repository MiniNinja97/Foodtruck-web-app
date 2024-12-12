

export function updateMenu(items) {
	const matvalContainer = document.querySelector('.matval');
	const dippvalContainer = document.querySelector('.dippval');
	const drickvalContainer = document.querySelector('.drickval');

	
	if (!matvalContainer || !dippvalContainer || !drickvalContainer) {
		console.error('En eller flera containers finns inte i DOM:en');
		return;
	}

	items.forEach(item => {
		const {type, name, price, ingredients} = item;

		if (type === 'wonton') {
			
			const menyvalDiv = document.createElement('div');
			menyvalDiv.classList.add('menyval');

			const matnamn = document.createElement('h3');
			matnamn.classList.add('matnamn');
			matnamn.textContent = name;

			const mellanstreck = document.createElement('div');
			mellanstreck.classList.add('mellanstreck');

			const matpris = document.createElement('h3');
			matpris.classList.add('matpris');
			matpris.textContent = `${price} sek`;

			const innehåll = document.createElement('p');
			innehåll.classList.add('innehåll');
			innehåll.textContent = ingredients ? ingredients.join(', ') : '';

			
			menyvalDiv.appendChild(matnamn);
			menyvalDiv.appendChild(mellanstreck);
			menyvalDiv.appendChild(matpris);
			matvalContainer.appendChild(menyvalDiv);
			matvalContainer.appendChild(innehåll);

		} else if (type === 'dip') {
			
			const dippButton = document.createElement('button');
			dippButton.classList.add('dippsås');
			dippButton.textContent = name;

			const dipppris = document.createElement('h3');
			// dipppris.classList.add('dipppris');
			// dipppris.textContent = `${price} sek`;

			const dippContainer = document.createElement('div');
			dippContainer.classList.add('dippcontainer');
			dippContainer.appendChild(dippButton);
			dippContainer.appendChild(dipppris);

			dippvalContainer.appendChild(dippContainer);

		} else if (type === 'drink') {
			
			const drinkButton = document.createElement('button');
			drinkButton.classList.add('drickor');
			drinkButton.textContent = name;

			const drinkpris = document.createElement('h3');
			// drinkpris.classList.add('drickpris');
			// drinkpris.textContent = `${price} sek`;

			const drickContainer = document.createElement('div');
			drickContainer.classList.add('drickcontainer');
			drickContainer.appendChild(drinkButton);
			drickContainer.appendChild(drinkpris);

			
			drickvalContainer.appendChild(drickContainer);
		}
	});
}


