

const kundkorgContainer = document.querySelector('.kundkorg .minaval-container');
const totalPrisElement = document.querySelector('.kundkorg .slutpris');
const reddott = document.querySelector('.reddott');
let kundkorg = [];

function uppdateraKundkorg() {
    kundkorgContainer.innerHTML = '';  
    let totalPris = 0;
    let totalItems = 0;
    
    if (kundkorg.length === 0) {
        totalPrisElement.textContent = '0 SEK'; 
        return;
    }

    kundkorg.forEach(item => {
        const produktDiv = document.createElement('div');
        produktDiv.classList.add('minaval');

        
        const matInfoContainer = document.createElement('div');
        matInfoContainer.classList.add('mat-info-container');
        
        const matnamn = document.createElement('h3');
        matnamn.classList.add('matnamn');
        matnamn.textContent = item.name;

        const mellanstreck = document.createElement('div');
        mellanstreck.classList.add('mellanstreck');

        const matpris = document.createElement('h3');
        matpris.classList.add('matpris');
        matpris.textContent = `${item.price} SEK`;

        matInfoContainer.appendChild(matnamn);
        matInfoContainer.appendChild(mellanstreck);
        matInfoContainer.appendChild(matpris);

        
        const plusMinusContainer = document.createElement('div');
        plusMinusContainer.classList.add('plus-minus');

        const antal = document.createElement('p');
        antal.classList.add('antal');
        antal.textContent = `Antal: ${item.count}`;

        const plus = document.createElement('p');
        plus.classList.add('plus');
        plus.textContent = '+';

        const minus = document.createElement('p');
        minus.classList.add('minus');
        minus.textContent = '-';

        plusMinusContainer.appendChild(plus);
        plusMinusContainer.appendChild(antal);
        plusMinusContainer.appendChild(minus);

        plus.addEventListener('click', () => {
            item.count += 1;  
            uppdateraKundkorg(); 
        });

        minus.addEventListener('click', () => {
            if (item.count > 1) {
                item.count -= 1;  
            } else {
                kundkorg = kundkorg.filter(product => product !== item);
            }
            uppdateraKundkorg(); 
        });

        produktDiv.appendChild(matInfoContainer);  
        produktDiv.appendChild(plusMinusContainer);  

        kundkorgContainer.appendChild(produktDiv);

        totalPris += item.price * item.count;
        totalItems += item.count; 
    });

    reddott.innerText = totalItems;
    if (totalItems === 0){
        reddott.classList.add('displaynone');
    } else {
        reddott.classList.remove('displaynone');
    }

    totalPrisElement.textContent = `${totalPris} SEK`;
}

function läggTillIKundkorgen(id, name, price) {
    const existingProduct = kundkorg.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.count += 1;
    } else {
        kundkorg.push({ id, name, price, count: 1 });
    }

    uppdateraKundkorg();
}



// resetar när man klickar på att göra en ny beställning
document.querySelector('.nybeställning').addEventListener('click', function() {
    
    localStorage.removeItem('cartItems'); 

    
    kundkorg = [];  

    
    uppdateraKundkorg();  

    
    const reddott = document.querySelector('.reddott');
    if (reddott) {
        reddott.style.display = 'none';  
    }

    
});



export { kundkorg, läggTillIKundkorgen };


