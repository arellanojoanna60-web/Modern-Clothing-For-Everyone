let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;
    document.getElementById("cart-message").innerText =
        "You have " + cartCount + " item(s) in your cart.";
}

function toggleCart() {
    const cart = document.getElementById("cart-modal");
    cart.style.display = cart.style.display === "flex" ? "none" : "flex";
}
