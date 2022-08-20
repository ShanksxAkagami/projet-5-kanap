// get data from the web service and displaying cards
const Url = "http://localhost:3000/api/products";
let GetCards = function () {
  fetch(Url)
    .then((response) => response.json())
    .then((value) => {
      let productSection = document.getElementById("items");
      for (i = 0; i < value.length; i++) {
        const productCard = `
          <a href="./product.html?id=${value[i]._id}">
            <article>
              <img
                src="${value[i].imageUrl}"
                alt="${value[i].altTxt}"
              />
              <h3 class="productName">${value[i].name}</h3>
              <p class="productDescription">
                ${value[i].description}
              </p>
            </article>
          </a>
        `;
        productSection.innerHTML += productCard;
      }
    });
};
GetCards();