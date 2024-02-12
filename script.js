let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    // Limpar a lista antes de recriar
    cartList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    alert('Compra realizada com sucesso!');
    cartItems = [];
    updateCart();
}
