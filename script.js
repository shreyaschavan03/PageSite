// JavaScript for adding items to the cart
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
    });
});
