
const kundkorgContainer = document.querySelector('.kundkorg .minaval-container');
const totalPrisElement = document.querySelector('.kundkorg .slutpris');
let kundkorg = [];

function uppdateraKundkorg() {
    kundkorgContainer.innerHTML = '';  
    let totalPris = 0;

    // Kolla om kundkorgen är tom
    if (kundkorg.length === 0) {
        totalPrisElement.textContent = '0 SEK'; // Sätter totalen till 0 när kundkorgen är tom
        return;
    }

    kundkorg.forEach(item => {
        const produktDiv = document.createElement('div');
        produktDiv.classList.add('minaval');

        const matnamn = document.createElement('h3');
        matnamn.classList.add('matnamn');
        matnamn.textContent = item.name;

        const mellanstreck = document.createElement('div');
        mellanstreck.classList.add('mellanstreck');

        const matpris = document.createElement('h3');
        matpris.classList.add('matpris');
        matpris.textContent = `${item.price} SEK`;

        const antal = document.createElement('p');
        antal.classList.add('antal');
        antal.textContent = `Antal: ${item.count}`;

        const plus = document.createElement('p');
        plus.classList.add('plus');
        plus.textContent = '+';

        const minus = document.createElement('p');
        minus.classList.add('minus');
        minus.textContent = '-';

        const plusMinusContainer = document.createElement('div');
        plusMinusContainer.classList.add('plus-minus');
        plusMinusContainer.appendChild(plus);
        plusMinusContainer.appendChild(antal);
        plusMinusContainer.appendChild(minus);

        // Event listeners för plus och minus
        plus.addEventListener('click', () => {
            item.count += 1;  // Öka antal
            uppdateraKundkorg(); // Uppdatera kundkorgen
        });

        minus.addEventListener('click', () => {
            if (item.count > 1) {
                item.count -= 1;  // Minska antal om större än 1
            } else {
                // Ta bort item från kundkorgen om antal är 1 eller mindre
                kundkorg = kundkorg.filter(product => product !== item);
            }
            uppdateraKundkorg(); // Uppdatera kundkorgen
        });

        // Bygg upp produktens layout
        produktDiv.appendChild(matnamn);
        produktDiv.appendChild(mellanstreck);
        produktDiv.appendChild(matpris);
        produktDiv.appendChild(plusMinusContainer);

        kundkorgContainer.appendChild(produktDiv);

        totalPris += item.price * item.count;
    });

    totalPrisElement.textContent = `${totalPris} SEK`;
}

function läggTillIKundkorgen(name, price) {
    const existingProduct = kundkorg.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.count += 1;
    } else {
        kundkorg.push({ name, price, count: 1 });
    }

    uppdateraKundkorg();
}

export { läggTillIKundkorgen };








