function openVideo() {
    document.getElementById("videoModal").style.display = "flex";
    document.getElementById("videoFrame").src =
        "https://cdn.shopify.com/videos/c/o/v/747375f4ce1e4946941f966c90baabbb.mp4";
}

function closeVideo() {
    document.getElementById("videoModal").style.display = "none";
    document.getElementById("videoFrame").src = "";
}
function openMenu() {
    document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
    document.getElementById("sidebar").classList.remove("active");
}
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
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = `(${cart.length})`;
}
function updateWishlistCount() {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    console.log("Wishlist Items:", wishlist.length);

    document.getElementById("wishlist-count").innerText =
        `(${wishlist.length})`;
}

updateCartCount();

function addToWishlist(btn) {

    let card = btn.closest(".product-card");

    let product = {
        img: card.querySelector(".product-image img").src,
        name: card.querySelector("h3").innerText,
        price: card.querySelector(".price").innerText
    };

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push(product);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    updateWishlistCount();
}

updateWishlistCount();