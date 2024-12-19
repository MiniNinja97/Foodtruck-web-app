import { getReceipt } from "./hämtaAPI.js";




document.querySelector(".sekvittot").addEventListener("click", async () => {
	if (orderData) {
		try {
			const receiptArray = await getReceipt({ order: { id: orderData.id } });
			if (receiptArray && receiptArray.receipt.items) {
				const receiptContainer = document.querySelector(".valmatkvitto");
				receiptContainer.innerHTML = "";  

				receiptArray.receipt.items.forEach((item) => {
					const receiptItemName = document.createElement("p");
					receiptItemName.classList.add("matval");
					receiptItemName.innerText = item.name;

					const receiptDivider = document.createElement("div");
					receiptDivider.classList.add("mellanstreckkvitto");

					const receiptItemPrice = document.createElement("p");
					receiptItemPrice.classList.add("matpris");
					receiptItemPrice.innerText = `${item.price} SEK`;

					receiptContainer.appendChild(receiptItemName);
					receiptContainer.appendChild(receiptDivider);
					receiptContainer.appendChild(receiptItemPrice);
				});

				// Totalbelopp
				const totalElement = document.querySelector(".slutpris p");
				totalElement.innerText = `${receiptArray.receipt.total} SEK`;
			}
		} catch (error) {
			console.error("Error fetching receipt:", error);
		}
	} else {
		console.error("Orderdata saknas. Kan inte hämta kvitto.");
	}
});

