const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const closeCart = document.getElementById("closeCart");

cartBtn.addEventListener("click", () => {
    cartDrawer.classList.add("active");
    overlay.classList.add("active");
});

closeCart.addEventListener("click", () => {
    cartDrawer.classList.remove("active");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    cartDrawer.classList.remove("active");
    overlay.classList.remove("active");
});