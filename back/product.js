// get id of the product
const str = window.location;
const url = new URL(str);
const id = url.searchParams.get("id");
const host = "http://localhost:3000/api/products/";
const objectURL = host + id;

// get data of the product and display on the product page
let GetProduct = function () {
  fetch(objectURL)
    .then((response) => response.json())
    .then((value) => {
      let img = document.querySelector(".item__img");
      img.innerHTML = `<img src="${value.imageUrl}" alt="${value.altTxt}">`;
      let name = document.getElementById("title");
      name.innerHTML = value.name;
      let title = document.querySelector("title");
      title.innerHTML = value.name;
      let price = document.getElementById("price");
      price.innerHTML = `${value.price}`;
      let description = document.getElementById("description");
      description.innerHTML = value.description;
      let color = document.getElementById("colors");
      for (i = 0; i < value.colors.length; i++) {
        color.innerHTML += `<option value="${value.colors[i]}">${value.colors[i]}</option>`;
      }
    });
};
GetProduct();

// get quantity value on the HTML element
function qtyValue() {
  let qty = document.getElementById("quantity");
  return qty.value;
}

// get color value on the HTML element
function colorValue() {
  let color = document.getElementById("colors");
  return color.value;
}

// gotocart button display and get informations for cart page
const toCartBtn = document.getElementById("addToCart");
const goToCartButton = document.getElementById("goToCart");
goToCartButton.style.display = "none";
// at button press : toCartBtn, function addCart that activates the 2 other function by click
toCartBtn.addEventListener("click", () => {
  let qty = parseInt(qtyValue());
  let color = colorValue();
  add2Cart(id, color, qty);
  goToCartButton.style.display = "block";
});
goToCartButton.addEventListener("click", () => {
  window.location.href = "./cart.html";
});