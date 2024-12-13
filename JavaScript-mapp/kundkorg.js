

const kundkorgContainer = document.querySelector('.kundkorg .minaval');
const totalPrisElement = document.querySelector('.kundkorg .slutpris');
let kundkorg = [];


function uppdateraKundkorg() {
    kundkorgContainer.innerHTML = '';  
    let totalPris = 0;

    
    kundkorg.forEach(item => {
        const produktDiv = document.createElement('div');
        produktDiv.classList.add('produkt');

       
        const matnamn = document.createElement('h3');
        matnamn.textContent = item.name;
        
        
        const matpris = document.createElement('h3');
        matpris.textContent = `${item.price} SEK`;

      
        const antal = document.createElement('p');
        antal.textContent = `Antal: ${item.count}`;

       
        produktDiv.appendChild(matnamn);
        produktDiv.appendChild(matpris);
        produktDiv.appendChild(antal);

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




