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

//nyckeln {key: 'yum-zaCmZA74PLKCrD8Y'}

import { updateMenu } from './hämtamenyn.js';

const apiUrl = 'https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/'
const apiKey =  'yum-zaCmZA74PLKCrD8Y'
const tenant = '461p'



async function getApi(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-zocom': apiKey
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


// async function fetchTenant() {
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






async function placeOrder(uppdateraKundkorg) {
	const orderData = {
		items: uppdateraKundkorg
			.getCartItems()
			.flatMap((item) => Array(item.quantity).fill(Number(item.id))),
	};
	
	try {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"x-zocom": apiKey
			},
			body: JSON.stringify(orderData),
		};

		
		const response = await fetch(`${apiUrl}${tenant}/orders`, options);

		if (!response.ok) {
			const errorResponse = await response.text();
			console.error("Error response", errorResponse);
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		
		return data;
	} catch (error) {
		console.error("Error placing order", error.message);
		throw error;
	}
}


async function getReceipt(data) {
	if (!data || !data.order || !data.order.id) {
		throw new Error("Invalid data provided. Missing order ID.");
	}

	const orderId = data.order.id;
	
	try {
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"x-zocom": apiKeykey,
			},
		};

		const response = await fetch(`${apiUrl}/receipts/${orderId}`, options);

		if (!response.ok) {
			throw new Error(`HTTP Error ${response.status}`);
		}
		const receiptData = await response.json();
		return receiptData;
	} catch (error) {
		console.error("Error geting receipt", error.message);
	}
}
