const dessertCards = document.querySelector(".desserts");
const cart = document.querySelector(".cart-item-list");
const cardTemplate = document.getElementById("card-template");
const cartItemTemplate = document.getElementById("cart-item-template");

var data;

fetch("./data.json")
	.then((res) => res.json())
	.then((jsonData) => {
		data = jsonData;
		createDessertCards(data);
	})
	.catch((error) => console.error("Error loading the data:", error));

function createDessertCards(desserts) {
	desserts.forEach((dessert) => {
		const cardClone = cardTemplate.content.cloneNode(true);

		const sources = cardClone.querySelectorAll("source");
		sources[0].srcset = dessert.image.desktop;
		sources[1].srcset = dessert.image.tablet;
		cardClone.querySelector("picture img").src = dessert.image.mobile;
		cardClone.querySelector(".category").textContent = dessert.category;
		cardClone.querySelector(".name").textContent = dessert.name;
		cardClone.querySelector(".price").textContent = `$${dessert.price.toFixed(2)}`;
		cardClone.querySelector(".card").id = `dessert-card-${dessert.name.replaceAll(" ", "-").toLowerCase()}`;

		dessertCards.appendChild(cardClone);
	});
}

function handleAddToCart(event) {
	const card = event.target.closest(".card");
	const id = card.id;
	const values = data.find((element) => element.name.replaceAll(" ", "-").toLowerCase() === id.replace("dessert-card-", ""));
	card.classList.add("selected");
}
function handleIncrementQuantity() {
	console.log("clicked increment");
}
function handleDecrementQuantity() {
	console.log("clicked decrement");
}
function handleRemoveCartItem() {
	console.log("clicked remove cart item");
}
function handleConfirmOrder() {
	console.log("clicked confirm order");
}
function handleStartNewOrder() {
	console.log("clicked create new order");
}
