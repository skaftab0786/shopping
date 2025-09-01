// app.js
const products = [
  {
    id: 1,
    title: "Men's Shirt",
    price: 999,
    category: "Men",
    rating: 4,
    image: "shirt.jpg"
  },
  {
    id: 2,
    title: "Women's Pant",
    price: 1299,
    category: "Women",
    rating: 5,
    image: "pant.jpg"
  }
];

const grid = document.getElementById("product-grid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" width="100%" />
    <h3>${product.title}</h3>
    <p>₹${product.price}</p>
    <p>Category: ${product.category}</p>
    <p>Rating: ${"⭐".repeat(product.rating)}</p>
    <input type="text" placeholder="Custom print?" />
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  grid.appendChild(card);
});

let cart = [];

function addToCart(id) {
  cart.push(id);
  document.getElementById("cart-count").textContent = cart.length;
}
