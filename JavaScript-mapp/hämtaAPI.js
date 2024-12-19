

const apiUrl = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/";
const tenant = "461p";
const apiKey = 'yum-zaCmZA74PLKCrD8Y';

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

async function handleOrder(data) {
    try {
       
        const receipt = await getReceipt(data);
        console.log("Receipt fetched:", receipt);
    } catch (error) {
        console.error("Error handling order:", error.message);
    }
}


document.querySelector('.betala').addEventListener('click', async () => {
    try {
        
        const orderResponse = await placeOrder();
        console.log('Order skickad:', orderResponse);

       
        updateEta(orderResponse);

        
        handleOrder(orderResponse);
    } catch (error) {
        console.error('Fel vid skickande av order:', error);
    }
});


async function getReceipt(data) {
    if (!data || !data.order || !data.order.id) {
        throw new Error("Invalid data provided. Missing order ID.");
    }

    const orderId = data.order.id;
    console.log('Fetching receipt for orderId:', orderId);

    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-zocom": apiKey,
            },
        };

        const response = await fetch(`${apiUrl}/receipts/${orderId}`, options);

        if (!response.ok) {
            throw new Error(`HTTP Error ${response.status}`);
        }

        try {
            const receiptData = await response.json();
            console.log("Fetched receipt data:", receiptData);
            return receiptData;
        } catch (jsonError) {
            console.error("Failed to parse JSON:", jsonError.message);
        }
    } catch (error) {
        console.error("Error getting receipt:", error.message);
    }
}
export {getReceipt}





// document.querySelector(".sekvittot").addEventListener("click", async () => {
//     if (orderData) {
//         try {
//             const receiptArray = await getReceipt({ order: { id: orderData.id } });
//             if (receiptArray && receiptArray.receipt.items) {
//                 const receiptContainer = document.querySelector(".valmatkvitto");
//                 receiptContainer.innerHTML = "";  // Rensa tidigare innehåll

//                 receiptArray.receipt.items.forEach((item) => {
//                     const receiptItemName = document.createElement("p");
//                     receiptItemName.classList.add("matval");
//                     receiptItemName.innerText = item.name;

//                     const receiptDivider = document.createElement("div");
//                     receiptDivider.classList.add("mellanstreckkvitto");

//                     const receiptItemPrice = document.createElement("p");
//                     receiptItemPrice.classList.add("matpris");
//                     receiptItemPrice.innerText = `${item.price} SEK`;

//                     receiptContainer.appendChild(receiptItemName);
//                     receiptContainer.appendChild(receiptDivider);
//                     receiptContainer.appendChild(receiptItemPrice);
//                 });

//                 // Totalbelopp
//                 const totalElement = document.querySelector(".slutpris p");
//                 totalElement.innerText = `${receiptArray.receipt.total} SEK`;
//             }
//         } catch (error) {
//             console.error("Error fetching receipt:", error);
//         }
//     } else {
//         console.error("Orderdata saknas. Kan inte hämta kvitto.");
//     }
// });