function filterProducts() {

    let checked = document.querySelectorAll('.filterbar input:checked');
    let selected = [...checked].map(item => item.value);

    let products = document.querySelectorAll('.product-card');

    products.forEach(product => {

        let category = product.dataset.category;

        if (
            selected.length === 0 ||
            selected.includes(category)
        ) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });
}

function filterStock() {

    let checked = document.querySelectorAll(
        '.filter-section input:checked'
    );

    let selected = Array.from(checked).map(
        item => item.value
    );

    document.getElementById("selectedCount").innerText =
        selected.length + " selected";

    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        let stock = product.dataset.stock;

        if (
            selected.length === 0 ||
            selected.includes(stock)
        ) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }

    });
}

function resetFilter() {

    document.querySelectorAll(
        '.filter-section input'
    ).forEach(input => {
        input.checked = false;
    });

    filterProducts();
}

const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");

function priceFilter() {

    let min = Number(document.getElementById("minPrice").value);
    let max = Number(document.getElementById("maxPrice").value);

    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        let price = Number(product.dataset.price);

        if (price >= min && price <= max) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });
}

function resetPrice() {
    minRange.value = 0;
    maxRange.value = 28;
    minPrice.value = 0;
    maxPrice.value = 28;
    priceFilter();
}

minRange.addEventListener("input", () => {
    minPrice.value = minRange.value;
    priceFilter();
});

maxRange.addEventListener("input", () => {
    maxPrice.value = maxRange.value;
    priceFilter();
});

minPrice.addEventListener("input", () => {
    minRange.value = minPrice.value;
    priceFilter();
});

maxPrice.addEventListener("input", () => {
    maxRange.value = maxPrice.value;
    priceFilter();
});

priceFilter();


function filterColor() {

    let checked = document.querySelectorAll(
        ".color-list input:checked"
    );

    let selectedColors = Array.from(checked).map(
        item => item.value
    );

    document.getElementById("selectedColorCount").innerText =
        selectedColors.length + " selected";

    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        let color = product.dataset.color;

        if (
            selectedColors.length === 0 ||
            selectedColors.includes(color)
        ) {
            product.style.display = "grid";
        } else {
            product.style.display = "none";
        }

    });
}

function resetColor() {

    document.querySelectorAll(
        ".color-list input"
    ).forEach(box => {
        box.checked = false;
    });

    document.getElementById(
        "selectedColorCount"
    ).innerText = "0 selected";

    filterColor();
}