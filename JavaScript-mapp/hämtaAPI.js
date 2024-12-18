// async function getApiKey(url){
//     try{
//         const response = await fetch(url, {
//             method: 'POST',
//             headers:{
//                 'Content-Type': 'application/json',
//             }
//         });
//         if(!response.ok){
//             throw new Error(`HTTP error! Status: ${response.status}`)
//         }

//         const data = await response.json();
//         console.log('API key:', data)
//     }

//     catch(error){
//         console.error('Error fetching api key', error)
//     }
// }
// getApiKey('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/keys');

// // async function fetchTenant() {
// 	const options = {
// 		method: 'POST',
// 		body: JSON.stringify({ name: 'Emma Malinsdotter' }),
// 		headers: {
// 			"Content-Type": 'application/json',
// 			"x-zocom": apiKey
// 		}
// 	}

// 	const response = await fetch('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/tenants', options);
// 	const data = await response.json();
// 	console.log('Tenanten: ', data);
// }

// fetchTenant();

//nyckeln {key: 'yum-zaCmZA74PLKCrD8Y'}
//URL: 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/'
//Tenant: '461p'

const apiUrl = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/";
const tenant = "461p";

import { updateMenu } from './hämtamenyn.js';

async function getApi(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-zocom': 'yum-zaCmZA74PLKCrD8Y'
            }
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API:', data);
		return data;
    } catch (error) {
        console.error('Error fetching api key', error);
    }
}


getApi('https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/menu')
.then(menuData => {
	console.log('Hämtat menyn:', menuData);
	updateMenu(menuData.items);
});




import { kundkorg } from './kundkorg.js'; 


document.querySelector('.betala').addEventListener('click', async () => {
    try {
        const orderResponse = await placeOrder();
        console.log('Order skickad:', orderResponse);
        
        // updateEta tillhör biten längst ner function updateEta
        updateEta(orderResponse);
    } catch (error) {
        console.error('Fel vid skickande av order:', error);
    }
});

async function placeOrder() {
    console.log('Kundkorg:', kundkorg);
    const orderData = {
        items: kundkorg.flatMap((item) => Array(item.count).fill(Number(item.id))),
    };

    console.log("Order Data:", JSON.stringify(orderData)); 

    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-zocom": 'yum-zaCmZA74PLKCrD8Y',
            },
            body: JSON.stringify(orderData),
        };

        const response = await fetch(`${apiUrl}/${tenant}/orders`, options);

        if (!response.ok) {
            const errorResponse = await response.text();
            console.error("Error response:", errorResponse);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Order Response:", data);

        return data;
    } catch (error) {
        console.error("Fel vid beställning:", error.message);
        throw error;
    }
}


function updateEta(data) {
	const etaElement = document.querySelector(".minuter");
	const orderIdElement = document.querySelector(".ordernr");

	const orderEta = new Date(data.order.eta);
	const currentTime = new Date();

	const timeDifference = Math.max(0, orderEta - currentTime); 
	const minutesLeft = Math.ceil(timeDifference / (1000 * 60));

	const orderId = data.order.id;

	orderIdElement.innerText = `#${orderId}`;
	etaElement.innerText = `ETA ${minutesLeft} MIN`;
}


// function updateEta(data) {
//     const etaElement = document.querySelector(".minuter");  
//     const orderIdElement = document.querySelector(".ordernr");  

    
//     const orderEta = new Date(data.eta);  
//     const orderTimestamp = new Date(data.timestamp);  

//     if (isNaN(orderEta) || isNaN(orderTimestamp)) {
//         console.error("Felaktigt datumformat för ETA eller Timestamp");
//         return;  
//     }

    
//     const timeDifference = Math.max(0, orderEta - orderTimestamp);
//     const minutesLeft = Math.ceil(timeDifference / (1000 * 60));  

//     const orderId = data.id;

    
//     orderIdElement.innerText = `#${orderId}`;
//     etaElement.innerText = `ETA: ${minutesLeft} MIN`;
// }










