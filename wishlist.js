function addToCart(btn) {

    document.getElementById("sidebar").classList.add("active");

    let card = btn.closest(".product-card");

    let img = card.querySelector(".product-image img").src;
    let name = card.querySelector("h3").innerText;
    let price = card.querySelector(".price").innerText;

    document.querySelector(".show-data").innerHTML = `
    
    <div class="cart-product">

        <div class="cart-img">
            <img src="${img}" alt="">
        </div>

        <div class="cart-content">
            <h3>${name}</h3>

            <p class="cart-price">${price}</p>

            <p class="cart-color">
                <strong>Color:</strong> Gold
            </p>

            <div class="cart-bottom">

                <div class="qty-box">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>

                <a href="#" onclick="deleteItem(this)"><i class="fa-regular fa-trash-can delete-btn"></i></a>
                <div class="cart-footer">
                                        <p>Order special instructions</p>
                                        <div class="subtotal">
                                            <h3>Subtotal</h3>
                                            <h3 id="subtotal-price">Rs. 15.00</h3>
                                        </div>

                                        <p>Taxes, discounts and shipping calculated at checkout.</p>

                                        <div class="cart-buttons">
                                            <button class="view-cart">VIEW CART</button>
                                            <button class="checkout">CHECKOUT</button>
                                        </div>
                                    </div>

            </div>

        </div>

    </div>

    `;
}
function deleteItem(btn) {
    btn.closest('.cart-product').remove();
}

function openCart() {
    document.getElementById("sidebar").classList.add("active");
}

function closeCart() {
    document.getElementById("sidebar").classList.remove("active");
}

function openMenu() {
    document.getElementById("leftSidebar").classList.add("active");
}

function closeMenu() {
    document.getElementById("leftSidebar").classList.remove("active");
}
function openFilterbar() {
    document.getElementById("leftSidebar").classList.add("active");
}

function closeFilterbar() {
    document.getElementById("leftSidebar").classList.remove("active");
}